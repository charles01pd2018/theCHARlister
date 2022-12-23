// exported
import type { Props as TooltipIconProps,
    Content as TooltipIconContent } from './TooltipIcon';
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
}