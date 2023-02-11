console.log( '=========================== get =============================' );

/**
 * - 해당 index 의 node 를 반환
 *
 * - SinglyLinedList 처럼 코딩할 수 있지만,
 *   DoublyLinkedList 에서는 최적화가 가능하다
 *
 * - DoublyLinkedList 는 SinglyLinedList 와 반대로 뒤에서부터 prev 도 가능하다
 * --> 따라서, 입력된 index 에 따라서, 앞에서부터 찾을지 뒤에서 부터 찾을지를 결정할 수 있다
 *
 * - 리스트의 크기가 크면 클수록 장점이 된다
 *
 * @pseudocode
 *
 * - 해당 index 가 0 보다 작은지, 해당 길이 보다 큰지를 체크해 해당 범위에 없으면 null 을 반환한다
 *
 * - 만약, index 가 list length 의 절반보다 작거나, 같다면,
 *  - head 로 부터 next 를 이용하여 Node 를 찾는다
 *  - 해당 Node 를 반환한다
 *
 * - 만약, index 가 list length 의 절반보다 크다면
 * - tail 로 부터 prev 를 이용하여 Node 를 찾는다
 * - 해당 Node 를 반환한다
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

    /**
     * - 오 prev 의 존재로 인해서,
     *   분할정복으로 값을 구할 수 있구나!!
     *
     * - 해당 index 가 length 의 중간 값보다 크거나 작을 경우,
     *   앞에서 찾을지, 뒤에서 찾을지를 결정할 수 있네
     *
     * --> DoublyLinkedList 는 SinglyLinedList 보다 리스트의 길이가 늘어날때,
     *     최적화를 할 수 있겠구나...
     */
    /** mySolution */
    _get( index ){
        if ( 0 > index || index > this.length - 1 ){
            return null;
        }

        const findNext = Math.floor( this.length / 2 ) >= index;

        let counter;
        let current;

        if ( findNext ){
            counter = 0;

            current = this.head;

            while( index !== counter ){

                current = current.next;

                counter += 1;
            }
        }
        else {
            counter = this.length - 1;

            current = this.tail;

            while( index !== counter ){

                current = current.prev;

                counter -= 1;
            }
        }

        return current;
    }

    /**
     * - 내꺼랑 그냥 완전똑같네...ㅋㅋ
     */
    /** goodSolution */
    /** 해당 index 의 node 를 반환 */
    get( index ){
        /** -1 이아닌, >= 연산자를 써도 되긴하지..ㅋ */
        if ( 0 > index || index >= this.length ){
            return null;
        }

        var count , current;

        if ( index <= this.length / 2 ){
            count = 0;
            current = this.head;

            while( count !== index ){
                current = current.next;
                count++;
            }
        }
        else {
            count = this.length - 1;
            current = this.tail;

            while( count !== index ){
                current = current.prev;
                count--;
            }
        }

        return current;
    }
}

var list = new DoublyLinkedList();
list.push( "1" );
list.push( "2" );
list.push( "3" );
list.push( "4" );
list.push( "5" );
list.push( "6" );

console.log( list.get( 3 ) )