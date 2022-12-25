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
interface Item extends TooltipIconContent {
    type: string;
    tooltip: string;
}

export interface Content {
    mainIcons: Item[];
    subIcons: Item[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Technologies = ( {
    className='',
    content=TECHNOLOGIES_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { mainIcons, subIcons } = content;

    /* CLASSNAMES */
    const technologiesClasses = classNames(
        'technologies',
        className,
    );

    const Icon = ( { content }: { content: Item } ) => {
        const { type, tooltip, ...restContent } = content;

        return (
            <li className='icon-wrapper' key={type}>
                <TooltipIcon id={type} content={restContent}>
                    {tooltip}
                </TooltipIcon>
            </li>
        );
    }

    return (
        <section className={technologiesClasses}>
            <ul className='main-icons-wrapper'>
                {
                    mainIcons.map( ( content ) => {
                        return (
                            <Icon content={content} />
                        );
                    } )
                }
            </ul>
            <ul className='sub-icons-wrapper'>
                {
                    subIcons.map( ( content ) => {
                        return (
                            <Icon content={content} />
                        );
                    } )
                }
            </ul>
        </section>
    )
}

export default Technologies;