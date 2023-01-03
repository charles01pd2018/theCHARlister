
/* TYPES */
export interface Options {
    // prevents splitting whole words
    keepWords?: boolean;
}

/**
 * Splits a string evenly into n subparts
 */
export const splitStringEvenly = ( 
    val: string, 
    n: number,
    options: Options={},
) => {
    /* OPTIONS */
    const { keepWords=true } = options;

    const arr: string[] = [];
    const DIVIDE = Math.floor( val.length / n );

    let startInc = 0;
    let endInc = 0;
    for ( let i=0; i < n; i++ ) {
        const start = i * DIVIDE;
        const end = ( i + 1 ) * DIVIDE;

        if ( keepWords ) {
            let track = end;
            while ( typeof val[ track ] === 'string' && val[ track ] !== ' ' ) {
                endInc += 1;
                track += 1;
            }
        }
        
        const substring = val.substring( 
            start + startInc, 
            end + endInc,
        );

        if ( substring ) {
            arr.push( substring );
        }

        startInc = endInc;
        endInc = 0;
    }

    return arr;
}