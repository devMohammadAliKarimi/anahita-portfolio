"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import DecoratedSection from "@/components/DecoratedSection";

const CharlesRiverVideo = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setPlaying(true);
        videoRef.current?.play();
    };

    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-16">

                <div
                    className="relative w-full aspect-video rounded-sm overflow-hidden bg-dark/10 cursor-pointer group"
                    onClick={!playing ? handlePlay : undefined}
                >
                    <video
                        ref={videoRef}
                        src="/videos/anahitaPresentation.mp4"
                        className="w-full h-full object-cover"
                        controls={playing}
                        playsInline
                        preload="metadata"
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    {/* Play overlay */}
                    {!playing && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-dark/30 group-hover:bg-dark/40 transition-colors duration-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40"
                            >
                                <Play className="text-white w-7 h-7 md:w-9 md:h-9 ml-1" fill="white" />
                            </motion.div>
                        </motion.div>
                    )}
                </div>

            </div>
        </DecoratedSection>
    );
};

export default CharlesRiverVideo;