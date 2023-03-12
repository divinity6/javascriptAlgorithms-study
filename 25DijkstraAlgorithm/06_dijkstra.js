console.log( '=========================== Dijkstra =============================' );

/**
 * - 우선순위 큐
 */
class PriorityQueue {

    constructor(){
        this.values = [];
    }

    enqueue( val , priority ){
        this.values.push( { val , priority } );
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort( ( a , b ) => a.priority - b.priority );
    }
}

//              A
//          2 /    \ 4
//           / 2    \
//          C -- D   B
//           \ 1 | \3| 3
//          4 \  |   E
//             \ |  / 1
//               F
/**
 * - 다익스트라 알고리즘
 *
 * @pseudocode
 *
 * - 그래프 의 함수를 정의한다( 가중 그래프 클래스의 메서드로 정의하면 된다 )
 * --> 이름은 ShortestPath or Dijkstra
 * --> 시작 정점( vertex )과 종료 정점( vertex )를 입력하면 된다
 * ---> 정점의 이름이 무엇이든지 시작 저점하나와 끝 지점 하나를 입력해야 한다
 *
 * - 각 정점( vertex )간의 가장 짧은 거리를 저장할 object( distances ) 를 하나 만든다
 * --> 해당 객체안 정점들의 기본 값은 infinity 다
 * --> 시작 정점의 값은 0 으로 들어가게 하면 된다
 *
 * - 그 후, priorityQueue 를 만들고 빈 값으로 설정한다.
 * --> 그리고, distances 들의 각 정점( vertex )을 우선순위 큐 에 저장해 준다
 *     ( 즉, A 는 0 , 나머지는 infinity )
 *
 * - previous 객체를 생성한다.
 * --> 모든 정점( Vertex )에 대해 키를 설정하고 값은 Null 로 초기 설정을 해준다
 * --> 각 key 에 대한 값을 진행하면서 바꿔주는 것이다
 *
 * - 그 후, 우선순위 큐( priorityQueue )에 내용물이 있는 한 loop 를 돌린다
 * --> 무언가 방문할 것이 남아있는한 우선순위 큐 에서 정점을 dequeue 해준다
 *     ( dequeue 하고, 거리값을 설정해야겠구만... )
 *
 * --> 그다음 해당 정점( vertex )이 도달해야하는 정점인지 체크한다
 *
 * --> 만약, 해당 정점( vertex )이 도달해야하는 정점이면 끝이다
 *
 * --> 그렇지 않다면, 각 인접점들에 대해 loop 를 돈다
 * ----> 해당 인접점에 대한 시작 정점으로부터의 거리를 계산한다
 * ----> 새로운 거리가 현재 저장하고 있는 것보다 작으면,
 *       더 작은 값을 가지고 distances 객체와 previous 객체를 바꿔준다
 * ----> 그 후, 해당 인접점을 새로운 거리와 함께 enqueue 해준다
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

    /** mySolution */
    /** 다익스트라 최단거리 반환 */
    _dijkstra( startVertex , endVertex ){

        const distances = {};
        const pQueue = new PriorityQueue();
        const previous = {};

        const _init = () => {
            Object.keys( this.adjacencyList ).forEach( v => {
                if ( startVertex === v ){
                    distances[ v ] = 0;
                    pQueue.enqueue( v , 0 );
                }
                else {
                    distances[ v ] = Number.MAX_SAFE_INTEGER;
                    pQueue.enqueue( v  , Number.MAX_SAFE_INTEGER );
                }
                previous[ v ] = null;
            } );
        }

        /**
         *   - previous 에 fromVertex 이 존재한다면,
         *     distances 의 fromVertex 값을 weight 에 더해 반환합니다
         *
         * @param { number } weight
         * @param { string } fromVertex
         */
        const _getDistanceFrom = ( weight , fromVertex ) => {
            if( null === previous[ fromVertex ] ){
                return weight;
            }
            return distances[ fromVertex ] + weight;
        }

        /**
         * - 현재 정점( vertex )를 기준으로,
         *   인접점까지의 거리정보를 업데이트 하고,
         *
         *   우선순위 queue 에 push 합니다
         *
         *  @param { string } currentVertex - 현재 정점
         *  @param { { node : string , weight : number }[] } adjacentNodes - 인접점 Node 들
         */
        const _updateDistance = ( currentVertex , adjacentNodes ) => {
            const { node , weight } = adjacentNodes.pop();
            const adjacentWeight = _getDistanceFrom( weight , currentVertex );
            const adjacentVertex = node;

            /**
             * - 인접점의 저장된 값과 비교를 해서 최솟값을 찾으면 업데이트 및 다시 계산로직을 수행함
             *
             * --> 이미 방문했던 vertex 에 대한 예외처리를 하지 않는 이유는,
             *     이미 방문했던 vertex 에 대한 최단 거리값이 distances 에 저장되어 있기 때문에,
             *
             *     ------------------------------------------------------------------------------------------
             *     ( 이전에 저장된 vertex 의 거리값 ) vs ( 이전에 저장된 vertex 의 거리값 + 현재 정점에서 인접점 까지의 거리값 )
             *     ------------------------------------------------------------------------------------------
             *
             * --> 하게되면 당연히 전자가 작기 때문에, 이전에 방문했던, vertex 는 아래 if 문을 타지 않게됩니다!
             *
             */
            if ( distances[ adjacentVertex ] > adjacentWeight ){
                /** 최단거리값 업데이트 */
                distances[ adjacentVertex ] = adjacentWeight;
                /** 이전 경로 업데이트 */
                previous[ adjacentVertex ] = currentVertex;
                pQueue.enqueue( adjacentVertex , adjacentWeight );
            }
        }

        _init();

        while( pQueue.values.length ){
            /** 현재 위치의 정점 */
            const currentVertex = pQueue.dequeue().val;

            /**
             *
             * - 해당 정점이 도달해야하는 정점이면 끝입니다...
             *
             * --> 해당 정점에 도달하면 끝나는 이유는
             *     해당 정점에 도달할때까지, 해당정점에 도달할때까지 작은 값이 나올가능성이 없기 때문입니다
             *
             * ----> priorityQueue 의 경우 가장 작은값을 반환하기 때문에, 해당정점 값보다 작은 값이 들어오면
             *       해당 정점보다 먼저 처리하게 되기 때문입니다
             *
             * */
            if ( endVertex === currentVertex ){
                return distances[ endVertex ];
            }

            if ( currentVertex || currentVertex !== Number.MAX_SAFE_INTEGER ){
                /** 인접점 계산 로직 */
                const adjacentNodes = this.adjacencyList[ currentVertex ].slice();
                while( adjacentNodes.length ){
                    _updateDistance( currentVertex , adjacentNodes );
                }
            }
        }

    }

    /** goodSolution */
    /**
     * - 다익스트라 최단거리 반환
     *
     * --> let candidate = distances[ smallest ] + nextNode.weight;
     * ----> previous 에 값이 존재하는지 체크하지 않아도 현재 Node( smallest ) 는 무한대가 아니기 때문에 가능하지...ㅋㅋ
     *
     * --> 애는 거쳐온 Node 경로를 반환하게 했구만...( path )
     * */
    dijkstra( start , finish ){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];  // to return at end
        let smallest;

        // build up initial state
        for ( let vertex in this.adjacencyList ){
            if ( vertex === start ){
                distances[ vertex ] = 0;
                nodes.enqueue( vertex , 0 );
            }
            else {
                distances[ vertex ] = Infinity;
                nodes.enqueue( vertex , Infinity );
            }
            previous[ vertex ] = null;
        }
        // as long as there is something to visit
        while( nodes.values.length ){
            smallest = nodes.dequeue().val;

            if ( smallest === finish ){
                // WE ARE DONE
                // BUILD UP PATH TO RETURN AT END
                /**
                 * - previous 객체에서 start 이후부터 finish 까지 거쳐온 Node 경로를 반환
                 *
                 * --> start 를 추가해야 함
                 */
                while( previous[ smallest ] ){
                    path.push( smallest );
                    smallest = previous[ smallest ];
                }
                break;
            }
            if ( smallest || distances[ smallest ] !== Infinity ){
                for ( let neighbor in this.adjacencyList[ smallest ] ){
                    // find neighbor node
                    let nextNode = this.adjacencyList[ smallest ][ neighbor ];

                    // calculate new distance to neighboring node
                    let candidate = distances[ smallest ] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if ( candidate < distances[ nextNeighbor ] ){
                        // updating new smallest distance to neighbor
                        distances[ nextNeighbor ] = candidate;
                        // updating previous - How we got to next neighbor
                        previous[ nextNeighbor ] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue( nextNeighbor , candidate );
                    }
                }
            }
        }

        return path.concat( smallest ).reverse();

    }

}

const graph = new WeightedGraph();

graph.addVertex( "A" );
graph.addVertex( "B" );
graph.addVertex( "C" );
graph.addVertex( "D" );
graph.addVertex( "E" );
graph.addVertex( "F" );

graph.addEdge( "A" , "B" , 4 );
graph.addEdge( "A" , "C" , 2 );
graph.addEdge( "B" , "E" , 3 );
graph.addEdge( "C" , "D" , 2 );
graph.addEdge( "C" , "F" , 4 );
graph.addEdge( "D" , "E" , 3 );
graph.addEdge( "D" , "F" , 1 );
graph.addEdge( "E" , "F" , 1 );

console.log( graph.dijkstra("A", "E") );