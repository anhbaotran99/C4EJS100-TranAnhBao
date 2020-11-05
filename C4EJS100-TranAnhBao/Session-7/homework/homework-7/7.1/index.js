let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
button1.addEventListener('click', (e) => {
    console.log(e.target);
});
button2.addEventListener('click', (e) => {
    console.log(e.target);
});