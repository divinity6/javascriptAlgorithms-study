console.log( '=========================== removeVertex =============================' );

/**
 * - 정점( Vertex ) 제거
 *
 * - 정점을 제거하려면 연결된 모든 간선( Edge )을 전부 제거하고, 해당 점점( Vertex )를 제거해야한다
 *
 * @pseudocode
 *
 * - removeVertex 라는 메서드를 작성하고 하나의 파라미터를 받는다
 *
 * --> 제거해야할 vertex 이름
 *
 * - adjacencyList 에 다른 정점( Vertex )가 있다면 해당 정점( Vertex )인지 확인하기 위해
 *   모두 loop 를 돌면서 해당 간선( Edge )을 제거한다
 *
 * - loop 안에서 정의한 removeEdge 함수를 사용한다
 * --> 해당 정점( Vertex )에 있는 모든 간선( Edge )에 대해 removeEdge 를 호출해주면 된다
 *
 * - 마지막으로 adjacencyList 에서 key 를 제거해주면 된다
 *
 */
class Graph {

    adjacencyList;

    constructor() {
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

    /** mySolution */
    _removeVertex( removeV ){

        for ( const vertex in this.adjacencyList ){

            if ( vertex === removeV || !( this.adjacencyList[ vertex ].includes( removeV ) ) ){
                continue;
            }
            this.removeEdge( vertex , removeV );
        }

        delete this.adjacencyList[ removeV ];
    }

    /**
     * - 아 맞네...
     *
     * --> this.adjacencyList 자체를 전부순회할 필요 없이
     *
     * --> this.adjacencyList[ vertex ]의 배열 안에 있는 key 들의 배열만 순회하면 되지...ㅋ
     *
     * --> 너무 무식하게 전부 순회했네...ㅋㅋㅋ
     *
     * --> 반성하자!
     */
    /** goodSolution */
    removeVertex( vertex ){
        /** 길이를 하나씩 줄이면서 loop 를 돌음 */
        while( this.adjacencyList[ vertex ].length ){

            const adjacentVertex = this.adjacencyList[ vertex ].pop();

            this.removeEdge( vertex , adjacentVertex );
        }

        delete this.adjacencyList[ vertex ];
    }
}

const graph = new Graph();

graph.addVertex( "한국" );
graph.addVertex( "러시아" );
graph.addVertex( "중국" );
graph.addVertex( "미국" );

graph.addEdge( "한국" , "러시아" );
graph.addEdge( "중국" , "미국" );
graph.addEdge( "한국" , "중국" );
graph.addEdge( "한국" , "미국" );
graph.addEdge( "미국" , "러시아" );
graph.removeVertex( "러시아" );
graph.removeVertex( "중국" );

console.log( graph.adjacencyList );