// dependencies
import classNames from 'classnames';
// elements
import { Breadcrumbs, TagsIcons, Slider } from 'elements';
// types
import type { BreadcrumbsContent, TagsIconsContent,
    SliderProps } from 'elements/types';


/* TYPES */
export interface Content {
    breadcrumbsContent: BreadcrumbsContent;
    tagsIconsContent: TagsIconsContent;
}

export interface Props {
    className?: string;
    content: Content;
    sliderProps: SliderProps;
}

const MobileArticleIntro = ( {
    className='',
    content,
    sliderProps,
}: Props ) => {
    /* CONTENT */
    const { breadcrumbsContent, 
        tagsIconsContent } = content;

    /* CLASSNAMES */
    const mobileArticleIntroClasses = classNames(
        'mobile-article-intro',
        className,
    );

    return (
        <section className={mobileArticleIntroClasses}>
            <Breadcrumbs content={breadcrumbsContent} />
            <TagsIcons content={tagsIconsContent} />
            <div className='slider-wrapper'>
                <Slider {...sliderProps} />
            </div>
        </section>
    );
}

export default MobileArticleIntro;