let randomNumber = Math.floor((Math.random() * 10) + 1);
let count = 0;
let input = document.getElementById('inputNumber');
let btn = document.getElementById('btnSubmit');

btn.addEventListener('click', () => {
    count++;
    if(input.value == randomNumber) {
        alert('True');
    } else {
        console.log(`Random number is ${randomNumber}`);
        alert('False');
        if(count == 3) {
            alert('Game over');
        }
    }
});

