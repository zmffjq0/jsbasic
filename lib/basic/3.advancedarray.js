users.forEach((user, idx) => console.log(user.name));
ax = users.map((user, idx) => `${idx + 1}. ${user.name}`);
ax = users.filter((user, idx) => user.id > 1);
ax = users.find((user, idx) => user.id === 2);

const arr = [1, 2, 3, 2, 3];
arr.some((a, idx) => a === 1); // true
arr.some((a) => a === 5); // false
arr.every((a, idx) => a > 0); // true
arr.every((a) => a % 2 === 0); // false

arr.indexOf(3); // 2
arr.indexOf(5); // -1
arr.indexOf(3, 3); // 4
arr.lastIndexOf(3); // 4
arr.lastIndexOf(3, -2); // 2

arr.includes(1); // true
arr.includes(5); // false
arr.includes(1, 1); // false
arr.includes(1, 0); // true
const orr = [{ id: 1 }, { id: 2 }, { id: 1 }];
orr.findIndex((a, i) => a.id === 1);

orr.findLastIndex((a, i) => a.id === 1);
