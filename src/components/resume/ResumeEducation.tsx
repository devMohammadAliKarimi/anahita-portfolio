import { education } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const ResumeEducation = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-10">
                    Education
                </h2>
                <div className="flex flex-col gap-6">
                    {education.map((item) => (
                        <div key={item.school} className="flex flex-col md:items-center md:flex-row md:justify-between gap-1 md:gap-4 border-b border-dark/10 pb-6 last:border-0 last:pb-0">
                            <div className="flex flex-col gap-1">
                                <p className="text-dark font-semibold text-base md:text-lg">{item.school}</p>
                                <p className="text-dark/85 italic text-sm md:text-base">{item.degree}</p>
                            </div>
                            <div className="flex flex-col md:items-end gap-1 shrink-0">
                                <p className="text-dark/75 text-xs md:text-sm">{item.location}</p>
                                <p className="text-dark/55 text-xs md:text-sm">{item.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ResumeEducation;