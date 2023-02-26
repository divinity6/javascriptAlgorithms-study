console.log( '=========================== hash =============================' );

/**
 * - key 값을 파라미터로 받고
 *   해당 길이 만큼의 배열안의 index 중 하나를 반환해야한다
 *
 * - 어떻게 string 을 믿을만한 index 로 변환할 수 있을까?
 * --> 항상 같은 결괏값이 나오도록...
 *
 * --> UTF 16 의 글자코드를 이용하는 것
 *     ( 모든 글자는 각각 해당하는 숫자값을 가진다 )
 *
 * --> 해당 UTF 16 글자값에 96을 빼면, 해당 알파벳의 1 부터 출력한다
 *
 * --> 그 모든 값을 더해서 해당 index 에 저장하면 될까...?
 *
 * --> 하지만, length 값보다 큰 값이 나올 가능성이 높다
 *
 * --> 따라서, 모듈로 연산( 나머지 : % )을 사용하는 것이다
 *
 * --> 해당 length 만큼의 나머지를 구해서 해당 값을 string 의 값으로 사용하는 것
 *     ( 아무리 큰 수더라도 모듈로 연산을 사용하면 해당 length 안의 유효한 배열 index 가 나오게 된다 )
 */
{
    function hash( key , arrayLen ){
        let total = 0;
        for ( let char of key ){
            // map "a" to 1, "b" to 2 , "c" to 3, etc
            let value = char.charCodeAt( 0 ) - 96;
            total = ( total + value ) % arrayLen;
        }
        return total;
    }

    console.log(hash("pink", 10));; // 0
    console.log(hash("orangered", 10));; // 7
    console.log(hash("cyan", 10));; // 3
}

/**
 * - 위의 해시 함수에는 몇가지 문제가 존재한다
 *
 * 1. 이 함수는 string 에 대해서만 hash 처리를 한다
 *    ( number 나 boolean or array 에 대해서는 작동하지 않는다 )
 *
 * 2. 이 함수는 Constant Time, 즉 상수시간을 갖지 않는다
 *    ( 이 함수는 string 의 크기나, 데이터의 크기에 따라 연산 횟수가 달라진다 )
 *
 * 3. 해당 데이터의 무작위성이 떨어진다
 *    ( 데이터가 생각보다 뭉치기 쉬워진다 )
 *
 * ---
 *
 * - 현재는 string 만 받아서 hash 처리를 하지만 2, 3 번은 수정할 것이다
 *   ( 소수 값을 이용해서 )
 *
 * - Constant Time, 상수값에 가까워 질 수 있도록 성능 개선에 초점을 맞추고 무작위성을 늘린다
 */
{
    /**
     * - 약간 개선한 버전
     *
     * 1. 해당 key 와 100 중에 작은것을 기준으로 loop 를 돌게 하는 것
     *
     * 2. PrimeNumber, 소숫값을 추가한다
     * --> 해시 함수는 거의 대부분 소수를 이용한다
     *
     * --> 데이터 충돌( Collision )이 줄어든다
     * ----> 가능한한 데이터가 같은 index 에 들어가는 충돌을 피하기 위함
     * ----> 데이터를 저장하는 배열의 길이가 소수인 경우, 큰 값이 충돌이 일어날 확률이 더 적다
     * ----> 즉, 해당 hashData 를 저장하는 Table 의 길이가 소수일 수록 데이터 충돌( Collision )확률이 더 적다
     *
     * --> 해당 Table 을 소수로 바꾼다고 어떤 변화가 일어나는지는 알지 못해도,
     * ----> 가진 값들을 저장하는 HashTable 은 소수의 길이를 가지는 것이 항상 유리하다
     *
     * --> 실제 사용을 한다면 31 보다 더 큰 소수를 사용하겠지만, 지금처럼 데이터를 조금 저장하는 경우에는,
     *     실제로 큰 상관은 없다
     *     ( 그러나 원칙적으로는 최대 값을 정함으로써 속도를 높였다... 최대 100번 loop )
     */
    function hash( key , arrayLen ){
        let total = 0;
        let WEIRD_PRIME = 31;
        for ( let i = 0; i< Math.min( key.length , 100 ); i++ ){
            let char = key[ i ];
            // map "a" to 1, "b" to 2 , "c" to 3, etc
            let value = char.charCodeAt( 0 ) - 96;
            total = ( total * WEIRD_PRIME + value ) % arrayLen;
        }
        return total;
    }

    console.log(hash("hello", 13)); // 7
    console.log(hash("goodbye", 13)); // 9
    console.log(hash("cyan", 13)); // 5
    console.log(hash("hi", 13)); // 10
}

/**
 * - 위의 해시함수가 매우 좋은 해시함수는 아니지만, 기본적인 hashTable 을 코딩하기에는 충분하다
 */
