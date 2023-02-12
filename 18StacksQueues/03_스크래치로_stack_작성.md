### 스크래치로 Stacks 작성하기


- 스택은 후입선출 원칙에 따라 데이터를 추가, 제거하는 데이터 구조라는 개념이 일반적인 개념이다


- 배열을 사용하면, 배열의 내장 메서드들이나 index 등이 필요 없기 때문에 무겁다


- 따라서 , 직접 Stack 클래스를 코딩한다
  - ( 이 방법은 Singly Linked List 를 이용한다 )


- Doubly Linked List 를 사용할 수도 있지만, 굳이 필요 없기 때문에 그렇게 하지 않는다


- 다른 알고리즘들은 Stack 과 Queue 를 이용해 데이터를 저장하게 될 것이다 


### 형태


````javascript
    /** 호출 형태 */    
    var stack = new Stack();

    stack.push();
    
    stack.pop();

````

- 신경써야하는 메서드는 딱 2개다.
  - ( stack.push() , stack.pop() )
  - 해당 메서드를 호출하면 stack 의 size 가 출력된다


````javascript
    
    /** stack class */

    class Stack {
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

- Singly Linked List 의 head 와 tail, length 대신에 first , last , size 가 존재한다


- 그렇다면, Singly Linked List 의 push 와 pop 을 그대로 사용하면 되지 않을까?
  - 왜 Singly Linked List 의 push 와 pop 을 사용하지 않을까?


- 그 이유는 Stack 에서는 Singly Linked List 와 달리, push 와 pop 이 **상수값의 시간을 가져야한다**
  - ( Singly Linked List 에서는 맨끝 값을 제거하려면 맨 끝의 앞까지 순회를 돌아야 한다 )


- 따라서, Singly Linked List 에서는 **shift 와 unshift 를 사용하는 것** 이 더 좋다
  - 반대로 Doubly Linked List 를 사용한다면 pop 을 사용하던 shift 를 사용하던 상관이 없다

---

### Array 가 아닌, Linked List 를 사용하면, 상수값의 시간을 가지게 된다!