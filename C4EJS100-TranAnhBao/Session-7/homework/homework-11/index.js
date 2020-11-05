let button = document.getElementById('button_upper');
console.log(button);
button.addEventListener('click', (e) => {
    console.log(button);
});

let name = document.getElementById('input_name');
console.log(name);
name.addEventListener('keydown', (e) => {
    console.log(e.key);
});

let result = document.getElementById('div_result');
console.log(result);