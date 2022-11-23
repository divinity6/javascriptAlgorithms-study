"use strict";

const express = require( 'express' );
const app = express();
const url = require('url');
const port = 2233;

app.use( express.static( '/source' ) );

app.use( function ( req, res ) {

    res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');

    res.setHeader('Cross-origin-Opener-Policy','same-origin');

    const parseURL = url.parse( req.url );
    if ( '/' === parseURL.href ){
        res.sendFile( '/' , { root : __dirname } );
        return;
    }

    const fileName = parseURL.pathname.replace("/", "");
    /*
     * XHR의 timeout을 체크하기 위한 것으로
     * xhr.open("GET", "../file/timeout_data.txt")이면
     * timeout을 의도적으로 실행합니다.
     * xhr.timeout = 2000;을 작성했으므로 ontimeout 이벤트가 발생하게 됩니다.
     */
    if ( fileName.includes( "timeout_data" ) ){

        setTimeout( function(){
            res.sendFile( fileName , { root : __dirname } );
        }, 5000 );
    }
    else {
        res.sendFile(fileName, {root: __dirname});
    }
});

app.use( express.static(__dirname + '/sample' ) );

app.listen( port , () => {
    console.log(`localhost:${ port }/ 경로 입력`);
});

