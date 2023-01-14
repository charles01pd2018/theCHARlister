// dependencies
import classNames from 'classnames';
// elements
import { TagList, StackedIcons, ArticleText } from 'elements';
// types
import type { ArticleContent } from 'components/types';
import type { StackedIconsContent, TagListContent } from 'elements/types';


/* TYPES */
export interface Content extends ArticleContent {
    stackedIconsContent: StackedIconsContent;
    tagListContent: TagListContent;
}

export interface Props {
    className?: string;
    content: Content;
    WrapperTag?: 'article' | 'div';
}

const Parallax = ( {
    className='',
    content,
    WrapperTag='article',
}: Props ) => {
    /* CONTENT */
    const { items, stackedIconsContent, tagListContent } = content;

    /* CLASSNAMES */
    const parallaxClasses = classNames(
        'parallax-container',
        className,
    );

    return (
        <section className={parallaxClasses}>
            <div className='parallax-wrapper container'>
                <div className='top'>
                    <TagList content={tagListContent} />
                    <StackedIcons content={stackedIconsContent} />
                </div>
                <WrapperTag className='text-container'>
                    {
                        items.map( ( { title, texts }, index ) => {
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
                </WrapperTag>
            </div>
        </section>
    )
}

export default Parallax;