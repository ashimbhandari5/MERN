/* filter data */
// let input = [10, 11, 12];
// let output = input.filter((value, i) => {
//   if (value === 10 || value === 12) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

let ar1 = [20, 11, 15, 28, 29];
let ar2 = ar1.filter((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ar2);
