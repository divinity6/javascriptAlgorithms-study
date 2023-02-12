console.log( '=========================== queue =============================' );

/**
 * - Singly Linked List 로 구현한 Queue
 *
 * - 이렇게 첫 번째를 제거하고, 마지막에 추가하는 이유는
 *   마지막에 삭제하려면, 전체 list 를 loop 하면서 새로운 tail 을 설정해야하는 작업을
 *   하지 않기 위함이다
 *   ( 상수시간으로 제거 및 추가 하려고 )
 *
 * - 그래서 queue 이기 때문에 enqueue 와 dequeue 로 메서드 이름을 지었다
 *
 * - dequeue 는 pop 과 같은 개념이고 같은 방식으로 동작한다
 */

/**
 *
 * @function Enqueue
 *
 * @pseudocode
 *
 * - 이 함수는 파라미터를 하나 받는다
 *
 * - 파라미터 값으로 new Node 를 생성한다
 *
 * - 만약, queue 안에 Node 가 없다면, new Node 를 first , last 프로퍼티로 설정한다
 *
 * - 그렇지 않다면, 현재 last.next 가 new Node 가 되도록 설정하고, last 포인터를 new Node 로 옮긴다
 *
 * - size 를 1증가시킨다
 *
 * - size 를 반환한다
 */

/**
 *
 * @function Dequeue
 *
 * @pseudocode
 *
 * - 만약, queue Node 가 존재하는지 체크해 없다면 Null 을 반환한다
 *
 * - 그렇지 않다면, first 프로퍼티를 변수에 저장하고 마지막에 반환한다
 *
 * - 만약, Node 가 1개 밖에 존재하지 않는다면 last 프로퍼티를 Null 로 설정한다
 *
 * - 만약, Node 가 1개 보다 많은 경우에는 first 프로퍼티를 first.next 로 설정한다
 *
 * - size 값을 1 감소시킨다
 *
 * - size 값을 반환한다
 */


/**
 *
 * @property { any } val - 해당 데이터
 * @property { any } next - 다음 노드의 참조 정보
 */
class Node {
    constructor( value ) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** 맨끝에 el 삽입 */
    enqueue( val ){
        var newNode = new Node( val );

        if ( !( this.last ) ){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;

        return this.size;
    }

    /** 맨처음의 el 제거 */
    dequeue(){
        if ( !( this.first ) ){
            return null;
        }

        const temp = this.first;

        /** 현재 Node 가 하나만 존재하는지 체크! */
        if ( this.first === this.last ){
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;

        return temp.value;
    }
}