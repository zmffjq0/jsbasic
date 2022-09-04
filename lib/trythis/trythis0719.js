const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = (() => {
  let widx = -1;
  if (widx >= weeks.length) widx = 0;
  return function () {
    widx += 1;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!z
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 1000);
