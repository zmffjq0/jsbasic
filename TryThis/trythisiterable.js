const subwayLineTwo = [
  ...new Set([
    '을지로입구',
    '을지로3가',
    '을지로4가',
    '동대문역사문화공원',
    '신당',
    '한양대',
    '뚝섬',
    '건대입구',
    '구의',
    '강변',
    '잠실나루',
    '잠실',
    '신천',
    '종합운동장',
    '삼성',
    '선릉',
    '역삼',
    '강남',
    '교대',
    '서초',
    '방배',
    '사당',
    '낙성대',
    '서울대입구',
    '봉천',
    '신림',
    '신대방',
    '구로디지털단지',
    '대림',
    '신도림',
    '문래',
    '영등포구청',
    '당산',
    '합정',
    '홍대입구',
    '신촌',
    '이대',
    '아현',
    '충정로',
    '성수',
    '용답',
    '신답',
    '용두',
    '신설동',
    '신도림',
    '도림천',
    '양천구청',
    '신정네거리',
    '까치산',
  ]),
];
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
