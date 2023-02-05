console.log( '=========================== get =============================' );

/**
 *  - 원하는 node 를 즉각적으로 반환할 수는 없다
 *
 *  - next 메서드를 통해서 계속해서 접근해야한다
 *
 *  @pseudocode
 *
 *  - 숫자 index 를 파라미터로 받는다
 *
 *  - index 범위값을 벗어나면 null 을 반환한다
 *    ( 인덱스가 음수이거나 length 보다 크거나 )
 *
 *  - loop 를 통해 index 가 지정하는 위치에 이를때까지 반복해서 이동한 다음,
 *    index 위치에 있는 Node 를 반환한다
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

    /** mySolution */
    _get( index ){
        /** 들어온 index 가 음수거나, 현재 길이보다 크다면 null 을 반환 */
        if ( 0 > index || index > this.length ){
            return null;
        }

        let currentIndex = 0;

        let currentNode = this.head;

        /**
         * - 들어온 index 보다 작을때까지만 반복
         * */
        while( index > currentIndex ){

            currentNode = currentNode.next;

            currentIndex += 1;
        }

        return currentNode;
    }

    /**
     * - 맞네 length 번째 index 는 없으니깐 >= 연산자를 써야겟네
     *
     * --> 아 맞네 !== 비교연산자로 같지 않을 경우에 반복하면 되겠네
     */
    /** goodSolution */
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
console.log( "list" , list );
console.log( list.get( 3 ) );

