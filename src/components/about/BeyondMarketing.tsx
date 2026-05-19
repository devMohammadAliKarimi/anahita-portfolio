import DecoratedSection from "../DecoratedSection";

const BeyondMarketing = () => {
    return (
        <DecoratedSection className="border-t-2 border-white" showLine={false}>
            <div className="flex flex-col items-center md:items-start gap-5 mx-auto max-w-6xl px-6 md:px-16 pb-14 md:pb-20 pt-8 md:pt-14">
                <h2 className="text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full">
                    Beyond Marketing
                </h2>

                <p className="text-dark/60 font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    Outside of my professional work, I enjoy drawing and creative
                    expression, attending classical concerts, hiking in nature, and
                    exploring new cultures that bring fresh perspectives to my work.
                    I'm also always open to connecting with others, exploring new opportunities,
                    and collaborating on projects that bring creativity and strategy together.
                </p>
            </div>
        </DecoratedSection>
    );
};

export default BeyondMarketing;