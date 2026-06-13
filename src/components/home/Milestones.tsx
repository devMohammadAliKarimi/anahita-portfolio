import Image from "next/image";
import Button from "../Button";
import DecoratedSection from "../DecoratedSection";

export default function Milestones() {
  return (
    <DecoratedSection className="border-t-2 border-white/50 py-12 md:py-16" showLine={false}>
      <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">
        Milestones
      </h2>

      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center md:block">

        {/* mobile & tablet */}
        <div className="relative w-full max-w-[420px] block md:hidden">
          <Image
            src="/svg/Milestone-Mobile.svg"
            alt="Milestones mobile timeline"
            width={420}
            height={600}
            className="w-full h-auto"
            priority
          />
          <div className="absolute xs:left-[10%] xs:bottom-[0.5%] sm:left-[15%]">
            <Button title="View My Resume" url="/resume-cv" className="mt-0" />
          </div>
        </div>

        {/* desktop */}
        <div className="relative hidden md:block w-full h-auto">
          <Image
            src="/svg/Milestone.svg"
            alt="Milestones desktop timeline"
            width={1024}
            height={300}
            className="w-full h-auto"
            priority
          />
          <div
            className="
              absolute
              md:bottom-[2%]
              md:left-[24%]
              lg:bottom-[2%]
              lg:left-[29%]
            "
          >
            <Button title="View My Resume" url="/resume-cv" className="mt-0" />
          </div>
        </div>

      </div>
    </DecoratedSection>
  );
}