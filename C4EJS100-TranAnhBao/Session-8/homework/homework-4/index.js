const timeSheetData = [
    {
        project : 'Learn front-end',
        task : 'Learn HTML',
        time: 6
    },
    {
        project : 'Learn front-end',
        task : 'Learn CSS',
        time : 8
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS Variables and Data Types',
        time: 6
    },
    {
        project: 'Learn git',
        task : 'Learn git basics',
        time: 2
    }
]

let tableBody = document.getElementById('table_body');
console.log(tableBody);

for(let i = 0; i < timeSheetData.length; i++)
{
    tableBody.insertAdjacentHTML('beforeend',`<tr><td>${timeSheetData[i].project}</td><td>${timeSheetData[i].task}</td><td>${timeSheetData[i].time}</td><td><button>X</button></td></tr>`);
}
let project = document.getElementById('input_project');
let task = document.getElementById('input_task');
let time = document.getElementById('input_time');
let add = document.getElementById('button_add');

add.addEventListener('click', () => {
    tableBody.insertAdjacentHTML('beforeend',`<tr><td>${project.value}</td><td>${task.value}</td><td>${time.value}</td></tr>`);
});

