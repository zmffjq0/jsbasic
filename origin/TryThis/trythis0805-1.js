const arr = [1, 4, 9];

function powSqrtByForOf(arr) {
  const powArr = [];
  const sqrtArr = [];

  for (let el of arr) {
    powArr.push(el ** 2);
    sqrtArr.push(el ** 0.5);
  }
  return [powArr, sqrtArr];
}

function powSqrtByForEach(arr) {
  const powArr = new Array(arr.length).fill(0);
  const sqrtArr = new Array(arr.length).fill(0);
  arr.forEach((el, idx) => {
    powArr[idx] = el ** 2;
    sqrtArr[idx] = el ** 0.5;
  });
  return [powArr, sqrtArr];
}

function powSqrtByMap(arr) {
  const powArr = [];
  const sqrtArr = [];
  arr.map((el) => {
    powArr.push(el ** 2);
    sqrtArr.push(el ** 0.5);
  });
  return [arr.map((a) => a ** 2), arr.map((a) => a ** 0.5)];
}

// [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
