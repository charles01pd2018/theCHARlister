// dependencies
import classNames from 'classnames';


export interface Content {
    path: string[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Breadcrumbs = ( {
    className='',
    content
}: Props ) => {
    /* CONTENT */
    const { path } = content;
    
    /* CLASSNAMES */
    const breadcrumbsClasses = classNames(
        'breadcrumbs',
        className,
    );

    return (
        <div className={breadcrumbsClasses}>

        </div>
    )
}

export default Breadcrumbs;