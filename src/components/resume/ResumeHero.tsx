import DecoratedSection from "@/components/DecoratedSection";

const ResumeHero = () => {
    return (
        <DecoratedSection lineClassName="top-28 h-28 md:top-40 md:h-48 lg:h-32">
            <div className="mx-auto max-w-6xl px-6 md:px-16 pt-8 md:pt-14 pb-10 md:pb-16">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-12">
                    Resume / CV
                </h2>
                <p className="text-dark font-light text-sm sm:text-lg md:text-xl leading-relaxed max-w-5xl">
                    MBA candidate specializing in Marketing with 10+ years of experience in creative and design-driven environments. Combines a
                    strong foundation in graphic design with hands-on expertise in digital content, audience engagement, and brand development.
                    Brings a strategic understanding of how ideas move from concept to execution, creating meaningful experiences that connect with
                    audiences and support business goals. Particularly interested in product, brand, and digital marketing initiatives that bring together
                    strategy, creativity, and measurable impact.
                </p>
            </div>
        </DecoratedSection>
    );
};

export default ResumeHero;