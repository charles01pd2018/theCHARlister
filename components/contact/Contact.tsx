// dependencies
import classNames from 'classnames';
// content
import { CONTACT_CONTENT } from 'components/content';


/* TYPES */
export interface Content {

}

export interface Props {
    className?: string;
    content?: Content;
}

const Contact = ( {
    className='',
    content,
}: Props ) => {
    /* CLASSNAMES */
    const contactClasses = classNames(
        'contact',
        className,
    );

    return (
        <section className={contactClasses}>

        </section>
    );
}

export default Contact;