// dependencies
import classNames from 'classnames';
import { useRef } from 'react';
// elements
import { IconLink, Tooltip } from 'elements';
// content
import { ICONS_NAV_CONTENT } from 'components/content';
// types
import type { IconsNavProps } from 'components/types';


const IconsNavSidebar = ( {
    className='',
    content=ICONS_NAV_CONTENT,
    activeIndex,
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
                        /* HOOKS */
                        const ref = useRef<HTMLAnchorElement>( null );

                        /* CONTENT */
                        const { tooltip, ...restContent } = content;
                        const key = `sidebar:${content.href}`;
                        const tooltipId = `${key}-tooltip`;

                        return (
                            <li className='link-wrapper' key={key}>
                                <IconLink ref={ref} isActive={activeIndex === index} 
                                    content={restContent} iconSize={iconSize}
                                    type='fill' aria-labelledby={tooltipId} />
                                <Tooltip id={tooltipId} className='text--xxxs'
                                    ref={ref} position='left' color={restContent.color}>
                                    {tooltip}
                                </Tooltip>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default IconsNavSidebar;