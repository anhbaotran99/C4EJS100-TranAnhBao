let str = prompt('Enter a sequence of numbers, the numbers are separated by commas');
let stringArray = str.split(',');
let numberArray = stringArray.map(Number);
let min = numberArray[0];
for(let i = 0; i < numberArray.length; i++)
{
    if(numberArray[i] < min) min = numberArray[i]; 
}
alert(`The smallest number is ${min}`);