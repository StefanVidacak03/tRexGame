const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//deklarisemo varijablu za skor
let interval = 0;
let playerScore = 0;
let highscore = 0;

//funkcija za skor
let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score: <b>${playerScore}</b>`;
}

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Kraj igre!");
    clearInterval(interval);
        playerScore = 0;
  }
  interval = setInterval(scoreCounter , 200);
}, 100);

document.addEventListener("keydown", function (event) {
  jump();
});