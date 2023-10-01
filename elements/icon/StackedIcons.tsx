// dependencies
import classNames from 'classnames';
import Image from 'next/image';
// types
import type { IconTitleData, Size } from 'types';


/* TYPES */
export interface Content {
    icons: IconTitleData[];
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
}

const StackedIcons = ( {
    className='',
    content,
    iconSize=[ 30, 30 ],
}: Props ) => {
    /* CONTENT */
    const { icons } = content;
    const [ width, height ] = iconSize;
 
    /* CLASSNAMES */
    const stackedIcons = classNames(
        'stacked-icons',
        className,
    );

    return (
        <ul className={stackedIcons}>
            {
                icons.map( ( { title, ...iconContent } ) => (
                    <li className='icon-wrapper' title={title} key={iconContent.alt}>
                        <Image width={width} height={height} 
                            src={iconContent.data} alt={iconContent.alt} />
                    </li>
                ) )
            }
        </ul>
    );
}

export default StackedIcons;