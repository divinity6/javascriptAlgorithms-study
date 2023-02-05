console.log( '=========================== set =============================' );

/**
 *  - set 은 업데이트할 위치의 index 와 업데이트할 Node 의 값,
 *    즉, 2개의 파라미터를 받는다
 *
 *  @pseudocode
 *
 *  - 업데이트할 index 와 값을 파라미터로 받는 function 을 정의해야 한다
 *
 *  - node 를 찾지 못했을 경우에는 false 를 반환한다
 *
 *  - node 를 찾았다면 해당 node 값을 해당 값으로 업데이트하고 true 를 반환한다
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

    /** 첫 번째 삽입 */
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

    /** 해당 index 의 Node 반환 */
    get( index ){
        if ( index < 0 || index >= this.length ){
            return null;
        }
        var counter = 0;
        var current = this.head;

        while( counter !== index ){
            current = current.next;

            counter++;
        }

        return current;
    }

    /** mySolution */
    _set( index , val ){

        const current = this.get( index );

        if ( !( current ) ){
            return false
        }

        current.val = val;
        return true;

    }

    /**
     * - 이건 정말 쉽다...
     *
     * --> 예외처리도 전부 get 메서드에서 해주기때문에 따로처리할게 없긴하네...
     *
     * --> 단지 변수명을 잘지어야겟다...
     */
    /** goodSolution */
    /** 해당 index 의 Node 업데이트 */
    set( index , val ){
        var foundNode = this.get( index );

        if ( foundNode ){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
// list.pop();
// list.shift();
console.log( list.unshift( "NO!" ) );
console.log( list.unshift( "222" ) );
// console.log( list.shift() );
console.log( list.set( 2 , "hi" ) );
console.log( "list" , list );
console.log( list.get( 2 ) );

