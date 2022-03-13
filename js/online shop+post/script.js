let userBasket = [
  { id: 1, name: "sharjer", price: 25000 },
  { id: 2, name: "qab", price: 35000 },
  { id: 3, name: "gelas", price: 10000 },
  { id: 4, name: "kalegi", price: 210000 },
  { id: 5, name: "handsfree", price: 150000 },
];

let filterPro = userBasket.filter(function (product) {
  return product.price < 100000;
});

let postCost = filterPro.length * 14000;

sum = 0;
userBasket.forEach(function (product) {
  sum = sum + product.price;
});

let total = sum + postCost;
console.log("filter is:", filterPro);
console.log(postCost);
console.log("total", total);
