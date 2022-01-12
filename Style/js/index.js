// const drinks = [
//   { name: "koka", price: 16 },
//   { name: "pepsi", price: 15 },
// ];

// function sortDrinkByPrice(drinks) {
//   return drinks.sort((m, n) => (m.price > n.price ? 1 : -1));
// }

// console.log(sortDrinkByPrice(drinks));
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 3];
function isFirstSuperior(arr1, arr2) {
  let n = arr1.length;
  for (let i = 0; i < n; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    }

    return false;
  }
}
console.log(isFirstSuperior(arr1, arr2));
