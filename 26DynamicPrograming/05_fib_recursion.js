console.log( '=========================== Fib Recursion =============================' );

/**
 *
 * - n 번째 fibonacci 를 구하는 솔루션
 *
 * - 1 번째와 2번째는 값이 1이다
 *
 * --> 보통 전부이런식으로 구현하지 않나...?
 *
 * --> 내가 했던게 memoized 패턴으로 구현한거였네 ㅋㅋ
 *
 * --> 아래 정답보다 훨씬 빠르고 좋음
 *
 * @param { number } n - 찾으려는 수
 * @param { number[] } fib - fibonacci 배열
 *
 * @return { number }
 */
/** mySolution */
function fibonacci( n , fib = [ 1 , 1 ] ){
    if ( fib[ n - 1 ] ){
        return fib[ n - 1 ];
    }

    fib.push( fib[ fib.length - 1 ] + fib[ fib.length - 2 ] );
    return fibonacci( n , fib );
}

console.log( "mySolution" , fibonacci( 45 ) );

/**
 * - 개간단하네 ㅋㅋㅋ
 *
 * --> Not good!!
 */
/** goodSolution */
function fib( n ){
    if ( n <= 2 ){
        return 1;
    }
    return fib( n - 1 ) + fib( n - 2 );
}
console.log( "goodSolution" , fib( 45 ) );
