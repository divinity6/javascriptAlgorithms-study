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

        /** 순회할때마다, 누적된 마지막 값은 계산에서 제외된 만큼 반복함 */
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

/**
 * - 최적화되지 않는 코드들은 매번 이미 정렬된 값들까지 비교와 교환을 실시하게 된다
 *
 * --> 필요없는 비교와 연산과정이 들어가게 된다
 */
/** stupidSolution */
function bubbleSort( arr ){

    for ( var i = 0; i < arr.length; i++ ){
        for ( var j = 0; j < arr.length; j++ ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                // SWAP!
                var temp = arr[ j ];
                arr[ j ] = arr[ j + 1];
                arr[ j + 1] = temp;
            }
        }
    }

    return arr;
}

/**
 * - 이번엔 내가 예측한거랑 해법이랑 정확히 일치하네 ㅋㅋ답
 *
 * - 매번 비교할때마다 루프가 줄어든다
 */
/** goodSolution */
function bubbleSort( arr ){

    for ( var i = arr.length; i > 0; i-- ){
        for ( var j = 0; j < i - 1; j++ ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                // SWAP!
                var temp = arr[ j ];
                arr[ j ] = arr[ j + 1];
                arr[ j + 1] = temp;
            }
        }
    }

    return arr;
}


console.log(bubbleSort([37 , 45 , 29 , 8 ]));
console.log(bubbleSort([7 , 10 , 21 , 3 , 5 , 2 ]));
console.log(bubbleSort([7 , 6 , 7 , 4 , 10 , 1 ]));

