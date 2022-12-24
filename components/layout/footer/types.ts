// exported
import type { Props as DisplayFooterProps,
    Content as DisplayFooterContent } from './DisplayFooter';
// used
import { LinkIconButtonContent } from 'elements/types';
import type { Size } from 'types';


export interface IconsNavItem extends LinkIconButtonContent {
    tooltip: string;
}

export interface IconsNavContent {
    items: IconsNavItem[];
}

export interface IconsNavProps {
    className?: string;
    content?: IconsNavContent;
    activeItemIndex: number;
    iconSize?: Size;
}

export type {
    DisplayFooterProps,
    DisplayFooterContent,
}