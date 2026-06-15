"use client";

import { motion } from "framer-motion";

const text = "LOADING";

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-cream">
            <div className="flex flex-col items-center gap-8">
                <div className="flex">
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className="text-4xl font-light text-dark md:text-6xl"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <div className="flex gap-2">
                    {[0, 1, 2].map((item) => (
                        <motion.div
                            key={item}
                            className="h-2 w-2 rounded-full bg-dark/50"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: item * 0.15,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}