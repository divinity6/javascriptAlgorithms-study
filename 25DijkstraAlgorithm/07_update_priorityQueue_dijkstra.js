console.log( '=========================== Update PriorityQueue Dijkstra =============================' );

class Node {
    val;        // 실제 값
    priority;   // 우선순위

    constructor( val , priority ) {
        this.val = val;
        this.priority = priority;;
    }
}
/**
 * - 최적화 및 업데이트 된 우선순위 큐
 *
 * --> 이진 힙의 priorityQueue 를 그대로 사용한다
 *
 * --> 대박, 자식이 무조건 2개가 아닌데 그대로 작동함...ㅋㅋ
 *
 * @todo 이거 자식수에 제한없이 사용할 수 있는지 확인해보자...
 *       ( 난 지금까지 이진힙에만 동작하는 줄... )
 */
class PriorityQueue {

    values;     // 큐가 담긴 값

    constructor() {
        this.values = [];
    }

    /**
     * - 다시보니깐, 아래 논리구조가 더 이해하기 쉽네...
     *
     * --> 내꺼는 else if 가 극단적으로 밖으로 빠진것 뿐이지,
     *     아래 논리구조가 더 이해하기 좋음
     */
    /** goodSolution */
    /** 우선순위 큐에 값 삽입 */
    enqueue( val , priority ){
        let newNode = new Node( val , priority );
        this.values.push( newNode );

        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[ idx ];

        while( 0 < idx ){
            let parentIdx = Math.floor( ( idx - 1 ) / 2 );
            let parent = this.values[ parentIdx ];

            if ( element.priority >= parent.priority ){
                break;
            }
            this.values[ parentIdx ] = element;
            this.values[ idx ] = parent;
            idx = parentIdx;
        }
    }

    /** 우선순위 큐에 값 제거 */
    dequeue(){
        const min = this.values[ 0 ];
        const end = this.values.pop();
        if ( 0 < this.values.length ){
            this.values[ 0 ] = end;
            // trickle down 이라고 부를수도 있다
            this.sinkDown();
        }

        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[ 0 ];

        while( true ){
            let leftChildIdx = ( 2 * idx ) + 1;
            let rightChildIdx = ( 2 * idx ) + 2;
            let leftChild;
            let rightChild;
            let swap = null; // 자리를 바꾸지 않은 경우 루프를 돌지 않음을 설정하기 위한 변수

            if ( leftChildIdx < length ){
                leftChild = this.values[ leftChildIdx ];

                if ( leftChild.priority < element.priority ){
                    swap = leftChildIdx;
                }
            }
            if ( rightChildIdx < length ){
                rightChild = this.values[ rightChildIdx ];
                if ( ( null === swap && rightChild.priority < element.priority ) ||
                    ( null !== swap && rightChild.priority < leftChild.priority ) ){
                    swap = rightChildIdx;
                }
            }

            if ( null === swap ) {
                break;
            }

            this.values[ idx ] = this.values[ swap ];
            this.values[ swap ] = element;
            idx = swap;
        }
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