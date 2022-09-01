function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

const res = new Object();

const start = 300;
const end = 1000;

for (let i = 0; i < 10_000_000; i++) {
  const r = rand(start, end);
  res[r] = (res[r] ?? 0) + 1;
}

const entries = Object.entries(res).sort((a, b) => b[1] - a[1]);
console.log(entries);
console.log('end!!!!!');
console.log(entries, entries[0][1] - entries[end - start][1]);
