export interface ImageData {
    src: string;
    alt?: string;
}

export interface ImageLinkData extends ImageData {
    href: string;
}