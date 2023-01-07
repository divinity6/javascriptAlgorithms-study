console.log( '=========================== insertionSorting =============================' );

/**
 * - insertionSorting
 *
 * - 삽입 정렬 구현
 *
 * --> 이거는 시간복잡도가 엄청나겠는데...?
 *
 * --> 아, 끝나고 삽입하라는게 아니라, 그때 그때 비교하며 삽입해도되는구만...
 *
 * --> 질문의 의도를 잘못이해함...ㅋㅋ
 *
 * ----> 그리고, 이렇게 정렬하게되면 무적권 시간복잡도는 O(n2) 가 될 수 밖에 없지...
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

/**
 * - 대부분의 루프는 현재 0 부터 진행했지만, 이번 루프는 반대로 진행한다
 *
 * - 하려고 하는 것은, 루프가 시작할때 어떤 값을 취해, 루프가 멈출때,
 *   앞으로 이동하며 어떤 시점에 멈추는 것
 *
 * @todo 이 알고리즘을 정확히 쓸 줄 알아야함
 */
/** goodSolution */
function insertionSorting( arr ){
    /** 0 부터 시작해도 되지만 쓸데없는 반복을 하게 된다 */
    for ( var i = 1; i < arr.length; i++ ){

        /** 해당 i 의 값을 currentVal 에 저장 */
        var currentVal = arr[ i ];
        /**
         * - 처음이 아닌,배열의 끝이나 중간부터 시작한다
         * --> 또한, 거꾸로돌기 때문에 arr[ j ] 가 currentVal 보다 클때만 동작
         *
         * ---> 이러면 시간복잡도가 많이 감소하겠네 ㅋㅋ
         */
        for ( var j = ( i - 1 ); j >= 0 && arr[ j ] > currentVal; j-- ){
            /** j 다음 값을 바로 j 에 설정 - 곧바로 swap 해버리네 ㅋㅋㅋ */
            arr[ j + 1 ] = arr[ j ];
        }

        /** 루프가 끝난 후에 currentVal 을 삽입 */
        arr[ j + 1 ] = currentVal;
    }

    return arr;
}


console.log(insertionSorting([37 , 45 , 29 , 8 ]));
console.log(insertionSorting([7 , 10 , 21 , 3 , 5 , 2 ]));
// console.log(insertionSorting([7 , 6 , 7 , 4 , 10 , 1 ]));