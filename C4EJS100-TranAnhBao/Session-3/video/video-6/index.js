// Read all
let movies = ['Harry Porter', 'Home alone', 'Lord of the rings', 'abc'];
console.log(movies);
// 1
console.log("Cau 1.")
for(let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
// 2
console.log("Cau 2.");
for(let i = 0; i < movies.length/2; i++)
{
    console.log(movies[i]);
}
//3
console.log("Cau 3.");
for(let i = 0; i < movies.length; i++)
{
    console.log(i+1 + ". " + movies[i]);
    // console.log(`${i+1}. ${movies[i]}`);
}