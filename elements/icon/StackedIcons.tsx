// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { IconData, Size } from 'types';


/* TYPES */
export interface Content {
    icons: IconData[];
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
                icons.map( ( content, index ) => (
                    <li className='icon-wrapper' key={content.alt}>
                        <SVG width={width} height={height} {...content} />
                    </li>
                ) )
            }
        </ul>
    );
}

export default StackedIcons;