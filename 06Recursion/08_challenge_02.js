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

/**
 * - 아... 이거 그냥 거꾸로 더하면 되는거엿구만...ㅋㅋ
 */
/** goodSolution */
function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

console.log( '=========================== isPalindrome =============================' );

/**
 * - reverse
 *
 * - 앞뒤로 읽어도 똑같은 문자열이면 true 를 반환.
 *   그렇지 않으면 false 를 반환
 */

/** mySolution */
function isPalindrome( str ){
    // add whatever parameters you deem necessary - good luck!
    if ( 1 === str.length ){
        return true;
    }

    const start = str[ 0 ]

    const end = str[ str.length - 1 ];

    if ( start !== end ){
        return false;
    }

    return isPalindrome( str.slice( 1 , str.length - 1 ) );

}

/**
 * - length 가 2이면 곧바로 체크해버리고 끝내버리고,
 *
 * - 애초에 처음부터 똑같지 않을수도 있으니 해당 재귀도 조건으로 걸어버리는군
 */
/** goodSolution */
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

console.log( '=========================== someRecursive =============================' );
/**
 * - someRecursive
 *
 * - 배열과 콜백함수를 작성합니.
 *   콜백에 전달된 배열의 단일 element 조건값이 true 를 반환하면
 *   true 를 반환합니다
 *
 * - 그렇지 않으면 false 를 반환합니다
 */

/** mySolution */
function someRecursive( arr , callback ){
    // add whatever parameters you deem necessary - good luck!
    if ( 0 === arr.length ){
        return false;
    }
    else if ( callback( arr[ 0 ] ) ){
        return true;
    }
    return someRecursive( arr.slice( 1 ) , callback );

}

/**
 * - 이거는 나랑생각이 똑같구먼ㅋㅋ
 */
/** goodSolution */
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10));; // false

console.log( '=========================== flatten =============================' );
/**
 * - flatten
 *
 * - 다중 배열을 받아 해당 배열을 1차원 배열로 만들어 반환합니다
 */
/** mySolution */
function flatten( multipleArr ){
    // add whatever parameters you deem necessary - good luck!

    const result = [];

    function helper( multipleArr ) {

        if ( 0 === multipleArr.length ){
            return;
        }

        const el = multipleArr[ 0 ];

        if ( Array.isArray( el ) ){
            helper( el );
        }
        else {
            result.push( el );
        }

        helper( multipleArr.slice( 1 ) )
    }

    helper( multipleArr );

    return result;
}

/**
 * - 머야 반복문을 써버리네 ㅋㅋㅋ
 *
 * - 근데 반복문쓰면 단순하긴함.ㅋㅋ
 */
/** goodSolution */
function flatten(oldArr){
    var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}


console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]