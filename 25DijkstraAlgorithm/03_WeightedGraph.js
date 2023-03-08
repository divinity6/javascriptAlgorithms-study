console.log( '=========================== WeightedGraph =============================' );

/**
 * - 가중치 그래프 클래스
 *
 * --> 그래프의 두 지점사이의 최단 거리를 찾기 위해서는 먼저,
 *     해당 두 지점사이에 값을 부여해서 그 경로가 짧은지 긴지를 알 수 있어야한다
 *
 * --> 따라서, 값을 저장할때 해당 길이도 함께 저장한다
 */
class WeightedGraph {

    /**
     *  - 저장 형태
     *
     *  {
     *      "A" : [
     *          { node : "B" , weight : 10 },
     *          { node : "C" , weight : 5 },
     *      ]
     *  }
     */
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
    addEdge( vertex1 , vertex2 , weight ){
        this.adjacencyList[ vertex1 ].push( { node : vertex2 , weight } );
        this.adjacencyList[ vertex2 ].push( { node : vertex1 , weight } );
    }
}

const graph = new WeightedGraph();

graph.addVertex( "A" );
graph.addVertex( "B" );
graph.addVertex( "C" );
graph.addEdge( "A" , "B" , 9 );
graph.addEdge( "A" , "C" , 5 );
graph.addEdge( "B" , "C" , 7 );

console.log( "adjacencyList", graph.adjacencyList );