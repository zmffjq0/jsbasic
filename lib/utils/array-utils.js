export function filter(arr, callback) {
  res = [];
  for (item of arr) {
    callback(item) && res.push(item);
  }
  return res;
}

export const reduce = (arr, func, prev) => {
  if (arr.length === 0 && prev === undefined) {
    throw new Error('Array is empty!!');
  }
  let i = 0;
  let curr = prev ?? ((i += 1), arr[0]);
  for (; i < arr.length; i++) {
    curr = func(curr, arr[i]);
  }
  return curr;
};

function assertArray(arr, expArr) {
  if (arr.length !== expArr.length) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== expArr[i]) {
      return;
    }
  }

  console.log('통!!!!!!!!!!!!');
}

function splice(arr, start, cnt = arr.length, ...args) {
  const res =
    cnt === 0
      ? [...arr]
      : arr.filter((_, idx) => !(start <= idx && idx <= start + cnt - 1));
  if (args.length !== 0) {
    const len = res.length;
    for (let i = len - 1; i >= start; i--) {
      res[i + args.length - 1] = res[i];
    }
    res[start] = args;
  }
  return res.flat(Infinity);
}

function range(...args) {
  // ...args 사용 지양 => range 함수의 정확한 기능을 나타내기 위해 매개변수를 명시해주자
  let [start, end, interval] = args;
  const len = args.length;
  let isForward = start < end;
  if ((start === 0 && len === 1) || start === end) {
    return [start];
  }
  if (
    interval === 0 ||
    (isForward && interval < 0) ||
    (!isForward && interval > 0)
  ) {
    return [];
  }

  switch (len) {
    case 1:
      (isForward = [start, end, interval] =
        Math.sign(start) === 1 ? [1, start, 1] : [start, -1, 1]),
        start < end;
      break;
    case 2:
      [start, end, interval] = isForward ? [start, end, 1] : [end, start, 1];
      break;
    case 3:
      [start, end, interval] = isForward
        ? [start, end, interval]
        : [end + ((start - end) % interval), start, -interval];
      break;
  }

  const result = [];
  for (let i = start; i <= end; i += interval) {
    result.push(i);
  }
  return isForward ? result : result.reverse();
}

export {
  filter,
  reduce,
  assertArray as assertEqual,
  splice as splicePure,
  range,
};
