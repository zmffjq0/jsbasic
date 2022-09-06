const { getFileInfo } = require('prettier');

if (true) {
  console.log('dfdf');
}

function varFn() {
  var v = 1;
  {
    var v = 2,
      vv = 3;
    console.log(v, vv);
  }
  console.log(v, vv);
}

varFn();

function letFn() {
  let l = 1;
  {
    let l = 2;
    console.log(l);
  }
  console.log(l);
}
letFn();

function outerFunc(a) {
  const x = 11;
  var y;
  function innerFunc() {
    console.log(x);
    console.log(a);
    console.log(y);
  }
  return innerFunc;
}
var inner = outerFunc(3);
inner();
console.log('---------');
console.log(z);
console.log('---------');
console.log('hello');
console.log('---------');
{
  var z = 1;
  console.log(z);
}
console.log('---------');

let fn;
{
  const privateUser = {
    id: 1,
    name: 'hong',
  };
  fn = function () {
    return privateUser;
  };
}
const hong = fn();
hong.age = 30;
console.log(hong);

function getFn() {
  const pv = 5;
  return function (n) {
    return pv + n;
  };
}

const defVal = 100;
const add5Fn = getFn();
console.log(add5Fn(30) + defVal);

const obj = null;
console.log('obj.id=', obj?.id);

let x = null;
console.log(x || 'bb');
x = 'a';
const cmt = x ?? 'bb';
console.log('comment=', cmt);
