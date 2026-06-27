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
                        {`"The aim of marketing is to know & understand the customer so well the product or service fits him & sells itself."`}
                    </p>
                    <span className="block mt-2 text-white text-xs md:text-base font-normal not-italic">
                        Peter Drucker
                    </span>
                </div>

                <p className="text-dark font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    This philosophy has shaped my thinking about marketing, branding, and business.
                </p>

                <p className="text-dark font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    My professional journey began in graphic design, where I learned that design
                    is more than aesthetics. It is a language that transforms ideas into visual
                    experiences and helps brands communicate with clarity and purpose. As I worked
                    with clients, marketing teams, and businesses, I became increasingly curious
                    about the people behind those interactions. I wanted to know what motivates them,
                    how they make decisions, and what creates meaningful connections between brands and their audiences.
                </p>

                <p className="text-dark font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    That curiosity led me to marketing.
                    While design taught me how to communicate visually, marketing
                    taught me how to understand people. I became fascinated by consumer behavior,
                    brand strategy, and how organizations create value through meaningful customer
                    experiences. Over time, I realized that the most effective solutions were built
                    at the intersection of creativity, strategy, and insight.
                    Today, as an MBA candidate in Marketing at Brandeis International Business School,
                    I am expanding my expertise in marketing strategy, branding, analytics, leadership,
                    and consumer behavior. I enjoy combining creative thinking with data-driven decision-making
                    to develop customer-focused solutions that strengthen brands, engage audiences, and support
                    business growth.
                </p>

                <p className="text-dark font-light text-sm md:text-xl leading-relaxed text-center md:text-left max-w-5xl">
                    As I continue my journey, I aspire to grow as a marketing strategist and leader.
                    I want to transform insights into action, build meaningful brand experiences,
                    and create lasting impact for both organizations and the people they serve.
                </p>

            </div>
        </DecoratedSection>
    );
};

export default Introduction;