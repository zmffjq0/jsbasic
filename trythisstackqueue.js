// class와 Array 객체를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack (DeepDive. 512)
// const stack = new Stack(); // or new Stack([1,2]);
// stack.push(3); // 추가하기
// console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
// ex2) Queue (DeepDive. 515)
// const queue = new Queue();
// queue.enqueue(3); // 추가하기
// console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
//********************************************************* */
// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.
// // 공통: clear(), isEmtpy(), peek(), toArray(), print(), length
// console.log(stack.peek(), queue.peek()); // 마지막(다음에 나올) 원소
// queue.print(); // 출력해보기
// const arr = queue.toArray().map(a => console.log(a));
// if (!stack.isEmpty()) stack.clear();
// if (queue.length) queue.clear();

class Common {
  clear() {}
  isEmpty() {}
  peek() {}
  toArray() {}
  print() {}
  length() {}
}

class Stack {
  stack = [];
  constructor(args) {
    this.stack = [...args];
  }
  push(number) {
    this.stack = [...this.stack, number];
  }
  pop() {
    const len = this.stack.length;
    const res = this.stack[len - 1];
    this.stack = this.stack.slice(0, len - 1);
    return res;
  }
}

class Queue {
  queue = [];
  constructor(args) {
    this.queue = [...args];
  }
  enqueue(number) {
    this.queue = [...this.queue, number];
  }
  dequeue() {
    const len = this.queue.length;
    const res = this.queue[0];
    this.queue = this.queue.slice(1, len);
    return res;
  }
}

const stack = new Stack([2, 3, 4]);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

const queue = new Queue([2, 3, 4]);

queue.enqueue(3);
console.log(queue.queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
