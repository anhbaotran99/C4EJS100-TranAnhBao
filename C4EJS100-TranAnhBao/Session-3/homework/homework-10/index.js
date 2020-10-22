let names = prompt('Enter a sequence of names, separated by commas');
let array = names.split(',');
let newArray = [];
for(let i = 0; i < array.length; i++)
{
    newArray.push(`<${array[i]}>`);
}
alert(`${array} => ${newArray}`);

// Cach 2
let newArray2 = array.map(name => `<${name}>`);
alert(`${array} => ${newArray2}`);