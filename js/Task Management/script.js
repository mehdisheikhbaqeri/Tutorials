let taskArray = {
  mehdi: ["html", "css", "UI", "seo"],
  malekeGorgi: ["scram master", "qor", "js"],
  nurse: ["khoraki khordan", "khoraki khordan", "react"],
  jasem: ["admin"],
};

// console.log(taskArray.nurse[2]);

let newTaskName = prompt("Enter the new Task");
let employName = prompt("Enter the employ name");

let employTask = taskArray[employName];
employTask.push(newTaskName);

console.log(taskArray);
