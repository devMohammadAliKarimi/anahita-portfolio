"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IAnimatedLinkProps } from "@/types";

const AnimatedLink: React.FC<IAnimatedLinkProps> = ({ href, title, subtitle }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center"
        >
            <Link
                href={href}
                className="text-xl sm:text-3xl md:text-5xl font-bold text-dark/80 hover:text-highlight transition-colors duration-300"
            >
                {title}
            </Link>
            <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-dark/70">
                {subtitle}
            </p>
        </motion.div>
    );
};

export default AnimatedLink;