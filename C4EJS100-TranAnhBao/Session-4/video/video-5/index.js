// Array of Objects
// 1
let movies = {
    title: ['Attack on titans', 'My boss my hero', 'Mind hunter'],
    year: [2013, 2006, 2017],
    rate: [8.8, 8.2, 8.6],
};

// 2
console.log('2.');
console.log(movies.title[0]);
console.log(movies.year[0]);
console.log(movies.rate[0]);

// 3
console.log('3.');
console.log(movies.title[2]);

// 4
console.log('4.');
for(let i = 0; i < movies.title.length; i++)
{
    console.log(movies.title[i]);
    console.log(movies.year[i]);
    console.log(movies.rate[i]); 
}

// 5
console.log('5.');
for(let i = 0; i < movies.title.length; i++)
{
    console.log('--------------------------');
    console.log(movies.title[i]);
    console.log(movies.year[i]);
    console.log(movies.rate[i]); 
}

// 6
console.log('6.');
movies.rate[2] += 0.7;
console.log(movies.rate[2]);

