const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const prefix = new Array(arr.length).fill(0);
prefix[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
  prefix[i] = arr[i] + prefix[i - 1];
}
function rangeSum(a, b) {
  console.log(prefix[b] - prefix[a - 1]);
}

rangeSum(2, 5);
rangeSum(3, 5);
rangeSum(1, 4);
rangeSum(5, 8);
rangeSum(6, 8);
rangeSum(2, 8);
rangeSum(4, 4);
