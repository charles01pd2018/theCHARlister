/**
 * Have 3 main icons cascade appear.
 * Have rest of icons opcity appear.
 */

// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const Technologies = ( {
    className='',
}: Props ) => {
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