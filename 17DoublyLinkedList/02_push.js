console.log( '=========================== push =============================' );

/**
 * - 마지막에 el 삽입
 *
 * @pseudocode
 *
 * - 파라미터를 받아 새로운 Node 를 생성한다
 *
 * - head 가 null 인지 체크한다
 *
 * - null 일 경우, head 와 tail 이 새로 맨든 Node 로 설정되어야 한다
 *
 * - 그렇지 않고, 현재 list 에 무언가가 있다면, 현재 tail 의 next 를 새로운 Node 로 설정한다
 *
 * - 새로운 Node 의 prev 프로퍼티를 이전 tail 로 설정한다
 *
 * - 그리고 tail 프로퍼티를 새로운 Node 로 업데이트 시켜준다
 *
 * - list 의 length 를 1 증가시키고 list 를 반환한다
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

    /** mySolution */
    /** 마지막에 el 삽입 */
    _push( val ){

        const newNode = new Node( val );
        /** head 가 존재하지 않을경우 초깃값으로 head 설정 */
        if ( !( this.head ) ){
            this.head = newNode;
        }
        /** head 가 존재할 경우 기존 tail 을 변경 */
        else{
            this.tail.next = newNode;

            newNode.prev = this.tail;
        }

        this.tail = newNode;

        this.length += 1;

        return this;
    }

    /**
     * - 내 코드랑 같네...
     *
     * --> 단지 코딩스타일 차이 ㅋㅋㅋ
     */
    /** goodSolution */
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
}

var list = new DoublyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );

console.log( "list" , list )