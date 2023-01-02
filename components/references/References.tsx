// dependencies
import classNames from 'classnames';
// content
import { REFERENCES_CONTENT } from 'components/content';


/* TYPES */
export interface Content {

}

export interface Props {
    className?: string;
    content?: Content;
}

const References = ( {
    className='',
    content=REFERENCES_CONTENT,
}: Props ) => {
    /* CLASSNAMES */
    const referencesClasses = classNames(
        'references',
        className,
    );

    return (
        <section className={referencesClasses}>
        </section>
    );
}

export default References;