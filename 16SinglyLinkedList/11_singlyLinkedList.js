console.log( '=========================== singlyLinkedList =============================' );


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

    /** 해당 index 번째 Node 제거 */
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

    /** 해당 list를 반대로 뒤징음 */
    reverse(){
        /** 미리 head 를 저장해둔다 */
        var node = this.head;

        /** head 와 tail 의 위치를 바꿈 */
        this.head = this.tail;
        this.tail = node;

        /** 현재 tail 의 next 가 null 이어야 하기때문에 prev 의 초기값으로 null 을 설정 */
        var prev = null;
        var next;

        for ( var i = 0; i < this.length; i++ ){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}
