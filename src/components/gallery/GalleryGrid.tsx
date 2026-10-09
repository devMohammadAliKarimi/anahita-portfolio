import DecoratedSection from "../DecoratedSection";
import GalleryGridClient from "./GalleryGridClient";

const images = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/G${i + 1}.webp`,
    alt: `Gallery item ${i + 1}`,
}));

const GalleryGrid = () => {
    return (
        <DecoratedSection lineClassName="top-24 h-16 md:top-36 md:h-80">
            <div className="flex flex-col gap-8 mx-auto max-w-5xl px-6 md:px-10 pb-14 md:pb-20 pt-8 md:pt-14">

                <h2 className="text-white font-bold text-4xl md:text-6xl text-center tracking-wide">
                    Gallery
                </h2>

                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-xl md:text-3xl max-w-md">
                        Where Ideas Come to Life Through Design & Storytelling
                    </h3>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        {`Over the years, I've worked on a variety of design projects across
                        print and digital media, shaping how I think about creativity and
                        problem-solving. From developing brand visuals to designing marketing
                        materials, each project has been an opportunity to turn ideas into
                        meaningful visual communication.`}
                    </p>
                    <p className="text-dark font-light text-sm md:text-xl leading-relaxed">
                        {`These experiences have taught me that design is not
                        just about aesthetics, but about communicating clearly
                        and creating a connection with the audience.`}
                    </p>
                    <p className="text-dark/90 font-light text-sm md:text-lg">
                        Selected works showcasing my approach to design across a range of creative projects.
                    </p>
                </div>

                <GalleryGridClient images={images} />

            </div>
        </DecoratedSection>
    );
};

export default GalleryGrid;