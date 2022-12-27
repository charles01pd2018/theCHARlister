// exported
import type { Props as TooltipIconProps,
    Content as TooltipIconContent } from './TooltipIcon';
import type { Props as StackedIconsProps,
    Content as StackedIconsContent } from './StackedIcons';
// used
import type { Size } from 'types';


export interface BaseIconProps {
    className?: string;
    iconSize?: Size;
}

export interface IconProps extends BaseIconProps {
    color?: string;
}

export * from './animated/types';
export {
    TooltipIconContent,
    TooltipIconProps,
    StackedIconsContent,
    StackedIconsProps,
}