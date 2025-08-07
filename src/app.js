let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let counter = document.getElementById("timer--counter");

let minSeccion = 1;
let timeRemaining = minSeccion * 60;
let timer = null;
let isRunning = false;

function updateTimer() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  counter.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padEnd(2, "0")}`;
}

function startTime() {
  if (isRunning) return;
  isRunning = true;

  timer = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimer();
    } else {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("message").textContent = "Take a Break";
    }
  }, 1000);
}

function pauseTime() {
  clearInterval(timer);
  isRunning = false;
}

function resetTime() {
  clearInterval(timer);
  isRunning = false;
  timeRemaining = minSeccion * 60;
  document.getElementById("message").textContent = "";
  updateTimer();
}

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);

updateTimer();
