import { NextResponse } from "next/server";
import { createMailtrapClient, getMailtrapConfig } from "@/lib/mailtrap";
import { validateContactForm } from "@/lib/validation";

export const runtime = "nodejs";

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot: a hidden field real users never fill in. If it has any value,
    // silently accept the request (so bots can't tell) but don't send anything.
    const honeypot = typeof body.company === "string" ? body.company : "";
    if (honeypot.trim() !== "") {
        return NextResponse.json({ ok: true }, { status: 200 });
    }

    const firstName = typeof body.firstName === "string" ? body.firstName : "";
    const lastName = typeof body.lastName === "string" ? body.lastName : "";
    const email = typeof body.email === "string" ? body.email : "";
    const message = typeof body.message === "string" ? body.message : "";

    const errors = validateContactForm({ firstName, lastName, email, message });
    if (Object.keys(errors).length > 0) {
        return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
    }

    const config = getMailtrapConfig();
    if (config.missing.length > 0) {
        // Misconfiguration is our fault, not the visitor's — log details server-side,
        // return a generic message.
        console.error(`Mailtrap is not configured. Missing: ${config.missing.join(", ")}`);
        return NextResponse.json(
            { error: "The contact form is temporarily unavailable. Please try again later." },
            { status: 500 }
        );
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    try {
        const client = createMailtrapClient(config);
        await client.send({
            from: { name: config.senderName, email: config.senderEmail },
            to: [{ email: config.recipientEmail }],
            reply_to: { name: fullName, email: email.trim() },
            subject: `New contact form message from ${fullName}`,
            text:
                `New message from the portfolio contact form\n\n` +
                `Name: ${fullName}\n` +
                `Email: ${email.trim()}\n\n` +
                `Message:\n${message.trim()}\n`,
            html:
                `<h2>New message from the portfolio contact form</h2>` +
                `<p><strong>Name:</strong> ${escapeHtml(fullName)}</p>` +
                `<p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>` +
                `<p><strong>Message:</strong></p>` +
                `<p>${safeMessage}</p>`,
            category: "Contact Form",
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (error) {
        console.error("Failed to send contact email via Mailtrap:", error);
        return NextResponse.json(
            { error: "Something went wrong while sending your message. Please try again." },
            { status: 502 }
        );
    }
}
