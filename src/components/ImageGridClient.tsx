"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IImage, IImageGridClientProps } from "@/types";
import ImageCard from "./ImageCard";
import LightboxImage from "./LightboxImage";

const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const ImageGridClient = ({ images, columns = 2, aspectRatio = "video" }: IImageGridClientProps) => {
    const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

    return (
        <>
            <div className={`grid ${colsMap[columns]} gap-3 md:gap-4`}>
                {images.map((image) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        aspectRatio={aspectRatio}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <LightboxImage
                        image={selectedImage}
                        aspectRatio={aspectRatio}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageGridClient;