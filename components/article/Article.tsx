// dependencies
import classNames from 'classnames';
// elements
import { StyledText } from 'elements';
// types
import type { StyledTextContent } from 'elements/types';
import type { Media } from 'types';


/* TYPES */
interface Item {
    texts: StyledTextContent[];
    media?: Media;
}

export interface Content {
    items: Item[];
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
    const { items } = content;

    /* CLASSNAMES */
    const articleClasses = classNames(
        'article',
        className,
    );

    return (
        <article className={articleClasses}>
            {
                items.map( ( { texts, media }, index ) => {
                    return (
                        <div className='text-wrapper' key={index}>
                            {
                                texts.map( ( textContent, innerIndex ) => (
                                    <StyledText key={`text:${innerIndex}`}
                                        content={textContent} />
                                ) )
                            }
                        </div>
                    )
                } )
            }
        </article>
    );
}

export default Article;