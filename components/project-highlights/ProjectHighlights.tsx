/**
 * https://codepen.io/oraclesnarky/pen/GYMmxb
 */
// dependencies
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
// content
import { PROJECT_HIGHLIGHTS_CONTENT } from 'components/content';
// elements
import { ProjectPreview, BlobIcon, AnimatedCurveArrowIcon, TagList,
    StackedIcons } from 'elements';
// types
import type { ProjectListContent } from 'components/types';
import type { InViewProps } from 'types';


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
}

const ProjectHighlights = ( {
    id='Projects',
    className='',
    content=PROJECT_HIGHLIGHTS_CONTENT,
    animate,
    inViewProps,
}: Props ) => {
    /* CONTENT */
    const { items, navText } = content;

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

                    /* CLASSNAMES */
                    const projectClasses = classNames(
                        'project-wrapper',
                        color,
                    );

                    return (
                        <div className={projectClasses} key={title}>
                            <div className='container--wide'>
                                <div className='blob-wrapper'>
                                    <BlobIcon color={color} />
                                </div>
                                <div className='text-wrapper'>
                                    <TagList className='text--xxxs' content={tagListContent} />
                                    <StackedIcons content={stackedIconsContent} />
                                    <h3 className='h1 project-heading'>{title}</h3>
                                    <p className='description text--lg'>{description}</p>
                                </div>
                                <AnimatedCurveArrowIcon animate={animate}
                                    direction='bl-tr' color={color} />
                                <ProjectPreview size={[ 400, 300 ]} 
                                    content={projectPreviewContent} textChildren={
                                        <h4>{navText}</h4>
                                    } />
                            </div>
                        </div>
                    );
                } )
            }
        </InView>
    );
}

export default ProjectHighlights;