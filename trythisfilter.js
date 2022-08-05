function myfilter(arr, callback) {
  res = [];
  for (item of arr) {
    callback(item) && res.push(item);
  }
  return res;
}

const newArr = myfilter([1, 2, 3, 4, 5], (item) => item % 2 === 0);
console.log(newArr);
