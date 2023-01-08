// dependencies
import classNames from 'classnames';
// elements
import { Breadcrumbs, Slider } from 'elements';
// types
import type { BreadcrumbsContent, SliderProps } from 'elements/types';


/* TYPES */
export interface Content {
    breadcrumbsContent: BreadcrumbsContent;
}

export interface Props {
    className?: string;
    content: Content;
    sliderProps: SliderProps;
}

const DesktopArticleIntro = ( {
    className='',
    content,
    sliderProps,
}: Props ) => {
    /* CONTENT */
    const { breadcrumbsContent } = content;

    /* CLASSNAMES */
    const desktopArticleIntroClasses = classNames(
        'desktop-article-intro',
        className,
    );

    return (
        <section className={desktopArticleIntroClasses}>
            <Breadcrumbs content={breadcrumbsContent} />
            <Slider {...sliderProps} />
        </section>
    );
}

export default DesktopArticleIntro;