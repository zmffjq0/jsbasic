const n = 100;
let s1 = n.toString();

// + => 문자열 병합 연산자 ( 숫자 + string or string + 숫자 )
let s2 = n + '';
let s3 = '' + n;

const binary = n.toString(2);
console.log(typeof s1, typeof s2, typeof s3);
console.log(n.toString(2), n.toString(8), n.toString(16));

console.log(parseInt(binary, 2), parseFloat('3.2cm'), Number('3.2cm'));

const n1 = Number(s1); //String()
const n2 = new Number(s1); // new String()
console.log(n1, n2, typeof n1, typeof n2);

const x = 5;
console.log(typeof x, typeof !!x, typeof !!undefined);

const d1 = Date();
const d2 = new Date();
console.log(d1, d2, typeof d1, typeof d2);
console.log(d1.valueOf(), d2.valueOf());

console.log('sss' + 2, 'sss' + { id: 1 });
const u = { id: 1, name: 'hong' };
console.log(typeof u.toString());

r = x + '30';
r = x + +'30'; // 두번째 + => 부호연산자로 후에 나오는 문자를 숫자로 생각한다
q = x * '30';

console.log(r, typeof r, q, typeof q);

let a = 1,
  b = 2;
let c = (a++, b++);
console.log(a, b, c);

let w = [];
// 주소값이 있기 때문
if (w) {
  console.log('hello');
}

const T = true,
  F = false;
let y = 1;
// 논리를 주는 것이 아닐 때, 값을 리턴해준다
console.log(T || y++, F || y++, y); // ?  if (f1() && f2())
console.log(T && y++, F && y++, y); // ?

function fx(x = 0) {
  // return (x || 0) * 0.1;
  return x * 0.1;
}

let a1 = 0b1010,
  b1 = 0b1100;

console.log(a1 & b1, a1 | b1, a1 ^ b1, ~b1);
console.log((a1 & b1).toString(2));

const R = 1,
  W = 2,
  E = 4;
let auth = parseInt('011', 2);
const hasWriteAuth = auth & W;
const hasExeAuth = auth & E;
const hasReadAndExeAuth = auth & (R | E); // R + E
auth = auth ^ E; // XOR

console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
console.log(Math.round(3.12)); // round 언제나 정수

console.log(parseFloat(3.14).toFixed(1));
let f = 2.345;
// 버림은 trunc가 훨씬 빠름
console.log(Math.trunc(f) === Math.floor(f));
// 소수점일떈 다름
f = -2.345;
console.log(Math.trunc(f), Math.floor(f));

console.log(0.1 + 0.2);

console.log(
  0.1 + 0.2,
  0.1 + 0.2 === 0.3,
  Math.abs(0.1 + 0.2) - 0.3 < Number.EPSILON
);

for (let i = 0.1; i < 1; i = (i * 10 + 0.1 * 10) / 10) {
  // console.log(Math.abs(i - Math.round(i * 10) / 10) < Number.EPSILON);
  // console.log(-(i - i - Math.trunc(i / 0.1) / 10));
  // console.log(i - (i - Math.trunc(i / 0.1) / 10));
  console.log(i);
}

function toValidFLoat(a, b, length) {
  const po = Math.pow(10, length);
}

let c1 = 1n;

console.log(c1);

const i = { id: 1, name: 'hong', age: 29 }; // object
let { id, name: nm, addr } = i;
console.log(id, nm, addr);

const abc = [1, 2, 3];
console.log(...abc);

console.log('name' in i);
class Dog {}
const d = new Dog();
console.log(d instanceof Dog);
console.log('===================================');

for (let i = 2; i <= 10; i++) {
  const x = Math.sqrt(i);
  if (!Number.isInteger(x)) {
    console.log(i, x.toFixed(3));
  }
}

for (let i = 2; i <= 10; i++) {
  const x = Math.sqrt(i).toFixed(3);
  if (x - parseInt(x) != 0) {
    console.log(i, x);
  }
}

console.log('===================================');

const today = new Date();
const day = today.getDay();
switch (day) {
  case 0:
    console.log('오늘은 일요일입니다.');
    break;
  case 1:
    console.log('오늘은 월요일입니다.');
    break;
  case 2:
    console.log('오늘은 화요일입니다.');
    break;
  case 3:
    console.log('오늘은 수요일입니다.');
    break;
  case 4:
    console.log('오늘은 목요일입니다.');
    break;
  case 5:
    console.log('오늘은 금요일입니다.');
    break;
  default:
    console.log('오늘은 토요일입니다.');
    break;
}
console.log('===================================');

const dayList = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

const dayList2 = ['일', '월', '화', '수', '목', '금', '토'];

console.log(`오늘은 ${dayList[day]}요일입니다.`);
console.log('===================================');
console.log(`오늘은 ${dayList2[day]}요일입니다.`);

console.log('===================================');
const dayList3 = '일월화수목금토'; // 배열보다 가벼움(원시타입)
console.log(dayList3[day]);
