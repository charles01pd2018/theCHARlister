// dependencies
import classNames from 'classnames';
// components
import DynamicHeader from './DynamicHeader';
// elements
import { IconLogoLink } from 'elements';
// lib
import { useScroll } from 'lib';


/* TYPES */
export interface Props {
    className?: string;
}

const OverviewHeader = ( {
    className='',
}: Props ) => {
    /* HOOKS */
    const scrollDirection = useScroll();

    /* CLASSNAMES */
    const OverviewHeaderClasses = classNames(
        'overview-header',
        `${scrollDirection === 'down' ? 'hide' : ''}`,
        className,
    );

    return (
        <DynamicHeader className={OverviewHeaderClasses}>
            <IconLogoLink />
        </DynamicHeader>
    )
}

export default OverviewHeader;