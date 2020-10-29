let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let word2 =[];
for(let i = 0; i < word.length; i++)
{
    word2.push(word[i]);
}

for(let i = 0; i < word.length; i++)
{
    let count = 0;
    for(let j = 0; j < word2.length; j++)
    {
        if(word[i] == word2[j])
        {
            count++;
        }
    }
    console.log(word[i] + ': ' + count);
}
