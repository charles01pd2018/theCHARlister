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
                        <div key={iconContent.alt} className='icon-wrapper' title={title}>
                            <SVG {...iconContent} width={width} height={height} />
                        </div>
                    )
                } )
            }
        </div>
    );
}

export default Palette;