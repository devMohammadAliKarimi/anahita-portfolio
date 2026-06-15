import type { Metadata } from "next";
import DecoratedSection from "@/components/DecoratedSection";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact Me | Anahita Mouni",
    description: "Get in touch with Anahita Mouni. Let's build the future of marketing together.",
};

const ContactMePage = () => {
    return (
        <DecoratedSection lineClassName="top-32 h-20 md:h-96 md:top-48">
            <div className="mx-auto max-w-6xl px-6 md:px-16 pt-8 md:pt-14 pb-14 md:pb-24">

                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-12 md:mb-20">
                    Get in Touch
                </h2>

                <ContactForm />

            </div>
        </DecoratedSection>
    );
};

export default ContactMePage;