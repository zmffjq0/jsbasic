class Collection {
  #arr;

  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.length; idx++) {
      yield this.#arr[idx];
    }
  }
  constructor(...args) {
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

export class Stack extends Collection {
  print() {
    super.print((arr) =>
      console.log('stack >>\n', [...arr].reverse().join('\n'))
    );
  }
}
export class Queue extends Collection {
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

export class ArrayList extends Collection {
  static listToArray(obj) {
    let tmp = obj;
    const res = [];
    while (tmp.rest) {
      res.push(tmp.value);
      tmp = tmp.rest;
    }
    res.push(tmp.value);
    return res;
  }
  constructor(lstOrArr) {
    super(Array.isArray(lstOrArr) ? lstOrArr : ArrayList.listToArray(lstOrArr));
  }
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } });
alist.print();
