console.log( '=========================== insert =============================' );

/**
 *  - set 은 해당 node 를 바꿔치기하는 것이 아닌, 해당 index 에 삽입한다
 *
 *  @pseudocode
 *
 *  - function 을 정의하고 index 와 값을 파라미터로 받는다
 *
 *  - index 가 0 보다 작거나 length 보다 클 경우 false 를 반환한다
 *
 *  - length 와 같을 경우에는 리스트의 맨 마지막에 삽입하면 된다
 *      ( push 메서드를 삽입하면 된다 )
 *
 *  - 마찬가지로 list 의 맨 처음에 삽입할 예정이라면 unshift 메서드를 호출하면된다
 *
 *  - 그게 아니라면, 해당 Node 중간의 어디쯤에 삽입하는 것이므로 index - 1 로 get 메서드를 호출하면 된다
 *
 *  - get 으로 반환된 Node 의 next 가 새로운 Node 를 바라보도록 하면 된다
 *
 *  - 그리고 새로운 Node 의 next 가 get 으로 반환된 Node 의 next 를 바라보도록 하면 된다
 *
 *  - 이제 length 를 1 만큼 증가시키고 true 를 반환시키면 된다
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

    /** 해당 index 의 Node 업데이트 */
    set( index , val ){
        var foundNode = this.get( index );

        if ( foundNode ){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /** mySolution */
    _insert( index , val ){
        if ( 0 > index || index > this.length ){
            return false;
        }

        const newNode = new Node( val );

        /** 마지막에 삽입한다면 push 메서드를 실행시킵니다 */
        if ( index === this.length ){
            this.push( val );

            return true;
        }

        /** 첫 번째에 삽입한다면 unshift 메서드를 실행시킵니다 */
        else if ( 0 === index ){
            this.unshift( val );

            return true;
        }

        /** 그 외의 경우에는 index 를 증가시키면서 찾아갑니다 */

        let currentIndex = 0;

        let prevNode = this.head;

        let nextNode = this.head;

        while( currentIndex !== index ){
            currentIndex += 1;
            prevNode = nextNode;
            nextNode = nextNode.next;
        }

        prevNode.next = newNode;

        newNode.next = nextNode;

        this.length += 1;

        return true;
    }

    /**
     * - 기존의 get 메서드에 index - 1 값을 넘겨서 찾을 생각을 못했네...
     *
     * --> 기존 get 메서드까지 활용한 코드!
     *
     * --> 이렇게하면, 굳이 while 로 prev 값을 찾을 필요가 없겠네...
     *     ( get 으로 prev 값을 받아온 것이기 때문... )
     */
    /** goodSolution */
    insert( index , val ){
        /** 해당 범위를 벗어날 경우 false 를 반환한다 */
        if ( index < 0 || index > this.length ){
            return false;
        }

        /** 마지막에 삽입한다면 push 메서드를 실행시킵니다 */
        if ( index === this.length ){
            return !!( this.push( val ) );
        }
        /** 첫 번째에 삽입한다면 unshift 메서드를 실행시킵니다 */
        if ( 0 === index ){
            return !!( this.unshift( val ) );
        }

        var newNode = new Node( val );

        /** 이전 Node 를 찾아 저장 */
        var prev = this.get( index - 1 );

        /** 이전 Node 의 다음 정보를 저장 */
        var temp = prev.next;

        prev.next = newNode;

        newNode.next = temp;

        this.length++;

        return true;

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
console.log( list.insert( 0 , "test" ) );
console.log( "list" , list );
// console.log( "list" , list.get( 2 ) );

