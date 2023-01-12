console.log( '=========================== pivot =============================' );

/**
 *  - pivot 헬퍼 구현
 *
 *  --> 해당 pivot 헬퍼는 실제 배열을 변경한다는 점을 유념해라
 *
 * @param { number[] } arr - 정렬할 해당 arr
 * @param { number } startIndex - 시작 index
 * @param { number } endIndex - 끝 index
 *
 * @return { number } - pivotIndex
 */
/** mySolution */
function pivot( arr , startIndex = 0 , endIndex = ( arr.length - 1 ) ){

    /** pivot index */
    let pivotIndex = startIndex;

    /** 배열전체를 반복 순회 */
    for ( let i = ( startIndex + 1 ); i <= endIndex; i += 1 ){

        /** 만약 현재 el 보다 시작 el 이 더 클 경우 */
        if ( arr[ i ] < arr[ startIndex ] ){
            pivotIndex += 1;

            /** pivotIndex 요소와 해당 인덱스( i ) 요소 의 위치를 변경  */
            // SWAP
            const temp = arr[ i ];
            arr[ i ] = arr[ pivotIndex ];
            arr[ pivotIndex ] = temp;
        }

    }
    /** pivotIndex 요소와 기준 인덱스( startIndex )요소의 위치를 변경 */
    // SWAP
    const temp = arr[ pivotIndex ];
    arr[ pivotIndex ] = arr[ startIndex ];
    arr[ startIndex ] = temp;

    /** 해당 index 를 반환 */
    return pivotIndex;
}

/**
 * - end 인덱스를 사용하지 않네...
 *
 * --> 이것보단 로직상 내께 더 좋아보이는데...ㅋㅋㅋ
 */
/** goodSolution */
function pivot( arr , start = 0 , end = arr.length + 1 ){
    /** swap 함수를 복사해서 사용 : 코드에서 한번 이상 사용하기 때문 */
    function swap( array , i , j ){
        var temp = array[ i ];
        array[ i ] = array[ j ];
        array[ j ] = temp;
    }

    /** 시작위치의 pivot 을 하나 담는다 */
    var pivot = arr[ start ];
    /** swapIdx 는 pivot 을 마지막에 어디로 옮길지 추적한다 */
    var swapIdx = start;

    /** 첫번째 항목을 비교할 필요는 없으므로 첫 번째 항목은 제외하고 반복한다 */
    for ( var i = start + 1; i < arr.length; i++ ){
        /** 해당 pivot 이 살펴보려는 다음 요소인 arr[ i ]와 비교하여 더 클 경우 */
        if ( pivot > arr[ i ] ){
            swapIdx++;
            swap( arr , swapIdx , i );
        }
    }

    /** 시작 index 와 swapIdx 를 변경한다 */
    swap( arr , start , swapIdx );

    /** 마지막에는 swapIdx 를 반환한다 */
    return swapIdx;
}

console.log(pivot( [ 4 , 8 , 2 , 1 , 5 , 7 , 6 , 3 ] )) // 3
console.log(pivot([7 , 3 , 21 , 10 , 5 , 2 , 12 , 17 ])); // 3
console.log(pivot([4 , 7 ,  1 , 25 , 28 , 7 , 2 ])); // 2
console.log(pivot([50 , 50 , 4 , 250 , 27 , 19 , 4 , 2 , 1])); // 6
console.log(pivot([10 , 24 , 76 , 73 , 72 , 1 , 9 ])); // 2