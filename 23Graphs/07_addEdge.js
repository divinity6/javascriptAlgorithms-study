console.log( '=========================== addEdge =============================' );

/**
 * - 간선( Edge ) 추가
 *
 * - 각 정점( Vertex )사이의 연결을 그리는 작업
 *
 * - 간선( Edge )을 추가할때는 연결할 두개의 정점( Vertex )를 명시해야 한다
 *
 * - 현재 그리는 그래프는 무방향 그래프( UndirectedGraph )라는 것을 잊지말자
 *
 * @pseudocode
 *
 * - addEdge 라는 이름의 메서드를 만들고 파라미터로 vertex1, vertex2 를 받는다
 *
 * - 이 메서드는 adjacencyList 에서 vertex1 의 key 를 찾아서 vertex2 를
 *   vertex1 배열에 넣어줘야한다
 *
 * - vertex2 에 대해서도 같은 작업을 반복해야 한다
 *
 * - Error 핸들링은 신경쓰지 않아도 된다
 *
 * ---
 *
 * --> 방향 그래프( directedGraph )로 만들려면 그냥 vertex1 에만 push 해주면 된다
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

    /**
     * - 예외 처리하지말라고해서 안했음...
     */
    /** mySolution */
    _addEdge( vertex1 , vertex2 ){
        this.adjacencyList[ vertex1 ].push( vertex2 );
        this.adjacencyList[ vertex2 ].push( vertex1 );
    }

    /** goodSolution */
    /** 간선( Edge ) 추가 */
    addEdge( v1 , v2 ){
        this.adjacencyList[ v1 ].push( v2 );
        this.adjacencyList[ v2 ].push( v1 );
    }
}

const graph = new Graph();

graph.addVertex( "한국" );
graph.addVertex( "러시아" );
graph.addVertex( "중국" );
graph.addVertex( "미국" );

graph.addEdge( "한국" , "러시아" );

console.log( graph.adjacencyList );