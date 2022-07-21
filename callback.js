for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

const f1 = (f, val) => f(val);

f1(console.log, 500);

const f11 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));
const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));
const f22 = function (f) {
  return function (...args) {
    return console.log(f.name, f(...args));
  };
};

f22(Math.max)(1, 3, 2, 5, 4);
