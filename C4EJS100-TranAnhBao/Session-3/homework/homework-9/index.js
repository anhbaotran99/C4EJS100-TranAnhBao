const colors = ["red", "gray", "blue", "purple", "cyan"];
for(let i = 1; i <= 4; i++)
{
    for(let j = 1; j <= 4; j++)
    {
        color(colors[i]);
        fd(50*i);
        rt(90);
    }
}