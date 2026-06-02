import DecoratedSection from "../DecoratedSection";

const ProjectsHero = () => {
    return (
        <DecoratedSection lineClassName="top-24 h-16 md:top-40 md:h-52">
            <div className="mx-auto max-w-6xl px-6 md:px-16 pt-8 md:pt-14 pb-10 md:pb-16">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-8 md:mb-12">
                    Projects
                </h2>

                <div className="max-w-3xl">
                    <h3 className="text-white font-semibold text-xl md:text-3xl leading-snug mb-4">
                        Turning Strategy into High-Impact,
                        <br />
                        Growth &amp; Measurable Results
                    </h3>
                    <p className="text-dark/60 font-light text-sm md:text-lg leading-relaxed">
                        This project reflects my approach to marketing as a balance of strategy,
                        insight, and execution. I focus on understanding the audience, defining
                        clear goals, and creating solutions that drive engagement and real impact.
                        My goal is not just to build something that looks strong, but to develop
                        work that supports growth, creates value, and delivers measurable results.
                    </p>
                    <p className="text-dark/60 font-light text-sm md:text-lg leading-relaxed mt-4">
                        Below are selected projects that highlight this approach in practice:
                    </p>
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ProjectsHero;