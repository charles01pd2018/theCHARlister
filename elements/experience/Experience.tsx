// dependencies
import classNames from 'classnames';
// lib
import { titleCase } from 'lib';
// elements
import { SVG, StackedIcons, HeadingLink } from 'elements';
// types
import type { IconData, LinkData } from 'types';
import type { StackedIconsContent } from 'elements/types';


/* TYPES */
export interface Content {
    logo: IconData;
    company: LinkData;
    role: string;
    dateRange: string;
    technologies: StackedIconsContent;
    bullets: string[];
}

export interface Props {
    id?: string;
    className?: string;
    content: Content;
}

const Experience = ( {
    id,
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { logo, 
        company,
        role,
        dateRange,
        technologies,
        bullets } = content;
    const { data, alt } = logo;

    /* CLASSNAMES */
    const experienceClasses = classNames(
        'experience',
        className,
    );

    return (
        <div id={id || titleCase( company.text )} className={experienceClasses}>
            <div className='title-wrapper'>
                <HeadingLink className='company' HeadingTag='h3'
                    content={company} />
                <SVG className='company-logo'
                    data={data} alt={alt}
                    width={100} height={100} />
            </div>
            <div className='role-info'>
                <p className='text--xs role'>{role}</p>
                <div className='right'>
                    <p className='text--xxxs date-range'>{dateRange}</p>
                    <StackedIcons content={technologies} />
                </div>
            </div>
            <ul className='bullets'>
                {
                    bullets.map( ( point, index ) => {
                        return (
                            <li className='point' key={index}
                                dangerouslySetInnerHTML={{ __html: point }} />
                        )
                    } )
                }
            </ul>
        </div>
    );
}

export default Experience;