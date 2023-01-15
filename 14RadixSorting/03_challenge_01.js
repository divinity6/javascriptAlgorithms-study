console.log( '=========================== getDigit =============================' );

/**
 *  - getDigit
 *
 *  --> 해당 num 의 자릿수의 값을 알아내는 메서드
 *
 *  @param { number } num - 해당 숫자
 *  @param { number } place - 알아낼 자릿수
 */
/** mySolution */
function getDigit( num , place ){

    const str = String( num );

    const lastIdx = str.length - 1;

    const idx = ( lastIdx - place );

    return Number( str.charAt( idx ) );
}

/**
 * - 진수를 이용한 방법
 */
/** goodSolution */
function getDigit( num , i ){
    /**
     *  - 해당 숫자의 절대 값을 구하고,
     *    제곱값으로 나눈다
     *
     *  - 그 후, 나머지를 반환한다
     *
     *  --> Math.abs 으로 절댓값으로 만드는 건 num 이 음수로 올 수도 있기 때문이네...ㅋㅋ
     *
     *  --> 아 , 그니깐, 해당 숫자의 절대 값을 해당 i( 자릿수 ) * 10 으로 나누면,
     *      해당 숫자 이하애는 소숫점으로 바뀔 것이고,
     *
     *  --> 개를 10 으로 나머지를 구하면 맨 마지막애가 나올 건데, 그중에 소숫점은 버림하겠다는 뜻이구나...
     *
     *  예 )
     *       num : 12345 , i : 1
     *
     *       Math.abs( num ) / Math.pow( 10 , i ) : 1234.5
     *
     *       % 10 : 4.5
     *
     *       Math.floor : 4
     */
    return Math.floor( Math.abs( num ) / Math.pow( 10 , i ) ) % 10;
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0

console.log( '=========================== digitCount =============================' );

/**
 *  - digitCount
 *
 *  --> 해당 num 의 전체 자릿수를 알아내는 함수
 *
 *  @param { number } num - 해당 숫자
 *  @return { number } digit - 자릿수
 */
/** mySolution */
function digitCount( num ){
    return String( num ).length;
}

/**
 * - 진수를 이용한 방법
 */
/** goodSolution */
function digitCount( num ){
    /** 0 의 log10 은 -Infinity 이므로, 1로 강제반환 */
    if ( 0 === num ){
        return 1;
    }
    /**
     * - log10 은 해당 숫자의 밑이 10 인 로그이다
     *   ( 즉 10 의 어떤 거듭제곱으로 이 수가 되는지를 묻는 것 )
     *
     * 예 )
     *       num : 314
     *
     *      Math.log10 을 하게되면 100 의 자리이므로 2.4... 가나온다
     *
     *      Math.floor 로 소숫점을 제거하고, + 1 을 해주면 해당 자릿수가 나온다
     */
    return Math.floor( Math.log10( Math.abs( num ) ) ) + 1;
}


console.log(digitCount(0)); // 1
console.log(digitCount(1)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3

console.log( '=========================== mostDigits =============================' );

/**
 *  - mostDigits
 *
 *  --> 가장큰 digits 를 알아내는 함수
 *
 *  @param { number[] } arr - 해당 숫자 배열
 *  @return { number } maxDigits - 최대 자릿수
 */
/** mySolution */
function mostDigits( arr ){
    const result = arr.reduce( ( acc , cur ) => {
        if ( digitCount( acc ) > digitCount( cur ) ){
            return acc;
        }
        return cur;
    } );

    return digitCount( result );
}

/**
 * - Math.max 가 손에 잘 안익네...
 *
 * --> 이걸 자주써줘야하는데 ㅋㅋ
 *
 * --> 이게 알아보기가 더 쉽고 digitCount 를 각 el 당 한번씩만 호출하니깐
 *     더 효율적이네...
 */
/** goodSolution */
function mostDigits( nums ){
    let maxDigits = 0;
    for ( let i = 0; i < nums.length; i++ ){
        maxDigits = Math.max( maxDigits , digitCount( nums[ i ] ) );
    }
    return maxDigits;
}

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2