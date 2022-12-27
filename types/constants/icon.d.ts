export interface IconData {
    data: string;
    alt: string;
}

export interface IconLinkData {
    icon: IconData;
    href: string;
    isActive?: boolean;
}

export interface IconTextLinkData extends IconLinkData {
    text: string;
}