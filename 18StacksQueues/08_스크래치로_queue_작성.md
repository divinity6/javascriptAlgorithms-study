### 스크래치로 Queues 작성하기

- stack 자료구조를 만든것처럼 Linked List 를 가지고 만들것이다


- 배열과 같이 2가지 선택지가있다.
  - push , shift
  - unshift , pop

````javascript
    
    /** queue class */

    class Queue {
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }
    }
    
    class Node {
        constructor( value ) {
            this.value = value;
            this.next = null;
        }
    }
````

- pop 을 이용해서 가장 뒤의 무언가를 제거하는 것은 오래걸린다.
  - ( 전체 리스트를 순환해야하기 때문이다 )


- 따라서, **맨 뒤에 추가를 하고, 맨 앞에서 제거를 하면 상수값의 시간을 가지게 된다**


- 단지, 용어가 Spush 와 shift 이 아니라,
  - **enqueue** 와 **dequeue** 가 된다
  - enqueue : push
  - dequeue : shift

  
- 따라서, 이것은 Singly Linked List 와 비슷하지만, 메서드는 2개만 있는 것이다


- 즉, tail 에 무언가를 추가하고, 제거는 head 에서 한다.

---

### Array 가 아닌, Linked List 를 사용하면, 상수값의 시간을 가지게 된다!