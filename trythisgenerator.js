// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.

// (실행 결과: 1과 2를 넣었을 때)
// 첫 번째 수?
// 두 번째 수?
// 3

function* calc() {
  const a = yield '첫 번째 수?';
  const b = yield '두 번째 수?';
  return a + b;
}

const it = calc(1, 2);
console.log(it.next());
console.log(it.next(1));
console.log(it.next(2));
