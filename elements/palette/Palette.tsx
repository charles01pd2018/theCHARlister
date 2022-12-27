// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { Colors } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    color?: Colors;
}

const Palette = ( {
    className='',
    color='blue',
}: Props ) => {
    /* CLASSNAMES */
    const paletteClasses = classNames(
        'palette',
        color,
        className,
    );

    return (
        <div className={paletteClasses}>
            <div className='tools-wrapper'>
                <div className='icon-wrapper'>
                    <SVG data='static/icons/contact.svg'
                        alt='' width={100} height={100} />
                </div>
            </div>
        </div>
    );
}

export default Palette;