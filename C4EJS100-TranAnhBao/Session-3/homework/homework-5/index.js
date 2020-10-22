let str = prompt('Enter a sequence of numbers, the numbers are separated by commas');
let stringArray = str.split(',');
let numberArray = stringArray.map(Number);
let sum = 0;
for(let i = 0; i < numberArray.length; i++)
{
    sum += numberArray[i];
}
alert(`The sum of them is ${sum}`);
