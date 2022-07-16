const kim = {
  nid: 3,
  addr: 'Pusan',
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

// const newKim = deepCopyObject(kim);
const newKim2 = deepCopyObject(kim);
newKim2.addr = 'Daegu';
newKim2.oo.name = 'Kim';
newKim2.oo.addr.city = 'Daejeon';
console.log(kim, newKim);
console.log(
  kim.addr !== newKim2.addr,
  kim.oo.name !== newKim2.oo.name,
  kim.oo.addr.city !== newKim2.oo.addr.city
); // true, true, true면 통과!

function deepCopyObject(obj) {
  const oo = { ...obj.oo };
  const addr = { ...obj.oo.addr };
  const newobj = { ...obj };
  newobj.oo = oo;
  newobj.oo.addr = addr;
  return newobj;
}

function deepCopyObject2(obj) {
  const newobj = {};
  for (let i in obj) {
    if (typeof obj[i] !== 'object') {
      newobj[i] = obj[i];
    } else {
      newobj[i] = deepCopyObject2(obj[i]);
    }
  }
  return newobj;
}
