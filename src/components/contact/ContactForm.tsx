"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Toast, { ToastVariant } from "./Toast";
import { validateContactForm, ContactFormErrors } from "@/lib/validation";

const animatedWords = "I'd Like to Hear From You!".split(" ");
const subWords = "Please use the contact form if you have any questions or if you would simply like to say hello.".split(" ");

const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.25, ease: "easeOut" },
    }),
};

const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    // Honeypot — must stay empty. Bots tend to fill every field.
    company: "",
};

const ContactForm = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ open: boolean; message: string; variant: ToastVariant }>({
        open: false,
        message: "",
        variant: "success",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear a field's error as the user corrects it.
        setErrors((prev) => {
            if (!prev[name as keyof ContactFormErrors]) return prev;
            const next = { ...prev };
            delete next[name as keyof ContactFormErrors];
            return next;
        });
    };

    const showToast = (message: string, variant: ToastVariant) => {
        setToast({ open: true, message, variant });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        const validationErrors = validateContactForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                if (data?.errors) setErrors(data.errors as ContactFormErrors);
                showToast(data?.error || "Something went wrong. Please try again.", "error");
                return;
            }

            showToast("Thanks! Your message has been sent.", "success");
            setFormData(emptyForm);
            setErrors({});
        } catch {
            showToast("Network error. Please check your connection and try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full bg-transparent border-[2px] border-dark/40 rounded-md px-3 py-2 text-dark text-sm md:text-base placeholder-dark/30 focus:outline-none focus:border-dark/70 transition-colors";
    const errorInputClass = "border-red-500/70 focus:border-red-500";

    return (
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

            {/* Left */}
            <div className="flex flex-col gap-4 md:flex-1">
                <h3 className="text-white font-semibold text-2xl md:text-4xl leading-snug">
                    {animatedWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-block mr-1.5"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h3>
                <p className="text-dark/85 font-light text-sm md:text-xl leading-relaxed max-w-[345px]">
                    {subWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={animatedWords.length + i}
                            variants={wordVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-block mr-1"
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 w-full md:flex-1">

                {/* First + Last Name */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                        <label htmlFor="firstName" className="text-dark/70 text-xs md:text-sm">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            aria-invalid={!!errors.firstName}
                            className={`${inputClass} ${errors.firstName ? errorInputClass : ""}`}
                        />
                        {errors.firstName && <span className="text-red-600 text-xs">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                        <label htmlFor="lastName" className="text-dark/70 text-xs md:text-sm">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            aria-invalid={!!errors.lastName}
                            className={`${inputClass} ${errors.lastName ? errorInputClass : ""}`}
                        />
                        {errors.lastName && <span className="text-red-600 text-xs">{errors.lastName}</span>}
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-dark/70 text-xs md:text-sm">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                    />
                    {errors.email && <span className="text-red-600 text-xs">{errors.email}</span>}
                </div>

                {/* Honeypot — visually hidden, off-screen, and excluded from tab order.
                    Real users never see or fill this; bots usually do. */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="company">Company (leave this empty)</label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-dark/70 text-xs md:text-sm">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        aria-invalid={!!errors.message}
                        className={`${inputClass} resize-none ${errors.message ? errorInputClass : ""}`}
                    />
                    {errors.message && <span className="text-red-600 text-xs">{errors.message}</span>}
                </div>

                {/* Send Button */}
                <div className="flex justify-end">
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                        className="mt-6 inline-flex items-center bg-body rounded-md font-medium 
                        shadow-sm transition-colors hover:text-highlight whitespace-nowrap 
                        px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[11px] sm:text-[12px] 
                        lg:text-[13px] text-white w-full md:w-20 justify-center"
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </motion.button>
                </div>
            </form>

            <Toast
                open={toast.open}
                message={toast.message}
                variant={toast.variant}
                onClose={() => setToast((prev) => ({ ...prev, open: false }))}
            />
        </div>
    );
};

export default ContactForm;
