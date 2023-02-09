console.log( '=========================== pop =============================' );

/**
 * - 마지막 el 제거
 *
 * @pseudocode
 *
 * - tail 이 없는지 체크해서, 없다면 undefined 를 반환한다
 *
 * - 그렇지 않다면 현재 tail 을 나중에 반환할 수 있도록 변수에 저장한다
 *
 * - 만약 length 가 0 이라면 head 와 tail 이 null 이 되어야 한다
 *
 * - tail 을 prev Node 가 되도록 update 한다
 *
 * - update 된 tail 의 next 를 null 로 설정한다
 *
 * - length 값을 1 뺀다
 *
 * - 삭제한 node 를 반환한다
 */

/**
 *
 * @property { any } val - 해당 데이터
 * @property { any } next - 다음 노드의 참조 정보
 * @property { any } prev - 이전 노드의 참조 정보
 */
class Node {

    val;

    next;

    prev;

    constructor( val ) {

        this.val = val;

        this.next = null;

        this.prev = null;

    }
}

class DoublyLinkedList {

    head;

    tail;

    length;

    constructor() {

        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    /** 마지막에 el 삽입 */
    push( val ){
        var newNode = new Node( val );

        if ( 0 === this.length ){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    /** mySolution */
    _pop(){
        if ( 0 === this.length ){
            return undefined;
        }

        const removeNode = this.tail;

        /**
         * 1. 제거할 갯수가 1개남았다면
         *
         * - 현재 tail 과 head 를 같은 값으로 설정
         *
         * 2. 제거할 갯수가 그이상 남았다면
         *
         * - 이전 값으로 tail 설정
         * */
        if ( 1 === this.length ){
            this.tail = this.head;
        }
        else {
            this.tail = removeNode.prev;
            this.tail.next = null;
        }

        this.length -= 1;

        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return removeNode;
    }

    /**
     * - 내꺼랑 비교하면
     *
     * - 아 삭제한 Node 자체에 연결이 남아있으니깐,
     *   삭제한 Node 의 prev 도 제거를 해주는구나...
     *
     * --> 왜냐면 삭제한 Node 를 반환하기때문에
     *     나중에 sideEffect 가 일어날 가능성도 생각했나봄...
     *
     * --> length 가 1 일경우 명시적으로 null 로 설정해주면 되는구나...
     *     그려면 굳이 뒤에 length 가 0 일 경우 의 조건문을 따로 안걸어도 됨!!
     *
     * --> 논리력을 좀 더 기르자!
     */
    /** goodSolution */
    /** 마지막 el 제거 */
    pop(){
        if ( !this.head ){
            return undefined;
        }

        var popedNode = this.tail;

        if ( 1 === this.length ){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            /** 삭제한 Node 를 반환하기때문에 popedNode 의 연결도 끊어버려야함 */
            popedNode.prev = null;
        }

        this.length--;

        return popedNode;
    }
}

var list = new DoublyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
list.pop();
list.pop();
list.pop();

console.log( "list" , list )