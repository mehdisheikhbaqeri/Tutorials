let users = [
  {
    id: 1,
    name: "mehdi",
    family: "baqeri",
    age: 24,
    mail: "mehdi7baqeri@gmail.com",
  },
  {
    id: 2,
    name: "jasem",
    family: "benyamini",
    age: 30,
    mail: "jasem7benyamini@gmail.com",
  },
  {
    id: 3,
    name: "poriya",
    family: "pashmakian",
    age: 18,
    mail: "poriya7pashmaki@gmail.com",
  },
];

let userName = prompt("Enter Your Name");
let userFamily = prompt("Enter Your Family");
let userAge = prompt("Enter Your age");
let userMail = prompt("Enter Your mail");

if (userName.length < 3 || userName.length > 10) {
  alert("Your name must be between 3 and 10, my dear.bye");
} else if (userFamily.length < 3 || userFamily.length > 15) {
  alert("Your family must be between 3 and 15, my dear");
} else if (isNaN(userAge) || userAge.length < 2 || userAge.length > 4) {
  console.log(`Act human, and don't be a cow.`);
} else {
  let newUser = {
    id: 4,
    name: userName,
    family: userFamily,
    age: userAge,
    mail: userMail,
  };
  users.push(newUser);
}
console.log(users);
