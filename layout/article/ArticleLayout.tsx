// components
import { OverviewHeader, DisplayFooter, Parallax } from 'components';
// elements
import { Breadcrumbs } from 'elements/breadcrumbs';
// types
import type { ParallaxContent } from 'components/types';
import type { BreadcrumbsContent } from 'elements/types';


export interface Content {
    parallaxContent: ParallaxContent;
    breadcrumbsContent: BreadcrumbsContent;
}

export interface Props {
    content: Content;
}

const ArticleLayout = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { parallaxContent, breadcrumbsContent } = content;

    return (
        <>
            <OverviewHeader />
            <main className='article-layout'>
                <Breadcrumbs className='container--wide'
                    content={breadcrumbsContent} />
                <Parallax content={parallaxContent} />
            </main>
            <DisplayFooter />
        </>
    )
}

export default ArticleLayout;