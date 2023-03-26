let player = document.querySelectorAll(".fa-play");
let audio = document.querySelectorAll("audio");

player.forEach(function (player) {
  player.addEventListener("click", function (e) {
    musicName = e.target.dataset.name;

    audio.forEach(function (audio) {
      if (audio.dataset.name === musicName) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
