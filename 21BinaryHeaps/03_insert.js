console.log( '=========================== insert =============================' );

/**
 * - 새로운 Node 삽입
 *
 * --> BinaryHeap 에서 필요한것은 Node 객체나 다른 프로퍼티가 아니라,
 *     단지 비어있는 배열만 있으면 된다
 *
 * --> 삽입시 고려해야할 것은 해당 배열의 index 기반으로 구조를 만드는 것이다
 *
 * --> 삽입할때는 항상 Array 의 맨뒤( push )에 들어가야 한다
 *
 * --> 그 후 알맞은 자리를 찾을때까지 Bubble Up 을 해줘야한다( 하나씩 비교하며 올려야 함 )
 *
 * 1. 넣은 값을 자신의 부모 Node 와 비교를 한다
 *    ( 비교후 넣은 값이 더 크다면 자리를 swap 한다 )
 *    --> 이런식으로 부모노드보다 작을때까지 swap 한다
 *
 * @pseudocode
 *
 * - insert 메서드를 작성하고 value 를 하나 받는다
 * --> values 배열 끝에 해당 value 를 push 한다
 *
 * - BubbleUp : 알맞은 자리에 갈때까지 BubbleUp 을 한다
 *  - BubbleUp 이라는 메서드를 하나 작성한다
 *
 *  - 일단, 맨 마지막 index, 배열의 맨 마지막 요소를 가지고 온다
 *
 *  - 추가가 되면, 해당 요소의 부모 index( floor( index - 1 /2 ) )를 찾는다
 *
 *  - 해당 index 에 있는 값과 추가된 값을 비교한다
 *
 *  - 추가한 값이 더 크다면 두 값의 자리를 바꿔준다
 *    ( 부모자리에 있는 값이 자녀 index 자리에 있는 값보다 낮은 한, 계속해서 loop 를 돈다 )
 *
 */
class MaxBinaryHeap {

    values;

    constructor() {
        this.values = [];
    }

    /** mySolution */
    _insert( value ){
        this.values.push( value );

        let currentIndex = this.values.length - 1;

        while ( -1 !== currentIndex ){
            currentIndex = this._bubbleUp( currentIndex );
        }

    }


    /** 해당 index 와 부모 index 를 비교하며, 변경 index 를 반환하는 메서드 */
    _bubbleUp( index ){

        const parentIndex = Math.floor( ( index - 1 ) / 2 );

        if ( 0 > parentIndex || index === parentIndex ){
            return -1;
        }
        else if ( this.values[ index ] > this.values[ parentIndex ] ){
            const temp = this.values[ index ];
            this.values[ index ] = this.values[ parentIndex ];
            this.values[ parentIndex ] = temp;

            return parentIndex;
        }
        return -1;
    }

    /**
     * - 이번거는 내가 코딩한게 훨씬 좋아보임.
     *
     * 1. bubbleUp 메서드의 재사용가능성이 훨씬 높음
     *
     * 2. bubbleUp 메서드가 변경한 index 를 반환하고 있음
     *
     * 단점) bubbleUp 메서드 내부에서 values 의 값을 변경하고 있음
     *      해당 값의 변경을 외부로 빼는게 더 좋을 듯?
     */
    /** goodSolution */
    /** 새로운 Node 삽입 */
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

/** 부모랑만 비교해서 자리를 바꿈! */
console.log( heap.values ) // [ 40 , 35 , 25 , 30 , 15 , 20 , 18 , 10 ]
