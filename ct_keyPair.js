function keyPair(arr, N) {
  const prefix = {};
  for (let i = 0; i < arr.length; i++) {
    prefix[`${arr[i]}`] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (prefix[`${N - arr[i]}`]) {
      console.log([i, prefix[`${N - arr[i]}`]]);
      return;
    }
  }
}

keyPair([1, 4, 45, 6, 10, 8], 16);
keyPair([1, 2, 4, 3, 6], 10);
keyPair([1, 2, 3, 4, 5], 9);
