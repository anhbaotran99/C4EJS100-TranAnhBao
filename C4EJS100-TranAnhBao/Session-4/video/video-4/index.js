// Create
let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};
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
    alert(`${property} does not exist in our data, we will add new`);
    let update = prompt('Enter the new data');
    movie.property = update;
}
console.log(movie);