console.log( '=========================== selectionSort =============================' );

/**
 * - selectionSort
 *
 * - 선택 정렬 구현
 *
 * --> 내부에서 조건문으로 한번만 확인해주면 되네 ㅋㅋㅋ
 */
/** mySolution */
function selectionSort( arr ){

    if ( 0 === arr.length || 1 === arr.length ){
        return arr;
    }

    for ( let i = 0; i < arr.length - 1; i += 1 ){
        let smallIndex = i;
        for ( let j = i; j < arr.length - 1; j += 1 ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                smallIndex = ( j + 1 );
            }
        }
        // SWAP
        let temp = arr[ i ];
        arr[ i ] = arr[ smallIndex ];
        arr[ smallIndex ] = temp;

    }

    return arr;
}

/** goodSolution */


console.log(selectionSort([37 , 45 , 29 , 8 ]));
console.log(selectionSort([7 , 10 , 21 , 3 , 5 , 2 ]));
console.log(selectionSort([7 , 6 , 7 , 4 , 10 , 1 ]));


