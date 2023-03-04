console.log( '=========================== addVertex =============================' );

/**
 * - 정점( Vertex ) 추가
 *
 *
 * - 인접리스트( AdjacencyList )를 활용한 무방향 그래프( Undirected Graph ) 구조
 *
 * - 간선( Edge )를 추가하기 전에 정점( Vertex )를 먼저 추가해야 한다
 *
 * @pseudocode
 *
 * - addVertex 라는 이름의 메서드를 만들고 파라미터로 key 를 받는다
 *
 * - 해당 key 는 adjacencyList 의 key 로 설정하고 value 는 빈 배열이 된다
 * --> 간선( Edge )을 입력하기전에 정점( Vertex )을 먼저 입력하는 구조이다
 *
 */
class Graph {

    adjacencyList;

    constructor() {
        this.adjacencyList = {};
    }

    /** mySolution */
    _addVertex( name ){
        if ( this.adjacencyList[ name ] ){
            return;
        }

        this.adjacencyList[ name ] = [];
    }

    /**
     * - 이번 것도 내가짠 코드가 더낫네 ㅋㅋ
     *
     * --> 단지 파라미터 명만 잘이해하게 써야겟음ㅋㅋㅋ
     *
     * --> 이름짓기가 넘어려워...
     */
    /** goodSolution */
    /** 정점( Vertex ) 추가 */
    addVertex( vertex ){
        if ( !( this.adjacencyList[ vertex ] ) ){
            this.adjacencyList[ vertex ] = [];
        }
    }
}
