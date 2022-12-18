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

console.log( "====================  minSubArrayLen  ====================" )

/**
 * - Sliding Window - minSubArrayLen
 *
 * - 파라미터로 array 와 양의 정수하나( sum )를 인자값으로 받는다
 *   이 함수는 연속되는 하위 배열의 요소의 합이 sum과 같거나 더 큰 수를 만들 수 있을때,
 *   해당 하위 배열의 최소 길이를 반환해야한다
 *
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 */

/** mySolution */
function minSubArrayLen( nums , sum ){

    if ( sum > nums.reduce( ( acc , cur ) => acc + cur ) ){
        return 0;
    }

    let minLen = Number.MAX_SAFE_INTEGER;

    let total = 0;

    for ( let i = 0; total <= sum; i += 1 ){

        total = total + nums[ i ];

        if ( total >= sum ){
            minLen = ( i + 1 );
        }
    }


    let inner = 0;

    for ( let outer = ( minLen - 1 ); outer < nums.length; ){

        /** total 이 sum 보다 크거나 같으면 내부 length 를 줄여나가야 한다 */
        if ( total >= sum ){

            minLen = Math.min( minLen , ( outer + 1 ) - inner );

            total -= nums[ inner ];

            inner += 1;
        }

        /** total 이 sum 보다 작으면 외부 값을 더해야한다 */
        if ( sum > total ){

            total += nums[ outer + 1 ];

            outer += 1;
        }
    }

    return minLen;
}

/** solution */
function minSubArrayLen( nums , sum ){

    let total = 0;

    let start = 0;

    let end = 0;

    let minLen = Infinity;

    /** 배열의 길이를 초과해서 더할 수 없음 */
    while( start < nums.length ){

        /**
         * - 더한 값이 sum 보다 작고, end 값이 배열의 길이보다 작을 경우에만 타니깐...
         *
         * 더한 값이 sum 보다 작고,
         * end 값이 배열의 길이보다 작을 경우,
         * total 에 계속 더한다
         */
        if ( total < sum && end < nums.length ){
            total += nums[ end ];

            end += 1;
        }
        /**
         * - 더한 값이 sum 보다 크거나 같을 경우에만 타니깐...
         *
         * 더한 값이 sum 보다 크거나 같으면 가장 작은 배열의 길이를 구한다
         *
         * --> 아... 내부에서 검증작업을 따로 도는구나
         *
         * --> 무조건 for 문으로 정해진 갯수만큼 반복을 도는게 아닌
         *     이건 조건을 만족할때까지 반복을 돌 수가 있네
         */
        else if ( total >= sum ){

            /** */
            minLen = Math.min( minLen , end - start );

            total = total - nums[ start ];

            start += 1;
        }
        else {
            break;
        }
    }

    minLen = minLen === Infinity ? 0 : minLen;

    return minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

console.log( "====================  findLongestSubstring  ====================" )

/**
 * - Sliding Window - findLongestSubstring
 *
 * - 파라미터로 주어진 문자열 중 고유한 문자를 포함하는 가장 긴 문자열을 찾아야한다
 *   즉, 주어진 문자열에서 알파벳이 중복되지 않고 가장 길게 연속되는 문자열의 갯수를 반환
 *
 * --> 먼소린지 예제랑 질문이 일치하지않아서 모르겟다
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */