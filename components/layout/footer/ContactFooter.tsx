// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const ContactFooter = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const contactFooterClasses = classNames(
        'contact-footer',
        className,
    );

    return (
        <footer className={contactFooterClasses}>

        </footer>
    )
}

export default ContactFooter;