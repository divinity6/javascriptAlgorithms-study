console.log( '=========================== pop =============================' );

/**
 *  - Singly Linked List 에서는 역방향 포인터를 가지고 있지 않기 때문에,
 *    처음부터 리스트를 계속 따라가야 한다
 *
 *  @pseudocode
 *
 *  - pop 메서드를 정의한다( 어떤 값도 받아들이지 않는다 )
 *  --> list 에 아무것도 없을 경우 Undefined 를 반환한다
 *
 *  - 해당 list 가 비어있는지 확인하려면 head 가 null 인지, length 가 0 인지 확인하면 된다
 *
 *  - 비어 있을 경우 tail 까지 전체 list 를 추적해야한다
 *
 *  - 계속 추적하는 동시에 이전 Node 가 어떤 값이었는지 항상 추적해야한다
 *
 *  - 그리고 이전 Node 를 tail 로 설정하고 next 값을 null 로 업데이트한다
 *
 *  - 그 후 length 를 1 감소시키고 삭제한 Node 를 반환한다
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
     * - 내 솔루션은 진짜 초보틱하다...ㅋㅋ
     */
    /** mySolution */
    _pop(){
        /** 첫 번째를 제거하거나, 더 이상 제거할 수 없을 경우 */
        if ( this.tail === this.head || !this.head ){

            this.head = null;

            this.tail = null;

            this.length = 0;

            return;
        }

        /** pre 를 반복하면서 해당 tail 을 제거함 */
        let pre = this.head;

        /**
         * - 해당 node 의 next 가 tail 과 일치하지 않을 경우 tail 을 찾을때까지
         * --> 해당 node 들의 next 를 확인함
         * */
        while( pre.next !== this.tail ){
            pre = pre.next;
        }

        pre.next = null;

        this.tail = pre;

        this.length -= 1;

        return this;
    }

    /**
     * - 아...
     *
     * --> 무쳣네
     *
     * --> 코드가 정말 심플하구나...
     *
     * --> 그치, 현재 current 와, 이전을 가르키는 newTail 변수를 이용하면
     *     훨씬 깔끔한 로직으로 반복을 돌 수가 있구만...
     *
     * --> next 정보를 한 객체가 가지고 있으니깐, 딱 2개의 변수로 동일한 일을 할 수가 있네...
     *
     * --> 그러나, 마지막 head 와 tail 이 0 개일때 솔루션은 마음에들지 않네
     *
     * --> 이런건 처음에 예외처리해주는게 더 좋아보임
     */
    /** goodSolution */
    pop(){
        if ( !this.head ){
            return undefined;
        }
        /** current 는 다음 Node 를 가르키고 */
        var current = this.head;

        /** newTail 은 항상 current 가 이전에 가르키던 Node 를 가르키네... --> prev */
        var newTail = current;

        while( current.next ){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;

        this.tail.next = null;

        this.length--;

        /** length 가 하나도 없을 경우에는 head 또한 0 으로 설정 */
        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return current;
    }


}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
list.pop();

console.log( "list" , list )