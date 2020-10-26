// Update

let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};

// 1
movie.rate = 8.7;
console.log(movie.rate);

// 2
movie.rate += 0.5;
console.log(movie.rate);

// 3
let property = prompt('What you want to update?');
if(property == 'title' || property == 'year' || property =='rate')
{
    let update = prompt('What is the update');
    if(property == 'title') movie.title = update;
    else if(property == 'year') movie.year = update;
    else if(property == 'rate') movie.rate = update;
}
else
{
    alert(`${property} does not exist in our data`);
}
console.log(movie);