// Cau a
console.log("a.");
for(let i=0; i<3; i++)
{
    console.log("L");
}
for(let i=0; i<3; i++)
{
    console.log("H");
}

// Cau b
console.log("b.");
let n = prompt("Enter the total number of L's and H's");
if(n%2==0)
{
    for(let i=0; i<n/2; i++)
    {
        console.log("L");
    }
    for(let i=0; i<n/2; i++)
    {
        console.log("H");
    }
}
else
{
    a = Math.ceil(n/2);
    b = Math.floor(n/2);
    for(let i=0; i<a; i++)
    {
        console.log("L");
    }
    for(let i=0; i<b; i++)
    {
        console.log("H");
    }
}


/*
{
    for(let i=0; i<(n+1)/2; i++)
    {
        console.log("L");
    }
    for(let i=0; i<(n-1)/2; i++)
    {
        console.log("H");
    }
}
*/

// Cau c
console.log("c.");
for(let i=0; i<4; i++)
{
    console.log(0);
    console.log(1);
}


// Cau d
console.log("d.");
let m = prompt("Enter the total number of 1's and 0's");
for(let i=0; i<m; i++)
{
    if(i%2==0) console.log(0);
    else console.log(1);
}
