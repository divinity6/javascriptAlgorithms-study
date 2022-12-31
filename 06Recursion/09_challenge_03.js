console.log( '=========================== capitalizeFirst =============================' );
/**
 * - capitalizeFirst
 *
 * - 재귀함수로 해당 배열의 각 첫 번째 문자열을 대문자로 표시합니다
 */

/** mySolution */
function capitalizeFirst ( strArr ) {
    // add whatever parameters you deem necessary - good luck!
    const fistUpper = strArr[ 0 ][ 0 ].toUpperCase() + strArr[ 0 ].slice( 1 );

    if ( 1 === strArr.length ){
        return [ fistUpper ];
    }
    return [ fistUpper ].concat( capitalizeFirst( strArr.slice( 1 ) ) );
}

/**
 * - 애네는 그냥 끝에서부터 자르네...
 *
 * --> 왜냐면 끝에서 잘라서 내보내주면 시간복잡도가 O(1) 이기 때문...
 */
/** goodSolution */
function capitalizeFirst (array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

console.log( '=========================== nestedEvenSum =============================' );
/**
 * - nestedEvenSum
 *
 * - 객체 내부의 모든 짝수의 합을 반환하는 재귀함수 작성
 */
/** mySolution */
function nestedEvenSum ( o ) {
    // add whatever parameters you deem necessary - good luck!
    /** 나머지가 0일 경우 반환 */
    if ( "object" !== typeof o && Number.isInteger( o ) && ( 0 === o % 2 ) ){
        return o;
    }

    else if ( "object" !== typeof o ){
        return 0;
    }
    /** 객체일 경우 재귀를 돌림 */
    return Object.keys( o ).reduce( ( total , k ) => {

        const val = o[ k ];

        return total + nestedEvenSum( val );

    } , 0 );

}

/**
 * - 애초에 그냥 짝수일 경우에만 값을 더하고 내보내면 되는구만...
 *
 * --> 매개변수를 하나 더 받을 생각을 못했네 ㅋㅋ
 */
/** goodSolution */
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

console.log( '=========================== capitalizeWords =============================' );
/**
 * - capitalizeWords
 *
 * - string 배열을 받아 대문자로 변환 후 새로운 배열을 반환하는 함수 구현
 */
/** mySolution */
function capitalizeWords( arr ){

    const upperArr = [ arr[ 0 ].toUpperCase() ]

    if ( 1 === arr.length ){
        return upperArr;
    }

    return upperArr.concat( capitalizeWords( arr.slice( 1 ) ) );
}

/**
 * - 애네는 그냥 뒤쪽부터 잘라서 넣는구만...
 *   머리좋네 ㅋㅋㅋ
 *
 * --> 시간복잡도가 뒤쪽에서 자르게되면 O(1) 이기 때문에
 *     훨씬 알고리즘적으로 좋다
 */
/** goodSolution */
function capitalizeWords (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

}

console.log(capitalizeWords(['car', 'taco', 'banana']));

console.log( '=========================== stringifyNumbers =============================' );
/**
 * - stringifyNumbers
 *
 * - 해당 객체의 모든 숫자값을 문자열로 변환 후 다시 그 객체를 반환합니다
 */
/** mySolution */
function stringifyNumbers( o ){

    /** 들어온 값이 number 일 경우 해당 값을 반환 */
    if ( "number" === typeof o ){
        return String( o );
    }
    /** 해당 값이 배열일 경우 */
    else if ( Array.isArray( o ) ){
        return o.map( el => stringifyNumbers( el ) );
    }
    /** 해당 값이 객체일 경우 */
    else if ( "object" === typeof o ){

        const obj = {};

        Object.keys( o ).forEach( k => {
            obj[ k ] = stringifyNumbers( o[ k ] );
        } )

        return obj;
    }

    return o;

}

/**
 * - 아, 근데 보니깐 for-in 문으로 도는게 깔꼬미하다...
 *
 * --> 그냥 새 객체를 만들어서 객체일 경우에만, 재귀를 돌려버리면 되니깐...
 *     객체가 아닐 경우에는 굳이 재귀를 돌릴 필요가없응게...
 *
 * --> 객체가 아니면 그냥 프로퍼티로 박아버리면 되자늠...
 */
/** goodSolution */
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

console.log( '=========================== collectStrings =============================' );
/**
 * - collectStrings
 *
 * 객체를 받아서 해당 객체안의 모든 문자열을 배열로 반환하는 함수 작성
 */
/** mySolution */
function collectStrings( o ){

    /** 해당 값이 문자열일 경우 반환 */
    if ( "string" === typeof o ){
        return o;
    }
    /** 배열일 경우 */
    else if ( Array.isArray( o ) ){
        return o.map( el => collectStrings( el ) );
    }
    /** 객체일 경우 */
    else if ( "object" === typeof o ){

        return Object.values( o ).reduce( ( arr , v ) => {

            const result = collectStrings( v );

            if ( "string" === typeof result ){
                arr.push( result )
            }
            else if ( Array.isArray( result ) ){
                arr = arr.concat( result );
            }

            return arr;
        } , [] );

    }

}

/**
 * - for-in 으로해야지... 다음부터는 Object.keys 같이 어휘력을 굳이 쓸필요없는데 ㅋㅋㅋ
 *   이게더 깔끔하네
 */
/** goodSolution - helper 메서드 사용 */
function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}

/**
 * - 잔짜 사실 문제를 잘 보면 객체이거나, 문자열일 경우만 탐색하면됨...
 *   굳이 쓸데없이 다른 조건들을 검색할 필요조차 없음
 *
 * --> 다음부터는 문제를 잘 읽어보자!!
 */
/** goodSolution - 순수 재귀 */
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}

var collect = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(collect)); // ["foo", "bar", "baz"])

console.log( '=========================== test =============================' );

/**
 * - 아 헷갈렷네...
 *
 * --> 그니깐, middle 은 계산되는 값으로 놔두고 ,
 *     start, end 포인터를 이동시키면서 값을 구하는거네...ㅋㅋ
 */
function binarySearch( arr , val ){

    let start = 0;

    let end = arr.length;

    /**
     * - 최대 갯수는 또 maxLoop 만큼만 돌아야하니깐...
     *
     * --> 그이상 반복문을 도는건 의미가 없음...
     */
    let maxLoop = 0;

    while( start < end && maxLoop < end ){

        let middle = Math.floor( ( start + end ) / 2 );

        /** 만약 값이 같다면 해당 값을 반환 */
        if ( arr[ middle ] === val ){
            return middle;
        }
        /** 중간지점보다 값이 더 크다면 중간지점을 뒤로 옮긴다 */
        else if ( arr[ middle ] < val ){
            start = middle;
        }
        /** 중간지점보다 값이 더 작다면 중간지점을 앞으로 당긴다 */
        else if ( val < arr[ middle ] ){
            end = middle;
        }
        maxLoop += 1;
    }

    return -1;

}


console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1