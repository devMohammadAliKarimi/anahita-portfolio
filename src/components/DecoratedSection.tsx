import React from "react";
import { IDecoratedSectionProps } from "@/types";

const DecoratedSection: React.FC<IDecoratedSectionProps> = ({
    children,
    className = "",
    showLine = true,
}) => {
    return (
        <section className={`relative bg-taupe ${className}`}>
            {showLine && (
                <div className="absolute top-20 h-16 md:top-48 md:h-40 w-2 rounded-r-lg bg-dark/80" />
            )}

            {children}
        </section>
    );
};

export default DecoratedSection;