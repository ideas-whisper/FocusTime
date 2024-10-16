let workTime = 25 * 60;  // Work time in seconds (25 minutes)
let breakTime = 5 * 60;  // Break time in seconds (5 minutes)
let isWorking = true;
let interval;
let sessionsCompleted = 0;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const sessionCountDisplay = document.getElementById('session-count');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!interval) {
        interval = setInterval(timer, 1000);
        startBtn.disabled = true;
    }
}

function timer() {
    let currentTime = isWorking ? workTime : breakTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (isWorking) {
        workTime--;
    } else {
        breakTime--;
    }

    if (workTime < 0 && isWorking) {
        isWorking = false;
        breakTime = 5 * 60;
        alert("Time for a break!");
    } else if (breakTime < 0 && !isWorking) {
        isWorking = true;
        workTime = 25 * 60;
        sessionsCompleted++;
        sessionCountDisplay.textContent = sessionsCompleted;
        alert("Time to work again!");
    }
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    workTime = 25 * 60;
    breakTime = 5 * 60;
    isWorking = true;
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
    startBtn.disabled = false;
}
