// Read
// 1
let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};
console.log(movie);
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);

console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);

// 2
let property = prompt('What you want to know?');
if(property == 'title') alert(movie.title);
else if(property == 'year') alert(movie.year);
else if(property == 'rate') alert(movie.rate);
else alert(`${property} does not exist in our data`);