// dependencies
import classNames from 'classnames';
// elements
import { Text } from 'elements';
// types
import type { TextContent } from 'elements/types';


/* TYPES */
export interface Content {
    texts: TextContent[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Article = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { texts } = content;

    /* CLASSNAMES */
    const articleClasses = classNames(
        'article',
        className,
    );

    return (
        <article className={articleClasses}>
            {
                texts.map( ( textContent, index ) => {
                    return (
                        <Text key={index}
                            content={textContent} />
                    )
                } )
            }
        </article>
    );
}

export default Article;