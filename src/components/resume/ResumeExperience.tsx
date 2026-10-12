
import { experiences } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const ResumeExperience = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-10">
                    Professional Experience
                </h2>
                <div className="flex flex-col gap-8">
                    {experiences.map((exp) => {
                        const positions = exp.positions ?? [
                            {
                                role: exp.role,
                                period: exp.period,
                                bullets: exp.bullets,
                            },
                        ];
                        return (
                            <div
                                key={exp.company}
                                className="border-b border-dark/10 pb-8 last:border-0 last:pb-0"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-3">
                                    <div>
                                        <p className="text-dark font-semibold text-base md:text-lg">
                                            {exp.company}
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-1 shrink-0">
                                        <p className="text-dark/75 text-xs md:text-sm">
                                            {exp.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {positions.map((position) => (
                                        <div
                                            key={`${exp.company}-${position.role}`}
                                        >
                                            <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-3">
                                                <p className="text-dark/85 italic text-sm md:text-base">
                                                    {position.role}
                                                </p>

                                                <p className="text-dark/55 text-xs md:text-sm shrink-0">
                                                    {position.period}
                                                </p>
                                            </div>

                                            <ul className="flex flex-col gap-1.5">
                                                {position.bullets.map((bullet, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-2 text-dark font-light text-sm md:text-base leading-relaxed"
                                                    >
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-dark/70 shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ResumeExperience;