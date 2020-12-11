// Đổ data vào html
let product_items = document.getElementById("product_items");

function showProducts(image, name, price, sold, brand, place)
{
    product_items.insertAdjacentHTML('beforeEnd', 
    `       
        <div class="col l-2-4 m-4 c-6">
            <a class="product-item" href="#">
            <div class="product-item_img" style="background-image: url(${image})"></div>
            <h4 class="product-item_name">${name}</h4>
            <div class="product-item_price">${price}</div>
            <div class="product-item_action">
                <span class="product-item_like">
                    <i class="far fa-heart"></i>
                </span>
                <span class="product-item_sold">${sold} đã bán</span>
            </div>
            <div class="product-item_origin">
                <span class="product-item_brand">${brand}</span>
                <span class="product-item_place">${place}</span>
            </div>
            <div class="product-add">
                <button class="product-add-btn">Thêm vào giỏ hàng</button>
            </div>
            </a>
        </div>
    `
    )
}

function showProductsHome(){
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
    }
}
showProductsHome();

// Mặc định show tất cả sản phẩm
// product_items.innerHTML = '';
// for(let i = 0; i < products.length; i++)
// {
//     showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
// }

// Show tất cả sản phẩm khi click vào
let showAll = document.getElementById('all');
showAll.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
    }
})

// Show thiết bị điện tử
let showTBDT = document.getElementById('thietBiDienTu');
showTBDT.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Thiết bị điện tử")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show sách
let showSach = document.getElementById('sach');
showSach.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Sách")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show Đồ tiêu dùng
let showDoTieuDung = document.getElementById('doTieuDung');
showDoTieuDung.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Đồ tiêu dùng")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show Thời trang
let showThoiTrang = document.getElementById('thoiTrang');
showThoiTrang.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Thời trang")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})


// Admin
// const table_body = document.getElementById('body');
// const new_id = document.getElementById('new_id');
// const new_category = document.getElementById('new_category');
// const new_name = document.getElementById('new_name');
// const new_brand = document.getElementById('new_brand');
// const new_price = document.getElementById('new_price');
// const new_image = document.getElementById('new_image');
// const new_place = document.getElementById('new_place');
// const new_sold = document.getElementById('new_sold');
// const add_btn = document.getElementById('add_btn');
// const clear_btn = document.getElementById('clear_btn');


// let update_num = 0;
// let update_state = false;
// console.log(update_state);
// console.log(table_body);

// function update_table() {

//     table_body.innerHTML = '';

//     for (let data of products) {
//         table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.id}</td><td>${data.category}</td><td>${data.name}</td><td>${data.brand}</td><td>${data.price}</td><td><img src="${data.image}"></td><td>${data.place}</td><td>${data.sold}</td><td><button class="remove_btn">X</button><button class="update_btn">U</button></td></tr>`);
//     };

//     const remove_btns = document.getElementsByClassName('remove_btn');
//     const update_btns = document.getElementsByClassName('update_btn');

//     for (let i = 0; i < remove_btns.length; i++) {
//         remove_btns[i].addEventListener('click', () => {
//             products.splice(i, 1);
//             update_table();
//             showProductsHome();
//         });
//     };
    
//     for (let i = 0; i < update_btns.length; i++) {
//         update_btns[i].addEventListener('click', () => {
//             update_state = true;
//             update_num = i;
//             new_id.value = products[i].id;
//             new_category.value = products[i].category;
//             new_name.value = products[i].name;
//             new_brand.value = products[i].brand;
//             new_price.value = products[i].price;
//             new_image.value = products[i].image;
//             new_place.value = products[i].place;
//             new_sold.value = products[i].sold;
//         });
//     };
// };

// update_table();
// console.log(update_state);

// add_btn.addEventListener('click', () => {
//     if (new_id.value == '' || new_category.value == '' || new_name.value == ''|| new_brand.value == '' || new_price.value == '' || new_image.value == '' || new_place.value == '' || new_sold.value == ''  ) {
//         alert('dont leave stuff blank')
//     } else if (update_state) {
//         products[update_num] = { new_id: new_id.value, new_category: new_category.value, new_name: new_name.value, new_brand: new_brand.value, new_price: new_price.value, new_image: new_image.value, new_image: new_place,new_place:new_place.value,new_sold:new_sold.value };
//         update_state = false;
        
