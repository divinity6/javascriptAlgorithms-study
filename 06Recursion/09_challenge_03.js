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

/** goodSolution */

console.log(capitalizeFirst(['car', 'taco', 'banana']));; // ['Car','Taco','Banana']
