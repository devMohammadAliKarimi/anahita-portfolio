"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/cn";
import { motion } from 'framer-motion';
import { IButtonProps } from '@/types';

const Button: React.FC<IButtonProps> = ({ title, url, className }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex"
        >
            <Link
                href={url}
                className={cn(
                    "mt-6 inline-flex items-center bg-body rounded-md font-medium shadow-sm transition-colors hover:text-highlight whitespace-nowrap",
                    "px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2",
                    "text-[11px] sm:text-[12px] lg:text-[13px] text-white",
                    className
                )}
            >
                {title}
            </Link>
        </motion.button>
    );
};

export default Button;