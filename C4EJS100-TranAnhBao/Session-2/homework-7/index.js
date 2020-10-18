let n = prompt("Enter n");
let x = prompt("Enter x");
let halfOfN = n/2;
if(x < halfOfN)
{
    alert(x + " is in lower half of " + n);
}
else if(x > halfOfN)
{
    alert(x + " is in higher half of " + n);
}