
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
    const DIVIDE = val.length / n;

    let incVal = 0;
    for ( let i=0; i < n; i++ ) {
        let start = i * DIVIDE;
        let end = ( i + 1 ) * DIVIDE;

        if ( 
            keepWords && 
            val[ end ] && val[ end ] !== ' ' &&
            val[ end + 1 ] && val[ end + 1 ] !== ' '
        ) {
            // end += 1
            incVal += 1;
        }

        arr.push( val.substring( start + incVal, end + incVal ) );
    }

    return arr;
}