// dependencies
import classNames from 'classnames';
import Image from 'next/image';
// types
import type { Colors, IconTitleData, Size } from 'types';


/* TYPES */
export interface Content {
    icons: IconTitleData[];
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
                            <Image src={iconContent.data} alt={iconContent.alt} 
                                width={width} height={height} />
                        </div>
                    )
                } )
            }
        </div>
    );
}

export default Palette;