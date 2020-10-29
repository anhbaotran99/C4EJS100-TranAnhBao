let quizzes = [
    {
        question: 'Which fictional detective lived at 221b Baker Street?',
        choices: '1. Watson\n2. Sam Spade\n3. Scubidu\n4. Sherlock Holmes',
        rightChoice: 4,
    },
    {
        question: 'What sweet food made by bees using necter from flowers?',
        choices: '1. Bread\n2. Honey\n3. Sugar\n4. Potent',
        rightChoice: 2,
    },
    {
        question: 'How many legs does an octopus have?',
        choices: '1. 2 legs\n2. 4 legs\n3. 6 legs\n4. 8 legs',
        rightChoice: 1,
    },
    {
        question: 'Which country is home to the kangaroo?',
        choices: '1. Australia\n2. Austria\n3. New Zealand\n4. Vietnam',
        rightChoice: 1,
    },
]
let count = 0;
for(let quiz in quizzes)
{
    let randomQuiz = quizzes[Math.floor(Math.random()*quizzes.length)];
    let answer = prompt(randomQuiz.question + '\n' + randomQuiz.choices);
    if(randomQuiz.rightChoice == answer)
    { 
        alert('True');
        count++;
    }
    else
    {
        alert('False');
    } 
}
alert('We are out of question');
alert(`You answered correctly ${count} of ${quizzes.length} questions`);
