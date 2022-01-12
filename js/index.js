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

let base = 10;
let height = 7;
function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(base, height));

let num = -4;
function addition(num) {
  return num + 1;
}
console.log(addition(num));

const hours = 4;
function howManySeconds(hours) {
  return hours * 3600;
}
console.log(howManySeconds(hours));

const x = 1;
const y = 3;
function remainder(x, y) {
  if (x > y) {
    return y;
  } else if (x < y) {
    return x;
  } else {
    return 0;
  }
}
console.log(remainder(x, y));

const age = 32;
function calcAge(age) {
  return age * 365;
}
console.log(calcAge(age));

const minutes = 5;
function convert(minutes) {
  return minutes * 60;
}
console.log(convert(minutes));

let nums = 12;
function lessThanOrEqualToZero(nums) {
  if (nums < 0) {
    return false;
  } else if ((nums = 0)) {
    return true;
  } else {
    return true;
  }
}
console.log(lessThanOrEqualToZero(nums));

const ab = 12;
function cubes(ab) {
  return Math.pow(ab, 3);
}

console.log(cubes(ab));

let twoPointers = 8;
let threePointers = 1;
function points(twoPointers, threePointers) {
  let two = twoPointers * 2;
  let three = threePointers * 3;
  return two + three;
}
console.log(points(twoPointers, threePointers));
