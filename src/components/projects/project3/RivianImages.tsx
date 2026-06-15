import DecoratedSection from "@/components/DecoratedSection";
import ImageGridClient from "@/components/ImageGridClient";

const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/images/projects/Rivian/Rivian${i + 1}.webp`,
    alt: `Rivian project slide ${i + 1}`,
}));

const RivianImages = () => {
    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <ImageGridClient images={images} columns={2} />
            </div>
        </DecoratedSection>
    );
};

export default RivianImages;