function copyObject(obj) {
  const copyObj = {};
  for (let k in obj) {
    // console.log(k, obj[k]);
    copyObj[k] = obj[k];
  }

  return copyObj;
}
