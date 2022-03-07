let groupUsers = [
  { id: 1, name: "mehdi", age: 32 },
  { id: 2, name: "benyamin", age: 22 },
  { id: 3, name: "hasan", age: 27 },
  { id: 4, name: "ashkan", age: 27 },
  { id: 5, name: "hosein", age: 37 },
  { id: 6, name: "arash", age: 30 },
  { id: 7, name: "pori", age: 18 },
  { id: 8, name: "aliz", age: 25 },
];

let isAll = groupUsers.every(function (user) {
  return user.age > 18;
});

if (isAll === true) {
  console.log("start");
} else {
  console.log("shot up");
}
