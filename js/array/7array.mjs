let ar1 = ["n", "i", "t", "a", "n"];
let ar2 = ar1.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
console.log(ar2);
