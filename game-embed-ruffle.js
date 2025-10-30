const playBtn = document.getElementById("playBtn");
const box = document.getElementById("iframe-container");
const fsBtn = document.getElementById("fsBtn");

let GAME_URL = document.currentScript.getAttribute("data-game"); // gets from script tag

playBtn.onclick = () => {
  playBtn.style.display = "none";
  box.style.display = "block";
  box.innerHTML = "";
  const r = window.RufflePlayer.newest();
  const p = r.createPlayer();
  p.style.width = "100%";
  p.style.height = "100%";
  box.appendChild(p);
  p.load(GAME_URL);
};

fsBtn.onclick = () => {
  const url =
    "https://xozgurcanx.github.io/games/fullscreen.html?src=" +
    encodeURIComponent(GAME_URL);
  window.open(url, "_blank");
};
