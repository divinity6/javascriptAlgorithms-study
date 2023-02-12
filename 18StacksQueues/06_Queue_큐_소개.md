## Queues

- Stack 과 짝꿍인 데이터 구조인 Queue 에 대해 다룬다

### OBJECTIVES

- Queue 에 대해 정의한다


- Queue 가 사용되는 사례를 이해한다 


- 직접 Queue 의 데이터 구조를 코딩한다

---

### WHAT IS A QUEUE?

- queue 는 stack 과 매우 비슷하다
  - ( 데이터를 추가하고 제거한다 )
  - 선입선출 구조( **FIFO** )

---

### WE'VE SEEN THIS BEFORE

- 프로그래밍에서는 컴퓨터가 일하는 방식이 바로 Queue 다
  - 컴퓨터의 백그라운드 작업 : Background tasks
  - 어떤 자료를 업로드, 다운로드 : Uploading resources
  - 프린트시 대기열 : Printing / Task processing


- 정말 많은곳에서 사용되는 자료구조다

---

### BUILDING A QUEUE WITH AN ARRAY

- 나중에 사용하는 알고리즘들 중에는 queue 를 사용하는 알고리즘들이 존재한다


- Queue 또한 Stack 처럼 Array 로 간단하게 코딩할 수 있다
  - ( 이게 더 간단하고 짧기는 하다 )


- 그러나 Queue class 를 직접 코딩하는 것이 훨씬 가볍기 때문에 알아둘 가치가 충분히 있다


- Stack 처럼 Queue 도 구현하는 방법은 정말 많다!
  - 단지, 중요한 규칙은 딱하나, 선입선출( **FIFO** )

---

- 추가하기 위해 사용하는 키워드 : **enqueue**


- 제거하기 위해 사용하는 키워드 : **dequeue**