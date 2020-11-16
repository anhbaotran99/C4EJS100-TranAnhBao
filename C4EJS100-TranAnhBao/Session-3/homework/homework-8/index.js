// 8.1
let array = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is Anh Bao and here is my sheep sizes:');
console.log(...array);

// 8.2
console.log('\n');
//let max = Math.max.apply(null, array);
let max = Math.max(...array);
console.log(`Now my biggest sheep has size ${max}, let 's shave it`);

// 8.3
console.log('\n');
array[array.indexOf(max)] = 8;
console.log('After shearing, here is my flock');
console.log(...array);

// 8.4
// Month 1
console.log('\n');
console.log('MONTH 1');
console.log('One month has, passed, my sheeps have grown, here are their sizes');
for(let i = 0; i < array.length; i++)
{
    array[i] += 50;
}
console.log(...array);
// max = Math.max.apply(null, array);
max = Math.max(...array);
console.log('\n');
console.log(`Now my biggest sheep has size ${max}, let 's shave it`);
array[array.indexOf(max)] = 8;
console.log('\n');
console.log('After shearing, here is my flock');
console.log(...array);

// 8.5
// for(let month = 2; month < 4; month++)
// {
//     for(let i = 0; i< array.length; i++)
//     {
//         array[i] += 50;
//     }
//     console.log('\n');
//     console.log(`MONTH ${month}`);
//     console.log('One month has, passed, my sheeps have grown, here are their sizes');
//     console.log(...array);
//     max = Math.max.apply(null, array);
//     console.log('\n');
//     console.log(`Now my biggest sheep has size ${max}, let 's shave it`);
//     array[array.indexOf(max)] = 8;
//     console.log('\n');
//     console.log('After shearing, here is my flock');
//     console.log(...array);
// }

// Month 2
console.log('\n');
console.log('MONTH 2');
console.log('One month has, passed, my sheeps have grown, here are their sizes');
for(let i = 0; i < array.length; i++)
{
    array[i] += 50;
}
console.log(...array);
// max = Math.max.apply(null, array);
max = Math.max(...array);
console.log('\n');
console.log(`Now my biggest sheep has size ${max}, let 's shave it`);
array[array.indexOf(max)] = 8;
console.log('\n');
console.log('After shearing, here is my flock');
console.log(...array);


// Month 3
console.log('\n');
console.log('MONTH 3');
console.log('One month has, passed, my sheeps have grown, here are their sizes');
for(let i = 0; i < array.length; i++)
{
    array[i] += 50;
}
console.log(...array);
console.log('\n');

// 8.6
let totalSize = 0;
for(let i = 0; i < array.length; i++)
{
    totalSize += array[i];
}
console.log(`My flock has size in total: ${totalSize}`);
console.log(`I would get ${totalSize} * 2$ = ${totalSize*2}`);

