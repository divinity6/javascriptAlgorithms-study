/**
 * 프로그람 설명문서 주석
 * 2022.08.08
 *
 *
 *           ===== Big O Notation =====
 *
 */
title( 'addUpToFirst , addUpTwo ' );
{
  const addUpToFirst = ( n ) => {

    let total = 0;
    for ( let i = 1; i <= total; i += 1 ){
      total += i;
    }

    return total;
  }

  const addUpToSecond = ( n ) => {
    return n * ( n + 1 ) / 2;
  }

  /**
   *  - addUpTwo 함수는 항상 연산이 3개 이기 때문에 어떤 값을 넣든 거의 똑같다
   *
   *  - 반면, addUpFirst 함수는 n 의 갯수에 따라 달라지기 때문에 n 의 값에 따라
   *    연산속도가 매우 달라진다
   *
   *  --> 따라서, addUpTwo 가 확실히 좋다
   *
   *  ----> 두 개의 알고리즘이 성능차이가 확실히 있다는 것이 입증됨
   */
}