//         update_table();
//         new_id.value = '';
//         new_category.value = '';
//         new_name.value = '';
//         new_brand.value ='';
//         new_price.value = '';
//         new_image.value = '';
//         new_place.value = '';
//         new_sold.value = '';
//     } else {
//         products.push({ new_id: new_id.value, new_category: new_category.value, new_name: new_name.value, new_brand: new_brand.value, new_price: new_price.value, new_image: new_image.value, new_image: new_place,new_place:new_place.value,new_sold:new_sold.value });
        
//         update_table();
//         new_id.value = '';
//         new_category.value = '';
//         new_name.value = '';
//         new_brand.value ='';
//         new_price.value = '';
//         new_image.value = '';
//         new_place.value = '';
//         new_sold.value = '';
//     };
// });
// clear_btn.addEventListener('click', () => {
//         new_id.value = '';
//         new_category.value = '';
//         new_name.value = '';
//         new_brand.value ='';
//         new_price.value = '';
//         new_image.value = '';
//         new_place.value = '';
//         new_sold.value = '';
//     update_state = false;
// })


// Admin
const table_body = document.getElementById('body');
const new_id = document.getElementById('new_id');
const new_category = document.getElementById('new_category');
const new_name = document.getElementById('new_name');
const new_brand = document.getElementById('new_brand');
const new_price = document.getElementById('new_price');
const new_image = document.getElementById('new_image');
const new_place = document.getElementById('new_place');
const new_sold = document.getElementById('new_sold');
const add_btn = document.getElementById('add_btn');
const clear_btn = document.getElementById('clear_btn');


let update_num = 0;
let update_state = false;
console.log(update_state);
console.log(table_body);

function update_table() {

    table_body.innerHTML = '';

    for (let data of products) {
        table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.id}</td><td>${data.category}</td><td class="admin-name">${data.name}</td><td>${data.brand}</td><td>${data.price}</td><td><img src="${data.image}"></td><td>${data.place}</td><td>${data.sold}</td><td class="admin-remove"><button class="remove_btn">X</button><button class="update_btn">U</button></td></tr>`);
    };

    const remove_btns = document.getElementsByClassName('remove_btn');
    const update_btns = document.getElementsByClassName('update_btn');

    for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
            products.splice(i, 1);
            update_table();
            showProductsHome();
        });
    };
    
    for (let i = 0; i < update_btns.length; i++) {
        update_btns[i].addEventListener('click', () => {
            update_state = true;
            update_num = i;
            new_id.value = products[i].id;
            new_category.value = products[i].category;
            new_name.value = products[i].name;
            new_brand.value = products[i].brand;
            new_price.value = products[i].price;
            new_image.value = products[i].image;
            new_place.value = products[i].place;
            new_sold.value = products[i].sold;
        });
    };
};

update_table();
console.log(update_state);

add_btn.addEventListener('click', () => {
    if (new_id.value == '' || new_category.value == '' || new_name.value == ''|| new_brand.value == '' || new_price.value == '' || new_image.value == '' || new_place.value == '' || new_sold.value == ''  ) {
        alert('dont leave stuff blank')
    } else if (update_state) {
        products[update_num] = { id: new_id.value, category: new_category.value, name: new_name.value, brand: new_brand.value, price: new_price.value, image: new_image.value, place:new_place.value, sold:new_sold.value };
        update_state = false;
        
        update_table();
        showProductsHome();
        new_id.value = '';
        new_category.value = '';
        new_name.value = '';
        new_brand.value ='';
        new_price.value = '';
        new_image.value = '';
        new_place.value = '';
        new_sold.value = '';
    } else {
        products.push({id: new_id.value, category: new_category.value, name: new_name.value, brand: new_brand.value, price: new_price.value, image: new_image.value, place:new_place.value, sold:new_sold.value });
        
        update_table();
        showProductsHome();
        new_id.value = '';
        new_category.value = '';
        new_name.value = '';
        new_brand.value ='';
        new_price.value = '';
        new_image.value = '';
        new_place.value = '';
        new_sold.value = '';
    };
});
clear_btn.addEventListener('click', () => {
        new_id.value = '';
        new_category.value = '';
        new_name.value = '';
        new_brand.value ='';
        new_price.value = '';
        new_image.value = '';
        new_place.value = '';
        new_sold.value = '';
    update_state = false;
})
