const musicArray = [
  {
    path: "./assets/audio/fly-away-thefatrat-ft-anjulie.mp3",
    name: "Fly Away - TheFatRat ft. Anjulie",
  },
  {
    path: "./assets/audio/monody-thefatrat-ft-laura-brehm.mp3",
    name: "Monody - TheFatRat ft. Laura Brehm",
  },
  {
    path: "./assets/audio/the-spectre-alan-walker.mp3",
    name: "The Spectre - Alan Walker",
  },
  {
    path: "./assets/audio/unity-thefatrat.mp3",
    name: "Unity - TheFatRat",
  },
];

function pickRandomMusic() {
  let musicPlayer = document.getElementById("audio-player");

  let musicIndex = Math.floor(Math.random() * musicArray.length);
  musicPlayer.setAttribute("src", musicArray[musicIndex].path);
}

window.onload = pickRandomMusic;
