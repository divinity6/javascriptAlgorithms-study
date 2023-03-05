console.log( '=========================== depthFirstRecursive =============================' );

/**
 * - 재귀적 용법의 깊이 우선 탐색
 *
 * - 재귀형에서는 반시계방향으로 돈다( 실제로 반시계방향이 아닌, 예제에서... )
 *
 * @pseudocode
 *
 * - DFS 나 DFSRecursive 라는 메서드를 정의하고 해당 메서드는 vertex 하나를 파라미터로 받는다
 *
 * - 만약, 해당 vertex 가 비어있을 경우 return 한다( null 반환 가능 )
 *
 * - 만약, 비어있지 않을 경우 result list 에 해당 vertex 를 추가하고, 방문했다는 표시를 한다
 *  - 예) { A : true }
 *
 * - 그 후, 해당 vertex 의 인점점들을 살펴본다
 *   - 만약, 해당 vertex 의 모든 인접점들을 방문하지 않았다면,
 *     해당 인접점을 파라미터로 DFS 재귀함수를 다시 호출한다
 *
 * @detailPseudocode
 *
 * - startNode 를 파라미터로 받는 메서드를 하나 작성한다
 *
 * - result 값을 저장할 빈 Array 를 만들어둔다
 *
 * - 표시할 vertex 들을 저장할 빈 Object 를 생성한다
 *
 * - vertex 들을 입력하는 helper 함수를 작성한다
 *  - helper 함수는 vertex 가 비어있으면 return 한다
 *  - vertex 를 visited( Object ) 객체에 삽입 후 표시하고,
 *  - result( Array )에 push 한다
 *  - vertex 의 인접점들을 loop 를 돌면서 visited 객체에 없다면,
 *  - 해당 vertex 의 인접점을 파라미터로 helper 함수를 다시 호출한다
 *
 * - helper 함수를 호출한다
 *
 * - result 값을 반환한다
 */
class Graph {

    adjacencyList;

    constructor( ) {
        this.adjacencyList = {};
    }

    /** 정점( Vertex ) 추가 */
    addVertex( vertex ){
        if ( !( this.adjacencyList[ vertex ] ) ){
            this.adjacencyList[ vertex ] = [];
        }
    }

    /** 간선( Edge ) 추가 */
    addEdge( v1 , v2 ){
        this.adjacencyList[ v1 ].push( v2 );
        this.adjacencyList[ v2 ].push( v1 );
    }

    /** 간선( Edge ) 제거 */
    removeEdge( vertex1 , vertex2 ){
        this.adjacencyList[ vertex1 ] = this.adjacencyList[ vertex1 ].filter( v => v !== vertex2 );
        this.adjacencyList[ vertex2 ] = this.adjacencyList[ vertex2 ].filter( v => v !== vertex1 );
    }

    /** 정점( Vertex ) 제거 */
    removeVertex( vertex ){
        /** 길이를 하나씩 줄이면서 loop 를 돌음 */
        while( this.adjacencyList[ vertex ].length ){

            const adjacentVertex = this.adjacencyList[ vertex ].pop();

            this.removeEdge( vertex , adjacentVertex );
        }

        delete this.adjacencyList[ vertex ];
    }

    /** mySolution */
    _depthFirstRecursive( vertex ){

        const result = [];

        const _visited = {};

        const _helper = ( vertex ) => {
            /** 해당 vertex 의 edge 가 하나도 없을 경우 실행하지 않음 */
            if ( 0 === this.adjacencyList[ vertex ].length ){
                return;
            }
            _visited[ vertex ] = true;
            result.push( vertex );

            /** 해당 vertex 의 방문하지 않은 edge 들을 돌면서 재귀호출 */
            this.adjacencyList[ vertex ].forEach( v => {
                if ( !( _visited[ v ] ) ){
                   return _helper( v );
                }
            } );
        }

        _helper( vertex );

        return result;
    }

    /**
     * - 이럴때 즉시실행함수가 매우 편리하네...ㅋ
     *
     * - 이름을 진짜 잘짓는다... 이거 무조건 써먹어야함
     *
     * - 이거 dfs 함수에서 엣지케이스로 !( vertex )로 반환할때,
     *   adjacencyList[ vertex ].length 값도 함께 비교해주는게 좋은 해답같음
     *
     * --> 의도치않게 한번 더 돌기때문임
     */
    /** goodSolution */
    /** 재귀형 깊이 우선 탐색( DFS ) */
    depthFirstRecursive( start ){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        ( function dfs( vertex ){
            if ( !( vertex ) ){
                return null;
            }

            visited[ vertex ] = true;
            result.push( vertex );

            adjacencyList[ vertex ].forEach( neighbor => {
                if ( !( visited[ neighbor ] ) ){
                    return dfs( neighbor );
                }
            } );
        } )( start );

        return result;
    }
}

const graph = new Graph();

/**
 * - 연습하는 Graph 구조
 *
 *               A
 *             /  \
 *            B    c
 *            |    |
 *            D -- E
 *            \   /
 *              F
 *
 */

graph.addVertex( "A" );
graph.addVertex( "B" );
graph.addVertex( "C" );
graph.addVertex( "D" );
graph.addVertex( "E" );
graph.addVertex( "F" );

graph.addEdge( "A" , "B" );
graph.addEdge( "A" , "C" );
graph.addEdge( "B" , "D" );
graph.addEdge( "C" , "E" );
graph.addEdge( "D" , "E" );
graph.addEdge( "D" , "F" );
graph.addEdge( "E" , "F" );

console.log( graph.adjacencyList );
console.log( graph.depthFirstRecursive( "A" ) ); // [ "A" , "B" , "D" , "E" , "C" , "F" ];