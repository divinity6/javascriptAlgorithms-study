console.log( '=========================== breadthFirst =============================' );

/**
 * - 너비 우선 탐색
 *
 * - 깊이 우선탐색과 매우 비슷하지만, 다른점은 다른 종류의 데이터 구조를 사용한다는 것이다
 *
 * - stack 대신 queue 를 사용한다
 *   ( queue 를 사용하지만 실제 구현은 Array 를 이용해 한다 )
 *
 * - push 와 shift 를 사용하면 된다
 *
 * @pseudocode
 *
 * - start vertex 를 파라미터로 받는 메서드를 하나 작성한다
 *
 * - queue 를 빈 Array 로 하나 생성한다. 그리고, start vertex 를 넣는다
 *
 * - result 값을 저장할 빈 Array 를 만들어둔다
 *
 * - 방문사실을 표시할 vertex 들을 저장할 빈 Object 를 생성한다
 *
 * - 그 후 start vertex 를 방문표시한다
 *
 * - queue 에 값이 있는 한 아래를 반복한다
 *  - queue 에서 다음 vertex 를 shift 한다
 *  - 그 후, result list 에 push 한다
 *  - 그리고, 해당 vertex 의 edge 들을 반복하면서
 *    - 방문하지 않았다면, 방문한 것으로 표시하고 queue 에 push 한다
 *
 * - result 를 반환한다
 *
 * @detailPseudocode
 *
 * -
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

    /** 반복형 깊이 우선 탐색( DFS ) */
    depthFirstIterative( start ){
        const stack = [ start ];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[ start ] = true;
        while( stack.length ){
            currentVertex = stack.pop();
            result.push( currentVertex );

            this.adjacencyList[ currentVertex ].forEach( neighbor => {
                if ( !( visited[ neighbor ] ) ){
                    visited[ neighbor ] = true;
                    stack.push( neighbor );
                }
            } );
        }

        return result;
    }

    /**
     * - 방문안한것들만 queue 에 넣으니 훨씬 합리적임
     */
    /** mySolution */
    _breadthFirst( start ){
        const queue = [ start ];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[ start ] = true;
        while( queue.length ){
            currentVertex = queue.shift();
            result.push( currentVertex );

            this.adjacencyList[ currentVertex ].forEach( neighbor => {
                if ( !( visited[ neighbor ] ) ){
                    visited[ neighbor ] = true;
                    queue.push( neighbor );
                }
            } );

        }

        return result;
    }

    /**
     * - 시계방향으로 바꿔서 돌아볼 수 있다
     *
     * --> 단지 reverse 만해주면됨...ㅋ
     */
    /** goodSolution */
    /** 너비 우선 탐색( BFS ) */
    breadthFirst( start ){
        const queue = [ start ];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[ start ] = true;
        while( queue.length ){
            currentVertex = queue.shift();
            result.push( currentVertex );

            this.adjacencyList[ currentVertex ].slice().reverse().forEach( neighbor => {
                if ( !( visited[ neighbor ] ) ){
                    visited[ neighbor ] = true;
                    queue.push( neighbor );
                }
            } );

        }

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
console.log( graph.depthFirstRecursive( "A" ) ); // [ 'A', 'B', 'D', 'E', 'C', 'F' ];
console.log( graph.depthFirstIterative( "A" ) ); // [ 'A', 'C', 'E', 'F', 'D', 'B' ];
console.log( graph.breadthFirst( "A" ) ); // [ 'A', 'B', 'C', 'D', 'E', 'F' ];