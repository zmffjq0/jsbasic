const kim = {
  nid: 3,
  addr: 'Pusan',
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  tt: [{ id: 1 }, { id: 2 }],
  fc: function () {
    return 0;
  },
};
const kim2 = [
  3,
  'Pusan',
  { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  [{ id: 1 }, { id: 2 }],
  function fc() {},
];
const copyArray = function (a) {
  const rets = [];
  for (let t of a) {
    rets.push(t);
  }
  return rets;
};
// const newKim = deepCopyObject(kim);
const newKim2 = deepCopyObject(kim);
newKim2.addr = 'Daegu';
newKim2.oo.name = 'Kim';
newKim2.oo.addr.city = 'Daejeon';
newKim2.tt[0].id = 3;
newKim2.fc = 3;
console.log(kim, newKim2);
console.log(
  kim.addr !== newKim2.addr,
  kim.oo.name !== newKim2.oo.name,
  kim.oo.addr.city !== newKim2.oo.addr.city,
  kim.tt[0].id !== newKim2.tt[0].id,
  kim.fc !== newKim2.fc
); // true, true, true면 통과!
console.clear();
console.log('---------------------------------');
const newKim3 = deepCopyObject(kim2);
console.log(newKim3);
newKim3[1] = 'Daegu';
newKim3[2].name = 'Kim';
newKim3[2].addr.city = 'Daejeon';
newKim3[3][0].id = 3;
newKim3[4] = 3;
console.log(`kim = ${kim} newKim3 = ${newKim3}`);
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
    console.log(typeof copyObj);
    for (let k of obj) {
      const tmpObj = k;
      console.log(k, tmpObj, typeof tmpObj);
      // if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
      // if (Array.isArray(tmpObj)) copyObj[k] = copyArray(tmpObj);
      if (typeof tmpObj === 'object' || typeof tmpObj === 'function') {
        console.log(copyObj);
        copyObj.push(deepCopyObject(k));
      } else {
        copyObj.push = k;
      }
    }
  } else {
    copyObj = {};
    for (let k in obj) {
      const tmpObj = obj[k];
      console.log(k, tmpObj, typeof tmpObj);
      // if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
      // if (Array.isArray(tmpObj)) copyObj[k] = copyArray(tmpObj);
      if (typeof tmpObj === 'object' || typeof tmpObj === 'function') {
        copyObj[k] = deepCopyObject(tmpObj);
      } else {
        copyObj[k] = obj[k];
      }
    }
  }

  return copyObj;
}

const a = {
  b: () => {
    return 0;
  },
};

const b = a;
console.log(typeof a.b);
a.b = 3;
console.log(a.b, b.b);

const c = [1, 2, 3];
for (let i in c) {
  console.log(i);
}
