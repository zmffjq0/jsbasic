const arr = [1, 4, 9];

function powSqrtByForOf(arr) {
  const powArr = [];
  const sqrtArr = [];

  for (let el of arr) {
    powArr.push(el * el);
    sqrtArr.push(Math.sqrt(el));
  }
  return [powArr, sqrtArr];
}

function powSqrtByForEach(arr) {
  const powArr = [];
  const sqrtArr = [];
  arr.forEach((el) => {
    powArr.push(el * el);
    sqrtArr.push(Math.sqrt(el));
  });
  return [powArr, sqrtArr];
}

function powSqrtByMap(arr) {
  const powArr = [];
  const sqrtArr = [];
  arr.map((el) => {
    powArr.push(el * el);
    sqrtArr.push(Math.sqrt(el));
  });
  return [powArr, sqrtArr];
}

// [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
