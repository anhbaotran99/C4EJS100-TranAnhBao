const buttonAdd = document.getElementsByClassName('product-add-btn');

for(let i = 0; i < buttonAdd.length; i++)
{
    buttonAdd[i].addEventListener('click', () => {
        alert('Đã thêm vào giỏ hàng');
    })
}