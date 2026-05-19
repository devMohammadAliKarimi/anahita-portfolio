import DecoratedSection from "../DecoratedSection";

const Approach = () => {
    return (
        <DecoratedSection className="border-t-2 border-white" showLine={false}>
            <div className="flex flex-col items-center md:items-start gap-5 mx-auto max-w-6xl px-6 md:px-16 pb-14 md:pb-20 pt-8 md:pt-14">
                <h2 className="text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full">
                    My Approach
                </h2>

                <p className="text-dark/60 font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    I believe marketing should merge creativity with strategy
                    to create lasting connections. My work focuses on developing
                    brand stories that are visually compelling, grounded in data, and
                    designed to engage audiences across cultures and industries
                </p>
            </div>
        </DecoratedSection>
    );
};

export default Approach;