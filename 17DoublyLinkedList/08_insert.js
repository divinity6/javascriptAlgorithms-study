console.log( '=========================== insert =============================' );

/**
 * - 해당 index 에 Node 를 추가
 *
 * --> 가장 큰 차이는 get 메서드 구현에서 보았듯이,
 *     처음부터 해당 Node 를 찾아가는 것이 아닌, 최적화 구간이 존재한다는 것이다.
 *     ( index 가 무엇인지에 따라 최적화방법이 결정된다는 장점이 존재한다 )
 *
 * @pseudocode
 *
 * - 만약, index 가 0 보다 작거나, length 보다 크다면 false 를 반환한다
 *
 * - 만약, index 가 0 이라면 unshift 메서드를 호출한다
 *
 * - 만약, index 가 length 와 같다면 push 메서드를 호출한다
 *
 * - 그렇지 않다면, get 메서드에 index - 1 을 줘서 prevNode 에 접근한다
 *  - next, prev 프로퍼티를 이용하여 주변 Node 들을 연결시켜준다
 *  - length 값을 1 증가시킨다
 *  - true 를 반환한다
 */

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

    /**
     * - 예외상황을 먼저 코딩해두고 작업하는게 로직이 꼬일일도 없고 매우 좋네
     */
    /** mySolution */
    _insert( index , val ){

        /** 해당 범위를 벗어날 경우 false 를 반환한다 */
        if ( 0 > index || index > this.length ){
            return false;
        }
        /** 첫 번째에 삽입한다면 unshift 메서드를 실행시킵니다 */
        else if ( 0 === index ){
            return !!( this.unshift( val ) );
        }
        /** 마지막에 삽입한다면 push 메서드를 실행시킵니다 */
        else if ( index === this.length ){
            return !!( this.push( val ) );
        }

        const newNode = new Node( val );

        const prevNode = this.get( index - 1 );

        newNode.next = prevNode.next;

        newNode.prev = prevNode;

        prevNode.next = newNode;

        /** 현재 Node 의 다음 Node 이전을 현재 Node 로 설정 */
        newNode.next.prev = newNode;

        this.length += 1;

        return true;
    }

    /**
     * - 변수명을 진짜 잘지어주는게 정말 중요하구나
     *
     * @important 알아보기쉽게 변수를 지어주니깐, 너무 알아보기 편하다
     *
     * --> 내가 작성한 코드를 보면
     *     newNode.next.prev 이딴식으로 작성되어 있는데,
     *     afterNode.prev 이게 훨씬 알아보기 편하네...ㅋㅋ
     */
    /** goodSolution */
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
}

var list = new DoublyLinkedList();
list.push( "1" );
list.push( "2" );
list.insert( 1 , "1.5" );

console.log( list )