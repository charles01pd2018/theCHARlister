// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const IconsNavFooter = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const iconsNavFooterClasses = classNames(
        'icons-nav-footer',
        className,
    );

    return (
        <footer className={iconsNavFooterClasses}>

        </footer>
    )
}

export default IconsNavFooter;