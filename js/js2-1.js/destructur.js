// let PI = Math.PI;
// let E = Math.E;

const { PI, E } = Math;
console.log(PI);

const newArr = [1, 2, 3, 4];
const [num1, , num3, ,] = newArr;
console.log(num1);

const team = ["manchester", "chelsea", "arsenal"];
const [best, good, ...other] = team;
console.log(best);

const circle1 = {
  label: "m",
  radius: 3,
};

const cirArea = (obj) => {
  return (PI * obj.radius + obj.radius).toFixed(2);
};
console.log(cirArea(circle1));

const circle2 = {
  label: "e",
  radius: 4,
};

const cirArea2 = ({ radius }) => {
  return (PI * radius * 2).toFixed(2);
};
console.log(cirArea2(circle2));

const pv = {
  ram: 4,
  hard: 512,
  cpu: "none",
};

const pv = ({ ram, hard, cpu }) => {
  return `My laptop has ram of ${ram} and hard of ${hard} and cpu of ${cpu}`;
};
