// dependencies
import classNames from 'classnames';
// elements
import { Tag, SVG } from 'elements';
// types
import type { IconData, Size } from 'types';


/* TYPES */
export interface Content {
    tags: string[];
    icons: IconData[];
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
}

const TagsIcons = ( {
    className='',
    content,
    iconSize=[ 20, 20 ],
}: Props ) => {
    /* CONTENT */
    const { tags, icons } = content;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const tagsIconsClasses = classNames(
        'tags-icon',
        className,
    );

    return (
        <div className={tagsIconsClasses}>
            <ul className='tags-wrapper'>
                {
                    tags.map( ( text, index ) => (
                        <Tag key={index}>
                            {text}
                        </Tag>
                    ))
                }
            </ul>
            {
                icons.map( ( icon ) => (
                    <SVG key={icon.alt} width={width} height={height}
                        {...icon} />
                ))
            }
        </div>
    );
}

export default TagsIcons;