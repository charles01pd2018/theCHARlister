// elements
import { Breadcrumbs } from 'elements/breadcrumbs';
// types
import type { ReactNode } from 'react';


export interface Content {

}

export interface Props {
    children: ReactNode;
    content: Content;
}

const ArticleLayout = ( {
    children,
    content,
}: Props ) => {
    return (
        <>
            <main className='article-layout'>
                {children}
            </main>
        </>
    )
}

export default ArticleLayout;