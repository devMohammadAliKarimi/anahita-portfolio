import Image from "next/image";
import AnimatedLink from "../AnimatedLink";
import DecoratedSection from "../DecoratedSection";

export default function ExploreWork() {
  return (
    <DecoratedSection className="border-t-2 border-white" showLine={false}>
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Explore My Work
        </h2>

        <div className="mt-10 md:mt-12 flex items-center justify-center gap-8 sm:gap-12 md:gap-20">
          <AnimatedLink
            href="/gallery"
            title="Gallery"
            subtitle="Graphic Design"
          />

          <Image
            alt="VS"
            src="/svg/VS.svg"
            width={150}
            height={150}
            className="w-12 sm:w-20 md:w-28 lg:w-[150px] flex-shrink-0"
          />

          <AnimatedLink
            href="/projects"
            title="Projects"
            subtitle="Marketing Strategy"
          />
        </div>
      </div>
    </DecoratedSection>
  );
}