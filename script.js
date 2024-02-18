let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const resetButton = document.querySelector('#resetButton');

button.onclick = start;
resetButton.onclick = start;

function start() {
    clicks = 0; 
    counter.textContent = clicks;
    
    const startTime = Date.now();
    display.textContent = formatTime(TIMEOUT);
    
    button.onclick = () => counter.textContent = clicks++;
    resetButton.onclick = null; 

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        resetButton.onclick = start; 
        display.textContent = 'Game Over';
        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}