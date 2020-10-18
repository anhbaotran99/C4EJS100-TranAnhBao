let n = prompt("Enter a number");
let result = 1;
for(let i=1; i<=n; i++)
{
    result *= i;
}
alert("The factorial of " + n + " is " + result);