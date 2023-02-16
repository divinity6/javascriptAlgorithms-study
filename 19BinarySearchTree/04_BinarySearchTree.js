console.log( '=========================== BinarySearchTree =============================' );

/**
 * -
 *
 * @pseudocode
 *
 * -
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

}

var tree = new BinarySearchTree();

tree.root = new Node( 10 );
tree.root.right = new Node( 15 );
tree.root.left = new Node( 7 );