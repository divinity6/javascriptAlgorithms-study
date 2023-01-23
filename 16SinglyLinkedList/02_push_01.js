console.log( '=========================== push =============================' );

/**
 *  - linked list 는 단지 노드들의 집합이라는 것을 기억해야 한다
 *
 *  @pseudocode
 *
 *  - 주어진 값을 받아들인 후 그것을 이용해 새로운 Node 를 생성한다
 *
 *  - 만약, head 가 없다면 해당 list 가 비어있다는 것을 의미한다
 *
 *  - 따라서, head 와 tail 모두 새로운 Node 를 가르키게 하면 된다
 *
 *  - 만약, list 가 비어있지 않다면 기존의 마지막 Node 의 next 를 새롭게 생성된 Node 를 가르키게 하고,
 *    tail 이 새롭게 생성된 Node 를 가르키도록 설정하면된다
 *
 *    ( 답지를 다알려주네 ㅋㅋㅋ )
 *
 *  - 마지막으로 length 를 1 증가시키면 된다
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
/** mySolution */
class SinglyLinkedList {

    constructor() {

        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push( val ){

        const node = new Node( val )

        /** head 가 존재하지 않으면 초기값에 추가 */
        if ( !this.head ){
            this.head = node;
        }
        /** 기존 마지막 값의 다음을 들어온 Node 로 설정 */
        else {
            /** 여기의 tail 은 기존 tail */
            this.tail.next = node;
        }

        /** 마지막 값을 해당 Node 로 설정 */
        this.tail = node;

        this.length += 1;

    }

}

/**
 * - 내꺼 코드랑 로직이똑같네 ㅋㅋ
 *
 * --> 거기서 거기...
 */
/** goodSolution */
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

}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );

console.log( "list" , list )