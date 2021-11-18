//Variables
let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;
//Elements in a variable
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const timer = document.querySelector("#time-display");
const pause = document.querySelector("#pause");

//Start the timer
start.addEventListener("click", function () {
  if (stopTime == true) {
    stopTime = false;
    initClock();
  }
});
//use this function to start the timer
function initClock() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("initClock()", 1000);
  }
}

//this function clear the timer values
function stopClock() {
  timer.innerHTML = "00:00:00";
  hr = 0;
  sec = 0;
  min = 0;
}
// stop and clear the timer
reset.addEventListener("click", function () {
  stopTime = true;
  stopClock();
});

// pause the timer
pause.addEventListener("click", function () {
  stopTime = true;
});
