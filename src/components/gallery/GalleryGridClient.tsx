"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IGalleryCardProps, IGalleryImage, ILightboxProps } from "@/types";

const GalleryCard: React.FC<IGalleryCardProps> = ({ image, onClick }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <motion.div
            className="relative aspect-video overflow-hidden rounded-sm cursor-pointer bg-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
        >
            {/* Skeleton */}
            {!loaded && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
            )}

            <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setLoaded(true)}
            />
        </motion.div>
    );
};

const Lightbox: React.FC<ILightboxProps> = ({ image, onClose }) => (
    <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className="relative w-full max-w-4xl aspect-video"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain rounded-sm"
            />
            <button
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm tracking-wide"
                onClick={onClose}
            >
                <X />
            </button>
        </motion.div>
    </motion.div>
);

const GalleryGridClient = ({ images }: { images: IGalleryImage[] }) => {
    const [selectedImage, setSelectedImage] = useState<IGalleryImage | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {images.map((image) => (
                    <GalleryCard
                        key={image.id}
                        image={image}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <Lightbox
                        image={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default GalleryGridClient;