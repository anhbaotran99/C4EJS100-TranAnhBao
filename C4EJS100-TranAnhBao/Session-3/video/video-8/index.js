let username;
while(true)
{
    username = prompt("Enter your username");
    if(username.length <= 15)
    {
        alert("Good username");
        break;
    }
    else
    {
        alert("Your user name is too long");
    }
}