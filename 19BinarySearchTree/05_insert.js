console.log( '=========================== insert =============================' );

/**
 * - 새로운 Node 삽입
 *
 * @pseudocode
 *
 * - new Node 를 생성한다
 *
 * - Tree 의 root 으로 이동한다
 *
 * - 만약, Tree 의 root 이 없다면, new Node 가 새로운 root 이 되면 된다
 *
 * - 그렇지않고, root 가 존재한다면, new Node 가 root 의 값보다 큰지, 작은지 체크한다
 *
 * - 만약, new Node 가 더 크다면 Node.right 에 값이 있나 체크한다
 *  - 값이 있다면, 해당 Node 로 옮겨가서 단계를 반복한다 ( while )
 *  - 값이 없다면, 해당 Node.right 에 new Node 를 설정한다
 *
 * - 만약, new Node 가 더 작다면 Node.left 에 값이 있나 체크한다
 *  - 값이 있다면, 해당 Node 로 옮겨가서 단계를 반복한다 ( while )
 *  - 값이 없다면, 해당 Node.left 에 new Node 를 설정한다
 *
 * - Tree 를 반환한다
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
    /** mySolution */
    _insert( value ){

        const newNode = new Node( value );

        if ( !( this.root ) ){
            this.root = newNode;

            return this;
        }

        let childNode = this.root;
        let parentNode = this.root;
        let edge;

        while( childNode ){

            if ( childNode.value === newNode.value ){
                return undefined;
            }

            parentNode = childNode;

            if ( childNode.value > newNode.value ){
                childNode = childNode.left;
                edge = 'left';
            }
            else {
                childNode = childNode.right;
                edge = 'right';
            }
        }

        parentNode[ edge ] = newNode;

        return this;
    }

    /**
     * - 중첩 if 문이 있더라도, 이게훨씬 알아보기 편할지도...?
     *
     * --> 내꺼는 childNode 가 존재하지 않을때까지 계속해서반복하긴하는데...
     *
     * --> 이건 뭐가더 좋을지 애매하네...ㅋㅋ
     */
    /** goodSolution */
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

}

var tree = new BinarySearchTree();

// tree.root = new Node( 10 );

tree.insert( 10 );
tree.insert( 20 );
tree.insert( 25 );
tree.insert( 8 );

console.log( tree );