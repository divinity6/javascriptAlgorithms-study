/**
 * - Sliding Window - maxSubarraySum
 *
 * - 파라미터로 array 와 count 가 주어지고, array 를 검사해 인접한 count 만큼의 수를 더한 값이 가장 큰 값을 반환하라
 *
 * maxSubarraySum([100,200,300,400], 2) // 700
 * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
 * maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
 * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 * maxSubarraySum([2,3], 3) // null
 */

console.log( "====================  maxSubarraySum  ====================" )

/** MySolution */
function maxSubarraySum( arr , count ){

    if ( count > arr.length ){
        return null;
    }

    // add whatever parameters you deem necessary - good luck!
    let result = 0;

    for ( let r = 0; r < count; r += 1 ){
        result += arr[ r ];
    }

    let current = result;

    for ( let i = count ; i < arr.length; i += 1 ){

        const prev = arr[ i - count ];

        const next = arr[ i ];

        /**
         *  아 이전값을 무조건 빼주고 다음값을 더해야 하네...
         *
         *  토탈 값이랑 현재 값이랑 분리해서 생각해야함
         *
         *  즉, 큰 값으로 결괏값을 갱신한다는 생각으로 해야함
         */
        current = current - prev + next;

        result = Math.max( current , result );

    }
    return result;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));  // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

console.log( "====================  averagePair  ====================" )
