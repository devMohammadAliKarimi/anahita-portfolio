import Image from "next/image";
import Button from "../Button";
import DecoratedSection from "../DecoratedSection";

export default function Hero() {
  return (
    <DecoratedSection>
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-12 md:pb-16 pt-6 md:pt-12">
        <Image
          src="/svg/Portfolio.svg"
          alt="Portfolio"
          width={700}
          height={700}
          className="
            mx-auto
            md:ml-auto
            md:mr-10
            w-[260px]
            sm:w-[460px]
            md:w-[580px]
            lg:w-[700px]
          "
        />
        <div className="mt-8 md:mt-12 max-w-2xl mx-auto md:mx-10 text-center md:text-left">
          <h2
            className="
              text-xl
              leading-snug
              sm:text-2xl
              md:text-4xl
              font-semibold
              text-white
            "
          >
            Bringing Marketing to life through
            <br className="hidden md:inline" />
            {" "} creativity &amp; strategy
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-lg
              md:text-xl
              text-dark/70
              font-medium
              leading-relaxed
            "
          >
            Explore my journey, see my work, and discover how I connect ideas
            to impact.
          </p>

          <div className="mt-6">
            <Button
              title="Discover My Story"
              url="/about-me"
            />
          </div>
        </div>
      </div>
    </DecoratedSection>
  );
};