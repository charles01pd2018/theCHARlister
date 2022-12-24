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
    content=TECHNOLOGIES_CONTENT,
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
            <ul className='main-icons-wrapper'>
                {
                    mainIcons.map( ( content ) => {
                        return (
                            <li className='icon-wrapper' key={content.icon.alt}>
                                <TooltipIcon content={content} />
                            </li>
                        )
                    })
                }
            </ul>
            <ul className='sub-icons-wrapper'>
                {
                    subIcons.map( ( content ) => {
                        return (
                            <li className='icon-wrapper' key={content.icon.alt}>
                                <TooltipIcon content={content} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Technologies;