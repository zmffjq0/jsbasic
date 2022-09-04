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

// 인자가 primitive 타입인 경우 함수 내에서 Lexical Env Record가 생기기 때문에 함수 내에서 조작하는 것은 상관 없다
// 인자가 object인 경우 새로 복사해서 사용하자!
// 숫자와 undefined를 비교시 무조건 false가 나온다
// 함수 매개변수에 초기값 설정을 사용하자
// 좌측에 할당할 변수가 없다면 널 병합 연산자보다는 차라리 if문을 사용하자 =>
// 널병합 연산자를 사용할 땐, 할당하도록 하자

function range(...args) {
  // ...args 사용 지양 => range 함수의 정확한 기능을 나타내기 위해 매개변수를 명시해주자
  let [start, end, interval] = args;
  const len = args.length;
  let isForward = start < end;
  if ((start === 0 && len === 1) || start === end) {
    return [start];
  }
  if (
    interval === 0 ||
    (isForward && interval < 0) ||
    (!isForward && interval > 0)
  ) {
    return [];
  }

  switch (len) {
    case 1:
      (isForward = [start, end, interval] =
        Math.sign(start) === 1 ? [1, start, 1] : [start, -1, 1]),
        start < end;
      break;
    case 2:
      [start, end, interval] = isForward ? [start, end, 1] : [end, start, 1];
      break;
    case 3:
      [start, end, interval] = isForward
        ? [start, end, interval]
        : [end + ((start - end) % interval), start, -interval];
      break;
  }

  const result = [];
  for (let i = start; i <= end; i += interval) {
    result.push(i);
  }
  return isForward ? result : result.reverse();
}

//-----------------------------------------------------------------

// console.time('1st');
// console.log(range(100));
// console.timeEnd('1st');

// console.time('2nd');
// console.log(range(10, 1));
// console.timeEnd('2nd');

// console.time('3rd');
// console.log(range(1, 10));
// console.timeEnd('3rd');

// console.time('4th');
// console.log(range(10, 1, -4));
// console.timeEnd('4th');

// console.time('5th');
// console.log(range(1, 10, 7));
// console.timeEnd('5th');

// console.time('5th');
// console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
// console.timeEnd('5th');

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

// console.time('12th');
// console.log(range(-1, -10, -4));
// console.timeEnd('12th');

// console.time('13th');
// console.log(range(-10, -1, 4));
// console.timeEnd('13th');

// start와 end가 같을 때
console.log(`// start와 end가 같을 때=============`);
console.time('14th');
console.log(range(5, 5));
console.timeEnd('14th');

// start와 end가 같을 때 배열 원소 1개 리턴
console.log(`// start와 end가 같을 때 배열 원소 1개 리턴==============`);
console.log(range(5, 5, 0));
console.log(range(5, 5, -1));
console.log(range(5, 5, 1));

// 인자가 1개이면서 음수일 때,
console.log(`// 인자가 1개이면서 음수일 때,===============`);
console.log(range(-5));

// interval이 적절하지 않을 때,
console.log(`// interval이 적절하지 않을 때,================`);
console.log(range(5, 1, 1));
console.log(range(1, 5, -1));
console.log(range(1, 5, 6));
console.log(range(0));
console.log(range(0, 0));
console.log(range(0, 0, 5));
console.log('==============================');
console.log(range(0, 5));
console.log(range(0, -1));
console.log(range(0, -3));
console.log(range(-3, 0));
console.log(range(2, 1, -5));
console.log(range(0, -1, -5));
console.log(range(-5, -1, 3));
console.log(range(-2, -7, -2));
