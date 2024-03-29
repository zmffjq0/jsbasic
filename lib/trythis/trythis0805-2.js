const arr = [1, 2, 3, 4];
assertArray(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
assertArray(pop(arr), [1, 2, 3]); // [1, 2, 3, 4, 5]
assertArray(pop(arr, 2), [1, 2]); // 2개 팝! ⇒ [1, 2, 3]
assertArray(unshift(arr, 0), [0, 1, 2, 3, 4]); // [0, 1, 2]
assertArray(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]); // [7, 8, 0, 1, 2]
assertArray(shift(arr), [2, 3, 4]); // [8, 0, 1, 2]
assertArray(shift(arr, 2), [3, 4]); // [1, 2]
console.log(arr); // [1, 2, 3, 4]

//////////////////////////////////

function push(arr, ...args) {
  return [...arr, ...args];
}

function pop(arr, cnt = 1) {
  if (arr.length < cnt) {
    console.log('Empty Array!');
    return;
  }
  return arr.filter((_, idx) => idx < arr.length - cnt);
}

function unshift(arr, ...args) {
  return [...args, ...arr];
}

function shift(arr, cnt = 1) {
  if (arr.length < cnt) {
    console.log('Empty Array!');
    return;
  }
  return arr.filter((_, idx) => idx >= cnt);
}

///////////////////

function assertArray(arr, expArr) {
  if (arr.length !== expArr.length) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== expArr[i]) {
      return;
    }
  }

  console.log('통!!!!!!!!!!!!');
}
