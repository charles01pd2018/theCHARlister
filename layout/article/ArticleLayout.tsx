// components
import { DisplayFooter, Parallax, Article } from 'components';
// components
import { ArticleIntro } from 'components';
// elements
import { Breadcrumbs } from 'elements/breadcrumbs';
// types
import type { ArticleContent } from 'components/types';
import type { BreadcrumbsContent, StackedIconsContent, 
    TagListContent } from 'elements/types';


export interface Content {
    articleContent: ArticleContent;
    breadcrumbsContent: BreadcrumbsContent;
    stackedIconsContent: StackedIconsContent;
    tagListContent: TagListContent;
}

export interface Props {
    content: Content;
}

const ArticleLayout = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { articleContent, 
        breadcrumbsContent,
        stackedIconsContent,
        tagListContent, } = content;

    return (
        <>
            <main className='article-layout'>
                <section className='desktop-article-wrapper'>
                    <Breadcrumbs className='spacing--hWide'
                        content={breadcrumbsContent} />
                    <Parallax className='spacing--v'
                        content={{
                            ...articleContent,
                            stackedIconsContent,
                            tagListContent,
                        }} />
                </section>
                <section className='mobile-article-wrapper'>
                    <ArticleIntro content={{
                        breadcrumbsContent,
                        tagsIconsContent: {
                            tagListContent,
                            icons: stackedIconsContent.icons,
                        },
                    }} />
                    <Article className='container--wide'
                        content={articleContent} />
                </section>
            </main>
            <DisplayFooter />
        </>
    )
}

export default ArticleLayout;