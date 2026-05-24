"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { ILightboxProps } from "@/types";

const LightboxImage: React.FC<ILightboxProps> = ({ image, onClose, aspectRatio = "video" }) => (
    <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className={`relative w-full max-w-4xl ${aspectRatio === "auto" ? "" : "aspect-video"}`}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="absolute -top-9 right-0 text-white/80 hover:text-white z-10"
                onClick={onClose}
            >
                <X />
            </button>

            {aspectRatio === "auto" ? (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={1600}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
                />
            ) : (
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain rounded-sm"
                />
            )}
        </motion.div>
    </motion.div>
);

export default LightboxImage;