console.log( '=========================== binarySearch =============================' );

/**
 * - binarySearch
 *
 * - 이진 검색으로 배열에서 해당 숫자의 index 를 반환
 *
 * - 아 헷갈렷네...
 *
 * --> 그니깐, middle 은 계산되는 값으로 놔두고 ,
 *     start, end 포인터를 이동시키면서 값을 구하는거네...ㅋㅋ
 */
/** mySolution */
function binarySearch( arr , val ){

    let start = 0;

    let end = arr.length;

    /**
     * - 최대 갯수는 또 maxLoop 만큼만 돌아야하니깐...
     *
     * --> 그이상 반복문을 도는건 의미가 없음...
     */
    let maxLoop = 0;

    while( start < end && maxLoop < end ){

        let middle = Math.floor( ( start + end ) / 2 );

        /** 만약 값이 같다면 해당 값을 반환 */
        if ( arr[ middle ] === val ){
            return middle;
        }
        /** 중간지점보다 값이 더 크다면 중간지점을 뒤로 옮긴다 */
        else if ( arr[ middle ] < val ){
            start = middle;
        }
        /** 중간지점보다 값이 더 작다면 중간지점을 앞으로 당긴다 */
        else if ( val < arr[ middle ] ){
            end = middle;
        }
        maxLoop += 1;
    }

    return -1;

}

/** goodSolution */
function binarySearch( arr , elem ) {

    var start = 0;

    var end = arr.length - 1;

    var middle = Math.floor( ( start + end ) / 2 );

    while( arr[ middle ] !== elem && start <= end ){
        if ( elem < arr[ middle ] ){
            /** 중간점은 체크했기 때문에 - 1 을 해주는 것! */
            end = middle - 1;
        }
        else {
            /** 중간점은 체크해줬기 때문에 + 1 을 하는 것! */
            start = middle + 1;
        }

        middle = Math.floor( ( start + end ) / 2 );

    }

    /** 값을 +1 해주는 것만으로도 종료조건을 간단하게 해결할 수 있다 */
    if ( arr[ middle ] === elem ){
        return middle;
    }
    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1


console.log( '=========================== naiveStringSearch =============================' );
/**
 * - naiveStringSearch
 *
 * - 나이브 문자열 검색
 *
 * --> 해당 문자열이 나오는 횟수를 반환하는 함수 작성
 */
/** mySolution */
function naiveSearch( longStr , targetStr ){

    let count = 0;

    /**
     * - 해당 문자열 반복
     *
     * --> 해당 target 의 길이 - 1 값까지만 반복하면 됨
     *
     */
    for ( let i = 0; i < ( longStr.length ) - ( targetStr.length - 1 ); i += 1 ){

        for ( let j = 0; j < targetStr.length; j += 1 ){

            const char = longStr[ i + j ];

            const targetChar = targetStr[ j ];

            /** 일치하는 문자열이 없다면 반복에서 벗어난다 */
            if ( char !== targetChar ){
                break;
            }

            /** 끝까지 돌았는데 전부 일치한다면 count 를 증가시킨다 */
            if ( j === ( targetStr.length - 1 ) ){
                count += 1;
            }
        }
    }
    return count;

}

/**
 * - 내가 생각한 정답이랑 똑같네...ㅋㅋ
 */
/** goodSolution */
function naiveSearch( long , short ){
    var count = 0;
    for ( var i = 0; i < long.length; i++ ){
        for ( var j = 0; j < short.length; j++ ){
            if ( short[ j ] !== long[ i + j ] ){
                break;
            }
            if ( j === short.length - 1 ){
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("wowomgzomg", "omg")); // 2
console.log(naiveSearch("lorie loled", "lol")); // 1
console.log(naiveSearch("harold said haha in hamburg", "ha")); // 4
console.log(naiveSearch("harold said haha in hamburg", "sad")); // 0

