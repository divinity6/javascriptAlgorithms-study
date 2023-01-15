console.log( '=========================== radixSort =============================' );

/** 해당 자릿수의 값을 반환 */
function getDigit( num , i ){
    return Math.floor( Math.abs( num ) / Math.pow( 10 , i ) ) % 10;
}

/** 해당 숫자의 자릿수를 반환 */
function digitCount( num ){
    if ( 0 === num ){
        return 1;
    }
    return Math.floor( Math.log10( Math.abs( num ) ) ) + 1;
}

/** 가장 큰 자릿수를 반환 */
function mostDigits( nums ){
    let maxDigits = 0;
    for ( let i = 0; i < nums.length; i++ ){
        maxDigits = Math.max( maxDigits , digitCount( nums[ i ] ) );
    }
    return maxDigits;
}


/**
 *  - radixSort
 *
 *  --> 기수 정렬
 *
 *  @param { number[] } arr - 정렬할 array
 *
 *  @return { number[] } - 정렬된 array
 */
/** mySolution */
function radixSort( arr ){

    let result = arr;

    /** 가장 큰 자릿수를 반환 */
    const maxDigits = mostDigits( arr );

    /** 가장 큰 자릿수만큼 반복 */
    for ( let k = 0; k < maxDigits; k += 1 ){

        /** 10 진법으로 담을 것이기 때문에 해당 갯수만큼 배열 생성 */
        const buckets = Array.from( { length : 10 } ).map( () => [] );

        /** 해당 배열 갯수만큼 반복하면서 bucket 에 담음 */
        for ( let i = 0; i < result.length; i += 1 ){

            const digit = getDigit( result[ i ] , k );

            /** buckets 에 담음 */
            buckets[ digit ].push( result[ i ] );

        }

        /** buckets 배열을 합침 */
        result = [].concat( ...buckets )
    }

    /** 정렬된 배열을 반환 */
    return result;
}

/**
 * - 내꺼로직이랑 동일한데...?
 *
 * --> 기존 배열객체를 바꾼다는거 빼고...ㅋㅋ
 */
/** goodSolution */
function radixSort( nums ){
    /** 최대 자릿수 구하기 */
    let maxDigitCount = mostDigits( nums );

    for ( let k = 0; k < maxDigitCount; k++ ){

        /** buckets 를 생성한다 */
        let digitBuckets = Array.from( { length : 10 } , () => [] );

        /** 해당 배열의 갯수만큼 반복한다 */
        for ( let i = 0; i < nums.length; i++ ){

            /** 해당 자릿수의 값을 알아낸다 */
            let digit = getDigit( nums[ i ] , k );

            /** 해당 자릿수값 번째에 해당 값을 넣는다 */
            digitBuckets[ digit ].push( nums[ i ] );
        }
        /** 새로운 배열로 병합하여 기존배열을 변경 */
        nums = [].concat( ...digitBuckets );

    }

    /** 정렬된 기존 배열을 반환함 */
    return nums;
}


console.log(radixSort([7 , 101 , 21 , 3 , 5 , 2 , 1200 , 170 ])); // [ 2 , 3 , 5 , 7 , 21 ,101 , 170 , 1200 ]
console.log(radixSort([4 , 7 ,  1 , 25 , 28 , 7 , 2 ])); // [ 1 , 2 , 4 , 7 , 7 , 25 , 28 ]
console.log(radixSort([50 , 50 , 4 , 250 , 27 , 19 , 4 , 2 , 1])); // [ 1 , 2 , 4 , 4 , 19 , 27 , 50 , 50 , 250 ]
console.log(radixSort([10 , 24 , 76 , 73 , 72 , 1 , 9 ])); // [ 1 , 9 , 10 , 24 , 72 , 73 , 76 ]