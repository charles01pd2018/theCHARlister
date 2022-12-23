// dependencies
import classNames from 'classnames';
// elements
import { Experience } from 'elements/experience';
// constants
import { EXPERIENCE_LIST_CONTENT } from 'components/content';
// types
import type { ExperienceContent } from 'elements/types';


/* TYPES */
export interface Content {
    items: ExperienceContent[];
}

export interface Props {
    className?: string;
    content: Content;
}

const ExperienceList = ( {
    className='',
    content=EXPERIENCE_LIST_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { items } = content;

    /* CLASSNAMES */
    const experienceListClasses = classNames(
        'experience-list',
        className,
    );

    return (
        <section className={experienceListClasses}>
            {
                items.map( ( experienceContent ) => {
                    return (
                        <Experience key={experienceContent.company}
                            content={experienceContent} />
                    )
                } )
            }
        </section>
    );
}

export default ExperienceList;