import Image from "next/image";
import { audiences } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const CharlesRiverAudience = () => {
    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">

                {/* Desktop */}
                <div className="hidden sm:flex justify-center mb-10 md:mb-14">
                    <Image
                        src="/svg/CharlesRiverMuseum1.svg"
                        alt="Audience groups"
                        width={700}
                        height={160}
                        className="w-full max-w-full"
                    />
                </div>

                {/* Mobile */}
                <div className="flex sm:hidden flex-col items-center gap-5 mb-6">
                    {audiences.map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <div>
                                <p className="text-dark font-semibold text-sm">{item.label}</p>
                                <p className="text-dark/60 font-light text-xs leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop audience list */}
                <div className="hidden sm:flex flex-col gap-2 max-w-2xl">
                    {audiences.map((item) => (
                        <p key={item.label} className="text-dark/70 text-sm md:text-base leading-relaxed">
                            <span className="font-semibold text-dark">{item.label}</span>{" "}
                            {item.description}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col gap-4 max-w-3xl mt-8">
                    <p className="text-dark/60 font-light text-sm md:text-lg leading-relaxed">
                        Each group engages with the museum in a different way and has different
                        expectations. This made it clear that a single, general message would not
                        effectively support engagement or revenue growth.
                    </p>
                    <p className="text-dark/60 font-light text-sm md:text-lg leading-relaxed">
                        While multiple audience groups were identified, the strategy focused on the
                        segments with the highest impact on engagement and long-term support.
                    </p>
                    <p className="text-dark/60 font-light text-sm md:text-lg leading-relaxed">
                        Based on these segments, I developed representative personas to guide the
                        strategy and ensure decisions remained audience-focused.
                    </p>

                    <div className="flex flex-col gap-3 mt-2">
                        <div>
                            <p className="text-dark font-semibold text-sm md:text-base">• Amy (Donor)</p>
                            <p className="text-dark/60 font-light text-sm md:text-base leading-relaxed">
                                Focused on impact and trust. She wants to clearly understand how her
                                support contributes to the museum&apos;s mission.
                            </p>
                        </div>
                        <div>
                            <p className="text-dark font-semibold text-sm md:text-base">• Max (Family / Education Segment)</p>
                            <p className="text-dark/60 font-light text-sm md:text-base leading-relaxed">
                                Represents both families and students. He looks for clear program
                                information, ease of navigation, and meaningful educational value.
                            </p>
                        </div>
                        <div>
                            <p className="text-dark font-semibold text-sm md:text-base">• Scott (Technology Partner)</p>
                            <p className="text-dark/60 font-light text-sm md:text-base leading-relaxed">
                                Interested in collaboration and long-term partnerships. He values
                                opportunities to connect with innovation and community initiatives.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </DecoratedSection>
    );
};

export default CharlesRiverAudience;