console.log("Bài 3:");

// Câu a
{
    console.log("a.");
    for(let i=0; i<7; i++)
    {
        console.log(i);
    }
}

// Câu b
{
    console.log("b.");
    let n = prompt("Enter a number");
    for(let i=0; i<n; i++)
    {
        console.log(i);
    }
}

// Câu c
{
    console.log("c.");
    let n = prompt("Enter n");
    for(let i=3; i<n; i++)
    {
        console.log(i);
    }
}

// Câu d
{
    console.log("d.");
    let n = prompt("Enter n");
    let c = prompt("Enter c");
    for(let i=c; i<n; i++)
    {
        console.log(i);
    }
}

// Câu e

{
    console.log("e.");
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    for(let i=c; i<n; i+=3)
    {
        console.log(i);
    }
}

// Câu f
{
    console.log("f.");
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    let s = Number(prompt("Enter s"));
    for(let i=c; i<n; i+=s)
    {
        console.log(i);
    }
}

