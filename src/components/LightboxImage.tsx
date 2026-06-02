"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ILightboxProps } from "@/types";

const LightboxImage: React.FC<ILightboxProps> = ({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev,
    aspectRatio = "video",
}) => {
    const image = images[currentIndex];
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < images.length - 1;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Prev */}
            <button
                className={`absolute left-3 md:left-6 text-white/60 hover:text-white transition-colors z-10 ${!hasPrev ? "invisible" : ""}`}
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
                <ChevronLeft size={40} />
            </button>

            <motion.div
                className={`relative w-full max-w-4xl ${aspectRatio === "auto" ? "" : "aspect-video"}`}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    className="absolute -top-9 right-0 text-white/80 hover:text-white z-10"
                    onClick={onClose}
                >
                    <X />
                </button>

                {/* Counter */}
                <span className="absolute -top-9 left-0 text-white/50 text-sm">
                    {currentIndex + 1} / {images.length}
                </span>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={image.src}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                    >
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
                </AnimatePresence>
            </motion.div>

            {/* Next */}
            <button
                className={`absolute right-3 md:right-6 text-white/60 hover:text-white transition-colors z-10 ${!hasNext ? "invisible" : ""}`}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                <ChevronRight size={40} />
            </button>
        </motion.div>
    );
};

export default LightboxImage;