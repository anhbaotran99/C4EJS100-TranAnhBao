let items = ['Backpack', 'Miband Watch', 'Ring'];
console.log(items);
let list = document.getElementById('list_item');
console.log(list);
function update(){
    for(let i = 0; i < items.length; i++)
    {
        list.insertAdjacentHTML("beforeend",`<li><span>${items[i]}</span> <button class="button_del">Remove</button> </li>`);
    }
}
update();
let inputItem = document.getElementById('input_item');
console.log(inputItem);
let buttonAdd = document.getElementById('button_add');
console.log(buttonAdd);

buttonAdd.addEventListener('click', (e) => {
    items.push(inputItem.value);
    console.log(items);
    list.insertAdjacentHTML("beforeend",`<li><span>${inputItem.value}<span> <button>Remove</button></li>`);
    inputItem.value = '';
});

let buttonDel = document.getElementsByClassName('button_del');
console.log(buttonDel);








