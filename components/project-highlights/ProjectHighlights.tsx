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
    shouldAnimate?: boolean;
    setActiveIndex: SetState<number>;
}

const ProjectHighlights = ( {
    id='Projects',
    className='',
    content=PROJECT_HIGHLIGHTS_CONTENT,
    shouldAnimate,
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
                items.map( ( { title, description, projectId, ...rest }, index ) => {
                    /* CLASSNAMES */
                    const projectClasses = classNames(
                        'project-wrapper',
                        projectId,
                    );

                    return (
                        <div className={projectClasses} key={projectId}>
                            <div className='container--wide'>
                                <ProjectPreview size={[ 400, 300 ]} {...rest}>
                                    <h4>{navText}</h4>
                                </ProjectPreview>
                                {/* <div className='blob-wrapper'> */}
                                    <BlobIcon />
                                {/* </div> */}
                                <div className='text-wrapper'>
                                    <h3 className='project-heading'>{title}</h3>
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
        </section>
    )
}

export default ProjectHighlights;