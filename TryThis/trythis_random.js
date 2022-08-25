function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

for (let i = 0; i < 100; i++) {
  console.log(rand(5, 80));
}
