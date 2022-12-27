// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { Colors, IconData, Size } from 'types';


/* TYPES */
interface Icon extends IconData {
    title: string;
}

export interface Content {
    icons: Icon[];
}

export interface Props {
    className?: string;
    content: Content;
    color?: Colors;
    iconSize?: Size;
}

const Palette = ( {
    className='',
    content,
    color='blue',
    iconSize=[ 100, 100 ]
}: Props ) => {
    /* CONTENT */
    const { icons } = content;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const paletteClasses = classNames(
        'palette',
        color,
        className,
    );

    return (
        <div className={paletteClasses}>
            {
                icons.map( ( { title, ...iconContent } ) => {
                    return (
                        <div className='icon-wrapper' key={iconContent.alt}>
                            <SVG {...iconContent} width={width} height={height}
                                title={title} aria-label={title} />
                        </div>
                    )
                } )
            }
        </div>
    );
}

export default Palette;