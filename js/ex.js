const ansewer = [
  " It is certain.",
  " It is decidedly so.",
  " Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  " As I see it, yes.",
  " Most likely.",
  "Outlook good.",
  "Yes.",
  " Signs point to yes.", //+
  " Reply hazy, try again.",
  " Ask again later.",
  "Better not tell you now.",
  " Cannot predict now.",
  " Concentrate and ask again.", //+-
  `Don't count on it.`,
  `My reply is no`,
  `My sources say no.`,
  `Outlook not so good.`,
  `Very doubtful.`, //-
];

const random = Math.floor(Math.random() * 10);
const ans = ansewerWhithRandom(random);

if (random >= 0 && random <= 9) {
  console.log("ansewer is:", ans - "plus");
} else if (random > 9 && random <= 14) {
  console.log("ansewer is:", ans - "nnach");
} else if (random > 14 && random <= 19) {
  console.log("ansewer is:", ans - "negativ");
}
