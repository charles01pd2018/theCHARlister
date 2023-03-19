// dependencies
import classNames from 'classnames';
import { HTMLAttributes } from 'react';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLElement> {
    className?: string;
    WrapperTag: 'p' | 'ul' | 'ol' | 'li' | 'a';
    text: string;
    // other HTML properties
    href?: string;
    target?: '_blank' | '_self';
}

const ArticleText = ( {
    className='',
    WrapperTag,
    text,
    ...rest
}: Props ) => {
    /* CLASSNAMES */
    const articleTextClasses = classNames(
        'article-text',
        'text--sm',
        className,
    );

    return (
        <WrapperTag className={articleTextClasses}
            dangerouslySetInnerHTML={{ __html: text }}
            {...rest} />
    );
}

export default ArticleText;