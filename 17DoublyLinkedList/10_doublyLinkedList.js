console.log( '=========================== doublyLinkedList =============================' );

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

    /** 해당 index 의 Node 업데이트 */
    set( index , val ){
        var foundNode = this.get( index );

        if ( foundNode !== null ){
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
        /** 첫 번째에 삽입한다면 unshift 메서드를 실행시킵니다 */
        if ( 0 === index ){
            return !!( this.unshift( val ) );
        }
        /** 마지막에 삽입한다면 push 메서드를 실행시킵니다 */
        if ( index === this.length ){
            return !!( this.push( val ) );
        }

        var newNode = new Node( val );
        var beforeNode = this.get( index - 1 );
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;

        return true;
    }

    /** 해당 index 번째 Node 제거 */
    remove( index ){
        /** 해당 범위를 벗어날 경우 undefined 를 반환한다 */
        if ( 0 > index || index >= this.length ){
            return undefined;
        }
        /** 첫 번째를 제거한다면 shift 메서드를 실행시킵니다 */
        if ( 0 === index ){
            return this.shift();
        }
        /** 마지막을 제거한다면 pop 메서드를 실행시킵니다 */
        if ( index === this.length - 1 ){
            return this.pop();
        }

        var removedNode = this.get( index );
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;

        return removedNode;

    }

    /**
     * - 반대로 뒤집는 로직의 핵심은
     *
     * - 현재 head 를 tail 로 설정하는 것임
     *
     * @important 여기서 nextLoopedNode ,
     *     prevLoopedNode 는 node.prev , node.next 가 아닌 다음에 반복할 Node 임
     *
     * 1. headNode 를 tail 로 설정하고,
     *
     * 2. 기존 headNode 부터 리스트 끝까지 반복하면서,
     *    다음에 currentNode 가 될 Node 를 nextLoopedNode 에 설정한다
     *
     * 3. currentNode.next 는 prevLoopedNode( 이전의 currentNode )가 된다
     *
     * 4. currentNode.prev 는 nextLoopedNode( 다음의 currentNode )가 된다
     *
     * 5. prevLoopedNode( 이전의 currentNode )는 현재 currentNode 가 되고,
     *
     * 6. 루프가 끝나기전에 현재 currentNode 는 다음의 nextLoopedNode 로 업데이트한다
     *
     */
    reverse(){
        if ( 0 === this.length ){
            return this;
        }

        let currentNode = this.head;

        this.head = this.tail;
        this.tail = currentNode;

        let prevLoopedNode = null;
        let nextLoopedNode;

        for ( let i = 0; i < this.length; i += 1 ){
            nextLoopedNode = currentNode.next;

            currentNode.next = prevLoopedNode;
            currentNode.prev = nextLoopedNode;

            prevLoopedNode = currentNode;
            currentNode = nextLoopedNode;
        }

        return this;

    }
}