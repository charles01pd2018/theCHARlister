// dependencies
import classNames from 'classnames';
import type { Media } from 'types';


/* TYPES */
interface Item {
    texts: string[];
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
                                texts.map( ( text, innerIndex ) => (
                                    <p key={`text:${innerIndex}`}
                                        dangerouslySetInnerHTML={{ __html: text }} />
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