console.log( '=========================== removeEdge =============================' );

/**
 * - 간선( Edge ) 제거
 *
 * @pseudocode
 *
 * - removeEdge 라는 메서드를 작성하고 vertex1, vertex2 를 파라미터로 받는다
 *
 * - adjacencyList 의 vertex1 에는 vertex2 를 제거한 배열을 다시 할당한다
 *
 * - adjacencyList 의 vertex2 도 vertex2 를 제거한 배열을 다시 할당한다
 *
 * - 오류나 유효하지않은 vertex( list 에 없는 vertex 등 )입력은 신경쓰지 않는다
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

    /**
     * - 아니, 왜 갈수록 너무쉬운데...?
     *
     * --> 심지어 예외처리도 안하니깐...ㅋㅋ
     */
    /** mySolution */
    _removeEdge( v1 , v2 ){
        this.adjacencyList[ v1 ] = this.adjacencyList[ v1 ].filter( v => v !== v2 );
        this.adjacencyList[ v2 ] = this.adjacencyList[ v2 ].filter( v => v !== v1 );
    }

    /** goodSolution */
    /** 간선( Edge ) 제거 */
    removeEdge( vertex1 , vertex2 ){
        this.adjacencyList[ vertex1 ] = this.adjacencyList[ vertex1 ].filter( v => v !== vertex2 );
        this.adjacencyList[ vertex2 ] = this.adjacencyList[ vertex2 ].filter( v => v !== vertex1 );
    }
}

const graph = new Graph();

graph.addVertex( "한국" );
graph.addVertex( "러시아" );
graph.addVertex( "중국" );
graph.addVertex( "미국" );

graph.addEdge( "한국" , "러시아" );
graph.addEdge( "중국" , "미국" );
graph.removeEdge( "한국" , "러시아" );

console.log( graph.adjacencyList );