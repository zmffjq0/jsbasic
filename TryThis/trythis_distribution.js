function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

const res = new Object();
console.log(res);

for (let i = 0; i < 100_000_000; i++) {
  if (Number.isNaN(res[rand(100, 200)])) {
    res[rand(100, 200)] = 1;
  } else {
    res[rand(100, 200)] += 1;
  }
}
console.log(res);
console.log('end!!!!!');
