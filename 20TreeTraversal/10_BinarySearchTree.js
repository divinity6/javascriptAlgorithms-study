console.log( '=========================== BinarySearchTree =============================' );

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

    /** 해당 값을 포함하는 Node 반환 */
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

    /** 해당 Node 를 포함하는지 체크 */
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

    /** 너비 우선 탐색 */
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

    /** 깊이 우선 탐색 - 전위 순회 */
    preOrder(){
        var data = [];
        var current = this.root;
        function traverse( node ){
            data.push( node.value );
            if ( node.left ){
                traverse( node.left );
            }
            if ( node.right ){
                traverse( node.right );
            }
        }
        traverse( current );
        return data;
    }

    /** 깊이 우선 탐색 - 후위 순회 */
    postOrder(){
        var data = [];
        function traverse( node ){
            if ( node.left ){
                traverse( node.left );
            }
            if ( node.right ){
                traverse( node.right );
            }
            data.push( node.value );
        }
        traverse( this.root );
        return data;
    }

    /** 깊이 우선 탐색 - 중위 순회 */
    inOrder(){
        var data = [];
        function traverse( node ){
            if ( node.left ){
                traverse( node.left );
            }
            data.push( node.value );
            if ( node.right ){
                traverse( node.right );
            }
        }
        traverse( this.root );
        return data;
    }
}