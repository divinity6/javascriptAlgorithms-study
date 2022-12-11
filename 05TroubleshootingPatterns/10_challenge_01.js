/**
 * - Frequency Counter - sameFrequency
 *
 * - 같은 빈도로 등장하는지 확인
 *
 *     sameFrequency(182,281) // true
 *     sameFrequency(34,14) // false
 *     sameFrequency(3589578, 5879385) // true
 *     sameFrequency(22,222) // false
 */

/** MySolution */

function sameFrequency( first , second ){
    // good luck. Add any arguments you deem necessary.

    const str1 = String( first );

    const str2 = String( second );

    if ( str1.length !== str2.length ){
        return false;
    }

    const store = {}

    for ( const char of str1 ){
        store[ char ] = store[ char ] ? store[ char ] + 1 : 1;
    }

    for ( const char of str2 ){
        if ( !store[ char ] ){
            return false;
        }

        store[ char ] -= 1;

        if ( 0 > store[ char ] ){
            return false;
        }

    }
    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

/** solution */
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

console.log( "========================================" )

/**
 * - Frequency Counter / Multiple Pointers - areThereDuplicates
 *
 * - 같은 값이 존재하는지 확인
 *
 *      areThereDuplicates(1, 2, 3) // false
 *      areThereDuplicates(1, 2, 2) // true
 *      areThereDuplicates('a', 'b', 'c', 'a') // true
 */

/** MySolution */
function areThereDuplicates( ...args ) {
    // good luck. (supply any arguments you deem necessary.)
    let j = ( args.length - 1 );

    for ( let i = 0; i < j; i += 1 ){

        const start = args[ i ];

        const end = args[ j ];

        if ( start === end ){
            return true;
        }

    }
    return false;

}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

/** Solution( 빈도수 세기를 이용 ) */

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false;
}

/** Solution( 다중 포인터를 이용 ) */

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}

/** Solution( Set ) */
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
