let quote = document.getElementById('quote');
let author = document.getElementById('author');
let reload = document.getElementById('button_reload');

reload.addEventListener('click', (e) => {
    let randomQuote = data[Math.floor(Math.random() * data.length)];
    quote.innerHTML = randomQuote.quoteText;
    author.innerHTML = randomQuote.quoteAuthor;
});