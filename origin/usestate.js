// const useState = ((initval) => {
//   let res;

//   return (int) => {
//     res = int;
//     return [
//       res,
//       (val) => {
//         res = val;
//         (() => {
//           return res;
//         })();
//       },
//     ];
//   };
// })();

// const [state, setState] = useState(10);

// console.log(state);

// setState(30);
// console.log(state);

// // const setState = (val) => {
// //     let state;
// //     return () => {
// //         setState = val;
// //     }
// // }

// const setState = (() => {
//   let state;

//   return (val) => {
//     state = val;
//   };
// })();

const useState = (initval) => {
  let state = initval;

  function getState() {
    return state;
  }

  function setState(val) {
    state = val;
  }

  return [getState, setState];
};

const [num, setNum] = useState(10);

console.log(num());
setNum(20);
console.log(num());
console.log(num());
