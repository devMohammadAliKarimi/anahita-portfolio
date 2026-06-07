import Image from "next/image";
import DecoratedSection from "@/components/DecoratedSection";

const CharlesRiverBeforeAfter = () => {
    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-5 md:py-10">

                {/* Mobile: stack | Desktop: side by side */}
                <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-start gap-6 md:gap-8">

                    {/* Before */}
                    <div className="flex flex-col items-center gap-6 md:gap-10">
                        <h3 className="text-dark/75 font-semibold text-4xl md:text-5xl">Before</h3>
                        <div className="relative w-full rounded-sm overflow-hidden">
                            <Image
                                src="/images/projects/CharlesRiverMuseum/before.jpg"
                                alt="Website before redesign"
                                width={600}
                                height={900}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* VS */}
                    <div className="flex items-center justify-center md:items-start mt-3 md:-mt-4">
                        <Image
                            src="/svg/VS.svg"
                            alt="VS"
                            width={60}
                            height={60}
                            className="w-14 md:w-20"
                        />
                    </div>

                    {/* After */}
                    <div className="flex flex-col items-center gap-6 md:gap-10">
                        <h3 className="text-dark/75 font-semibold text-4xl md:text-5xl">After</h3>
                        <div className="relative w-full rounded-sm overflow-hidden">
                            <Image
                                src="/images/projects/CharlesRiverMuseum/after.jpg"
                                alt="Website after redesign"
                                width={600}
                                height={900}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </DecoratedSection>
    );
};

export default CharlesRiverBeforeAfter;