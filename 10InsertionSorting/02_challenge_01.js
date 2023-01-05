console.log( '=========================== insertionSorting =============================' );

/**
 * - insertionSorting
 *
 * - 삽입 정렬 구현
 *
 * --> 이거는 시간복잡도가 엄청나겠는데...?
 *
 */
/** mySolution */
function insertionSorting( arr ){

    /** 전체 배열 순회 */
    for ( let i = 0; i < arr.length; i += 1 ){
        /** 제일 작은 값 */
        let k = i;
        /** j 는 i 내부에서 반복 */
        for ( let j = ( i - 1 ); -1 < j; j -= 1 ){
            /** 이전 값보다 작다면 무적권 이전 값 위치로  */
            if ( arr[ i ] < arr[ j ] ){
                k = j;
            }
            /** 이전 값보다 크고 다음값보다 작다면 그사이 위치로 */
            else if ( arr[ j ] < arr[ i ] && arr[ i ] < arr[ j + 1 ] ){
                k = j + 1;
            }
        }
        // SWAP
        arr.splice( k , 0 , arr[ i ] );
        arr.splice( i + 1 , 1 );
    }

    return arr;
}

/** goodSolution */

console.log(insertionSorting([37 , 45 , 29 , 8 ]));
console.log(insertionSorting([7 , 10 , 21 , 3 , 5 , 2 ]));
// console.log(insertionSorting([7 , 6 , 7 , 4 , 10 , 1 ]));