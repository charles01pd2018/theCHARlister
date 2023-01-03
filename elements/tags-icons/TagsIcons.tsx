// dependencies
import classNames from 'classnames';
// elements
import { TagList, SVG } from 'elements';
// types
import type { IconData, Size } from 'types';
import type { TagListContent } from 'elements/types';


/* TYPES */
export interface Content {
    tagListContent: TagListContent;
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
    const { tagListContent, icons } = content;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const tagsIconsClasses = classNames(
        'tags-icons',
        className,
    );

    return (
        <div className={tagsIconsClasses}>
            <TagList content={tagListContent} />
            {
                icons.map( ( icon ) => (
                    <SVG key={icon.alt} width={width} height={height}
                        {...icon} />
                ) )
            }
        </div>
    );
}

export default TagsIcons;