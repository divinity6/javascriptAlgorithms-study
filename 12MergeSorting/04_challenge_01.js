console.log( '=========================== merge =============================' );

/**
 *  - array 병합 구현
 *
 * @param { number[] } arr1
 * @param { number[] } arr2
 * @return { number[] }
 */
function merge( arr1 , arr2 ){

    let result = [];

    let i = 0;
    let j = 0;

    /** i 나 j 가 끝에 도달할 때까지 반복한다 */
    while( i < arr1.length && j < arr2.length ){

        /** i 와 j 의 값을 비교하여, 해당 값중 더 작은 값을 넣는다 */
        if ( arr1[ i ] < arr2[ j ] ){
            result.push( arr1[ i ] );
            /** 더 작은 값을 넣고 해당 포인터를 1 증가시킨다 */
            i += 1;
        }
        else {
            result.push( arr2[ j ] );
            /** 더 작은 값을 넣고 해당 포인터를 1 증가시킨다 */
            j += 1;
        }

    }

    /**
     *
     * - 남은 배열을 찾는다
     *
     * - 만약, i 의 length 값과 해당 첫 번째 배열의 길이가 같다면 j 가 남은 배열이다
     */
    let restArr;
    let sliceI;
    if ( i === arr1.length ){
        restArr = arr2;
        sliceI = j;
    }
    else {
        restArr = arr1;
        sliceI = i;

    }
    /** 남은 배열의 값들을 모두 넣는다 */
    result = result.concat( restArr.slice( sliceI ) );

    return result;
}

/**
 * - 이거는 내가짠 코드가 더 나은거같은데...?ㅋㅋ
 */
/** goodSolution */
function merge( arr1 , arr2 ){
    let results = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length ){
        if ( arr2[ j ] > arr1[ i ] ){
            results.push( arr1[ i ] );
            i++;
        }
        else {
            results.push( arr2[ j ] );
            j++;
        }
    }
    /** 여기까진 내가 생각한 로직과 똑같네 */

    /** 이 아래는 내장함수가 아닌 직접 남은 값보다 클 경우를 계산하네 */
    while( i < arr1.length ){
        results.push( arr1[ i ] );
        i++
    }

    while( j < arr2.length ){
        results.push( arr2[ j ] );
        j++
    }

    return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [ 1 , 2 , 10 , 14 , 50 , 99 , 100 ]
console.log(merge([1, 10, 50 , 200 , 500], [2, 14, 99, 100])); // [ 1 , 2 , 10 , 14 , 50 , 99 , 100 ]
console.log(merge([2, 10, 50 , 100], [2, 14, 99, 100])); // [ 1 , 2 , 10 , 14 , 50 , 99 , 100 ]
console.log(merge([], [1 , 3])); // [ 1 , 3 ]
