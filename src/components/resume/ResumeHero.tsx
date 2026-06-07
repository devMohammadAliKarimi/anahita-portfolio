import DecoratedSection from "@/components/DecoratedSection";

const ResumeHero = () => {
    return (
        <DecoratedSection lineClassName="top-28 h-28 md:top-40 md:h-48 lg:h-32">
            <div className="mx-auto max-w-6xl px-6 md:px-16 pt-8 md:pt-14 pb-10 md:pb-16">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-12">
                    Resume / CV
                </h2>
                <p className="text-dark/70 font-light text-sm sm:text-lg md:text-xl leading-relaxed max-w-5xl">
                    MBA candidate specializing in Marketing with 10+ years of experience in creative
                    environments. Combines a background in graphic design with hands-on experience in
                    content creation, audience engagement, and brand development. Brings a strong
                    understanding of how ideas move from concept to execution, with a focus on creating
                    meaningful and engaging user experiences. Particularly interested in product, brand,
                    and marketing initiatives that connect strategy with creative execution.
                </p>
            </div>
        </DecoratedSection>
    );
};

export default ResumeHero;