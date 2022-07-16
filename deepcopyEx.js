const kim2 = [
  3,
  'Pusan',
  { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  [{ id: 1 }, { id: 2 }],
  function fc() {
    return True;
  },
];

const newKim3 = deepCopyObject(kim2);
newKim3[1] = 'Daegu';
newKim3[2].name = 'Kim';
newKim3[2].addr.city = 'Daejeon';
newKim3[3][0].id = 3;
newKim3[4] = 3;
console.log(`kim2 = ${kim2}\n----------------------`);
console.log(`newKim3 = ${newKim3}`);
// console.log(`kim = ${kim2} newKim3 = ${newKim3}`);
console.log(
  kim2[1] !== newKim3[1],
  kim2[2].name !== newKim3[2].name,
  kim2[2].addr.city !== newKim3[2].addr.city,
  kim2[3][0].id !== newKim3[3][0].id,
  kim2[4] !== newKim3[4]
);

function deepCopyObject(obj) {
  if (typeof obj != 'object') {
    return;
  }

  let copyObj;
  if (Array.isArray(obj)) {
    copyObj = [];
    for (let k of obj) {
      const tmpObj = k;
      console.log(k, tmpObj, typeof tmpObj);
      if (typeof tmpObj === 'object' || typeof tmpObj === 'function') {
        copyObj.push(deepCopyObject(tmpObj));
      } else {
        copyObj.push(tmpObj);
      }
    }
  } else {
    copyObj = {};
    for (let k in obj) {
      const tmpObj = obj[k];
      console.log(k, tmpObj, typeof tmpObj);
      if (typeof tmpObj === 'object' || typeof tmpObj === 'function') {
        copyObj[k] = deepCopyObject(tmpObj);
      } else {
        copyObj[k] = obj[tmpObj];
      }
    }
  }

  return copyObj;
}
