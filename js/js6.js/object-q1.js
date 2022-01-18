const mehdi = {
  name: "mehdi",
  lastName: "baqeri",
  mazlom: true,
  age: 31,
  fev: ["manchester", "england", 7],
};

console.log(mehdi.fev[0]);
console.log(mehdi["age"]);
console.log(mehdi["mazlom"]);

let studentName = "asqar";
const student = {
  age: 23,
  lastName: "sharafi",
  [studentName]: "asqar",
};

console.log(student[studentName]);
