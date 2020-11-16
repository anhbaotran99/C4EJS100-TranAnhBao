let product_items = document.getElementById("product_items");

function showProducts(image, name, price, sold, brand, place)
{
    product_items.insertAdjacentHTML('beforeEnd', 
    `       
        <div class="grid__column-2-4">
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
            </a>
        </div>
            
    `
    )
}

product_items.innerHTML = '';
for(let i = 0; i < products.length; i++)
{
    showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
}

