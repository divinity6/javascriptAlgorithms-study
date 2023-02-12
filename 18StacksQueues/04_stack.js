console.log( '=========================== stack =============================' );

/**
 * - Singly Linked List 로 구현한 Stack
 *
 * - 이렇게 첫 번째를 제거하고, 추가하는 이유는
 *   전체 list 를 loop 하면서 새로운 tail 을 설정하지 않기 때문이다
 *   ( 상수시간으로 제거 및 추가 하려고 )
 *
 * - 그래도 stack 이기 때문에 push 와 pop 으로 메서드 이름을 지었다
 */

/**
 *
 * @function Push
 *
 * @pseudocode
 *
 * - value 를 파라미터로 받는 function 을 정의한다
 *
 * - 해당 value 로 new Node 를 생성한다
 *
 * - 만약, stack 에 Node 가 존재하지 않는다면, first 와 last 프로퍼티에
 *   new Node 를 설정한다
 *
 * - 만약, Node 가 1개 이상 있다면, 현재 first 프로퍼티를 저장할 변수를 생성한다
 *
 * - new Node 로 현재 first 프로퍼티를 업데이트한다
 *
 * - this.first.next 값에 이전에 저장한 변수 값을 설정한다
 *
 * - size 값을 1 증가시킨다
 *
 * - size 값을 반환한다
 */

/**
 *
 * @function Pop
 *
 * @pseudocode
 *
 * - pop 이라는 이름의 함수를 정의한다
 *
 * - stack 에 Node 가 존재하는지 체크해 없다면 Null 을 반환한다
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

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** 처음에 el을 추가( Array 의 shift ) */
    push( val ){
        var newNode = new Node( val );

        if ( !( this.first ) ){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.size++;

        return this.size;
    }

    /** 처음에 el을 제거( Array 의 unshift ) */
    pop(){
        if ( !( this.first ) ){
            return null;
        }

        var temp = this.first;

        /** 현재 Node 가 하나만 존재하는지 체크( 이렇게하면 코드가 간단해지네...ㅋㅋ ) */
        if ( this.first === this.last ){
            this.last = null;
        }
        this.first = this.first.next;

        this.size--;
        return temp.value;
    }
}