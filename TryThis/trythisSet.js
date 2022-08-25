const A = [1, 2, 3, 4, 5];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];
const D = [1, 2, 3];

function intersect(arr1, arr2) {
  //   const A = new Set(arr1);
  //   const B = new Set(arr2);
  //   const res = [];
  //   for (const el of arr1) {
  //     if (B.has(el)) res.push(el);
  //   }
  //   return res;
  const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
  const set1 = new Set(a);
  const set2 = new Set(b);
  return new Set([...set1].filter((el) => set2.has(el)));
}
function diff(arr1, arr2) {
  //   const set1 = new Set(arr1);
  //   const set2 = new Set(arr2);
  //   return new Set([...set1].filter((el) => !set2.has(el)));
  const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
  const set1 = new Set(a);
  const set2 = new Set(b);
  return new Set([...set1].filter((el) => !set2.has(el)));
}
function union(arr1, arr2) {
  return new Set([...arr1, ...arr2]);
}

function superSet(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  [...set2].every((el) => set1.has(el) === true)
    ? console.log(`${arr2} is superset of ${arr1}`)
    : console.log(`${arr2} isn't superset of ${arr1}`);
}

console.log('intersect ================>');
console.log(intersect(A, B));
console.log(intersect(A, C));

console.log('diff ================>');
console.log(diff(A, B));
console.log(diff(B, A));
console.log(diff(A, C));
console.log(diff(B, C));

console.log('union ================>');
console.log(union(A, B));
console.log(union(A, C));

console.log('superSet ===============>');
superSet(A, D);
superSet(D, A);
