// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// ; // 54000
function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
console.log(new Date(0).setDate(2) / 1000);
// const date1 = new Date(1970, 0, 1);
// const date2 = new Date(1970, 0, 2);
// console.log((date2.getDay() - date1.getDay()) * 24 * 60 * 60);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.

const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekDayList = ['일', '월', '화', '수', '목', '금', '토'];
const res = [];
const month = new Date().getMonth();
const today = new Date();
console.log(month);
for (let i = 0; i < 5; i++) {
  //   res.push(rand(1, dayList[month]));
  res.push(new Date(today.getFullYear(), today.getMonth(), rand(1, 31)));
}
console.log(res);
console.log(res.sort((a, b) => b - a));

// 내년(2023년)의 오늘(8월 30일)의 요일을 출력하시오.

// const nextYearToday = new Date('2023/08/30').getDay();
// console.log(weekDayList[nextYearToday]);
const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
console.log('!!!!!!!!!!!!!!!', today, nextYear);
console.log(weekDayList[nextYear.getDay()]);
// 오늘(8월 30일)로 부터 100일 후의 날짜는?
const after100days = today.setDate(100 + today.getDate());
console.log(new Date(after100days));
// const initialDate2 = new Date(2022, 7, 130, 9);
// console.log(initialDate2);

// const initialDate = new Date();
// let initialMonth = initialDate.getMonth();
// let totalDay = initialDate.getDate() + 100;
// console.log(initialMonth, totalDay);
// while (true) {
//   totalDay -= dayList[initialMonth++ % 12];
//   if (totalDay < dayList[initialMonth]) {
//     break;
//   }
// }

// console.log(`${initialMonth + 1}월 ${totalDay}일`);
