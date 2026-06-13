import { certifications } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const ResumeCertification = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-10">
                    Certification
                </h2>
                <div className="flex flex-col gap-8">
                    {certifications.map((cert) => (
                        <div key={cert.org} className="border-b border-dark/10 pb-8 last:border-0 last:pb-0">
                            <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-3">
                                <p className="text-dark font-semibold text-base md:text-lg">{cert.org}</p>
                                <p className="text-dark/85 text-sm md:text-base shrink-0">{cert.location}</p>
                            </div>
                            <p className="text-dark/85 italic text-sm md:text-base mb-4">{cert.description}</p>
                            {cert.items.length > 0 && (
                                <div className="flex flex-col gap-4">
                                    {cert.items.map((item) => (
                                        <div key={item.name}>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <p className="text-dark/80 font-medium text-sm md:text-base">{item.name}</p>
                                                <p className="text-dark/55 text-sm shrink-0 ml-4">{item.period}</p>
                                            </div>
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="flex gap-2 text-dark/85 font-light text-sm md:text-base leading-relaxed list-none">
                                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-dark/70 shrink-0" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {cert.period && (
                                <p className="text-dark/55 text-sm md:text-sm mt-1">{cert.period}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ResumeCertification;