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
