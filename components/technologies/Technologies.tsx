/**
 * Have 3 main icons cascade appear.
 * Have rest of icons opcity appear.
 */

// dependencies
import classNames from 'classnames';
// elements
import { TooltipIcon } from 'elements';
// constants
import { TECHNOLOGIES_CONTENT } from 'components/content';
// types
import type { TooltipIconContent } from 'elements/types';


/* TYPES */
export interface Content {
    mainIcons: TooltipIconContent[];
    subIcons: TooltipIconContent[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Technologies = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { mainIcons, subIcons } = content;

    /* CLASSNAMES */
    const technologiesClasses = classNames(
        'technologies',
        className,
    );

    return (
        <section className={technologiesClasses}>

        </section>
    )
}

export default Technologies;