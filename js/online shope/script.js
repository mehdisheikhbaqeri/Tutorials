let allProducts = [
  { id: 1, name: "qahve khorma", prise: 30000 },
  { id: 2, name: "chips khorma", prise: 25000 },
  { id: 3, name: "habe khorma hel", prise: 44000 },
  { id: 4, name: "habe khorma qahve", prise: 28000 },
  { id: 5, name: "habe khorma darchin", prise: 26000 },
  { id: 6, name: "habe khorma nana", prise: 27000 },
];

let basketUser = [
  { id: 1, name: "qahve khorma", prise: 30000 },
  { id: 5, name: "habe khorma darchin", prise: 26000 },
];

let userProduct = prompt("enter the product:");

let inShop = allProducts.some(function (product) {
  if (product.name === userProduct) {
    requestProduct = product;
    return true;
  }
  return product.name === userProduct;
});

if (inShop === true) {
  let newProduct = {
    id: 3,
    name: requestProduct.name,
    prise: requestProduct.prise,
  };
  basketUser.push(newProduct);

  let sum = 0;
  basketUser.forEach(function (product) {
    sum = sum + product.prise;
  });
  console.log(basketUser);
  alert("total prise:" + sum);
} else {
  console.log("have not");
}
