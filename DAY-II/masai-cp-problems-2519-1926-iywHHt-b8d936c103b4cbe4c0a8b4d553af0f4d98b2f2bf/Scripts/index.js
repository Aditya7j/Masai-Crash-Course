//add your js code here
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElement = document.getElementById("cartCount");
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalQuantity.toString();
});
