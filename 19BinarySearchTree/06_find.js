console.log( '=========================== find =============================' );

/**
 * - 해당 Node 탐색
 *
 * @pseudocode
 *
 * - root 에서 출발한다
 *  - root 이 있는지 체크해서 있는지 체크하고, 없으면 그대로 끝낸다
 *  - 만약, root 가 존재한다면, 우리가 찾는 값과 root 가 같은지 체크한다.
 *    ( 찾았다면 그 값을 반환한다 )
 *  - 만약, root 의 값과 찾는 값이 일치하지 않는다면, 찾는 값과 root 의 값을 비교한다
 *  - 만약, 찾는 값이 더 크다면
 *      - Node.right 의 value 가 일치하는지 체크한다
 *      - 발견하지 못한다면, 이 단계를 반복한다( while )
 *  - 만약, 찾는 값이 더 작다면
 *      - Node.left 의 value 가 일치하는지 체크한다
 *      - 발견하지 못한다면, 이 단계를 반복한다( while )
 *
 *  - 만약, 찾는 값이 없다면 null 을 반환한다
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

    /** mySolution */
    /** 해당 Node 탐색 */
    _find( value ){
        if ( !( this.root ) ){
            return null;
        }

        let foundNode = this.root;

        while( foundNode ){
            if ( foundNode.value === value ){
                return foundNode;
            }
            else if ( foundNode.value > value ){
                foundNode = foundNode.left;
            }
            else if ( foundNode.value < value ){
                foundNode = foundNode.right;
            }
        }

        return null;
    }

    /**
     *
     *  --> 이번거는 내꺼로직이 더 좋아보임
     *      ( while 문 안에서 반환하는 것은 별로이려나...? )
     */
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

}

var tree = new BinarySearchTree();

// tree.root = new Node( 10 );

tree.insert( 10 );
tree.insert( 20 );
tree.insert( 25 );
tree.insert( 8 );

console.log( tree.find( 20 ) );