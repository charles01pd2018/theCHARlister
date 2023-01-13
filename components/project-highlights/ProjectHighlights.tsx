// dependencies
import classNames from 'classnames';
import { InView, useInView } from 'react-intersection-observer';
// content
import { PROJECT_HIGHLIGHTS_CONTENT } from 'components/content';
// lib
import { useClientWidth, BREAKPOINT_MEDIUM, multiplyArray, useIsSafari } from 'lib';
// elements
import { ProjectPreview, BlobIcon, AnimatedCurveArrowIcon, TagList,
    StackedIcons } from 'elements';
// types
import type { ProjectListContent } from 'components/types';
import type { InViewProps, Size } from 'types';


/* TYPES */
export interface Content extends ProjectListContent {
    navText: string;
}

export interface Props {
    id?: string;
    className?: string;
    content?: Content;
    animate: boolean;
    inViewProps: InViewProps;
    imgSize?: Size;
}

const ProjectHighlights = ( {
    id='Projects',
    className='',
    content=PROJECT_HIGHLIGHTS_CONTENT,
    animate,
    inViewProps,
    imgSize=[ 400, 300 ],
}: Props ) => {
    /* CONTENT */
    const { items, navText } = content;

    /* HOOKS */
    const clientWidth = useClientWidth();
    const isSafari = useIsSafari();

    /* CLASSNAMES */
    const projectHighlightsClasses = classNames(
        'project-highlights',
        className,
    );

    return (
        <InView id={id} className={projectHighlightsClasses} as='section' {...inViewProps}>
            {
                items.map( ( { 
                    title, 
                    description, 
                    projectPreviewContent,
                    stackedIconsContent,
                    tagListContent,
                } ) => {
                    /* CONTENT */
                    const color = projectPreviewContent.color;

                    /* HOOKS */
                    const { ref, inView } = useInView({
                        threshold: 0.7,
                        triggerOnce: animate,
                    });

                    /* CLASSNAMES */
                    const projectClasses = classNames(
                        'project-wrapper',
                        animate && 'animate', 
                        inView && 'in-view',
                        color,
                    );

                    return (
                        <section ref={ref} key={title} className={projectClasses}>
                            <div className='container--wide'>
                                <div className='content-wrapper'>
                                    <span className='blob-wrapper'>
                                        <BlobIcon color={color} />
                                    </span>
                                    <div className='blob-text-wrapper'>
                                        <div className='top'>
                                            <TagList className='text--xxxs' content={tagListContent} />
                                            <StackedIcons content={stackedIconsContent} />
                                        </div>
                                        <h3 className='h1 project-heading'>{title}</h3>
                                        <p className='description text--lg'>{description}</p>
                                    </div>
                                </div>
                                {
                                    !isSafari ? (
                                        <AnimatedCurveArrowIcon animate={animate} color={color}
                                            triggerAnimation={inView} />
                                    ) : ''
                                }
                                <ProjectPreview content={projectPreviewContent} 
                                    size={clientWidth > BREAKPOINT_MEDIUM ? 
                                        imgSize : multiplyArray( imgSize, 0.85 ) as Size} 
                                    textChildren={
                                        <h4 className='title'>{navText}</h4>
                                    } />
                            </div>
                        </section>
                    );
                } )
            }
        </InView>
    );
}

export default ProjectHighlights;