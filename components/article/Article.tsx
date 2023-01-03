// dependencies
import classNames from 'classnames';
// elemenets
import { Media } from 'elements';
// types
import type { MediaData } from 'types';


/* TYPES */
interface Item {
    title: string;
    media?: MediaData;
    texts: string[];
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
                items.map( ( { title, texts, media }, index ) => {
                    return (
                        <div className='text-wrapper' key={index}>
                            <h3 className='title'>{title}</h3>
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