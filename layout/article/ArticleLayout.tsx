// components
import { DisplayFooter, Parallax, Article } from 'components';
// components
import { ArticleIntro } from 'components';
// elements
import { Breadcrumbs } from 'elements/breadcrumbs';
// types
import type { ArticleContent } from 'components/types';
import type { BreadcrumbsContent } from 'elements/types';


export interface Content {
    articleContent: ArticleContent;
    breadcrumbsContent: BreadcrumbsContent;
}

export interface Props {
    content: Content;
}

const ArticleLayout = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { articleContent, breadcrumbsContent } = content;

    return (
        <>
            <main className='article-layout'>
                <section className='desktop-article-wrapper'>
                    <Breadcrumbs className='spacing--hWide'
                        content={breadcrumbsContent} />
                    <Parallax className='spacing--v'
                        content={articleContent} />
                </section>
                <section className='mobile-article-wrapper'>
                    <ArticleIntro />
                    <Article className='container--wide'
                        content={articleContent} />
                </section>
            </main>
            <DisplayFooter />
        </>
    )
}

export default ArticleLayout;