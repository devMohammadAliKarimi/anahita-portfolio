import Image from "next/image";
import DecoratedSection from "@/components/DecoratedSection";

const CharlesRiverFunnel = () => {
    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">

                <p className="text-dark font-light text-sm md:text-xl leading-relaxed max-w-5xl mb-10">
                    To connect audience understanding with action, I structured the experience
                    around a simple user journey:
                </p>

                <div className="flex justify-center mb-10 md:mb-14">
                    <Image
                        src="/svg/CharlesRiverMuseum2.svg"
                        alt="User journey funnel"
                        width={600}
                        height={300}
                        className="w-full max-w-xl"
                    />
                </div>

                <div className="flex flex-col gap-4 max-w-5xl">
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        Given the limitations of the existing platform, the project focused on
                        content strategy and structure rather than visual redesign. Instead of
                        changing the interface, I prioritized improving how content is organized
                        and communicated.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        I developed a structured marketing foundation that includes clearer
                        messaging, better content hierarchy, and a more intuitive website flow.
                        These improvements help users navigate the site more easily, understand
                        the museum&apos;s value, and move naturally toward engagement and action.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        This approach created a more cohesive and intentional way for the museum
                        to communicate with its audience. By aligning content with user needs and
                        organizational goals, the project supports stronger engagement and
                        encourages meaningful action whether that means attending events,
                        exploring programs, or supporting the museum.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        Over time, this structure builds trust, strengthens relationships, and
                        contributes to sustainable growth and revenue.
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        The following visuals highlight key parts of the project and how these
                        ideas were translated into content, structure, and user experience.
                    </p>
                </div>

            </div>
        </DecoratedSection>
    );
};

export default CharlesRiverFunnel;