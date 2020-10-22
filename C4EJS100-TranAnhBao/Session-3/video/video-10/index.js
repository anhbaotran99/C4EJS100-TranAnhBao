let n = prompt('Nhap so phan tu');
let arrayNumbers = [];
for(let i = 0; i < n; i++)
{
    arrayNumbers.push(prompt('Nhap phan tu'));
}
// Cau a
arrayNumbers.sort(function(a, b){return a - b});
alert(`Sap xep theo chieu tang dan: ${arrayNumbers}`);

// Cau b
let arrayEven = [];
let arrayOdd = [];
for(let i = 0; i < n; i++)
{
    if(arrayNumbers[i] % 2 == 0)
    {
        arrayEven.push(arrayNumbers[i]);
    }
    else
    {
        arrayOdd.push(arrayNumbers[i]);
    }  
}
alert(`Day chan: ${arrayEven}`);
alert(`Day le: ${arrayOdd}`);

// Cau c
let filterEven = [];
for(let i = 0; i < arrayEven.length; i++)
{
    if(!filterEven.includes(arrayEven[i]))
    {
        filterEven.push(arrayEven[i]);
    }
}
alert(`Day chan sau khi loai bo cac so trung nhau: ${filterEven}`);

let filterOdd = [];
for(let i = 0; i < arrayOdd.length; i++)
{
    if(!filterOdd.includes(arrayOdd[i]))
    {
        filterOdd.push(arrayOdd[i]);
    }
}
alert(`Day le sau khi loai bo cac so trung nhau: ${filterOdd}`);

