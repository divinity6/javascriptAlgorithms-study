console.log( '=========================== power =============================' );
/**
 * - power
 *
 * - Math.pow 함수 모방( 양의 정수의 경우에만... )
 */

/** mySolution */
function power( base , exponent ){

    if ( 0 === exponent ){
        return 1;
    }
    else if ( 1 === exponent ){
        return base;
    }

    return base * power( base , ( exponent - 1 ) )
}

/** goodSolution */
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}


console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

console.log( '=========================== factorial =============================' );

/**
 * - factorial
 *
 * - 팩토리얼 함수 작성
 *
 * - 0! 는 항상 1이어야 한다
 */

/** mySolution */
function factorial( num ){

    if ( 0 === num || 1 === num ){
        return 1;
    }

    return num * factorial( num - 1 );
}

/** goodSolution */
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

console.log( '=========================== productOfArray =============================' );

/**
 * - productOfArray
 *
 * - 해당 숫자를 담은 배열을 모두 곱한 값을 반환하는 재귀함수
 */

/** mySolution */
function productOfArray( arr ){

    let result = 1;

    function helper( mArr ){

        if ( 0 === mArr.length ){
            return;
        }

        result *= mArr[ 0 ];

        helper( mArr.slice( 1 ) );
    }

    helper( arr );

    return result;
}

/** goodSolution */
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

console.log( '=========================== recursiveRange =============================' );

/**
 * - recursiveRange
 *
 * - 들어온 숫자의 0 부터 모든 숫자를 더한 값을 반환하는 함수를 작성
 */

/** mySolution */
function recursiveRange( num ){

    if ( 0 === num ){
        return 0;
    }

    return num + recursiveRange( num - 1 );
}

/** goodSolution */
function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

console.log( '=========================== fib =============================' );

/**
 * - fib
 *
 * - 파보나치 수열에서 들어온 eq 번째 파보나치 수열 값을 반환하는 함수를 작성
 *
 * 1, 1, 2, 3, 5...
 */

/** mySolution */
function fib( eq ){

    // add whatever parameters you deem necessary - good luck!
    let result = 0;

    let start = 1;

    function helper( num , prev ){

        if ( eq === start ){

            result = num;
            return;
        }

        start += 1;

        helper( num + prev , num );

    }

    helper( 1 , 0 );

    return result;

}

/** goodSolution */
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465