import Image from "next/image";
import DecoratedSection from "../DecoratedSection";

const Introduction = () => {
    return (
        <DecoratedSection lineClassName="top-28 h-36 md:top-40 md:h-60">
            <div className="flex flex-col items-center md:items-start gap-8 mx-auto max-w-6xl px-6 md:px-16 pb-14 md:pb-20 pt-8 md:pt-14">

                <h2 className="text-white font-bold text-4xl md:text-6xl text-center md:text-center w-full tracking-wide">
                    About Me
                </h2>

                <Image
                    width={250}
                    height={250}
                    alt="Anahita Mouni"
                    src="/svg/AboutMe.svg"
                    className="
                        mx-auto
                        w-[150px]
                        sm:w-[150px]
                        md:w-[200px]
                        lg:w-[250px]
                    "
                />

                <div className="text-center md:text-left max-w-[43rem]">
                    <p className="text-white italic font-normal text-xl md:text-4xl leading-relaxed">
                        {`"The aim of marketing is to know & understand the customer so well the product or service fits him and sells itself."`}
                    </p>
                    <span className="block mt-2 text-white text-xs md:text-base font-normal not-italic">
                        Peter Drucker
                    </span>
                </div>

                <p className="text-dark/60 font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    {`Inspired by this philosophy, Anahita Mouni is a marketer and creative
                    strategist with a background in graphic design and over a decade of experience.
                    Her journey as an immigrant shaped her resilience & adaptability, fueling her
                    passion for blending design thinking with data-driven insights to craft meaningful
                    campaigns. She is currently expanding her expertise as an MBA candidate at
                    Brandeis International Business School, while consulting in digital marketing
                    and coordinating marketing projects. Looking ahead, she is eager to continue
                    growing as a strategist, creating innovative brand experiences that inspire
                    audiences, foster connection, and drive measurable impact.`}
                </p>

            </div>
        </DecoratedSection>
    );
};

export default Introduction;