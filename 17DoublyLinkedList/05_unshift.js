console.log( '=========================== unshift =============================' );

/**
 * - 첫 번째 el 삽입
 *
 * @pseudocode
 *
 * - new Node 를 생성한다
 *
 * - 만약, length 가 0 이라면,
 *  - head 와 tail 을 null 로 만든다
 *
 * - 그렇지 않으면,
 *  - head.prev 가 new Node 가 되도록 한다
 *  - new Node.next 가 head 가 되도록 한다
 *  - head 를 new Node 로 업데이트한다
 *
 * - length 길이를 1 증가시키고, list 를 반환한다
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

    /** mySolution */
    _unshift( val ){

        const newNode = new Node( val );

        if ( 0 === this.length ){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;

            this.head.prev = newNode;

            this.head = newNode;
        }

        this.length += 1;

        return this;
    }

    /**
     * - 이것도 내 답변이랑 똑같네
     */
    /** goodSolution */
    /** 첫 번째 el 삽입 */
    unshift( val ){

        var newNode = new Node( val );

        if ( 0 === this.length ){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;

            newNode.next = this.head;

            this.head = newNode;
        }

        this.length++;

        return this;
    }
}

var list = new DoublyLinkedList();
list.push( "1" );
list.push( "2" );
list.push( "3" );
list.shift();
list.shift();
list.unshift( "4" );

console.log( "list" , list )