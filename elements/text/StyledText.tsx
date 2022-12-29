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

const StyledText = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const styledTextClasses = classNames(
        'styled-text',
        className,
    );

    return (
        <p className={styledTextClasses}
            dangerouslySetInnerHTML={{ __html: text }} />
    );
}

export default StyledText;