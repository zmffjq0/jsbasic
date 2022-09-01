/**
 * debounce
 */

// const debounce = (callback, delay) => {
//   let timer;
//   return (...args) => {
//     timer && clearTimeout(timer);
//     timer = setInterval(callback, delay, ...args);
//   };
// };

// const act = debounce((a) => console.log(a + 1), 100);
// act(1000);

// /**
//  * throttle
//  */

// const throttle = (callback, delay) => {
//   let timer;
//   return (...args) => {
//     if (timer) return;
//     timer = setTimeout(() => {
//       cb(...args);
//       timer = null;
//     }, delay);
//   };
// };

// 0.1초에 한번씩 rand를 총 20회 호출하였을 때, 다음의 각 상황에서 총 몇 번 호출되는가?
// 단순 호출 시  ⇒ 총 20회 실행!
// 1초 Debounce 호출 시   ⇒ 1회
// 1초 Throttle 호출 시   ⇒ 총 2초 동안 ⇒ 2회 실행!

function rand(start, end) {
  console.log(Math.floor(Math.random() * (end - start + 1)) + start);
}

// debounce
// const tryDebounce = (callback, delay) => {
//   let timer;
//   return (...args) => {
//     timer && clearTimeout(timer);
//     timer = setTimeout(callback, delay, ...args);
//   };
// };
// const act = tryDebounce(rand, 1000);

// let idx = 0;
// const timer = setInterval(() => {
//   act(1, 10);
//   idx++;
//   if (idx === 20) {
//     clearInterval(timer);
//   }
// }, 100);

//throttle
// const tryThrottle = (callback, delay) => {
//   let timer;
//   return (...args) => {
//     if (timer) return;
//     timer = setTimeout(
//       () => {
//         callback(...args);
//         timer = null;
//       },
//       delay,
//       ...args
//     );
//   };
// };
// const act = tryThrottle(rand, 1000);

// let idx = 0;
// const timer = setInterval(() => {
//   act(1, 10);
//   idx++;
//   if (idx === 20) {
//     clearInterval(timer);
//   }
// }, 100);
