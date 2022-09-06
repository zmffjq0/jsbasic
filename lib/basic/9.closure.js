let fn;
{
  const privateUser = { id: 1, name: 'Hong' };
  fn = () => {
    return privateUser;
  };
}
console.log('안녕');
const hong = fn();
hong.age = 30;
console.log(hong);

const user = {
  '': 1, // OK
  ' ': 1, // OK
  123: 1, // OK?        cf. user[123] * 10 = ?
  true: 1, // OK?        cf. user[false] = 0
  id: 1, // OK?
  id: 2, // user.id ? 2
  [`name`]: 'Hong', // OK? No     cf. user[`name`] = 'Hong'; // OK
  [Symbol()]: 'Hong', // OK?       cf. s = Symbol(); user[s] = 9; // OK
  'my-friends': ['Han', 'Kim'], // OK?
  y0: '000', // OK?
  getInfo: () => `${this.id}-${this.name}`, // OK?
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK?
};
console.log(user);

console.log(Object.keys(user), Reflect.ownKeys(user)); // Symbol
console.log(user.xxxxx); // undefined
user.addr = 'Seoul';
console.log(user?.addr);
console.log('addr' in user, user.hasOwnProperty('addr')); // true true
Object.getOwnPropertySymbols(user), Reflect.has(user, 'addr');
delete user.addr; // ⇔ Reflect.deleteProperty(user, 'addr');
console.log('addr' in user); // false
// computed property
user[`${user.id}'s name`] = `Mr. ${user.name}`; // user["2's info"]
let { id: nid, name: nm } = user; // cf. let {id, age: 30} = user; // Bad
console.log(nid, nm);
nm = 'Kim';
const kim = { nid, nm, age: 29 };

user.firstName = 'kildong';
user.lastName = 'kang';
user.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log('fn', user.fullName());

user.addr = 'Busan';
console.log(Object.getOwnPropertyDescriptor(user, 'addr'));

Object.getOwnPropertyDescriptor(user, 'addr'); // value, writable,
Object.getOwnPropertyDescriptors(user); // enumerable, configurable
Object.defineProperty(user, 'age', { value: 39, writable: false });
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
const park = Object.fromEntries([
  ['id', 7],
  ['nm', 'Park'],
]);

const newUser1 = Object.assign({}, park);
console.log('nU1', newUser1);
console.log(Object.assign({}, newUser1));
console.log({ ...park, age: 30 }); // 가능하면 이걸 쓰자
console.log(new Object(park));
Object.preventExtensions(newUser1); // 추가 안됨 삭제 읽기 쓰기 재정의 됨
Object.seal(newUser1); // 추가, 삭제, 재정의 안됨 읽기 쓰기 됨
Object.freeze(newUser1); // 추가, 삭제, 쓰기, 재정의 안됨 읽기 됨
// 주의) 하위(중첩) 객체까지 동결(freeze)하지 못한다!
user['my-friends'][0] = 'Choi';

park.arr = [1, 2, 3];

console.log(park.arr);
Object.freeze(park);

park.arr[0] = 200;
Object.freeze(park.arr);
park.arr[0] = 300;

console.log(park);
