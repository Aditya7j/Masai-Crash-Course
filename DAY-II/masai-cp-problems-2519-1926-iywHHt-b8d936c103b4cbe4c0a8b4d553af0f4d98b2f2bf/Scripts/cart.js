document.addEventListener('DOMContentLoaded', function () {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById("cartContainer");

    let totalQuantity = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        cartItemElement.innerHTML = `
            <div class="product-card">
            <img class="product-card-image" src="${item.img}" alt="${item.name}">
            <div class="product-details">
                <h3>${item.name}</h3>
                <span class="main-price-span">Price: $${item.discountedPrice}</span>
                <span class="main-strikeoff-price-span">($${item.originalPrice})</span>   
                <p>Quantity: ${item.quantity}</p>
                <button id="couponbutton-remove" class="remove-from-cart-btn" data-product-id="${item.id}">Remove from Cart</button>
            </div>
        </div>
        `;

        cartContainer.appendChild(cartItemElement);

        totalQuantity += item.quantity;
        totalPrice += item.discountedPrice * item.quantity;
    });

    const totalQuantityElement = document.getElementById("totalQuantity");
    const totalPriceElement = document.getElementById("totalPrice");
    const cartCountElement = document.getElementById("cartCount");

    totalQuantityElement.textContent = `Total Quantity: ${totalQuantity}`;
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    
    cartCountElement.textContent = totalQuantity.toString();

    const couponInput = document.createElement("input");
    couponInput.setAttribute("type", "text");
    couponInput.setAttribute("id","couponInput")
    couponInput.setAttribute("placeholder", "Enter coupon code");
    const applyCouponButton = document.createElement("button");
    applyCouponButton.setAttribute("id","couponbutton")
    applyCouponButton.textContent = "Apply Coupon";
    
    const discountElement = document.createElement("div");
    discountElement.setAttribute("id", "discountValue");
    
    document.getElementById("billContainer").appendChild(couponInput);
    document.getElementById("billContainer").appendChild(applyCouponButton);
    document.getElementById("billContainer").appendChild(discountElement);

    applyCouponButton.addEventListener('click', function () {
        const couponCode = couponInput.value.trim();
        if (couponCode === "MASAI15") {
            const discountAmount = (totalPrice * 0.15);
            const discountedTotal = totalPrice - discountAmount;

            discountElement.textContent = `Discount (MASAI15): -$${discountAmount.toFixed(2)}`;
            discountElement.setAttribute("class","discount-text")

            totalPriceElement.textContent = `Total Price (After Discount): $${discountedTotal.toFixed(2)}`;
        } else {
            discountElement.textContent = "Invalid coupon code";
            discountElement.setAttribute("class","invalid-text")
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const productId = event.target.getAttribute('data-product-id');
            cartItems = cartItems.filter(item => item.id !== parseInt(productId));
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            location.reload();
        }
    });
});
