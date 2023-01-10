// dependencies
import classNames from 'classnames';
// elemenets
import { Media, ArticleText } from 'elements';
// types
import type { MediaData } from 'types';
import type { ArticleTextProps } from 'elements/types';


/* TYPES */
interface Item {
    title: string;
    media?: MediaData;
    texts: ArticleTextProps[];
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
                                texts.map( ( textProps, innerIndex ) => (
                                    <ArticleText key={`text:${innerIndex}`} 
                                        {...textProps} />
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