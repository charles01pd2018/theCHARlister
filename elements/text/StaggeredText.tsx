// dependencies
import { ReactNode, Children, isValidElement, 
    Fragment, cloneElement } from 'react';
// lib
import { splitStringEvenly } from 'lib';


/* TYPES */
export interface Props {
    children: ReactNode;
    // number of times a string should be divided to be cascaded
    divideBy?: number;
}

const StaggeredText = ( {
    children,
    divideBy=8,
}: Props ) => {
    /* FUNCTIONS */
    const renderChildren = ( children: ReactNode ): ReactNode => {
        return Children.map( children, ( child ) => {
            if ( isValidElement( child ) ) {
                if ( typeof child.type === 'symbol' ) {
                    return renderChildren( child.props.children );
                }

                if ( typeof child.props.children !== 'string' ) {
                    return '';
                }
    
                const stringChild: string = child.props.children;
                const stringToMap = stringChild.length < divideBy ? stringChild.split( '' ) :
                                    splitStringEvenly( stringChild, divideBy );
    
                return cloneElement( child, {
                    // @ts-ignore
                    children: stringToMap.map( ( char, index ) => (
                        <Fragment key={index}>
                            {char.startsWith(' ') ? ' ' : ''}
                            <span className='staggered-char' style={{ 
                                transitionDelay: `${0.06 * (index + 1)}s`
                            }}>
                                {char}
                            </span>
                            {char.endsWith(' ') ? ' ' : ''}
                        </Fragment>
                    ) ),
                } );
            }

            return '';
        } );
    }

    return (
        <>
        {renderChildren( children )}
        </>
    )
    
}

export default StaggeredText;