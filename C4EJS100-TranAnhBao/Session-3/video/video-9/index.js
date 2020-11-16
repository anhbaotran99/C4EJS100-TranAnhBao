console.log("How many legs does a spider have?");
let arrayAnswer = ['None', '4 legs', '8 legs', '12 legs'];
for(let i = 0; i < arrayAnswer.length; i++)
{
    console.log(`${i+1}. ${arrayAnswer[i]}`);
}
let answer;
while(true)
{
    answer = Number(prompt("Enter your choice"));
    if(answer && (answer == 1 || answer == 2 || answer == 3 || answer == 4))
    {
        if(answer == 3) 
        {
            alert("Bravo, you are correct");
            break;
        }
        else alert("Good luck next time");
        //break;
    }
    else 
    {
        alert("It is invalid choice, Enter your choice again");
    }
}
