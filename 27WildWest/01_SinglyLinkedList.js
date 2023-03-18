console.log( '=========================== SinglyLinkedList =============================' );

class Node{

    val;

    next;

    constructor( val ){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList{

    head;

    tail;

    length;

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param { number | string } val
     *
     * @return { SinglyLinkedList }
     */
    push( val ){
        const newNode = new Node( val );

        if ( 0 === this.length ){
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        this.length += 1;

        return this;
    }

    /**
     * @return { Node | void } - removeNode
     */
    pop(){
        if ( 0 === this.length ){
            return;
        }

        let removeNode = this.head;
        let newTailNode = removeNode;

        for ( let count = 0; count < this.length - 1; count += 1 ){
            newTailNode = removeNode;
            removeNode = removeNode.next;
        }

        this.tail = newTailNode;

        this.tail.next = null;

        this.length -= 1;

        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return removeNode;
    }

    shift(){
        if ( 0 === this.length ){
            return;
        }
        else if ( 1 === this.length ){
            this.tail = null;
        }

        const beforeHead = this.head;
        this.head = beforeHead.next;

        this.length -= 1;

        return beforeHead;
    }

    unshift( val ){
        const newNode = new Node( val );
        if ( 0 === this.length ){
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;

        this.length += 1;

        return this;
    }

    /**
     * @param { number } index
     * @return { Node | null }
     */
    get( index ){
        if ( 0 === this.length || 0 > index || index >= this.length ){
            return null;
        }

        let foundNode = this.head;
        for ( let count = 0; count < index; count += 1 ){
            foundNode = foundNode.next;
        }
        return foundNode;
    }

    /** 해당 index 의 Node 업데이트 */
    set( index , val ){
        const foundNode = this.get( index );

        if ( foundNode ){
            foundNode.value = val;
            return true;
        }
        return false;
    }

    /**
     * @param { number } index
     * @param { number | string } val
     *
     * @return { boolean }
     */
    insert( index , val ){
        if ( 0 > index || index > this.length ){
            return false;
        }
        else if ( 0 === index ){
            this.unshift( val );
            return true;
        }
        else if ( index === this.length ){
            this.push( val );
            return true;
        }

        const newNode = new Node( val );
        const prevNode = this.get( index - 1 );
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;

        this.length += 1;

        return true;
    }

    remove( index ){
        if ( 0 === this.length || 0 > index || index >= this.length ){
            return;
        }

        if ( 0 === index ){
            return this.shift();
        }
        else if ( this.length - 1 === index ){
            return this.pop();
        }

        const beforeNode = this.get( index - 1 );
        const removeNode = beforeNode.next;
        beforeNode.next = removeNode.next;
        this.length -= 1;

        return removeNode;
    }

    rotate( index ){
        if ( 0 === this.length ){
            return null;
        }

        const _startIndex = index % this.length;
        let _endIndex;
        let startIndex = ( 0 === _startIndex ) ? index : _startIndex;
        let endIndex = startIndex - 1;

        if ( 0 > index ){
            startIndex = this.length + startIndex;
            _endIndex =  startIndex - 1;
            endIndex = 0 > _endIndex ? ( this.length - 1 ) : _endIndex;
        }

        let currentNode = this.head;
        const beforeHead = this.head;
        let foundNode = null;

        for ( let count = 0; count < this.length; count += 1 ){
            if ( startIndex === count ){
                this.head = currentNode;
                foundNode = currentNode;
            }
            else if ( endIndex === count ){
                this.tail = currentNode;
            }

            if ( ( this.length - 1 ) === count ){
                currentNode.next = beforeHead;
            }
            currentNode = currentNode.next;
        }

        this.tail.next = null;

        return foundNode;
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next;

        for ( let count = 0; count < this.length; count += 1 ){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}
