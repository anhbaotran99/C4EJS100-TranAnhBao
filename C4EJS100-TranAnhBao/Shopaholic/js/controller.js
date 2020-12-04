// Xóa giỏ hàng
const remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
    let button = remove_cart[i];
    button.addEventListener("click", function(event) {
        let button_remove = event.target;
        button_remove.parentElement.parentElement.remove();
        updateCart();
    })
    
}

// Cập nhật giỏ hàng 
function updateCart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i];
      var price_item = cart_row.getElementsByClassName("cart-price ")[0];
      var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
      var price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value; // lấy giá trị trong thẻ input
      total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ';
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
    var input = quantity_input[i];
    input.addEventListener("change", function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCart();
    })
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("product-add-btn");
for (var i = 0; i < add_cart.length; i++) {
    // var add = add_cart[i];
    add_cart[i].addEventListener("click", function (event) {
        // alert('Thêm vào giỏ hàng thành công');
        var button = event.target;
        var product = button.parentElement.parentElement;
        // var img = product.parentElement.getElementsByClassName("product-item_img")[0];
        var title = product.getElementsByClassName("product-item_name")[0].innerText;
        var price = product.getElementsByClassName("product-item_price")[0].innerText;
        
        addItemToCart(title, price);
        updateCart();
  })
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cart_title = cartItems.getElementsByClassName('cart-item-title');
    // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông báo cho user.
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
            return;
        }
    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (event) {
        var button_remove = event.target;
        button_remove.parentElement.parentElement.remove();
        updateCart();
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCart();
    })
}

const checkOut = document.getElementById('checkOut');
checkOut.addEventListener('click', function() {
    alert("Thanh toán thành công");
})