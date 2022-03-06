// while
let counter = 3;
while (counter > 0) {
  if (counter % 2 == 0) {
    console.log(counter + 2);
    counter--;
  } else {
    console.log(counter * 2);
    counter--;
  }
}
// for
for (let i = 0; i < 7; i++) {
  console.log(i);
}

// ------

function testName(name) {
  let test = `welcome${name}`;
  return test;
}
// ------------
function averageNumber(number1, number2) {
  return (number1, number2) / 2;
}
function result(num1, num2) {
  const avg = (num1 + num2) / 2;
  const final = `your average is ${avg}`;
  return final;
}

console.log(result(8, 48));

// for of
const nums = [2, 9, 12, 5, 20, 3];

for (let num of nums) {
  console.log("nume is", num);
}
// for of -----> print

const obj = {
  name: "mehdi",
  family: "baqeri",
  age: 31,
};

for (let m in obj) {
  console.log(m);
}

// array method

const colorsNumber = ["red", "blue", "green", "seven", "one"];
// const colorsNumber2 = ["gold", 23];

const result2 = colorsNumber.toString();
// const result2 = colorsNumber.join("*");
// const result2 = colorsNumber.pop();    (return last item and del last array)
// const result2 = colorsNumber.push("black");
// const result2 = colorsNumber.unshift("brown");
// delete colorsNumber[2];    (index2 is empty or null)
// const result2 = colorsNumber.splice(2, 3, "yellow");
// const result2 = colorsNumber.concat(colorsNumber2);
// const result2 = colorsNumber.slice(1, 2);  (1th number should writh)
// const result2 = colorsNumber.slice(4);
// const result2 = colorsNumber.sort(); (only for string)

console.log(result2);
// console.log(colorsNumber);
