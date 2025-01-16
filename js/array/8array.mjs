//"ashim"=> "Ashim"

let input = "ashim";
let output1 = input.split("");
let output2 = output1.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
let output3 = output2.join("");
console.log(output3);
