// Shared (client + server) validation helpers for the contact form.

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(values: Partial<ContactFormValues>): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!values.firstName?.trim()) {
        errors.firstName = "First name is required.";
    }
    if (!values.lastName?.trim()) {
        errors.lastName = "Last name is required.";
    }
    if (!values.email?.trim()) {
        errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }
    if (!values.message?.trim()) {
        errors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters.";
    }

    return errors;
}
