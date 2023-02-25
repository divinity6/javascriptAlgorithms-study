console.log( '=========================== extractMax( remove ) =============================' );

/**
 * - 제일 큰 Node 제거
 *
 * - 일반적으로 최대 이진 힙에서는 제일 큰 값을 제거한다
 *   ( 최소 이진 힙에서는 가장 작은 최솟 값을 제거한다 )
 *
 * - 언제나 root 자리에 있는 Node 를 제거해야한다
 *   ( 가장 높은 우선순위 : 가장 큰 값을 가지고 있기 때문이다 )
 *
 * --> SINK DOWN 이라고 부른다
 *
 * 1. 먼저 root 의 값을 tail 의 값과 자리를 바꾼 후 제거한다
 *
 * 2. 그 후 SinkDown 을 실행한다
 * --> 그 자식들의 값과 비교하고, 둘다 크다면 가장 큰 값과 값을 비교한다
 *
 * --> 자식들 들 가장 큰 값과 비교 후 자식이 더 크면 자리를 바꾼다
 *
 * --> 이런식으로 자식들보다 작아질때까지 반복한다
 *
 * --> 제거한 값을 반환한다
 *
 * @pseudocode
 *
 * - MaxBinaryHeap 의 메서드를 작성한다( extractMax or extractMaximum or remove )
 *  - 이메서드는 root 값( values 의 맨 처음값을 제거한 후 반환한다 )
 *
 * - values 에서 가장 앞에있는 값과 맨 뒤에있는 값의 위치를 변경한다
 *
 * - values 에서 가장 뒤에있는 값을 제거한다
 *
 * - sink down 을 실행한다
 *
 * - 0 번째 index 부터 시작한다
 *
 * - 2( index ) + 1, 2( index ) + 2 의 값들을 찾는다
 *   ( 이 찾은 값들이 유효한 값인지 확인한다 )
 *
 * - 찾은 값들 중 해당 값보다 찾은 값이 더 크다면 자리를 변경한다
 *
 * - 만약, 찾은 값모두 해당 값보다 크다면 둘 중 가장 큰 값과 자리를 변경한다
 *
 * - 자리를 바꾼 자식의 index 를 새로운 index 로 설정하고, 새로운 자식을 찾으면서 loop 한다
 *
 * - 두 자식이 해당 요소보다 더 크지 않을때까지 반복한다
 *
 * - 마지막에 root 값을 반환한다
 *
 *
 */
class MaxBinaryHeap {

    values;

    constructor() {
        this.values = [];
    }

    /** 새로운 Node 삽입 - 이거 내가짠 코드가 더 좋음 */
    insert( element ){
        this.values.push( element );

        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[ idx ];

        while( 0 < idx ){
            let parentIdx = Math.floor( ( idx - 1 ) / 2 );
            let parent = this.values[ parentIdx ];

            if ( element <= parent ){
                break;
            }
            this.values[ parentIdx ] = element;
            this.values[ idx ] = parent;
            idx = parentIdx;
        }
    }

    /** mySolution */
    _extractMax(){

        if ( 0 === this.values.length ){
            return;
        }

       this._swap( this.values , 0 , this.values.length - 1 )

        const removeNode = this.values.pop();

        this._sinkDown();

        return removeNode;


    }

    _swap( arr , idx1 , idx2 ){
        let temp = arr[ idx1 ];
        arr[ idx1 ] = arr[ idx2 ];
        arr[ idx2 ] = temp;
    }

    _sinkDown(){
        /** sink 를 맞출 index 를 찾음 */
        const _findIndex = ( index ) => {

            const leftChildIndex = ( index * 2 ) + 1;
            const rightChildIndex = leftChildIndex + 1;

            if ( leftChildIndex >= this.values.length ){
                return -1;
            }

            const element = this.values[ index ];
            const leftChild = this.values[ leftChildIndex ];
            const rightChild = this.values[ rightChildIndex ];

            /**
             * - 만약 오른쪽 index 에 값이 없거나,
             *   leftChild 의 값이 더 크다면 leftChildIndex 를 반환한다
             */
            if ( rightChildIndex >= this.values.length && leftChild > element ){
                return leftChildIndex;
            }
            else if ( rightChildIndex >= this.values.length ){
                return -1;
            }
            /**
             * - 만약, leftChild 값과 rightChild 값이 해당 element 보다 크다면
             *   둘 중 큰 값을 반환한다
             */
            else if ( leftChild > element && rightChild > element ){
               return ( leftChild === Math.max( leftChild , rightChild ) ) ? leftChildIndex : rightChildIndex;
            }
            /**
             * - 만약, 오른쪽 값이 더 크다면 rightChildIndex 를 반환한다
             */
            else if ( rightChild > element ){
                return rightChildIndex;
            }
            else if ( leftChild > element ){
                return leftChildIndex;
            }

            return -1;
        }

        let sinkDownIndex = 0;

        while( -1 !== sinkDownIndex ){
            const swapIndex = _findIndex( sinkDownIndex );
            if ( -1 === swapIndex ){
                break;
            }

            this._swap( this.values , sinkDownIndex , swapIndex );
            sinkDownIndex = swapIndex;
        }

    }

    /** goodSolution */
    /** 제일 큰 Node 제거 */
    extractMax(){
       const max = this.values[ 0 ];
       const end = this.values.pop();
       if ( 0 < this.values.length ){
           this.values[ 0 ] = end;
           // trickle down 이라고 부를수도 있다
           this.sinkDown();
       }

       return max;
    }

    /**
     * - 이것처럼 변수를 끌어올려두는거는 좋아보이는데
     *   코드 및 논리구조는 내것이 훨씬 좋아보임
     *
     * 1. 재사용가능성이 내 코드가 더 높음
     *
     * 2. 중첩된 조건문으로 조건을 이해하기가 까다로움
     *
     * 3. 중요 비즈니스로직과 loop 문이 분리되지 않아, 추적하며 봐야함
     *
     * 단지, 변수선언을 끌어올리는것을 항상 생각하자
     *
     * @important 변수선언을 맨 위로 끌어올려서하는 습관을 들이자
     */
    /** 해당 Node 의 위치를 다시 찾음 - 이거 내가짠 코드가 더 좋음 */
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

                if ( leftChild > element ){
                    swap = leftChildIdx;
                }
            }
            if ( rightChildIdx < length ){
                rightChild = this.values[ rightChildIdx ];
                if ( ( null === swap && rightChild > element ) ||
                      ( null !== swap && rightChild > leftChild ) ){
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

const heap = new MaxBinaryHeap();

heap.insert( 10 );
heap.insert( 20 );
heap.insert( 40 );
heap.insert( 30 );
heap.insert( 15 );
heap.insert( 25 );
heap.insert( 18 );
heap.insert( 35 );

heap.extractMax();

heap.extractMax();
/** 부모랑만 비교해서 자리를 바꿈! */
console.log( heap.values ) // [ 40 , 35 , 25 , 30 , 15 , 20 , 18 , 10 ]

