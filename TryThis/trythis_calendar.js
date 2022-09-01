function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
const month = rand(1, 12);
const year = rand(1970, 2022);
const newDate = new Date(year, month - 1, 1);
const firstDate = new Date(
  newDate.getFullYear(),
  newDate.getMonth(),
  1,
  9
).getDate();
const lastDate = new Date(
  newDate.getFullYear(),
  newDate.getMonth() + 1,
  0,
  9
).getDate();
console.log('firstDate =====>', firstDate);
console.log('lastDate =====>', lastDate);
console.log(`${year}년 ${month}월의 달력`);
const resultDate = new Date(year, month - 1, 1, 9).getDay();

const res = Array.from(Array(7), () => new Array(0));

for (let i = 0; i < resultDate; i++) {
  res[i].push('  ');
}
for (let i = firstDate, j = resultDate; i <= lastDate; i++, j = (j + 1) % 7) {
  res[j].push(i);
}

let max = 0;
for (const arr of res) {
  max = Math.max(max, arr.length);
}

console.log('일월화수목금토'.split('').join('\t'));
for (let i = 0; i < max; i++) {
  for (let j = 0; j < 7; j++) {
    res[j][i] &&
      process.stdout.write(`${res[j][i].toString().padStart(2, ' ')}\t`);
  }
  console.log();
}

// const inputDate = '2022-08';
// const month
