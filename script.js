const song = document.querySelector("#song");
const progress = document.querySelector("#progress");
const play = document.querySelector(".play-button");

console.log(song);
console.log(progress);

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

play.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-play")) {
    song.play();
    e.target.classList.add("fa-pause");
    e.target.classList.remove("fa-play");
  } else {
    song.pause();
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
  }
});

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = () => {
  song.currentTime = progress.value;
  song.play();
  document.querySelector(".play-button i").classList.add("fa-pause");
  document.querySelector(".play-button i").classList.remove("fa-play");
};
