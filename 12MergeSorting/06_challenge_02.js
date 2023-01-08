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

console.log( '=========================== mergeSort =============================' );

/**
 * - mergeSorting
 *
 * - 병합 정렬 구현
 *
 * --> 와 시발 이렇게 쉬운걸 겁나 헤멧네...
 *
 * @todo 논리적 사고력을 좀 더 키우자
 *
 * @todo 내 문제점은 구체적으로 생각해야하는데 그부분이 부족함
 *
 * @todo 무조건 한 step 씩 볼 생각을 하지말고, 전체적인 그림을 봐야 논리가 전개되는듯
 *
 * @todo 그림을 한번 그려보면서 로직을 작성하자
 *
 * @todo 전체 코드흐름 큰 그림을 한번 그려두는게 많은 도움이 될듯...?
 *
 * --> 재귀는 끝 점부터 병합되니깐, 끝 실행부터 된다는 점을 기억해야함
 */
/** mySolution */
function mergeSort( arr ){

    /** 1개보다 작은 배열을 반환하면 해당 배열은 빈배열 or element 하나 */
    if ( 1 >= arr.length ){
        return arr;
    }

    /** 중간지점을 구해 반으로 자름 */
    const center = Math.floor( arr.length / 2 );

    /**
     * - 자른 부분을 계속해서 작은 배열로 나눔
     *
     * - 마지막에 1개의 엘리먼트가 남는다면 반대로 올라가면서 merge 함수를 타기시작함
     *
     * - 결국 합쳐지기 시작하며 마지막에는 병합된 arr 를 반환하게됨.
     * */
    return merge( mergeSort( arr.slice( 0 , center ) ) , mergeSort( arr.slice( center ) ) );

}

/**
 * - 결국 나의 솔루션과 같구나...ㅋㅋ
 *
 * --> 이 결론을 내기까지... 논리적 사고가 많이 죽었다는걸 느낀다 ㅋㅋㅋ
 */
/** goodSolution */
function mergeSort( arr ){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    /** 이렇게 변수에 할당해둬야 디버깅찍기 편하네 */
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge( left , right );
}


console.log(mergeSort([7 , 10 , 21 , 3 , 5 , 2 , 12 , 17 ])); // [ 2 , 3 , 5 , 7 , 10 ,12 , 17 , 21 ]
console.log(mergeSort([4 , 7 ,  1 , 25 , 28 , 7 , 2 ])); // [ 1 , 2 , 4 , 7 , 7 , 25 , 28 ]
console.log(mergeSort([50 , 50 , 4 , 250 , 27 , 19 , 4 , 2 , 1])); // [ 1 , 2 , 4 , 4 , 19 , 27 , 50 , 50 , 250 ]
console.log(mergeSort([10 , 24 , 76 , 73 , 72 , 1 , 9 ])); // [ 1 , 9 , 10 , 24 , 72 , 73 , 76 ]