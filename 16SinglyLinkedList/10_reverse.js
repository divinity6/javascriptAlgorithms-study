console.log( '=========================== reverse =============================' );

/**
 *  - 해당 list 를 역방향으로 정렬하는 작업
 *
 *  - list 를 따라가면서 순서를 역으로 바꿔나가면 된다
 *
 *  --> singlyLinkedList 는 단방향으로 연결되어 있기 때문에,
 *      tail 부터 진행 할 수는 없고 head 부터 진행해야 한다
 *
 *  --> 이전 Node 의 next 를 저장해둘 임시 변수를 만들어 둬야 한다
 *
 *  --> 그 후 현재 Node 의 next 를 이전 Node 로 변경해주면 된다
 *
 *  @pseudocode
 *
 *  - head 와 tail 의 위치를 서로 바꾼다
 *
 *  - next 라는 변수를 생성한다
 *
 *  - prev 라는 변수를 생성한다
 *
 *  - node 라는 변수를 생성하고, 현재의 head 값을 초기값으로 설정한다
 *
 *  - list 를 loop 를 돌면서
 *
 *  - node 변수의 next 를 next.next 로 설정하는 작업을 반복한다
 *
 *  - 여기서 중요한 점은 현재 node 의 next 를 별도로 next 값에 저장해 둠으로써 그 값이 손실되지
 *    않도록 해야한다는 것이다
 *
 *  - 현재 node 값을 prev 에 저장하고 node 변수에 next 값을 저장한다
 *
 *  @todo 수도 코드를 엄청 헷갈리게 써놨네... 먼말인지 모르게 작성해둠...
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

    /**
     * - 어짜피 변경해야하는 값들은 node 들의 next 값뿐이라는것을 명심하자
     *
     * - 그니깐, 아래 변수중 node 의 next 값을 업데이트하는게 목표
     *
     * --> 즉 next 변수의 next 는 reverse 하기전의 값을 바라보고 있음
     *
     */
    /** mySolution */
    _reverse(){
        /** 전체 길이가 1개 이하일 경우에는 실행하지 않는다 */
        if ( 1 >= this.length ){
            return this;
        }

        /** next 를 변경할 node */
        let node = this.head;

        /** 바꿀 node 의 next 값을 저장해둠 */
        let next = null;

        /** 해당 node 의 next 값을 변경할 이전 node */
        let prev = null;

        /** 해당 list 의 길이까지 반복하며 위치를 바꿈 */
        for( let i = 0; i < this.length; i += 1 ){

            /** === next 값을 설정 === */
            next = node.next;

            node.next = prev;

            /** 다음에 값을 설정하기 위하여 prev, node 값 변경 */
            prev = node;

            node = next;
        }

        /** head 와 tail 의 위치를 바꿈 */
        const temp = this.head;

        this.head = this.tail;

        this.tail = temp;

        return this;
    }

    /**
     * - 로직 자체는 내꺼랑 똑같네..
     *
     * --> 단지 temp 변수를 활용하지 않고
     *     node 변수를 한번 생성해 head 와 tail 두개에 이용하네
     *
     * --> 또한 헷갈리지 않게, next 에 null 값을 두는게 아닌, undefined 로 두면서,
     *     할당할 값과 선언되지 않은 값을 구분해둠
     */
    /** goodSolution */
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

    /**
     * - head 와 tail 만 가지고 loop 를 돌때 제대로 된 것인지 확인하는 작업때문에
     * --> 해당 list 를 array 로 출력해보려고 확인용으로 출력한다
     *      ( reverse() 메서드에서 활용 )
     */
    print(){
        var arr = [];
        var current = this.head;

        while( current ){
            arr.push( current.val );
            current = current.next;
        }
        console.log( arr );
    }
}

var list = new SinglyLinkedList();
list.push( "13" );
list.push( "27" );
list.push( "32" );
list.push( "71" );
list.reverse();
console.log( "list" , list );

