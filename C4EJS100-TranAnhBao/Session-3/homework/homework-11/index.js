let numbers = prompt("Enter a sequence of numbers, separated by commas");
let array = numbers.split(',');
let newArray = [];
for(let i = 0; i < array.length; i++)
{
    if(array[i] % 2 == 1) newArray.push(array[i]);
}
alert(`${array} => ${newArray}`);

// Cach 2
let newArray2 = array.filter(array => array % 2 == 1);
alert(`${array} => ${newArray2}`);