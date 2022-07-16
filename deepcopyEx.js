const kim2 = {
  id: 3,
  city: 'Pusan',
  addr: { id: 1, name: 'Hong', addr: { city: 'Seoul', arr: [1, 2, 3] } },
  ids: [{ id: 1 }, { id: 2 }],
  fc: function () {
    return True;
  },
};

const kim3 = [
  3,
  'Pusan',
  { id: 1, name: 'Hong', addr: { city: 'Seoul', arr: [1, 2, 3] } },
  [{ id: 1 }, { id: 2 }],
  function fc() {
    return True;
  },
];

// *********** 배열로 시작할 때 ***************
// const newKim3 = deepCopyObject(kim3);
// newKim3[1] = 'Daegu';
// newKim3[2].name = 'Kim';
// newKim3[2].addr.city = 'Daejeon';
// newKim3[3][0] = 3;
// newKim3[2].addr.arr[0] = 100;
// newKim3[4] = 'aaaa';
// console.log('kim3 ===============>');
// console.log(kim3);
// console.log('newkim3 ===============>');
// console.log(newKim3);

// *********** 객체로 시작할 때 ***************
const newKim2 = deepCopyObject(kim2);
newKim2.ids[0].id = 100;
// newKim2.fc = 'bbbb';
console.log('----------------------');
console.log(kim2);
console.log('----------------------');
console.log(newKim2);
// **************************

function deepCopyObject(obj) {
  let copyObj;
  if (Array.isArray(obj)) {
    copyObj = [];
  } else {
    copyObj = {};
  }
  for (let k in obj) {
    const tmpObj = obj[k];
    if (typeof tmpObj === 'object') {
      copyObj[k] = deepCopyObject(tmpObj);
    } else {
      copyObj[k] = tmpObj;
    }
  }

  return copyObj;
}
