// dependencies
import classNames from 'classnames';
// constants
import { ABOUT_ME_CONTENT } from 'components/content';

/* TYPES */
export interface Content {

}

export interface Props {
    className?: string;
}

const AboutMe = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const aboutMeClasses = classNames(
        'about-me',
        className,
    );

    return (
        <section className={aboutMeClasses}>

        </section>
    )
}

export default AboutMe;