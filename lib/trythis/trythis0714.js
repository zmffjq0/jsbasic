const kim = {
  nid: 3,
  addr: 'Pusan',
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
console.log(kim, newKim);
console.log(
  kim.addr !== newKim.addr,
  kim.oo.name !== newKim.oo.name,
  kim.oo.addr.city !== newKim.oo.addr.city
); // true, true, true면 통과!

// function deepCopyObject(obj) {
//   const oo = { ...obj.oo };
//   const addr = { ...obj.oo.addr };
//   const newobj = { ...obj };
//   newobj.oo = oo;
//   newobj.oo.addr = addr;
//   return newobj;
// }

function deepCopyObject(obj) {
  const newobj = {};
  for (let i in obj) {
    if (typeof obj[i] !== 'Object') {
      newobj[i] = obj[i];
    } else {
      newobj[i] = deepCopyObject(obj[i]);
    }
  }
}
