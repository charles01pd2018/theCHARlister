// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { IconData, LinkData } from 'types';


/* TYPES */
export interface Content {
    logo: IconData;
    company: string;
    role: string;
    link: LinkData;
    bullets: string[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Experience = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { logo, company, role, bullets } = content;
    const { data, alt } = logo;

    /* CLASSNAMES */
    const experienceClasses = classNames(
        'experience',
        className,
    );

    return (
        <div className={experienceClasses}>
            <div className='title-wrapper'>
                <h3 className='company'>{company}</h3>
                <SVG className='company-logo'
                    data={data} alt={alt}
                    width={100} height={100} />
            </div>
            <p className='text--lg'>{role}</p>
            <ul className='bullets'>
                {
                    bullets.map(( point ) => {
                        return (
                            <li className='point'>
                                {point}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Experience;