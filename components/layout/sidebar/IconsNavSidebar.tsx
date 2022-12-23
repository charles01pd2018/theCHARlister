// dependencies
import classNames from 'classnames';
// elements
import { LinkIconButton } from 'elements';
// constants
import { ICONS_NAV_CONTENT } from 'components/content';
// types
import type { IconsNavProps } from 'components/types';


const IconsNavSidebar = ( {
    className='',
    content=ICONS_NAV_CONTENT,
    activeItemIndex,
    iconSize=[ 25, 25 ],
}: IconsNavProps ) => {
    /* CONTENT */
    const { items } = content;

    /* CLASSNAMES */
    const iconsNavSidebarClasses = classNames(
        'icons-nav-sidebar',
        className,
    );

    return (
        <aside className={iconsNavSidebarClasses}>
            <ul className='nav-links-wrapper'>
                {
                    items.map( ( content, index ) => {
                        return (
                            <li className='link-wrapper'>
                                <LinkIconButton isActive={activeItemIndex === index} 
                                    content={content} iconSize={iconSize}
                                    type='fill' />
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default IconsNavSidebar;