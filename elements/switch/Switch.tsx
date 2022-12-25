/**
 * Doggo wants a treat: https://codepen.io/oliviale/pen/xxboXzo
 */
// dependencies
import classNames from 'classnames';
import { HTMLAttributes } from 'react';


export interface Content {
    label: string;
}

export interface Props extends HTMLAttributes<HTMLInputElement> {
    id: string;
    className?: string;
    content: Content;
    checked: boolean;
    name: string;
    onChange: () => void;
    type: 'doggo';
    hideLabel?: boolean;
}

const Switch = ( {
    id,
    className='',
    content,
    checked,
    name,
    onChange,
    type,
    hideLabel,
    ...rest
}: Props ) => {
    /* CONTENT */
    const { label } = content;

    /* CLASSNAMES */
    const switchClasses = classNames(
        'switch-wrapper',
        type,
        className,
    );

    const labelClasses = classNames(
        'label',
        hideLabel && 'hide-label',
    );

    return (
        <div className={switchClasses}>
            <label className={labelClasses} htmlFor={id}>
                {label}
            </label>
            <input id={id} className='switch' type='checkbox'
                checked={checked} name={name} onChange={onChange} {...rest} />  
            {
                type === 'doggo' ? (
                    <div className={`dog-wrapper${checked ? ' checked' : ''}`} 
                        aria-hidden={true}>
                        <div className='dog'>
                            <div className='ear' />
                            <div className='ear right' />
                            <div className='face'>
                            <div className='eyes' />
                            <div className='mouth' />
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    );
}

export default Switch;