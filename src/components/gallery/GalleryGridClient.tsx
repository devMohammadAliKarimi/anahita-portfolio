"use client";

import { IImage } from "@/types";
import ImageGridClient from "../ImageGridClient";

const GalleryGridClient = ({ images }: { images: IImage[] }) => {
    return <ImageGridClient images={images} columns={2} />;
};

export default GalleryGridClient;