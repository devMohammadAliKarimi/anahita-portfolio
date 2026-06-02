export interface MenuItem {
    title: string;
    url: string;
}

export interface IAnimatedLinkProps {
    href: string;
    title: string;
    subtitle: string;
}

export interface IDecoratedSectionProps {
    children: React.ReactNode;
    className?: string;
    showLine?: boolean;
    lineClassName?: string;
}

export interface IButtonProps {
    title: string;
    url: string;
    className?: string;
}

export interface IImage {
    id: number;
    src: string;
    alt: string;
}

export interface IImageCardProps {
    image: IImage;
    onClick: () => void;
    aspectRatio?: "video" | "square" | "auto";
}

export interface ILightboxProps {
    images: IImage[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    aspectRatio?: "video" | "square" | "auto";
}

export interface IImageGridClientProps {
    images: IImage[];
    columns?: 1 | 2 | 3;
    aspectRatio?: IImageCardProps["aspectRatio"];
}

export interface IProjectCardProps {
    number: number;
    title: string;
    subtitle: string;
    description: string;
    buttonLabel: string;
    slug: string;
}

export type IGalleryImage = IImage;

export type IGalleryCardProps = IImageCardProps;