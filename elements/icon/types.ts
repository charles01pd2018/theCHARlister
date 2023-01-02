// exported
import type { Props as TooltipIconProps,
    Content as TooltipIconContent } from './TooltipIcon';
import type { Props as StackedIconsProps,
    Content as StackedIconsContent } from './StackedIcons';
import type { Props as HamburgerIconProps } from './HamburgerIcon';
// used
import type { Size, Colors } from 'types';


export interface BaseIconProps {
    className?: string;
    iconSize?: Size;
}

export interface IconProps extends BaseIconProps {
    color: Colors;
}

export * from './animated/types';
export {
    TooltipIconContent,
    TooltipIconProps,
    StackedIconsContent,
    StackedIconsProps,
    HamburgerIconProps
}