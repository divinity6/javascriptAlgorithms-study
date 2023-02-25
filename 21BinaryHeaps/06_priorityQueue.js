console.log( '=========================== priorityQueue =============================' );

/**
 * - 우선순위 큐( PriorityQueue )
 *
 * - 우선순위 큐 에서는 순서를 가진 Node 가 필요하다
 *
 * --> 우선순위 큐는 우선순위를 가진 Node 를 먼저 반환하는 데이터 구조이다
 * --> 단지, 전통적인 방식이지만 효율성이 높은 힙 방식으로 구현을 한다
 *
 * - 각 Node 들은 우선순위를 가지는데, 무언가를 입력하면, 해당 우선순위로 힙을
 *   - 구성하고,
 *   - 재정렬하고,
 *   - 다른 Node 들의 우선순위와 비교한다
 *
 * - 최소 이진 힙( MinBinaryHeap )을 사용한다
 *
 * @pseudocode
 *
 * - 최소 이진 힙( MinBinaryHeap )을 작성한다
 *  - 제일 낮은 number 가 제일 높은 우선순위를 가진다
 *  - ( 최대 이진 힙( MaxBinaryHeap )과 비교하는 부분을 약간씩만 바꿔주면 된다 )
 *
 * - 각 Node 는 priority( 우선순위 )를 가진다
 *  - 해당 priority 로 heap 을 구성한다
 *
 * - enqueue( 삽입 ) 메서드는
 *  - val 과 priority 를 받고, 새로운 Node 를 생성한다
 *  - 그리고 , priority 를 기존 값과 비교한다
 *
 * - dequeue( 제거 ) 메서드는
 *  - root 에 있는 element 를 제거하고 반환한다.
 *  - 그리고 heap 의 priority 를 이용해 재정렬한다
 *
 * @important
 *
 * - 현재 내가작성한 코드는 만약, 같은 우선순위를 가진 값을 비교할 경우를 적용하지 않았다
 *
 * - 이럴경우 추가할 수 있는것이 시간개념을 추가해주는 것이다
 *
 */

class Node {

    val;        // 실제 값
    priority;   // 우선순위

    constructor( val , priority ) {
        this.val = val;
        this.priority = priority;;
    }
}

class PriorityQueue {

    values;     // 큐가 담긴 값

    constructor() {
        this.values = [];
    }

    /** mySolution */
    /** 우선순위 큐에 값 삽입 */
    _enqueue( val , priority ){
        const newNode = new Node( val , priority );
        this.values.push( newNode );
        this._bubbleUp();
        return this;
    }

    _bubbleUp(){

        const _findParentIndex = ( index ) => {

            const el = this.values[ index ];
            const parentIndex = Math.floor( ( index - 1 ) / 2 );
            let parentEl;

            if ( 0 > parentIndex ){
                return -1;
            }
            parentEl = this.values[ parentIndex ];

            if ( el.priority < parentEl.priority ){
                this.values[ parentIndex ] = el;
                this.values[ index ] = parentEl;

                return parentIndex;
            }

            return -1;
        }

        let swapIndex = this.values.length - 1;
        while( -1 !== swapIndex ){
            swapIndex = _findParentIndex( swapIndex );
        }

    }

    /** 우선순위 큐에 값 제거 */
    _dequeue(){
        const removeNode = this.values[ 0 ];
        const lastNode = this.values.pop();
        if ( 0 !== this.values.length ){
            this.values[ 0 ] = lastNode;
            this._sinkDown();
        }
        return removeNode;
    }

    _sinkDown(){

        const _findChildIndex = ( index ) => {
            const el = this.values[ index ];
            const leftChildIndex = ( index * 2 ) + 1;
            const rightChildIndex = ( index * 2 ) + 2;
            let leftChildEl;
            let rightChildEl;

            /** 왼쪽 범위를 벗어나면 변경하지 않습니다 */
            if ( leftChildIndex >= this.values.length ){
                return -1;
            }

            leftChildEl = this.values[ leftChildIndex ];
            /** 오른쪽 범위를 벗어낫으나 왼쪽 우선순위가 더 작은 값이라면 변경합니다 */
            if ( rightChildIndex >= this.values.length && el.priority > leftChildEl.priority ){
                this.values[ index ] = leftChildEl;
                this.values[ leftChildIndex ] = el;
                return leftChildIndex;
            }
            /** 오른쪽 범위를 벗어나면 변경하지 않습니다 */
            else if ( rightChildIndex >= this.values.length ){
                return -1;
            }

            rightChildEl = this.values[ rightChildIndex ];
            /** 양쪽 우선순위가 더 적다면, 둘중 가장 작은 우선순위 값을 적용합니다 */
            if ( el.priority > leftChildEl.priority && el.priority > rightChildEl.priority ){
                const foundChildIndex = rightChildEl.priority >= leftChildEl.priority ? leftChildIndex : rightChildIndex;
                this.values[ index ] = this.values[ foundChildIndex ];
                this.values[ foundChildIndex ] = el;
                return foundChildIndex;
            }
            /** 오른쪽 우선순위보다 현재 우선순위가 작다면 변경합니다 */
            else if ( el.priority > rightChildEl.priority ){
                this.values[ index ] = leftChildEl;
                this.values[ rightChildIndex ] = el;
                return rightChildIndex;
            }
            /** 왼쪽 우선순위보다 현재 우선순위가 작다면 변경합니다 */
            else if ( el.priority > leftChildEl.priority ){
                this.values[ index ] = leftChildEl;
                this.values[ leftChildIndex ] = el;
                return leftChildIndex;
            }

            return -1;
        }

        let swapIndex = 0

        while( -1 !== swapIndex ){
            swapIndex = _findChildIndex( swapIndex );
        }
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

const queue = new PriorityQueue();

queue.enqueue( "제일 안중요" , 8 );
queue.enqueue( "제일 안중요" , 8 );
queue.enqueue( "두번째로 안중요" , 7 );
queue.enqueue( "두번째로 안중요" , 7 );
queue.enqueue( "세번째로 중요" , 3 );
queue.enqueue( "세번째로 중요" , 3 );
queue.enqueue( "두번째로 중요" , 2 );
queue.enqueue( "제일 중요" , 1 );
/** 부모랑만 비교해서 자리를 바꿈! */
console.log( queue ) // [ 1 , 2 , 3 , 7 , 7 , 8 , 3 , 8 ]

console.log(queue.dequeue());
console.log( queue ) // [ 2 , 7 , 3 , 8 , 7 , 8 , 3 ]
console.log(queue.dequeue());
console.log( queue ) // [ 3 , 7 , 3 , 8 , 7 , 8 ]
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());