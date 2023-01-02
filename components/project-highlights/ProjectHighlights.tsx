/**
 * https://codepen.io/oraclesnarky/pen/GYMmxb
 */
// dependencies
import classNames from 'classnames';
// content
import { PROJECT_HIGHLIGHTS_CONTENT } from 'components/content';
// elements
import { ProjectPreview, BlobIcon, AnimatedCurveArrowIcon } from 'elements';
// types
import type { ProjectListContent } from 'components/types';
import type { SetState } from 'types';


/* TYPES */
export interface Content extends ProjectListContent {
    navText: string;
}

export interface Props {
    id?: string;
    className?: string;
    content?: Content;
    animate?: boolean;
    setActiveIndex: SetState<number>;
}

const ProjectHighlights = ( {
    id='Projects',
    className='',
    content=PROJECT_HIGHLIGHTS_CONTENT,
    animate,
    setActiveIndex,
}: Props ) => {
    /* CONTENT */
    const { items, navText } = content;

    /* CLASSNAMES */
    const projectHighlightsClasses = classNames(
        'project-highlights',
        className,
    );

    return (
        <section id={id} className={projectHighlightsClasses}>
            {
                items.map( ( { title, description, projectPreviewContent } ) => {
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
                                    <h3 className='h1 project-heading'>{title}</h3>
                                    <p className='description text--lg'>{description}</p>
                                </div>
                                <AnimatedCurveArrowIcon animate={animate}
                                    direction='bl-tr' color={color} />
                                <ProjectPreview size={[ 400, 300 ]} content={projectPreviewContent}>
                                    <h4>{navText}</h4>
                                </ProjectPreview>
                            </div>
                        </div>
                    );
                } )
            }
        </section>
    );
}

export default ProjectHighlights;