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

/**
 * protected 변수 _ (언더바) 사용하기
 */

class Common {
  // #arr
  constructor(arr = []) {
    this._arr = arr;
  }
  // get _arr(){
  //   return this.#arr;
  // => 부모의 private 변수를 상속해주었을 때 그냥 변수로 넘어감
  // }

  get peek() {}
  print() {}

  clear() {
    this._arr.length = 0;
  }
  get isEmpty() {
    return !this.length;
  }
  toArray() {
    return Array.from(this._arr);
  }
  get length() {
    return this._arr.length;
  }
}

class Stack extends Common {
  constructor(arr) {
    super(arr);
  }
  push(number) {
    /**
     *
     */
    this._arr = [...this._arr, number];
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Empty!');
      return;
    }
    const len = this.length;
    const res = this._arr[len - 1];
    // this._arr = this._arr.slice(0, len - 1);
    this._arr.length--;
    return res;
  }
  get peek() {
    return this._arr[this.length - 1];
  }
  print() {
    if (this.length === 0) {
      console.log('Empty!!');
      return;
    }
    console.log(...[...this._arr].reverse());
  }
}

class Queue extends Common {
  constructor(arr) {
    super(arr);
  }
  enqueue(number) {
    this._arr = [...this._arr, number];
  }
  dequeue() {
    if (this._arr.length <= 0) {
      throw new Error('Empty!');
    }
    const len = this.length;
    const res = this._arr[0];
    // this._arr = this._arr.slice(1, len);
    this._arr.length--;
    return res;
  }
  get peek() {
    return this._arr[0];
  }
  print() {
    if (this.length === 0) {
      console.log('Empty!!');
      return;
    }
    console.log(...[...this._arr]);
  }
}

const stack = new Stack([2, 3, 4, 7, 8, 9]);
const queue = new Queue([2, 3, 4, 6, 3, 1]);

const stack1 = new Stack();

console.log(stack.isEmpty);
stack.print();
console.log(stack.peek);
console.log(queue.isEmpty);
queue.print();

stack.print();
stack.clear();
stack.print();
stack.push(1);
stack.print();

stack1.push(3);
console.log(stack1.pop());
