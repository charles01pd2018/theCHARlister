// exported
import type { Props as IconsNavFooterProps } from './IconsNavFooter';
import type { Props as ContactFooterProps,
    Content as ContactFooterContent } from './ContactFooter';
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
    IconsNavFooterProps,
    ContactFooterProps,
    ContactFooterContent,
}