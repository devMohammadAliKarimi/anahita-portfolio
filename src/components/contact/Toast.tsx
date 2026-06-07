"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

export type ToastVariant = "success" | "error";

interface ToastProps {
    open: boolean;
    message: string;
    variant?: ToastVariant;
    onClose: () => void;
    /** Auto-dismiss delay in ms. Set to 0 to disable. */
    duration?: number;
}

const Toast = ({ open, message, variant = "success", onClose, duration = 4000 }: ToastProps) => {
    useEffect(() => {
        if (!open || duration === 0) return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [open, duration, onClose]);

    const isSuccess = variant === "success";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-lg bg-dark px-4 py-3 text-white shadow-xl"
                >
                    {isSuccess ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
                    ) : (
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    )}
                    <p className="text-sm leading-snug">{message}</p>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Dismiss notification"
                        className="ml-2 shrink-0 rounded p-0.5 text-white/60 transition-colors hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
