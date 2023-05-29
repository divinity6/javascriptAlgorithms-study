## 기본적인 자바스크립트

- 배열, 오브젝트 , 내장된 메서드 루프들의 성능이 얼마나 좋은가?


### OBJECTIVES( 목적 )

- BIG O( 빅 오 )의 시점에서 오브젝트와 배열이 어떻게 동작하는가?


- 배열 앞에 데이터를 추가하는 것은 좋지 않은 이유


- built-in method 들이 있는데 sort , forEach , Object.keys Object.hasownprope 등을 논의

---

### OBJECTS
#### Unordered , key value pairs!

````javascript
    let instructor = {
        firstName: "Kelly",
        isInstructor : true,
        favoriteNumbers : [ 1 , 2 , 3 , 4 ]
    }
````

- 정렬되지 않은 데이터 구조, 모두 key , value 로 저장되어 있다

---

### When to use Objects

- 정렬되어 있을 필요가 없을 경우 잘 동작한다


- 빠른 접근, 입력과 제거를 원할때 좋다
  - ( 정렬되어 있지는 않지만 다른 것들이 매우 빠르다 )
  

- 빠르다는 것은 입력, 제거 , 접근 시간이 **상수 시간( O( n ) )** 이라는 것이다
  - Insertion : **O(1)**
  - Removal   : **O(1)**
  - Searching : **O(n)**
  - Access    : **O(1)**


- 정렬되어 있지 않기 때문에, 시작과 끝이없다
  - ( 어디에 새로운 객체를 입력하든 상관없다 )
  - 단지, key 를 입력하여 추가하는 것


- 그러나 탐색은 **선형시간( linear time )** 이다

---

### Big O of Object Methods

- Object.keys : **O(n)**
- Object.values : **O(n)**
- Object.entries : **O(n)**
- hasOwnProperty : **O(1)**


- **hasOwnProperty** 는 상수시간을 가진다
  - 상수시간으로 해당 키가 존재하는지 체크할 수 있다


- Object 는 모든것을 빨리처리하지만, 정리되어있지 않다


- Object 는 모든 연산, 입력, 접근 , 업데이트 , 제거가 모두 상수시간이다


- Object 의 탐색은 N 에 따라서 증가하기 때문에 선형 시간이다
