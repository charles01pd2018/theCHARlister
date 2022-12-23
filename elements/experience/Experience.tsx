// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { IconData } from 'types';


/* TYPES */
export interface Content {
    logo: IconData;
    company: string;
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
    const { logo, company, bullets } = content;
    const { data, alt } = logo;

    /* CLASSNAMES */
    const experienceClasses = classNames(
        'experience',
        className,
    );

    return (
        <div className={experienceClasses}>
            <SVG className='company-logo'
                data={data} alt={alt}
                width={50} height={50} />
            <h3 className='company'>{company}</h3>
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