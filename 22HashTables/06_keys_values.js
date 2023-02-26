console.log( '=========================== hashTable =============================' );

/**
 * - key 는 해당하는 key 를 둘다 반환해도 되고, 하나만 반환해도 된다
 *   ( 하지만 보통 key 는 유일한 값이다 )
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

    /** get , set 은 내꺼 코드가 더 좋을 가능성이 높음 */
    set( key , value ){
        let index = this._hash( key );

        if ( !( this.keyMap[ index ] ) ){
            this.keyMap[ index ] = [];
        }
        this.keyMap[ index ].push( [ key , value ] );
    }


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

    /** mySolution */
    _keys(){
        return this.keyMap.filter( arr => Array.isArray( arr ) ).flatMap( ( arr ) => {
            return [ ...arr.map( ( [ key ] ) => key ) ];
        } );
    }

    /** mySolution */
    _values(){
        return this.keyMap.filter( arr => Array.isArray( arr ) ).flatMap( ( arr ) => {
            return [ ...arr.map( ( [ _ , value ] ) => value ) ];
        } );
    }

    /**
     * - 무조건 ES6 문법을 사용해서 깔끔한 코드가 좋은것은 아니네...
     *
     * --> 뭔가 조건을 추가하기에는 로우레벨 코드가 더 좋을 가능성이 있음
     *
     * --> 예를들어 중복되는 값을 검사한다거나 등등...
     */
    /** goodSolution */
    keys(){
        const keysArr = [];

        for ( let i = 0; i < this.keyMap.length; i++ ){
            if ( this.keyMap[ i ] ){
                for ( let j = 0; j < this.keyMap[ i ].length; j++ ){
                    if ( !( keysArr.includes( this.keyMap[ i ][ j ][ 0 ] ) ) ){
                        keysArr.push( this.keyMap[ i ][ j ][ 0 ] );
                    }
                }

            }
        }
        return keysArr;
    }

    /** goodSolution */
    values(){
        const valuesArr = [];

        for ( let i = 0; i < this.keyMap.length; i++ ){
            if ( this.keyMap[ i ] ){
                for ( let j = 0; j < this.keyMap[ i ].length; j++ ){
                    if ( !( valuesArr.includes( this.keyMap[ i ][ j ][ 1 ] ) ) ){
                        valuesArr.push( this.keyMap[ i ][ j ][ 1 ] );
                    }
                }

            }
        }
        return valuesArr;
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
console.log( ht.keys() );
console.log( ht.values() );
