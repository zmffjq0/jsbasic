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
  const powArr = [];
  const sqrtArr = [];
  arr.forEach((el) => {
    powArr.push(el ** 2);
    sqrtArr.push(el ** 0.5);
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
  return [powArr, sqrtArr];
}

// [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
