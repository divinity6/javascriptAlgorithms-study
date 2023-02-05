console.log( '=========================== remove =============================' );

/**
 *  - remove 는 index 를 파라미터로 받아서 해당 index 의 Node 를 제거하고 주위의 Node 를 다시 연결한다
 *
 *  @pseudocode
 *
 *  - index 를 파라미터로 받는 function 을 정의하고, index 가 0 보다작거나 length 보다 클 경우 undefined 를 반환한다
 *
 *  - index 가 length - 1 과 같을 경우 pop 메서드를 호출한다
 *
 *  - index 가 0 일 경우에는 shift 메서드를 호출한다
 *
 *  - 그외에는 index - 1 값을 이용하여 get 메서드로 이전 Node 값을 얻는다
 *
 *  - 이전 Node 의 next 값을  새로운 Node 의 next 로 연결하고 이전 Node 의 next 는 새로운 Node 를 바라보도록 한다
 *
 *  - length 를 1 감소시키고 제거된 Node 를 반환한다
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

    /** 해당 index 에 Node 를 추가 */
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

    /** mySolution */
    _remove( index ){
        if ( 0 > index || index >= this.length ){
            return false;
        }

        /** 마지막을 제거할 경우 pop 메서드 호출 */
        if ( index === ( this.length - 1 ) ){
            return !!( this.pop() );
        }

        /** 첫 번째를 제거할 경우 shift 메서드 호출 */
        if ( 0 === index ){
            return !!( this.shift() );
        }

        /** 그 외의 경우에는 중간의 Node 를 제거 */
        const prevNode = this.get( index - 1 );

        const removeNode = prevNode.next;

        /** 이전 Node 의 next 를 삭제할 Node 의 next 값과 연결 */
        prevNode.next = removeNode.next;

        this.length -= 1;

        return true;
    }

    /**
     * - 내 솔루션과 반환값만 다르네
     *
     * --> 반환값만 맞춰주면 이건 간단하네 ㅋ
     */
    /** goodSolution */
    remove( index ){
        /** 해당 범위를 벗어날 경우 undefined 를 반환한다 */
        if ( index < 0 || index >= this.length ){
            return undefined;
        }

        /** 첫 번째를 제거할 경우 shift 메서드 호출 */
        if ( index === 0 ){
            return this.shift();
        }

        /** 마지막을 제거할 경우 pop 메서드 호출 */
        if ( index === this.length - 1 ){
            return this.pop();
        }

        /** 이전 Node 를 찾는다 */
        var previousNode = this.get( index - 1 );

        var removed = previousNode.next;

        /** 이전 Node 의 next 를 삭제할 Node 의 next 값과 연결 */
        previousNode.next = removed.next;

        this.length--;

        return removed;

    }
}

var list = new SinglyLinkedList();
list.push( "HELLO" );
list.push( "GOODBYE" );
list.push( "NOO!!!" );
console.log( list.unshift( "NO!" ) );
console.log( list.unshift( "222" ) );
console.log( list.set( 2 , "hi" ) );
console.log( list.remove( 3 ) );
console.log( "list" , list );

