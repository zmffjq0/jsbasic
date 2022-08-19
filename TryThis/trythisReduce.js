// reduce
// → 배열의 각 요소를 제곱
// → 배열 각 요소의 제곱근
// → 배열의 각 요소를 세제곱
let arr = [1, 2, 3, 4, 5];
console.log(
  arr
    .reduce((acc, curval) => {
      acc.push(curval ** 2);
      return acc;
    }, [])
    .reduce((acc, curval) => {
      acc.push(curval ** 0.5);
      return acc;
    }, [])
    .reduce((acc, curval) => {
      acc.push(curval ** 3);
      return acc;
    }, [])
);

console.log(
  arr.reduce(
    (acc, curVal, curIdx) => {
      acc[curIdx] = curVal ** 3;
      return acc;
    },
    arr.reduce(
      (acc, curVal, curIdx) => {
        acc[curIdx] = curVal ** 0.5;
        return acc;
      },
      arr.reduce((acc, curVal) => {
        acc.push(curVal ** 2);
        return acc;
      }, [])
    )
  )
);

const pow1 = (a) => a ** 2;
const pow2 = (a) => a ** 0.5;
const pow3 = (a) => a ** 3;
const ax = [pow1, pow2, pow3].reduce((ret, fn) => ret.map((el) => fn(el)), arr);

console.log(ax);

// callback(accumulator, currentvalue, [currentIndex, [array)
// 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
//////- accumulator
// 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
//////- currentValue
// 처리할 현재 요소.
//////- currentIndex (Optional)
// 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
//////- array (Optional)
// reduce()를 호출한 배열.

// initialValue (Optional)
// callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
