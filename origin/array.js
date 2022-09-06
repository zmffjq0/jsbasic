const a = [1, 2];
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a));
const obj = {};

for (const [key, value] of Object.entries(a)) {
  obj[key] = value;
}
console.log(obj);

Array.prototype.push.apply(obj, a);
// Array.prototype.push.call(obj, ...a);
console.log(obj);
console.log(obj.length);

console.log(a, a.length);
a.length = 3;
console.log(a, a.length);
console.log(a[a.length - 2]);

/**
 * 자바스크립트의 Array는 메모리 공간이 연속성을 띄고 있지 않고, 각 인덱스별로 거리가 있기 때문에, 검색하는 과정에서 시간이 많이 소요된다. 하지만 추가 및 삭제를 하는 과정에서 유연함을 띈다
 */

const b = Array(3);
// const ar = [1, [7, 8], obj, [obj], fn];
const arr = [1, 2, 3];
// const arr = Array(1, 2, 3);
// const arr = new Array(1, 2, 3);

const ar2 = Array(5).fill(1);
console.log('11 = ', ar2);

ar2.fill('X');
console.log("ar2.fill('X') = ", ar2);
ar2.fill('Y', 1);
console.log("ar2.fill('Y', 1) = ", ar2);
ar2.fill('Z', 2, 4);
console.log("ar2.fill('Z', 2, 4) = ", ar2);
ar2.fill(0, -4, -1);
console.log('ar2.fill(0, -4, -1) = ', ar2);

console.log('----------------------------');
const arr1 = [1, 2, 3];
const ar3 = Array.from(arr1);
const ar4 = [...arr1];
ar3[2] = 33;
ar4[2] = 3333;
console.log(arr1, ar3, ar4);

console.log(
  Array.from({ length: 5 }, (v, i) => {
    console.log(v);
    return i + 1;
  })
);

console.log(Array.from(Array(5), (_, i) => i + 1));
console.log(Array.from(Array(5).keys()));

console.log([...Array(5)].map((a, i) => i + 1));
const ar5 = [...'abcdef'];
console.log(ar5);
const ar6 = ['ab,cd'.split(',')];
console.log(ar6);
ar7 = [...'ab,cd'.split(',')];
console.log(ar7);

const queue = [1, 2, 3, 4, 5];

/**
 * stack => push pop 사용
 * queue => push shift 사용 (unshift, pop보다 성능 좋음)
 */
console.log(queue.shift());
console.log(queue);
console.log(queue.unshift(2, 1));
console.log(queue);
