export interface IconData {
    data: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface IconTitleData extends IconData {
    title: string;
}

export interface IconLinkData {
    icon: IconData;
    href: string;
    isActive?: boolean;
}

export interface IconTextLinkData extends IconLinkData {
    text: string;
}