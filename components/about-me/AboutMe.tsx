// dependencies
import classNames from 'classnames';


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