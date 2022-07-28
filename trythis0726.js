/* range 함수 구현하기
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1);     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, ..., 99, 100]

console.time,
console.timeEnd
 */

function range(...arg) {
  let [start, end, interval] = arg;
  const len = arguments.length;
  const isForward = start < end;
  const result = [];

  switch (len) {
    case 0:
      throw new Error('Empty args');
      return;

    case 1:
      for (let i = 1; i <= start; i++) result.push(i);
      return result;

    case 2:
      [start, end] = isForward ? [start, end] : [end, start];
      for (let i = start; i <= end; i++) result.push(i);
      return isForward ? result : result.reverse();

    case 3:
      [start, end, interval] = isForward
        ? [start, end, interval]
        : [end + ((start - end) % interval), start, -interval];
      for (let i = start; i <= end; i += interval) result.push(i);
      return isForward ? result : result.reverse();
  }
}
console.time('1st');
// console.log(range(100));
// console.timeEnd('1st');

// console.time('2nd');
// console.log(range(10, 1));
// console.timeEnd('2nd');

// console.time('3rd');
// console.log(range(1, 10));
// console.timeEnd('3th');

// console.time('4th');
// console.log(range(10, 1, -4));
// console.timeEnd('4th');

// console.time('5th');
// console.log(range(1, 10, 7));
// console.timeEnd('5th');

// console.time('5th');
// console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
// console.timeEnd('5th');

// console.time('6th');
// console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.timeEnd('6th');

// console.time('7th');
// console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.timeEnd('7th');

// console.time('8th');
// console.log(range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.timeEnd('8th');

// console.time('9th');
// console.log(range(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]
// console.timeEnd('9th');

// console.time('10th');
// console.log(range(5)); // [1, 2, 3, 4, 5]
// console.timeEnd('10th');

// console.time('11th');
// console.log(range(100, 57, -8));
// console.timeEnd('11th');

console.time('12th');
console.log(range(-1, -10, -4));
console.timeEnd('12th');

console.time('13th');
console.log(range(-10, -1, 4));
console.timeEnd('13th');
