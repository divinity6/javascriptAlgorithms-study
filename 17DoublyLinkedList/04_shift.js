console.log( '=========================== shift =============================' );

/**
 * - 첫 번째 el 제거
 *
 * @pseudocode
 *
 * - 만약, length 가 0 이면 undefined 를 반환한다
 *
 * - head 프로퍼티를 저장해두고 마지막에 반환한다
 *
 * - 만약, length 가 1 인 상태에서 마지막 el 을 제거하면,
 *   head 를 null 로 설정하고, tail 도 null 로 설정한디
 *
 * - 그렇지 않다면, head 를 head.next 값으로 업데이트해준다
 *
 * - 업데이트된 head 의 prev 프로퍼티를 null 로 설정해주고,
 *   삭제한 head 의 next 프로퍼티를 null 로 설정해준다
 *
 * - length 를 1 만큼 감소시키고 삭제한 head 를 반환한다
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

    /** mySolution */
    _shift(){
        if ( 0 === this.length ){
            return undefined;
        }

        const shiftedNode = this.head;

        if ( 1 === this.length ){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;

            this.head.prev = null;

            shiftedNode.next = null;
        }

        this.length -= 1;

        return shiftedNode;

    }

    /**
     * - 이건 내꺼랑 완전 똑같다 ㅋㅋㅋ
     */
    /** goodSolution */
    /** 첫 번째 el 제거 */
    shift(){
        if ( 0 === this.length ){
            return undefined;
        }

        var oldHead = this.head;

        if ( 1 === this.length ){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;


    }
}

var list = new DoublyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
list.shift();
list.shift();
list.shift();

console.log( "list" , list )