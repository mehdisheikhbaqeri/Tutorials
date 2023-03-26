let userData = [
  {
    id: 1,
    username: "pouya",
    password: "147896321",
    email: "pouya1shahriar@gmail.com",
  },
  {
    id: 2,
    username: "benyamin",
    password: "15987532",
    email: "benyamin2aps@gmail.com",
  },
  {
    id: 3,
    username: "bani",
    password: "15426542",
    email: "bani3aps@gmail.com",
  },
  {
    id: 4,
    username: "jafar",
    password: "14589652",
    email: "jafar4jafar@gmail.com",
  },
  {
    id: 5,
    username: "sakine",
    password: "32547854",
    email: "sakine5kimdi@gmail.com",
  },
  {
    id: 6,
    username: "roqayeh",
    password: "96357895",
    email: "roqayeh6kojast@gmail.com",
  },
  {
    id: 7,
    username: "mehdiBaqeri",
    password: "02148547",
    email: "mehdi7baqeri@gmail.com",
  },
  {
    id: 8,
    username: "karimi",
    password: "14411414",
    email: "aliaqa8karimi@gmail.com",
  },
];

let userName = prompt("Enter Your User Name : ");

let minUserData = userData.find(function (user) {
  return user.username === userName;
});

if (minUserData === undefined) {
  alert("You Did Not Register");
} else {
  alert(`You Password :${minUserData.password}`);
}

console.log(minUserData);

// console.log("You Password :", minUserData.password);
