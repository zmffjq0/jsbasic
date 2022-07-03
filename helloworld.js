console.log('helloworld!');

const x1 = 'xx';
console.log(typeof x1);
const x2 = new String('xx');
console.log(typeof x2);

console.log(x1 == x2, x1 === x2, typeof x1, typeof x2, NaN === NaN, isNaN(NaN));

const sy1 = Symbol('sy');
const sy2 = Symbol('sy');

console.log(sy1, sy1 === sy2, sy1.description === sy2.description);

const b1 = 1;
const b2 = Boolean(1);
console.log(b1, !b1, !!b1);
console.log(b2, !b2, !!b2);

let x5;
console.log(x5);

let x6 = null;
console.log(x6);

let i = 100;
console.log(typeof i.toString());
console.log(typeof i);

const u = 'hong';
u.age = 30;
console.log(u.age, typeof u);

// console.log(k);
// let k = 1;

const j = 5;
console.log(3 - -j);
console.log(10 - j * -2);
