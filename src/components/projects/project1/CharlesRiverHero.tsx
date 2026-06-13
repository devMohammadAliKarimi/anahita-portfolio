import DecoratedSection from "@/components/DecoratedSection";

const CharlesRiverHero = () => {
    return (
        <DecoratedSection lineClassName="top-8 h-16 md:top-16">
            <div className="mx-auto max-w-6xl px-6 md:px-16 pt-8 md:pt-14 pb-10 md:pb-16">

                <h2 className="text-dark/75 font-bold text-lg md:text-2xl w-full tracking-wide">
                    1. From Audience Insight to Engagement
                </h2>

                <p className="text-dark/65 italic text-sm md:text-base mb-6">
                    Charles River Museum of Industry &amp; Innovation | September 2025 - May 2026
                </p>

                <div className="flex flex-col gap-4 max-w-5xl">
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        This project focused on improving how the Charles River Museum of Industry
                        &amp; Innovation (CRMII) connects with its audience to drive engagement and
                        long-term support. While the museum offered valuable content and programs,
                        there was no clear and consistent structure to guide different audiences
                        toward meaningful action.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        I approached this project by focusing on the user journey from initial
                        awareness to engagement and long-term support while ensuring that each step
                        aligns with audience needs and organizational goals.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        To better understand the museum&apos;s audience, I segmented users based on their
                        needs, motivations, and how they interact with the organization. Rather than
                        treating all visitors the same, I identified five key audience groups:
                    </p>
                </div>

            </div>
        </DecoratedSection>
    );
};

export default CharlesRiverHero;