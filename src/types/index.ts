export interface MenuItem {
    title: string;
    url: string;
};

export interface IDecoratedSectionProps {
    children: React.ReactNode;
    className?: string;
    showLine?: boolean;
};

export interface IAnimatedLinkProps {
    href: string;
    title: string;
    subtitle: string
}

export interface IButtonProps {
    title: string;
    url: string;
    className?: string;
}

export interface IGalleryImage {
    id: number;
    src: string;
    alt: string;
}

export interface IGalleryCardProps {
    image: IGalleryImage;
    onClick: () => void
}

export interface ILightboxProps {
    image: IGalleryImage;
    onClose: () => void
}

export interface IProjectCardProps {
    number: number;
    title: string;
    subtitle: string;
    description: string;
    buttonLabel: string;
    slug: string;
}