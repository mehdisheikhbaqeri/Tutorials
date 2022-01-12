const drinks = [
  { name: "koka", price: 16 },
  { name: "pepsi", price: 15 },
];

function sortDrinkByPrice(drinks) {
  return drinks.sort((m, n) => (m.price > n.price ? 1 : -1));
}

console.log(sortDrinkByPrice(drinks));
