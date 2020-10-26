// 4
let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
// 4.1
// alert('Hi there, this is dev dictionary');
// let keyword = prompt('Enter a keyword');
// if(keyword == 'debug') alert('debug\nThe process of figuring out why your program has a certain error and how to fix it');
// else if(keyword == 'done') alert('done\nWhen your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)');
// else if(keyword == 'defect') alert('defect\nThe formal word for ‘error’');
// else if(keyword == 'pm') alert('The short version of Project Manager, the person in charge of the final result of a project');
// else if(keyword == 'ui/ux') alert('UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels');
// else alert(`We could not find your word: ${keyword}`);

// 4.2
let array = [];
alert('Hi there, this is dev dictionary');
while(true)
{
    let keyword = prompt('Enter a keyword');

    if(keyword != 'debug' && keyword != 'done' && keyword != 'defect' && keyword != 'pm' && keyword != 'ui/ux')
    {
        let explanation = prompt(`We could not find your word: ${keyword}, leave your explanation`);
        alert('Done');
        dictionary[keyword] = explanation;
        // dictionary.keyword = explanation;
    }
    else if(keyword == 'debug') alert('debug\nThe process of figuring out why your program has a certain error and how to fix it');
    else if(keyword == 'done') alert('done\nWhen your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)');
    else if(keyword == 'defect') alert('defect\nThe formal word for ‘error’');
    else if(keyword == 'pm') alert('pm\nThe short version of Project Manager, the person in charge of the final result of a project');
    else if(keyword == 'ui/ux') alert('ui/ux\nUI means User Interface, UX mean User Experience, are the process to define how your products looks and feels');
    else
    {
        alert(`${keyword}\n${dictionary[explanation]}`);
    }
}
