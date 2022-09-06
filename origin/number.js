console.log(new Number(), 'vs', Number()); //[Number: 0] vs 0
console.log(new Number(4).valueOf()); // 4
console.log(Number(3)); // 3
console.log(Number('1')); // 1
console.log(Number('12') === parseInt(12)); // true
console.log(Number('12.3'), parseInt(12.3)); // 12.3 12
console.log(
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY
);

console.log(Number.isNaN(1), Number.isNaN(NaN), Number.isNaN(undefined)); // false true false
console.log(Number.NaN === NaN); // false
console.log(NaN === undefined); // false
console.log(Number.isNaN(NaN) && isNaN(NaN));
console.log(Number.isFinite(NaN) && Number.isSafeInteger(NaN)); // false
console.log(Number.isNaN(undefined) === isNaN(undefined)); // false
console.log(Number.isNaN(undefined)); // false
console.log(isNaN(undefined)); // true
console.log(Number.EPSILON); // 부정확한 부동 소수 계산 오차에 쓰임
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// Number.isFinite()
console.log(Number.isFinite(0)); // true
console.log(
  Number.isFinite(Number.MAX_VALUE) || Number.isFinite(Number.MIN_VALUE) // true
);
console.log(!!Number.isFinite()); // false
console.log(!!Number.isFinite(Infinity)); // false
console.log(Number.isFinite(null) === isFinite(null)); // false

// Number.isSafeInteger()
console.log('!!!', Number.isSafeInteger(9_007_190_000_000_000)); // true
console.log(Number.isSafeInteger(1_000_000_000_000_010_0)); // false
console.log(Number.isSafeInteger(0.1) || Number.isSafeInteger('1')); // false
console.log(Number.isSafe);
console.log(100_000_000);

function radixCalculator(a, b, number) {
  switch (number) {
    case 2:
      return '0b'.concat((a + b).toString(number));
    case 8:
      return '0o'.concat((a + b).toString(number));
    case 16:
      return '0x'.concat((a + b).toString(number));
  }
}

console.log(+radixCalculator(0b001, 0b001, 2));

console.log(parseInt('111', 2));

const a = 0b101;

console.log(a);
