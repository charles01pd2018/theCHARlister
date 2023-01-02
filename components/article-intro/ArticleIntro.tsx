// dependencies
import classNames from 'classnames';
// elements
import { Breadcrumbs, StackedIcons, TagsIcons } from 'elements';
// types
import type { BreadcrumbsContent, TagsIconsContent } from 'elements/types';

/* TYPES */
export interface Content {
    breadcrumbsContent: BreadcrumbsContent;
    tagsIconsContent: TagsIconsContent;
}

export interface Props {
    className?: string;
    content: Content;
}

const ArticleIntro = ( {
    className='',
    content,
}: Props ) => {
    /* CLASSNAMES */
    const articleIntroClasses = classNames(
        'article-intro',
        className,
    );

    return (
        <section className={articleIntroClasses}>

        </section>
    );
}

export default ArticleIntro;