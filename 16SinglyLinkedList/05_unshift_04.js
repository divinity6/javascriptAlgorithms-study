console.log( '=========================== unshift =============================' );

/**
 *  - 리스트의 맨 앞에 Node 를 추가하는 방법
 *  @pseudocode
 *
 *  - 리스트의 시작 위치에 추가하려는 Node 를 파라미터로 받는 function 을 정의하고,
 *
 *  - push() 와 같이 새로운 Node 를 정의한다
 *
 *  - head 가 있는지 체크해서 head 가 없을 경우, head 와 tail 모두 새로운 Node 를 가르키도록 설정한다
 *
 *  - Node 가 이미 있을 경우, 새롭게 생성된 Node 의 next 를 현재의 head 값으로 설정하고,
 *
 *  - head 가 새롭게 생성된 Node 를 가르키도록 한 다음 length 를 1 증가 시킨 후 list 전체를 반환한다
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

    /** 첫 번째 제거 */
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

    /** mySolution */
    _unshift( val ){

        const newNode = new Node( val );

        if ( !this.tail ){
            this.tail = newNode;
        }

        /** 기존 Node 가 존재하면 기존 Node 를 다음 Node 로 설정 */
        if ( this.head ){
            newNode.next = this.head;
        }

        this.head = newNode;

        this.length += 1;

        return this;

    }

    /**
     * - 그치, head 만 존재하지 않아도 tail 이 없다는뜻이니깐,
     *   굳이 tail 이 없는지 찾아볼 필요가 없지
     *
     * --> tail 만 존재한다는 경우의 수는 없기 때문...
     *
     * --> 이게 훨씬 알아보기 쉽네...
     */
    /** goodSolution */
    unshift( val ){
        var newNode = new Node( val );

        if ( !this.head ){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }


        this.length++;

        return this;
    }

}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
list.pop();
list.shift();
console.log( list.unshift( "NO!" ) );
console.log( list.unshift( "222" ) );
console.log( list.shift() );

console.log( "list" , list );