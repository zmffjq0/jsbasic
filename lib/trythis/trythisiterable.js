import { subwayLineTwo } from '../localdata.js';
class SubwayRoute {
  [Symbol.iterator]() {
    let idx = subwayLineTwo.indexOf(this.start);
    let end = this.end;
    let flag = false;
    return {
      next() {
        idx = idx % subwayLineTwo.length;
        flag = subwayLineTwo[idx - 1] === end;
        // if (subwayLineTwo[idx - 1] === end) {
        //   flag = true;
        // }
        return {
          // value: subwayLineTwo[idx++],
          value: flag ? undefined : subwayLineTwo[idx++],
          // done: subwayLineTwo[idx - 1] === end,
          done: flag,
        };
      },
    };
  }
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const sr = new SubwayRoute('문래', '신림');
console.log([...sr]);
// for (const el of sr) {
//   console.log(el);
// }
// console.log([...sr]);

const it = sr[Symbol.iterator]();
while (true) {
  const x = it.next();
  console.log(x);
  // console.log(x.value);
  if (x.done) break;
}

console.log('================================================');

const sr2 = new SubwayRoute('구로디지털단지', '성수');
const it2 = sr2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  // console.log(x.value);
  if (x.done) break;
}

console.log('hello');
