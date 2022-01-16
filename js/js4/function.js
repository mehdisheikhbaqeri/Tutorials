// function
// declaraation mibare dakhele window
// expresion hoisted nemishan
// arrow hoisted nemishan

function logger() {
  console.log("mehdi");
}
logger();

function sum(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}
const sum1 = sum(5, 9);
console.log(sum1);
//////////////////////
const sum2 = function (num1, num2) {
  return num1 + num2;
};
console.log(sum2(3, 4));
//////////////////////

const sum4 = (num1, num2) => num1 + num2;

console.log(sum4(10, 20));
