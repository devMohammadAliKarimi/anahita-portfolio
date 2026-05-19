"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { IProjectCardProps } from "@/types";

const ProjectCard: React.FC<IProjectCardProps> = ({
    number,
    title,
    subtitle,
    description,
    buttonLabel,
    slug,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-b border-dark/20 pb-8 md:pb-10 last:border-b-0"
        >
            <h4 className="text-dark font-bold text-base md:text-xl mb-1">
                {number}. {title}
            </h4>
            <p className="text-dark/50 italic text-xs md:text-sm mb-3">{subtitle}</p>
            <p className="text-dark/60 font-light text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                {description}
            </p>
            <Button
                title={buttonLabel}
                url={`/projects/${slug}`}
            />
        </motion.div>
    );
};

export default ProjectCard;