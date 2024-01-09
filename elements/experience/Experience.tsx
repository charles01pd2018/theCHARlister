// dependencies
import classNames from 'classnames';
import Image from 'next/image';
// lib
import { titleCase } from 'lib';
// elements
import { StackedIcons, HeadingLink, ArticleText } from 'elements';
// types
import type { IconData, LinkData } from 'types';
import type { StackedIconsContent } from 'elements/types';


/* TYPES */
interface Role {
    title: string;
    dateRange: string;
    technologies?: StackedIconsContent;
    bullets: string[];
}

export interface Content {
    logo: IconData;
    company: LinkData;
    roles: Role[];
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
        roles } = content;
    const { data, alt, width, height } = logo;

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
                <Image className='company-logo'
                    src={data} alt={alt}
                    width={width || 100} height={height || 100} />
            </div>
            {
                roles.map(({
                    title,
                    dateRange,
                    technologies,
                    bullets,
                }) => (
                    <div key={logo.alt.split('')[0]} className='role-wrapper'>
                        <div className='role-info'>
                            <p className='text--xs role'>{title}</p>
                            <div className='right'>
                                <p className='text--xxxs date-range'>{dateRange}</p>
                                {
                                    technologies ? (
                                        <StackedIcons content={technologies} />
                                    ) : ''
                                }
                            </div>
                        </div>
                        <ul className='bullets'>
                            {
                                bullets.map( ( point, index ) => {
                                    return (
                                        <ArticleText className='point text--norm' key={index}
                                            WrapperTag='li' text={point} />
                                    )
                                } )
                            }
                        </ul>
                    </div>
                ))
            }
          
        </div>
    );
}

export default Experience;