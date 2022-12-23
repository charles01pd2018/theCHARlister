// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Content {
    text: string;
}

export interface Props {
    className?: string;
    content: Content;
}

const Text = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const textClasses = classNames(
        'text',
        className,
    );

    return (
        <p className={textClasses}
            dangerouslySetInnerHTML={{ __html: text }} />
    );
}

export default Text;