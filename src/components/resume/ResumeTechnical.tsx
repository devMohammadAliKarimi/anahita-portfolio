import { skills } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const ResumeTechnical = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-10">
                    Technical Expertise
                </h2>
                <div className="flex flex-col gap-4">
                    {skills.map((skill) => (
                        <div key={skill.category} className="flex flex-col md:flex-row gap-1 md:gap-3 border-b border-dark/10 pb-4 last:border-0 last:pb-0">
                            <p className="text-dark font-semibold text-base md:text-lg shrink-0 md:w-48">
                                {skill.category}:
                            </p>
                            <p className="text-dark/85 font-light text-base md:text-lg leading-relaxed">
                                {skill.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ResumeTechnical;