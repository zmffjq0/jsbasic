function* route() {
  const start = yield '출발 역은?';
  const end = yield '도착 역은?';
  return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const it = route();
console.log(it);
console.log(it.next());
console.log(it.next('문래'));
console.log(it.next('신림'));

function* gener() {
  const x = yield 1;
  const y = yield x + 10;
  console.log('x y = ', x, y);
  return x + y;
}

const it3 = gener();
console.log(it3.next());
console.log(it3.next(3));
console.log(it3.next(5));
