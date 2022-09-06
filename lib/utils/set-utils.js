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

function isSuperSet(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  [...set2].every((el) => set1.has(el) === true)
    ? console.log(`${arr2} is superset of ${arr1}`)
    : console.log(`${arr2} isn't superset of ${arr1}`);
}

export { intersect, diff as differ, union, isSuperSet };
