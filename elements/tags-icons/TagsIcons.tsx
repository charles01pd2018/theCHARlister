// dependencies
import classNames from 'classnames';
// elements
import { TagList, StackedIcons } from 'elements';
// types
import type { Size } from 'types';
import type { TagListContent, StackedIconsContent } from 'elements/types';


/* TYPES */
export interface Content {
    tagListContent: TagListContent;
    stackedIconsContent: StackedIconsContent;
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
}

const TagsIcons = ( {
    className='',
    content,
    iconSize=[ 24, 24 ],
}: Props ) => {
    /* CONTENT */
    const { tagListContent, stackedIconsContent } = content;

    /* CLASSNAMES */
    const tagsIconsClasses = classNames(
        'tags-icons',
        className,
    );

    return (
        <div className={tagsIconsClasses}>
            <TagList content={tagListContent} />
            <StackedIcons content={stackedIconsContent}
                iconSize={iconSize} />
        </div>
    );
}

export default TagsIcons;