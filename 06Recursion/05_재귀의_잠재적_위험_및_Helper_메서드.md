### Where things go wrong

- 종료 조건이 없거나 잘못된 경우


- 잘못된 값을 반환하거나, 반환을 잊는 경우


- 반환값이 중요한 이유는 재귀의 토대가 되기 때문이다
  - 재귀는 서로 체인처럼 연결되어있다


- 재귀에선 잘못된 값을 반환하는 모든 것이 **스택오버플로우**를 유발할 수 있다

---

### Helper Method Recursion

- 재귀와 함께 사용되는 디자인 패턴


- 지금까지 작성했던 모든 재귀함수는 팩토리얼 처럼 단일 단독 함수( single standalone function )였다.
  - 즉, 스스로 재귀를 돌았다


- 헬퍼 메소드 재귀는 좀다르다


````javascript
    
    /** 헬퍼 메소드 재귀 */
    function outer( input ){
        
        var outerScopedVariable = [];
        
        function helper( helperInput ){
            // modify the outerScopedVariable
            helper( helperInput-- );
        }
        
        helper( input );
        
        return outerScopedVariable;
    }

````

- 코드 스스로 뭔가를 하지는 않는다


- 일종의 패턴 코드


- 외부에 outer 함수가 있고, 내부에 재귀함수( helper )가 존재한다


- 이 함수를 사용할때 외부( outer )함수를 호출해서 무언가를 내부로 전달할 수 있다


- 우리가 배열이나 데이터 목록 같은것을 컴파일( compile )할때 흔히 이렇게 작업한다

---

### ANOTHER EXAMPLE

- 어떤 배열에서 모든 홀수값을 수집하는 작업등을 수행한다면 헬퍼 메소드 재귀를 사용하는 것은 매우 쉽다

````javascript
    
    /** 홀수값을 수집하는 재귀 */
    function collectOddValues( arr ){
        
        const result = [];
        
        function helper( helperInput ){
            // modify the outerScopedVariable
            if ( 0 === helperInput.length ){
                return;
            }
            
            /** 나머지가 0 이 아니면 홀수 */
            if ( 0 !== helperInput[ 0 ] % 2 ){
                result.push( helperInput[ 0 ] );
            }
          
            helper( helperInput.slice( 1 ) );
        }
        
        helper( arr );
        
        return result;
    }

````

- 보통 재귀는 내부 helper 메서드를 한번감싸서 사용하게 된다
  - ( 재귀에 영향받지 않는 값을 정의하고 싶을때... )


- 헬퍼 메소드 재귀는 일종의 결과를 컴파일할때 흔히 사용되는 패턴이다


- 헬퍼 메소드 재귀가 단지 솔루션을 만드는 유일한 방법은 아니다


- 순수 재귀방식으로도 작성할 수도있지만, 그 방법이 더 좋은것은 아니다
  - 더 헷갈리지만, 더 짧고 재귀만 사용한다...?

---

#### 헬퍼 메소드 재귀는 재귀적이지 않은 외부 함수가 재귀적인 내부 함수( inner function )을 호출하는 패턴이다

---