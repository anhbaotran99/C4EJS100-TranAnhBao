let array = ['Jeans', 'T-Shirt', 'Socks'];
while(true)
{
    let choice = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    if(choice != 'c' && choice != 'r' && choice != 'u' && choice != 'd')
    {
        alert('This command is not supported');
        break;
    }
    else
    {
        if(choice == 'r')
        {
            console.log('The current items are:');
            for(let i = 0; i < array.length; i++)
            {
                console.log(`${i+1}. ${array[i]}`);
            }
        }
        else if(choice == 'c')
        {
            let newItem = prompt('Enter the name of new item');
            array.push(newItem);
            alert('Done');
        }
        else if(choice == 'u')
        {
            let index = prompt('Enter the position you want to update');
            let newName = prompt('Enter the new name');
            alert('Done');
            array[index-1] = newName;
        }
        else
        {
            let index = prompt('Enter the position you want to delete');
            array.splice(index-1,1);
            alert('Done');
        }
    }
}