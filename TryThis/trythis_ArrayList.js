// Collection 클래스를 상속받아 List 메소드와 클래스 메소드 arrayToList, listToArray를 보유한 ArrayList를 구현하시오.
// ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
// const alist = new ArrayList({ value: 1, rest: { value: 2 } }); // new ArrayList([1,2]);
// alist.add(3);     // { value: 1, rest: { value: 2, rest: { value: 3 } } }
// alist.remove(2);  // { value: 1, rest: { value: 3 } }
// alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist.add(33, 1);
// alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist.set(1, 300);  // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// alist.get(2);  alist.size();  // 22, 4
// alist.indexOf(300);  // 1
// alist.contains(300); alist.contains(301);  // true, false
// alist.isEmpty; alist.peek;  // false, 3
// alist.toArray();  // [1, 300, 22, 3]
// alist.iterator().next();  // { value: 1, done: false }
// alist.clear();  // all clear

class Collection {
  #arr;
  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.length; idx++) {
      yield this.#arr[idx];
    }
  }
  constructor(arr) {
    // this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
    this.#arr = arr;
  }
  get _arr() {
    return this.#arr;
  }
  set _arr(arr) {
    this.#arr = arr;
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
      callback(this.#arr);
    }
  }
}

class ArrayList extends Collection {
  *[Symbol.iterator]() {
    if (Array.isArray(this._arr)) {
      for (let i = 0; i < this._arr.length; i++) {
        yield this._arr[i];
      }
    } else {
      let tmp = this._arr;
      while (tmp.rest) {
        yield tmp.value;
        tmp = tmp.rest;
      }
      yield tmp.value;
    }
  }

  static arrayToList(arr, idx) {
    // if (idx >= arr.length - 1) {
    //   return {
    //     value: arr[idx],
    //   };
    // } else {
    //   return {
    //     value: arr[idx],
    //     rest: ArrayList.arrayToList(arr, idx + 1),
    //   };
    // }
    //********************************** */
    // if (arr.length === 0) return;
    // return {
    //   value: arr[0],
    //   rest: ArrayList.arrayToList(arr.slice(1)),
    // };
    //********************************** */
    // return arr.reduceRight((prev, curr, i) => {
    //   return {
    //     value: curr,
    //     rest: prev.value ? prev : undefined,
    //   };
    // }, {}); //undefined, {}
    //********************************** */
    return arr.reduceRight(
      (prev, curr) => ({ value: curr, rest: prev }),
      undefined
    ); //undefined, {}
    //********************************** */
    // return (function getResult(i = 0) {
    //   if (i === arr.length) return;
    //   return {
    //     value: arr[i],
    //     rest: getResult(i + 1),
    //   };
    // })();
  }

