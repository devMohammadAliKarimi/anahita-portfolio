"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IImageGridClientProps } from "@/types";
import ImageCard from "./ImageCard";
import LightboxImage from "./LightboxImage";

const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const ImageGridClient = ({ images, columns = 2, aspectRatio = "video" }: IImageGridClientProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrev = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
    const handleNext = () => setSelectedIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

    return (
        <>
            <div className={`grid ${colsMap[columns]} gap-3 md:gap-4`}>
                {images.map((image, index) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        aspectRatio={aspectRatio}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <LightboxImage
                        images={images}
                        currentIndex={selectedIndex}
                        aspectRatio={aspectRatio}
                        onClose={() => setSelectedIndex(null)}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageGridClient;