let count = 0;
let up = document.getElementById('button_up');
let down = document.getElementById('button_down');
let value = document.getElementById('counter_value');
// console.log(value.innerHTML);

value.innerHTML = count;
up.addEventListener('click', (e) => {
    count++;
    value.innerHTML = count;
});

down.addEventListener('click', (e) => {
    count--;
    value.innerHTML = count;
});

