// exported
import type { Props as DisplayFooterProps,
    Content as DisplayFooterContent } from './DisplayFooter';
// used
import { IconLinkContent } from 'elements/types';
import type { Size } from 'types';


export interface IconsNavItem extends IconLinkContent {
    tooltip: string;
}

export interface IconsNavContent {
    items: IconsNavItem[];
}

export interface IconsNavProps {
    className?: string;
    content?: IconsNavContent;
    activeIndex: number;
    iconSize?: Size;
}

export type {
    DisplayFooterProps,
    DisplayFooterContent,
}