// dependencies
import { useState } from 'react';
import classNames from 'classnames';
// content
import { ARTICLE_LAYOUT_SLIDER_CONTENT } from 'layout/content';
// components
import { DisplayFooter, Parallax, Article, MobileArticleIntro,
    DesktopArticleIntro } from 'components';
// types
import type { ArticleContent, ArticleIntroSliderContent } from 'components/types';
import type { BreadcrumbsContent, StackedIconsContent, 
    TagListContent, SliderItem, SliderContent } from 'elements/types';


/* UTIL FUNCTIONS */
const getArticleIntroSliderContent = (
    content: ArticleIntroSliderContent,
): SliderContent => {
    return {
        items: content.items.map( ( { label, ...restContent } ) => ( {
            ...restContent,
            labelChildren: label,
        } ) ),
    }
}

/* TYPES */
export interface Content {
    productArticleContent: ArticleContent;
    technicalArticleContent: ArticleContent;
    breadcrumbsContent: BreadcrumbsContent;
    stackedIconsContent: StackedIconsContent;
    tagListContent: TagListContent;
    sliderContent?: ArticleIntroSliderContent;
}

export interface Props {
    className?: string;
    content: Content;
}

const ArticleLayout = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { technicalArticleContent,
        productArticleContent,
        breadcrumbsContent,
        stackedIconsContent,
        tagListContent,
        sliderContent=ARTICLE_LAYOUT_SLIDER_CONTENT } = content;

    /* HOOKS */
    const [ sliderItems, setSliderItems ] = 
        useState<SliderItem[]>( getArticleIntroSliderContent( sliderContent ).items );

    const { value: articleType } = sliderItems.find( ( { checked } ) => checked )!;
    const articleContent = articleType === 'technical' ? 
        technicalArticleContent : productArticleContent;
    const sliderProps = {
        name: 'articleSection',
        onChange: ( items: SliderItem[] ) => setSliderItems( items ),
        content: {
            items: sliderItems,
        },
        color: tagListContent.tags[0].color,
    }

    /* CLASSNAMES */
    const articleLayoutClasses = classNames(
        'article-layout',
        className,
    );

    return (
        <>
            <main className={articleLayoutClasses}>
                <section className='desktop-article-wrapper'>
                    <DesktopArticleIntro sliderProps={sliderProps} content={{
                        breadcrumbsContent,
                    }} />
                    <Parallax className='spacing--v'
                        content={{
                            ...articleContent,
                            stackedIconsContent,
                            tagListContent,
                        }} />
                </section>
                <section className='mobile-article-wrapper'>
                    <MobileArticleIntro sliderProps={sliderProps} content={{
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