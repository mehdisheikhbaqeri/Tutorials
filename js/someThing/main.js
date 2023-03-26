var x = 1;

let doSomeThing = () => {
  let set = document.querySelector("#set");
  set.textContent = `My Content is :${x++} seconds`;
};
let stopDoSomeThing = () => {
  clearInterval(myInterval);
};

let myInterval = setInterval(doSomeThing, 1000);
// setTimeout( doSomeThing, 3000);//before 3s

// setTimeout(
//     ()=>clearInterval(myInterval),11000
// )

let btn = document.querySelector("#btn");
btn.addEventListener("click", stopDoSomeThing);


