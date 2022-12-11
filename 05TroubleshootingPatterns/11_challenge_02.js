/**
 * - Multiple Pointers - averagePair
 *
 * - 파라미터로 array 와 average 가 주어지고, array 를 검사해 두 수를 더한 평균이 average 와 같으면 통과, 없으면 false
 *
 *     averagePair([1,2,3],2.5) // true
 *     averagePair([1,3,3,5,6,7,10,12,19],8) // true
 *     averagePair([-1,0,3,4,5,6], 4.1) // false
 *     averagePair([],4) // false
 */

/** MySolution */
function averagePair( arr , aver ){

    if ( 0 === arr.length || 1 === arr.length ){
        return false;
    }

    let end = ( arr.length - 1 );

    let start = 0;

    // add whatever parameters you deem necessary - good luck!
    while ( start < end ){

        const currentAver = ( arr[ start ] + arr[ end ] ) / 2;

        if ( aver === currentAver ){
            return true;
        }

        /** negative */
        if ( aver < currentAver ){
            end -= 1;
        }
        /** positive */
        else if ( aver > currentAver ){
            start += 1;
        }

    }
    return false;
}

console.log( "====================  averagePair  ====================" )

console.log( averagePair([1,2,3],2.5) ) // true

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false

console.log(averagePair([], 4)); // false

/** solution */
const solution1 = {
    averagePair(arr, num){
        let start = 0
        let end = arr.length-1;
        while(start < end){
            let avg = (arr[start]+arr[end]) / 2
            if(avg === num) return true;
            else if(avg < num) start++
            else end--
        }
        return false;
    }
}


/**
 * - Multiple Pointers - isSubsequence
 *
 * - 두 번째 문자열에 첫 번째 문자열이 순서대로 들어가있으면 true, 아니면 false 를 반환하라
 *
 *     isSubsequence('hello', 'hello world'); // true
 *     isSubsequence('sing', 'sting'); // true
 *     isSubsequence('abc', 'abracadabra'); // true
 *     isSubsequence('abc', 'acb'); // false (order matters)
 */

function isSubsequence( str , target ) {

    // good luck. Add any arguments you deem necessary.
    if ( str > target.length ){
        return;
    }

    let sPointer = 0;

    for ( let tPointer = 0; tPointer < target.length; tPointer += 1 ){

        if ( sPointer === str.length - 1 ){
            return true;
        }

        if ( str[ sPointer ] === target[ tPointer ] ){
            sPointer += 1;
        }
    }
    return false;

}

console.log( "====================  isSubsequence  ====================" )

console.log(isSubsequence('hello', 'hello world'));; // true
console.log(isSubsequence('sing', 'sting'));; // true
console.log(isSubsequence('abc', 'abracadabra'));; // true
console.log(isSubsequence('abc', 'acb'));; // false (order matters)


/** solution */
const solution2 = {
    isSubsequence(str1, str2) {
        var i = 0;
        var j = 0;
        if (!str1) return true;
        while (j < str2.length) {
            if (str2[j] === str1[i]) i++;
            if (i === str1.length) return true;
            j++;
        }
        return false;
    },

    /** 재귀를 이용한 해결법 */
    isSubsequence(str1, str2) {
        if(str1.length === 0) return true
        if(str2.length === 0) return false
        if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
        return isSubsequence(str1, str2.slice(1))
    }
}
