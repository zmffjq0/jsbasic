// ex1) 순수 함수
// const a11 = [1, 2, 3, 4, 5];
// makeReverseArray(a11); // [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
// ex2) 비순수 함수
// const a11 = [1, 2, 3, 4, 5];
// reverseArray(a11); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!

function reverseArray(args) {
  const len = args.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    [args[i], args[len - 1 - i]] = [args[len - 1 - i], args[i]];
  }
  console.log(args);
}

function makeReverseArray(args) {
  const len = args.length;
  const arr = [...args];
  for (let i = 0; i <= Math.floor(len / 2); i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }
  console.log(arr);
}

const all = [1, 2, 3, 4, 5, 6];
const all2 = [1, 2, 3, 4, 5, 6];

// 순수함수 all 변함 없음
makeReverseArray(all2);
console.log(all2);

// 비순수함수 all 값 변경
reverseArray(all);
console.log(all);
