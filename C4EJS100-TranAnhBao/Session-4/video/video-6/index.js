// Object containing array
// 1
let movie = {
    title: 'Attack on titans',
    year: 2013,
    rate: 8.8,
    characters: ['Eren', 'Armin', 'Mikasa'],
};
// console.log(movie);

// 2
console.log('2.');
console.log(movie.title);
console.log(`Year: ${movie.year}`);
console.log(`Rate: ${movie.rate}`);
console.log(...movie.characters);

// 3
console.log('3.');
movie.characters.push('Levi');
console.log(movie.title);
console.log(`Year: ${movie.year}`);
console.log(`Rate: ${movie.rate}`)
console.log(...movie.characters);
