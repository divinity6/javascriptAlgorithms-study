console.log( '=========================== bubbleSort =============================' );

/**
 * - bubbleSort
 *
 * - 버블 정렬 구현
 */
/** mySolution */
function bubbleSort( arr ){

    /** 크게 전체를 한번 순회 */
    for ( let i = arr.length; 0 < i; i -= 1 ){

        /** 순회할때마다, 누적된 마지막 값은 계산에서 제외 */
        for ( let j = 0; j < i - 1; j += 1 ){

            if ( arr[ j ] > arr[ j + 1 ] ){
                swap( arr , j , j + 1 );
            }
        }
    }

    return arr;

}

function swap( arr , idx1 , idx2 ){
    const temp = arr[ idx1 ];
    arr[ idx1 ] = arr[ idx2 ];
    arr[ idx2 ] = temp;
}

/** goodSolution */

console.log(bubbleSort([7 , 10 , 21 , 3 , 5 , 2 ]))
console.log(bubbleSort([7 , 6 , 7 , 4 , 10 , 1 ]))
