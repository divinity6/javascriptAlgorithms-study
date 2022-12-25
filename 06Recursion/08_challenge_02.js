console.log( '=========================== reverse =============================' );
/**
 * - reverse
 *
 * - 들어온 문자열을 반대로 출력
 */

/** mySolution */
function reverse( str ){

    // add whatever parameters you deem necessary - good luck!
    if ( '' === str ){
        return '';
    }

    const char = str[ str.length - 1 ];

    return char + reverse( str.slice( 0 , str.length - 1 ) );
}

/** goodSolution */

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

console.log( '=========================== isPalindrome =============================' );