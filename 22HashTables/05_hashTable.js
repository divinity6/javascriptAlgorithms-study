console.log( '=========================== hashTable =============================' );

/**
 * - SeparateChaining( 개별 체이닝 )을 통한 해시테이블 구현
 *
 * --> get,set 메서드를 hash 와 함께 호출해서,
 *     key 를 입력하면 값을 얻게 할 것이다
 *
 * @pseudocode
 *
 * @Set
 *
 * 1. key 와 value 를 받는다
 *
 * 2. 해당 key 를 hash 처리한다
 *    ( 어디에 저장할지 알아내는 것 )
 *
 * 3. SeparateChaining 작업을 한다
 * --> 데이터를 그냥 저장하는 것 보다 복잡하다( 중첩구조 때문에... )
 * --> 데이터를 넣을때, 해당 자리에 데이터가 존재하면 그냥 push 하지만, 없으면 배열을 만들고 넣는다
 *
 * @get
 *
 * 1. key 를 받는다
 *
 * 2. 해당 key 를 hash 처리한다
 *    ( hash 함수를 이용해서 index 를 알아낼 수 있다 )
 *
 * 3. hashTable 의 해당 index 에서 key 를 검색해 반환한다
 *
 * 4. 해당하는 것이 없다면 undefined 를 반환한다
 *
 */
class HashTable {

    keyMap;

    /**
     *
     * @param { number } size - 해시테이블의 크기를 설정한다( 소수값을 기본값으로 설정 : 53 )
     */
    constructor( size = 53 ) {
        this.keyMap = new Array( size );
    }

    /** 해시 함수 */
    _hash( key ){
        let total = 0;
        let WEIRD_PRIME = 31;
        for ( let i = 0; i< Math.min( key.length , 100 ); i++ ){
            let char = key[ i ];
            let value = char.charCodeAt( 0 ) - 96;
            total = ( total * WEIRD_PRIME + value ) % this.keyMap.length;
        }
        return total;
    }

    /** mySolution */
    _set( key , value ){

        const savedIndex = this._hash( key );
        const store = [ key , value ];

        if ( !( Array.isArray( this.keyMap[ savedIndex ] ) ) ){
            this.keyMap[ savedIndex ] = [ store ];
            return;
        }

        /** 같은 값이 들어오면 덮어씌웁니다 */
        const collisionIndex = this.keyMap[ savedIndex ].findIndex( ( [ _key ] ) => _key === key );

        if ( -1 === collisionIndex ){
            this.keyMap[ savedIndex ].push( store );
        }
        else {
            this.keyMap[ savedIndex ][ collisionIndex ] = store;
        }
    }

    /** mySolution */
    _get( key ){
        const savedIndex = this._hash( key );

        if ( !( Array.isArray( this.keyMap[ savedIndex ] ) ) ){
            return;
        }
        const [ _ , findValue ] = this.keyMap[ savedIndex ].find( ( [ _key ] ) => _key === key );
        return findValue;
    }

    /**
     * - 아래것이 push 를 한번에 처리해서 깔끔하긴한데,
     *   중복 key 가 들어왔을 경우를 처리하지 않았네...
     *   내 코드는 중복코드가 들어왔을 경우를 처리했음...
     */
    /** goodSolution */
    set( key , value ){
        let index = this._hash( key );

        if ( !( this.keyMap[ index ] ) ){
            this.keyMap[ index ] = [];
        }
        this.keyMap[ index ].push( [ key , value ] );
    }

    /**
     * - 그냥 나는 find 메서드를 통해서 깔끔하게 처리했는데...ㅋㅋ
     * --> 로우레벨로 처리했네 ㅋ
     * --> 내 코드가 훨씬 깔끔함...
     */
    /** goodSolution */
    get( key ){
        let index = this._hash( key );
        if ( this.keyMap[ index ] ){
            for ( let i = 0; i < this.keyMap[ index ].length; i++ ){
                if ( this.keyMap[ index ][ i ][ 0 ] === key ){
                    return this.keyMap[ index ][ i ][ 1 ];
                }
            }
        }

        return undefined;
    }
}

const ht = new HashTable();

ht.set( "maroon" , "#800000" );
ht.set( "findValue" , "#FFFF00" );
ht.set( "olive" , "#808000" );
ht.set( "salmon" , "#FA8072" );
ht.set( "lightcoral" , "#F08080" );
ht.set( "mediumvioletred" , "#C71585" );
ht.set( "plum", "#DDA0DD" );
console.log( ht.get( "olive" ) );