document.addEventListener("DOMContentLoaded", () => {
  const trump = document.querySelector(".trump");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");

  let trumpLeft = 220;
  let trumpBottom = 100;
  let gravity = 2;
  let isGameOver = false;

  function startGame() {
    trumpBottom -= gravity;
    trump.style.bottom = trumpBottom + "px";
    trump.style.left = trumpLeft + "px";
  }
  let gameTimerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }

  function jump() {
    if (trumpBottom < 500) trumpBottom += 50;
    trump.style.bottom = trumpBottom + "px";
    console.log(trumpBottom);
  }
  document.addEventListener("keyup", control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    if (!isGameOver) obstacle.classList.add("obstacle");
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + "px";

      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }
      if (
        obstacleLeft > 200 && obstacleLeft < 280 && trumpLeft == 200 ||
        trumpBottom === 0
      ) {
        gameOver();
      }
    }
    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    console.log("game over");
    isGameOver = true;
    document.removeEventListener("keyup", control);
  }
});
