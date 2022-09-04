class Collection {
  #arr;
  // [Symbol.iterator]() {
  //   return this.constructor.name === 'Stack'
  //     ? this.#arr.reverse().values()
  //     : this.#arr.values();
  // }
  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.length; idx++) {
      yield this.#arr[idx];
    }
  }
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
      callback([...this.#arr].reverse());
    }
    console.log(this.#arr);
  }

  iterator() {
    return this[Symbol.iterator]();
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
    super.print((arr) => console.log('queue >>\n', arr.join(' -> '), ' -> '));
  }
}

// const st = new Stack([1, 2]);
// st.push(3);
// st.push(4);
// st.push(5);
// st.print();

// const qu = new Queue([1, 2, 3]);
// qu.push(4);
// qu.push(5);
// qu.print();

const st = new Stack([1, 2, 3, 4, 5]);
const qu = new Queue([1, 2, 3, 4, 5]);
// for (const el of st) {
//   console.log(el);
// }

// for (const el of qu) {
//   console.log(el);
// }

const it = st.iterator();
while (true) {
  const x = it.next();
  console.log(x);
  // console.log(x.value);
  if (x.done) break;
}
