## Data Structures

- 구조화된 자료구조를 작성할 수 있는것을 주제로 한다!


- 다루게될 자료구조
  - Binary Search Trees : 이진 검색 트리
  - Queues : 큐
  - Singly Linked Lists : 단방향 연결 리스트
  - Undirected Unweighted Graphs : 비방향/비비중 그래프
  - Binary Heaps : 이진 힙
  - Directed Graphs : 방향 그래프
  - Hash Tables : 해쉬 테이블
  - Doubly Linked Lit : 양방향 연결 리스트
  - Stacks : 스택


- 왜이렇게 많은 자료구조들이 있을까


- 이런 많은 자료구조 각각을 클래스형태로 구현할 것이다


- 자기자신만의 특별한 array , object 를 정의하듯이 이것들을 처음부터 정의해 나갈 것이다

---

### WHAT DO THEY DO?

- 위의 자료구조들과 미묘한 차이를 가진 수백만개 이상의 자료구조의 변형들이 존재한다


- 자료구조의 공통적인 특징은 값( value )의 모음이라는 점이다


- 자료구조들은 해당 데이터에 적용되는 값 , 기능 , 작업들 사이의 관계를 포함한다
  - 예를 들어 Array 의 경우에는 해당 데이터들에 접근하거나 수정할 수 있는 수많은 메서드들을 제공한다


- 이제 부터 작성할 위의 자료구조들은 데이터의 모음을 저장하게 되고, 수많은 메서드들을 작성하게 될 것이다
  - 이 자료구조만의 push , pop , 역함수등을 정의할 것이다

  
- 그날 배우는 자료구조를 Class 로 정의하고 그 자료구조에 맞는 기능들을 추가하게 될 것이다

---

### WHY SO MANY??

- 왜 이렇게 많은 자료구조들이 존재할까?


- 특정 유형의 문제에 있어서 특정한 형태의 자료구조가 효율적이라는 사실때문이다
  - 따라서, 일부 자료 구조는 매우 특화되어 있지만, Array , Object 처럼 자주
  - 사용되는 자료구조들은 일반적이기에 JS 에서 제공하는 것이다


- 그러나 특화되어 있는 자료구조( 예) Red and Black 트리, 비방향 그래프등 )로 작업해야할 경우에는 직접 구현해야 한다


- 이런 자료구조들은 특별한 경우에는 매우 유용할 수 있다
  - 따라서, 이런 자료구조들을 언제 사용할 수 있을지 알고 있어야 한다


- 모든 자료 구조들은 결국 데이터를 저장하는 동일한 기능을 제공하지만, 
- 그것들의 동작 방식, 데이터와 기능들 사이의 관계, 사용되는 메서드들은 매우 다르다

---

### WHY CARE?

- 개발자로 많은 시간을 보낼 수록 고급 자료구조 사용을 필요로 할 가능성이 많아진다
  - Array 만 사용하는 것보다 효율적인 자료구조를 찾게 된다
  - 더 이상 선형적이지 않고, 복잡한 데이터를 다루게 될 수 있으며, 데이터를 저장하기 위한 다른방법이 필요할 수 도 있다


- 자신도 모르는 사이에 JS 에서 DOM 트리를 조작하거나 상호작용하고 있을 가능성이 높다

---

### THERE IS NO ONE BEST DATE STRUCTURE

- 어떤 자료구조도 최고가 아니다


- 자료구조마다 각각 특화된 특성을 가지고 있다
  - 따라서, 이 자료구조들은 서로 다른 환경에서 탁월하다
  - 만일 하나의 자료구조가 다른 자료구조보다 월등하다면 다른 자료구조는 필요 없게 된다
  - 즉, 자료구조들은 특정한 상황에서 각각 월등하다

---

### Working with map/location data?

- 만약 구글맵과 같은 방대한 작업을 필요로하는 GPS 어플리케이션을 작성한다고 가정하거나,
- 가까운 주유소나 저렴한 거래장소등을 찾아줄 수 있는 코드를 작성하고 있다고 가정할때
- 그래프가 가장 타당한 자료구조다


- 만일 Array 이지만, 앞으로도 신속하게 삽입할 수 있고, 끝에서도 쉽게 제거할 수 있는 정렬된 리스트를 필요로 한다면 어떨까?
  - 방대한 데이터 세트를 정렬해야 할 때, 해당 데이터의 양 끝단에서 삽입 및 제거를 해야한다면 Array 는 사용하지 않아야한다
  - 이럴 경우 Linked List 가 매우 유용하게 사용될 수 있다

---
  
- 모든 자료 구조는 서로 다른 상황에 특화된 각각의 장점들을 갖고 있으며 어떤 특정 자료 구조도 다른 것들을 압도하지 않는다
