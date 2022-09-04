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

function keyPair2(arr, N) {
  const diffIdx = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const diff = N - val;
    if (diffIdx.hasOwnProperty(val)) {
      console.log([diffIdx[val], i]);
      return;
    } else {
      console.log(i);
      diffIdx[diff] = i;
    }
  }
}

keyPair2([1, 2, 3, 4, 9], 12);

// keyPair([1, 4, 45, 6, 10, 8], 16);
// keyPair([1, 2, 4, 3, 6], 10);
// keyPair([1, 2, 3, 4, 5], 9);
