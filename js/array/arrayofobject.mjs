let product = [
  {
    name: "laptop",
    price: 100000,
    quantity: 10,
    category: "Electronics",
  },
  {
    name: "mobile",
    price: 20000,
    quantity: 20,
    category: "Electronics",
  },
  {
    name: "harry porter",
    price: 500,
    quantity: 20,
    category: "Book",
  },
];
let proName = product.map((item) => {
  return item.name;
});
console.log(proName);

let proCombine = product.map((item, i) => {
  return { name: item.name, price: item.price };
});
console.log(proCombine);

let proDetail = product.map((item, i) => {
  return `${item.name} cost NRS ${item.price} and its category is ${item.category}`;
});
console.log(proDetail);

// ["the total price of latpop is 1000000",
// "the total price of mobile is 400000",
//  "the total price of harry porter is 10000"]
let proDetail2 = product.map((item, i) => {
  return ` The total price of ${item.name} is ${item.price * item.quantity}`;
});
console.log(proDetail2);
