let currentTime;
let time = document.getElementById('input_time');
let start = document.getElementById('button_start');
let stop = document.getElementById('button_down');
let result = document.getElementById('result');

start.addEventListener('click', (e) => {
    currentTime = time.value;
    result.innerHTML = time.value;

    let interval = setInterval(() => {
        currentTime--;
        result.innerHTML = currentTime;
        if(currentTime == 0)
        {
            clearInterval(interval);
            result.innerHTML = 0;
        }
    }, 1000);

    stop.addEventListener('click', (e) => {
        clearInterval(interval);
        result.innerHTML = 'Stopped';
    });
});