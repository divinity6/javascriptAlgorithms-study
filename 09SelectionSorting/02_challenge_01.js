console.log( '=========================== selectionSort =============================' );

/**
 * - selectionSort
 *
 * - 선택 정렬 구현
 *
 * --> 내부에서 조건문으로 한번만 확인해주면 되네 ㅋㅋㅋ
 *
 * --> 아 이거 선택이 아니라 지내두개를 검사하는 거 아닌가 ㅋㅋㅋ
 *
 * --> 이거 정말 멍청한로직이구려...
 *
 * @todo selection 정렬로 바꿔야합니다( stupidSolution )
 */
/** mySolution */
function selectionSort( arr ){

    if ( 0 === arr.length || 1 === arr.length ){
        return arr;
    }

    for ( let i = 0; i < arr.length - 1; i += 1 ){
        /** index 값을 저장해둬야 내부 반복이 끝나고 바꿔치기할 수 있음 */
        let smallIndex = i;
        /** j 끼리 비교하는게 아니라, i 와 j 를 비교하는게 핵심이네 */
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
function selectionSort( arr ){

    for ( var i = 0; i < arr.length; i++ ){
        var lowest = i;
        /** 이렇게 해야지만, i 와 j 를 비교할 수 있겠고만...ㅋㅋ */
        for ( var j = ( i + 1 ); j < arr.length; j++ ){
            /** i 와 비교하는게 아니라 가장 작은 값과 비교한다 */
            if ( arr[ j ] < arr[ lowest ] ){
                lowest = j;
            }
        }
        // SWAP
        var temp = arr[ i ];
        arr[ i ] = arr[ lowest ];
        arr[ lowest ] = temp;

    }

    return arr;
}

console.log(selectionSort([37 , 45 , 29 , 8 ]));
console.log(selectionSort([7 , 10 , 21 , 3 , 5 , 2 ]));
console.log(selectionSort([7 , 6 , 7 , 4 , 10 , 1 ]));

console.log( '=========================== selectionSortOptimization =============================' );

function selectionSortOptimization( arr ){

    for ( var i = 0; i < arr.length; i++ ){

        var lowerst = i;
        for ( var j = i + 1; j < arr.length; j++ ){
            /** 가장 작은 값과 비교한다 */
            if ( arr[ j ] < arr[ lowerst ] ){
                lowerst = j;
            }
        }

        /** i 와 lowerst 가 같지 않을 경우에만 실행 */
        //SWAP
        if ( i !== lowerst ){
            var temp = arr[ i ];
            arr[ i ] = arr[ lowerst ];
            arr[ lowerst ] = temp;
        }
    }

}