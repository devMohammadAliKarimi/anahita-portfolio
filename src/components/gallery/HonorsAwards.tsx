import { honors } from "@/lib/data";
import DecoratedSection from "../DecoratedSection";

const HonorsAwards = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/20" showLine={false}>
            <div className="flex flex-col gap-8 mx-auto max-w-5xl px-6 md:px-10 pb-14 md:pb-20 pt-8 md:pt-14">

                <h2 className="text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Honors & Awards
                </h2>

                <p className="text-dark/75 font-light text-sm md:text-xl leading-relaxed text-center md:text-left">
                    Selected honors and recognitions from my early work in graphic design,
                    prior to my professional experience in an agency environment.
                </p>

                <div className="flex flex-col gap-6">
                    {honors.map((honor) => (
                        <div
                            key={honor.id}
                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 border-b border-white/10 pb-5"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-dark font-semibold text-sm md:text-base">
                                    {honor.title}
                                </span>
                                <span className="text-dark/65 font-light text-xs md:text-sm italic">
                                    {honor.subtitle}
                                </span>
                            </div>

                            <div className="flex flex-col items-start md:items-end shrink-0 gap-0.5">
                                <span className="text-dark/75 text-xs md:text-sm">
                                    {honor.location}
                                </span>
                                <span className="text-dark/55 text-xs">
                                    {honor.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DecoratedSection>
    );
};

export default HonorsAwards;