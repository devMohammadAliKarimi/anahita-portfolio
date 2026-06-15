import type { Metadata } from "next";
import GalleryGrid from '@/components/gallery/GalleryGrid';
import HonorsAwards from '@/components/gallery/HonorsAwards';

export const metadata: Metadata = {
    title: "Gallery | Anahita Mouni",
    description: "A visual showcase of graphic design and creative work by Anahita Mouni, blending design thinking with strategic storytelling.",
};

const GalleryPage = () => {
    return (
        <>
            <GalleryGrid />
            <HonorsAwards />
        </>
    );
};

export default GalleryPage;