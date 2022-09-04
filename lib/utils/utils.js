export function deepCopy(obj) {
  let copyObj;
  if (Array.isArray(obj)) {
    copyObj = [];
  } else {
    copyObj = {};
  }
  for (let k in obj) {
    const tmpObj = obj[k];
    if (typeof tmpObj === 'object') {
      copyObj[k] = deepCopy(tmpObj);
    } else {
      copyObj[k] = tmpObj;
    }
  }

  return copyObj;
}
