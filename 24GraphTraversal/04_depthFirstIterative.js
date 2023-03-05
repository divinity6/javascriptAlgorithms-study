console.log( '=========================== depthFirstIterative =============================' );

/**
 * - 반복적 용법의 깊이 우선 탐색
 *
 * - stack 개념을 이용하여 iterative 로 구현해본다
 *
 * - 순환형에서는 시계방향으로 돈다( 실제로 시계방향이 아닌, 예제에서... )
 *
 * @pseudocode
 *
 * - S 라는 이름의 stack 을 만든다( 해당 stack 은 빈 배열이다 )
 *
 * - 해당 Stack 에 시작 Vertex 를 push 한다
 *
 * - 그 후, S 가 비어있지 않는한 loop 를 돌린다
 *
 * - stack 에 값이 있다면 pop 을 한후 해당 값을 방문했는지 확인한다
 *
 * - 방문하지 않았다면 discovered 라는 list 에 추가한다
 *
 * - 그 후 해당 vertex 의 인점점들에 loop 를 돌며 stack 에 그 값들을 push 해 준다
 *
 * @detailPseudocode
 *
 * - startNode 를 파라미터로 받는 메서드를 하나 작성한다
 *
 * - stack 을 빈 Array 로 하나 생성한다
 *
 * - result 값을 저장할 빈 Array 를 만들어둔다
 *
 * - 방문사실을 표시할 vertex 들을 저장할 빈 Object 를 생성한다
 *
 * - 그 후 시작 지점의 vertex 를 stack 에 넣고, 방문 표시를 해준다
 *
 * - stack 에 값이 있는 한 아래를 반복한다
 *  - stack 에서 다음 vertex 를 pop 한다
 *  - 만약, 제거한 vertex 가 한번도 방문하지 않았다면
 *      - vertex 에 방문 표시를 하고
 *      - result list 에 push 한다
 *      - 그리고, 해당 vertex 의 edge 들을 stack 에 push 한다
 *
 * - result 를 반환한다
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

    /**
     * - stack 에 저장하니깐 당연히 결과가 다르지... pop 으로 빼내니깐...ㅋ
     *
     * --> this.adjacencyList[ vertex ] 여기서 반복문돌면서 push 할때,
     *
     * --> 한번더 visited 를 체크하면 while 문 자체를 적게돌 수 있음
     */
    /** mySolution */
    _depthFirstIterative( start ){
        const stack = [];
        const result = [];
        const visited = {};

        stack.push( start );
        while( 0 !== stack.length ){
            const vertex = stack.pop();

            if ( !( visited[ vertex ] ) ){
                visited[ vertex ] = true;
                result.push( vertex );

                this.adjacencyList[ vertex ].forEach( neighbor => {
                    if ( !( visited[ neighbor ] ) ){
                        stack.push( neighbor );
                    }
                } );
            }

        }

        return result;
    }

    /**
     * - 반복문안에서 변수를 사용할 일이 있으면 반복문 내부에서 선언해,
     *   계속 인스턴스화 하는 것보다
     *   반복문 외부에서 한번 인스턴스화 해두고, 계속 재할당해 사용하는것이 좋네
     */
    /** goodSolution */
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