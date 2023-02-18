console.log( '=========================== breathFirstSearch =============================' );

/**
 * - 너비 우선 탐색
 *
 * @pseudocode
 *
 * -
 *
 */

/**
 *
 * @property { any } value - 해당 데이터
 * @property { any } left - 트리의 왼쪽 자식
 * @property { any } right - 트리의 오른쪽 자식
 */
class Node {

    value;

    left;

    right;

    constructor( value ) {

        this.value = value;

        this.left = null;

        this.right = null;

    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }


    /** 새로운 Node 삽입 */
    insert( value ){

        var newNode = new Node( value );

        if ( null === this.root ){
            this.root = newNode;
            return this;
        }
        else {

            var current = this.root;

            /**
             * - while 에 true 를 넣고,
             *   while 문안에서 넣고 리턴시키는게 편하긴 하네...
             */
            while( true ){
                if ( value === current.value ){
                    return undefined;
                }

                if ( value < current.value ){

                    if ( null === current.left ){
                        current.left = newNode;
                        return this;
                    }

                    current = current.left;
                }
                else {
                    if ( null === current.right ){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }

    }

    /** goodSolution */
    find( value ){
        if ( null === this.root ){
            return null;
        }

        var current = this.root;
        var found = false;

        while( current && !( found ) ){
            if ( value < current.value ){
                current = current.left;
            }
            else if ( value > current.value ){
                current = current.right;
            }
            else {
                found = true;
            }
        }

        if ( !found ){
            return null;
        }

        return current;
    }

    /** 해당 el 을 포함하는지 체크 */
    contains( value ){
        if ( null === this.root ){
            return false;
        }

        var current = this.root;
        var found = false;

        while( current && !( found ) ){
            if ( value < current.value ){
                current = current.left;
            }
            else if ( value > current.value ){
                current = current.right;
            }
            else {
                return true;
            }
        }

        return false;
    }

    /** mySolution */
    /** 너비 우선 탐색 */
    _breadthSearch(){

        if ( !( this.root ) ){
            return [];
        }

        function _helper( queue , visited ) {

            if ( 0 === queue.length ){
                return visited;
            }

            const node = queue.shift();
            visited.push( node.value );

            node.left && queue.push( node.left );
            node.right && queue.push( node.right );

            return _helper( queue , visited );
        }

        return _helper( [ this.root ] , [] );
    }

    /**
     * - 나는 재귀식으로 작성했고, 여기서는 일반적인 반복문으로 작성했네
     *
     * --> 둘 다 괜찮아보임
     */
    /** goodSolution */
    breadthSearch(){
        var node = this.root;
        var data = [];
        var queue = [];

        queue.push( node );

        while( queue.length ){
            node = queue.shift();
            data.push( node.value );

            if ( node.left ){
                queue.push( node.left );
            }
            if ( node.right ){
                queue.push( node.right );
            }
        }
        return data;
    }
}

var tree = new BinarySearchTree();

tree.insert( 10 );
tree.insert( 5 );
tree.insert( 15 );
tree.insert( 3 );
tree.insert( 12 );
tree.insert( 8 );
tree.insert( 20 );

console.log( tree.breadthSearch() );
// [ 10 , 5 , 15 , 3 , 8 , 12 , 20 ]