const d = document.getElementById('msg');
// d.textContent = 'Hi there';
// d.style.display = 'none';
d.addEventListener('click', (e) => {
    d.style.color = 'red';
    d.style.fontSize = '50px';
    // e.target.style.color = 'red';
});

d.insertAdjacentHTML('beforeend', `
    <div>Cool</div>
`);