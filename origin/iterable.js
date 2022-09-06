class Dog {
  constructor(name) {
    this.name = name;
  }
}

class ItDog extends Dog {
  [Symbol.iterator]() {
    return this.name.split(', ').values();
  }
}

// const idog = new ItDog('Toby, Max, Sam');
// console.log(...idog);
// for (const d of idog) {
//   console.log(d);
// }

class ItDog2 extends Dog {
  [Symbol.iterator]() {
    let idx = 0;
    const names = this.name.split(/,\s/);
    return {
      next() {
        return {
          value: names[idx++],
          done: idx > names.length,
        };
      },
    };
  }
}

const idog2 = new ItDog2('Toby, Max, Sam');
for (const d of idog2) {
  console.log(d);
}

const iter = idog2[Symbol.iterator]();
console.log(iter.next());
