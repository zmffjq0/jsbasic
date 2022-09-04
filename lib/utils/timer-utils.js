const tryDebounce = (callback, delay) => {
  let timer;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, delay, ...args);
  };
};
const act = tryDebounce(rand, 1000);

let idx = 0;
const timer = setInterval(() => {
  act(1, 10);
  idx++;
  if (idx === 20) {
    clearInterval(timer);
  }
}, 100);

const tryThrottle = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(
      () => {
        callback(...args);
        timer = null;
      },
      delay,
      ...args
    );
  };
};

export { tryDebounce as debounce, tryThrottle as throttle };
