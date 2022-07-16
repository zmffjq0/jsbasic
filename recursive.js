/**
 * let tot = 0;
for (let i = 1; i <= 100; i += 1) {
  tot += i;
}
console.log(tot);

 */

function sum1(x) {
  if (x == 0) {
    return 0;
  } else {
    return x + sum1(x - 1);
  }
}

console.log(sum1(100));

function sum2(start, end) {
  if (start > end) {
    return 0;
  } else {
    return start + sum2(start + 1, end);
  }
}

console.log(sum2(1, 100));

function factorials(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * factorials(x - 1);
  }
}

console.log(factorials(4));
