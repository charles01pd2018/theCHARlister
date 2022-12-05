// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const IconLogo = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const iconLogoClasses = classNames(
        'icon-logo',
        className,
    );

    return (
        <div className={iconLogoClasses}>

        </div>
    );
}

export default IconLogo;