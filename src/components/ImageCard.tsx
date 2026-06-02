"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IImageCardProps } from "@/types";

const aspectMap = {
    video: "relative aspect-video",
    square: "relative aspect-square",
    auto: "relative",
};

const ImageCard: React.FC<IImageCardProps> = ({ image, onClick, aspectRatio = "video" }) => {
    const [loaded, setLoaded] = useState(false);

    const isAuto = aspectRatio === "auto";

    return (
        <motion.div
            className={`${aspectMap[aspectRatio]} overflow-hidden rounded-sm cursor-pointer bg-white/10`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
        >
            {!loaded && (
                <div className={`${isAuto ? "absolute" : "absolute"} inset-0 bg-white/10 animate-pulse`} />
            )}
            {isAuto ? (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    draggable={false}
                    className={`w-full h-auto transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setLoaded(true)}
                />
            ) : (
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    draggable={false}
                    className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setLoaded(true)}
                />
            )}
        </motion.div>
    );
};

export default ImageCard;