let allQuestion = [
  { id: 1, title: "2 + 2", answer: "4" },
  { id: 2, title: "12 * 5", answer: "60" },
  { id: 3, title: "12 * 12", answer: "144" },
  { id: 4, title: "652/4", answer: "163" },
  { id: 5, title: "Capital of Iran", answer: "tehran" },
];

let point = 0;
let mainAnswer = "";

allQuestion.forEach(function (question) {
  mainAnswer = prompt(question.title + "?");
  if (mainAnswer === question.answer) {
    point++;
  }
});
alert("your final score:" + point);
