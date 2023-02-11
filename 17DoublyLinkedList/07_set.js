console.log( '=========================== set =============================' );

/**
 * - 해당 index 의 Node 업데이트
 *
 * @pseudocode
 *
 * - 함수에 입력된 index 값을 넣은 get 메서드의 결괏값을 받는 변수를 만들어준다
 *  - 만약, get 에서 falsy 값이 아닌 값이 출력되면, 해당 Node 의 값을 입력한 값으로 바꿔준 다음,
 *    true 를 반환한다
 *  - 그렇지 않으면 false 를 반환한다
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

    /** mySolution */
    _set( index , val ){
        let current = this.get( index );

        if ( !current ){
            return false;
        }

        current.val = val;

        return true;

    }

    /**
     * - 이건 내께 더 좋아보이는데...?
     *
     * --> 단지 영어 단어가 훨씬 깔끔하네...
     *
     * --> 영어 단어 연습을 하자!
     */
    /** goodSolution */
    /** 해당 index 의 Node 업데이트 */
    set( index , val ){
        var foundNode = this.get( index );

        if ( foundNode !== null ){
            foundNode.val = val;

            return true;
        }

        return false;
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