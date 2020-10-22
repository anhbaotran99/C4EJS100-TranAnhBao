const array = [1,2,3,4,5,6,7,8,9];
let n = prompt('Enter a number');
let search = false;

for(var i = 0; i < array.length; i++)
{
    if(n == array[i])
    {
        search = true;
        break;
    }
}

if(search == true)
{
    alert(`${n} is FOUND in my array at index ${i}`);
}
else
{
    alert(`${n} is NOT found in my array`);
}