// dependencies
import classNames from 'classnames';
// elements
import { Tag } from 'elements';
// types
import type { Colors } from 'types';
import type { ColorTag } from 'elements/types';


/* TYPES */
export interface Content {
    tags: ColorTag[];
}

export interface Props {
    className?: string;
    content: Content;
}

const TagList = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { tags } = content;

    /* CLASSNAMES */
    const tagListClasses = classNames(
        'tag-list',
        className,
    );

    return (
        <ul className={tagListClasses}>
            {
                tags.map( ( { text, color }, index ) => (
                    <Tag key={index} color={color}>
                        {text}
                    </Tag>
                ) )
            }
        </ul>
    );
}

export default TagList;