  static listToArray(obj, newArr) {
    newArr.push(obj.value);
    return !obj.rest ? newArr : ArrayList.listToArray(obj.rest, newArr);
  }
  constructor(arr) {
    // const newArr = Array.isArray(arr) ? arr : ArrayList.listToArray(arr, []);
    super(arr);
  }
  add(value, idx = this._arr.length) {
    if (Array.isArray(this._arr)) {
      this._arr.splice(idx, 0, value);
    } else {
      if (idx === undefined) {
        let tmp = this._arr;
        while (tmp.rest) {
          tmp = tmp.rest;
        }
        tmp.rest = { value };
      } else {
        let cnt = 0;
        let tmp = this._arr;
        while (cnt < idx - 1) {
          tmp = tmp.rest;
          cnt++;
        }
        tmp.rest = { value, rest: tmp.rest };
      }
    }
  }
  remove(value) {
    if (Array.isArray(this._arr)) {
      this._arr = this._arr.filter((el) => el !== value);
    } else {
      let idx = this._arr;
      while (idx.rest.value !== value) {
        idx = idx.rest;
      }
      idx.rest = idx.rest.rest;
    }
  }
  print() {
    super.print(() => {
      // console.log(JSON.stringify(ArrayList.arrayToList(this._arr, 0)));
      Array.isArray(this._arr)
        ? console.log('arraylist =========>', ...this._arr)
        : console.log('arraylist =========>', JSON.stringify(this._arr));
    });
  }
  set(idx, value) {
    if (Array.isArray(this._arr)) {
      this._arr[idx] = value;
    } else {
      let cnt = 0;
      let tmp = this._arr;
      while (cnt < idx - 1) {
        tmp = tmp.rest;
        cnt++;
      }
      tmp.rest.value = value;
    }
  }
  get(idx) {
    if (Array.isArray(this._arr)) {
      return this._arr[idx];
    } else {
      let cnt = 0;
      let tmp = this._arr;
      while (cnt < idx - 1) {
        tmp = tmp.rest;
        cnt++;
      }
      return tmp.rest.value;
    }
  }
  size() {
    if (Array.isArray(this._arr)) {
      return this._arr.length;
    } else {
      let cnt = 0;
      let tmp = this._arr;
      while (tmp.rest) {
        tmp = tmp.rest;
        cnt++;
      }
      return cnt + 1;
    }
  }
  indexOf(value) {
    if (Array.isArray(this._arr)) {
      return this._arr.indexOf(value);
    } else {
      let cnt = 0;
      let tmp = this._arr;
      while (tmp.value !== value) {
        tmp = tmp.rest;
        cnt++;
      }
      return cnt;
    }
  }
  contains(value) {
    if (Array.isArray(this._arr)) {
      return this._arr.includes(value);
    } else {
      let tmp = this._arr;
      while (tmp.value !== value && tmp.rest) {
        tmp = tmp.rest;
      }
      if (tmp.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }
  get isEmpty() {
    if (Array.isArray(this._arr)) {
      return !this._arr.length;
    } else {
      return !this.size();
    }
  }
  get length() {
    if (Array.isArray(this._arr)) {
      return !this._arr.length;
    } else {
      return this.size();
    }
  }
  get peek() {
    if (Array.isArray(this._arr)) {
      return this._arr[this._arr.length - 1];
    } else {
      let cnt = 0;
      let tmp = this._arr;
      while (tmp.rest) {
        tmp = tmp.rest;
        cnt++;
      }
      return tmp.value;
    }
  }
  toArray() {
    return Array.from(this[Symbol.iterator]());
  }
  // clear() {
  //   super.clear();
  // }
  iterator() {
    return this[Symbol.iterator]();
  }
}
const alist2 = new ArrayList([1, 2, 3, 4, 5]);
console.log(JSON.stringify(ArrayList.arrayToList(alist2._arr), null, 2));
return;
const alist = new ArrayList({
  value: 1,
  rest: {
    value: 2,
  },
});
alist.add(3);
alist.print();
alist.remove(2);
alist.print();
alist.add(22, 1);
alist.print();
alist.add(33, 2);
alist.print();
alist.set(1, 300);
alist.print();
console.log('alist.get(2) =====================>', alist.get(2));
alist.print();
console.log('alist.size() =====================>', alist.size());
alist.print();
console.log('alist.indexOf(300) =====================>', alist.indexOf(300)); // 1
alist.print();
console.log('alist.contains(300) =====================>', alist.contains(300));
alist.print();
console.log('alist.contains(301) =====================>', alist.contains(301));
console.log('alist.isEmpty =====================>', alist.isEmpty);
console.log('alist.peek =====================>', alist.peek); // false, 3
console.log('alist.toArray() =====================>', alist.toArray()); // [1, 300, 22, 3]
console.log('iter start*****************');
const it = alist.iterator();
while (true) {
  const x = it.next();
  console.log(x);
  // console.log(x.value);
  if (x.done) break;
}
console.log(ArrayList.listToArray(alist._arr, []));
console.log('iter start*****************');
console.log('End!!!!!!!!!!!!!!________________+++++++++++++++++++');

// const alist2 = new ArrayList([1, 2, 3, 4, 5]);
// alist2.print();
// alist2.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
// alist2.remove(2); // { value: 1, rest: { value: 3 } }
// alist2.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist2.add(33, 1);
// alist2.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist2.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// console.log(alist2.get(2));
// console.log(alist2.size()); // 22, 4
// console.log(alist2.indexOf(300)); // 1
// console.log(alist2.contains(300));
// console.log(alist2.contains(301)); // true, false
// console.log('is Empty => ', alist2.isEmpty);
// console.log(alist2.peek); // false, 3
// console.log(alist2.toArray()); // [1, 300, 22, 3]
// console.log(JSON.stringify(ArrayList.arrayToList(alist2.toArray(), 0)));
// console.log(alist2);
// const it2 = alist2.iterator();
// while (true) {
//   const x = it2.next();
//   console.log(x);
//   // console.log(x.value);
//   if (x.done) break;
// }

// console.log(alist2._arr);
// alist2.clear(); // all clear
// console.log(alist2._arr);
// alist2.print();
//   return {
//     value: arr[idx],
//     rest: idx >= arr.length - 1 ? undefined : ArrayToList(idx + 1),
//   };
// }

// console.log(JSON.stringify(ArrayToList(0)));

// const newArr = [];
// function listToArray(obj) {
//   newArr.push(obj.value);
//   return !obj.rest ? undefined : ListToArray(obj.rest);
// }
// ListToArray(ArrayToList(0));
// console.log(newArr);

// function arrayToList(arr, idx) {
//   return {
//     value: arr[idx],
//     rest: idx >= arr.length - 1 ? undefined : arrayToList(arr, idx + 1),
//   };
// }

// console.log(JSON.stringify(arrayToList([1, 2, 3, 4, 5], 0)));
