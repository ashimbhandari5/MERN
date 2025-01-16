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
let electronisProduct = product.filter((item, i) => {
  return item.category === "Electronics";
});
let finalElectronics = electronisProduct.map((item, i) => {
  return item.name;
});
console.log(finalElectronics);

let pricelessThan1000 = product.filter((item, i) => {
  return item.price <= 1000;
});
console.log(pricelessThan1000);
