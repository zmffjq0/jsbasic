class Collection {
  #arr;
  constructor(...args) {
    // this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
    this.#arr = args.flat();
  }
  push(val) {
    this.#arr.push(val);
  }
  shift() {
    return this.#arr.shift();
  }
  clear() {
    this.#arr.length = 0;
  }
  get peek() {
    return this.constructor.name === 'Stack'
      ? this.#arr[this.length - 1]
      : this.#arr[0];
  }
  get isEmpty() {
    return !this.#arr.length;
  }
  get length() {
    return this.#arr.length;
  }
  toArray() {
    return [...this.#arr];
  }
  // print() {
  //   this.constructor.name === 'Stack'
  //     ? console.log(...this.#arr)
  //     : console.log(...[...this.#arr].reverse());
  // }
  print(callback) {
    if (callback) {
      callback([...this.#arr]);
    }
  }
}

class Stack extends Collection {
  print() {
    super.print((arr) =>
      console.log('stack >>\n', [...arr].reverse().join('\n'))
    );
  }
}
class Queue extends Collection {
  enqueue(val) {
    super.push(val);
  }
  dequeue() {
    return super.shift();
  }
  print() {
    console.log('' + this);
    super.print((arr) => console.log('queue >>\n', arr.join(' -> '), ' -> '));
  }
}

const st = new Stack([1, 2]);
st.push(3);
st.push(4);
st.push(5);
st.print();

const qu = new Queue([1, 2, 3]);
qu.push(4);
qu.push(5);
qu.print();
