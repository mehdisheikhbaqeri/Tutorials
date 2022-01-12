const drinks = [
  { name: "koka", price: 16 },
  { name: "pepsi", price: 15 },
];

function sortDrinkByPrice(drinks) {
  return drinks.sort((m, n) => (m.price > n.price ? 1 : -1));
}

console.log(sortDrinkByPrice(drinks));
const arr1 = [1, 2, 4];
const arr2 = [1, 2, 3];
function isFirstSuperior(arr1, arr2) {
  let n = arr1.length;
  for (let i = 0; i < n; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    }
  }
  return false;
}
console.log(isFirstSuperior(arr1, arr2));

const mehdi = { yourSignature: "" };
function signYourName(obj) {
  // write your code here
  // don't use a return statement
  Object.seal(obj);

  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;
}
console.log(signYourName(mehdi));

const tileHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
function maximumScore(tileHand) {
  return tileHand.reduce((p, c) => p + c.score, 0);
}
console.log(maximumScore(tileHand));

let n = 3;
function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log(sumPolygon(n));
