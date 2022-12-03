// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const IconsNavSidebar = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const iconsNavSidebarClasses = classNames(
        'icons-nav-sidebar',
        className,
    );

    return (
        <aside className={iconsNavSidebarClasses}>

        </aside>
    )
}

export default IconsNavSidebar;