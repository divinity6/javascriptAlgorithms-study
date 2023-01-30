console.log( '=========================== shift =============================' );

/**
 *  - head 가 가르키고 있는 Node 를 제거하고 다음 Node 를 가르키도록 하면된다
 *
 *  --> 맨 앞의 것을 제거하면 모든 list 의 index 를 수정해야하는 Array 와 비교할때
 *      항상 동일한 시간에 처리할 수 있다
 *
 *  --> Array 는 물결 효과( Reflect )로 Node 를 제거할 때마다 list 를 따라가며 지속적으로 index 들을 계속 변경해야 한다
 *
 *  @pseudocode
 *
 *  - Node 가 존재하지 않을 경우 undefined 를 반환한다
 *
 *  - Node 가 존재할 경우, 현재의 Head 속성을 변수에 저장하고,
 *    현재 head 의 next Node 를 가르키도록 head 속성을 업데이트한 후
 *
 *  - length 를 1 만큼 감소시키고
 *
 *  - 이전 Node 를 반환하면 된다
 *
 */

/**
 *
 * @property { any } val - 해당 데이터
 * @property { any } next - 다음 노드의 참조 정보
 */
class Node {

    constructor( val ) {

        this.val = val;

        this.next = null;

    }
}

class SinglyLinkedList {

    constructor() {

        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    /**
     * - 마지막에 el 삽입
     */
    push( val ){

        const newNode = new Node( val )

        if ( !this.head ){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    /**
     * - 마지막 el 제거
     */
    pop(){
        if ( !this.head ){
            return undefined;
        }

        var current = this.head;

        var newTail = current;

        while( current.next ){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;

        this.tail.next = null;

        this.length--;
        
        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    /**
     * - 첫 번째 Node 제거
     */
    /** mySolution */
    _shift(){
        if ( !this.head ){
            return undefined;
        }

        const prevHead = this.head;

        this.head = this.head.next;

        this.length -= 1;

        if ( 0 === this.length ){
            this.tail = null;
        }

        return prevHead;

    }

    /**
     * - 변수에 저장해 두고 많이 써먹는게 안헷갈리겟네...
     *
     * --> 이건 너무쉽긴하네 ㅋㅋㅋ
     */
    /** goodSolution */
    shift(){
        if ( !this.head ){
            return undefined;
        }

        var currentHead = this.head;

        this.head = currentHead.next;

        this.length--;

        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
list.pop();
list.shift();
console.log(list.shift());

console.log( "list" , list );