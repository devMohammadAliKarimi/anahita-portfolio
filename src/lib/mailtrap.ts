import { MailtrapClient } from "mailtrap";

/**
 * Server-only Mailtrap configuration. Reading these lazily (instead of at module
 * load) keeps the values overridable per-request and avoids throwing during build.
 */
export function getMailtrapConfig() {
    const token = process.env.MAILTRAP_API_TOKEN;
    const senderEmail = process.env.MAILTRAP_SENDER_EMAIL;
    const senderName = process.env.MAILTRAP_SENDER_NAME || "Portfolio Contact Form";
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
    const sandbox = process.env.MAILTRAP_SANDBOX === "true";
    const testInboxId = process.env.MAILTRAP_TEST_INBOX_ID;

    const missing: string[] = [];
    if (!token) missing.push("MAILTRAP_API_TOKEN");
    if (!senderEmail) missing.push("MAILTRAP_SENDER_EMAIL");
    if (!recipientEmail) missing.push("CONTACT_RECIPIENT_EMAIL");
    if (sandbox && !testInboxId) missing.push("MAILTRAP_TEST_INBOX_ID");

    return {
        token: token as string,
        senderEmail: senderEmail as string,
        senderName,
        recipientEmail: recipientEmail as string,
        sandbox,
        testInboxId,
        missing,
    };
}

export function createMailtrapClient(config: ReturnType<typeof getMailtrapConfig>) {
    if (config.sandbox) {
        return new MailtrapClient({
            token: config.token,
            sandbox: true,
            testInboxId: Number(config.testInboxId),
        });
    }
    return new MailtrapClient({ token: config.token });
}
