// data to map
const hairCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
        id:301,
        originalPrice:499,
        discountedPrice:424,
        name:"Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
      },
      {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
        id:302,
        originalPrice:599,
        discountedPrice:509,
        name:"Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
      },
      {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
        id:303,
        originalPrice:399,
        discountedPrice:339,
        name:"Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
        id:304,
        originalPrice:1029,
        discountedPrice:875,
        name:"Coffee Hair Boost & Hair Fall Control Kit Shea Butter - 200g",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
        id:305,
        originalPrice:689,
        discountedPrice:586,
        name:"De-stress Hair Oiling Routine",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
        id:306,
        originalPrice:1229,
        discountedPrice:1045,
        name:"Cappuccino- Anti-Dandruff Kit",
      },

      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5Z0ly3CAsvwNyXi8E1lkL4wpqjdwFowINw&usqp=CAU",
        id:307,
        originalPrice:1229,
        discountedPrice:1045,
        name:"Cappuccino- mCaffeine Must-have Coffee",
      },
      {
        img:"https://www.mcaffeine.com/cdn/shop/products/Card-1.jpg?v=1649242408&width=750",
        id:308,
        originalPrice:1229,
        discountedPrice:1045,
        name:"Coffee Shampoo (250ml) | With Protein ",
      },
   
] 

// append to this div
let hairCareContainer = document.getElementById("hairCareContainer");

const productCards = hairCareData.map(product => `
    <div class="product-card">
        <img class="product-card-image" src="${product.img}" alt="${product.name}">
        <div class="product-details">
            <h3>${product.name}</h3>
            <span class="main-price-span">Price: $${product.discountedPrice}</span>
            <span class="main-strikeoff-price-span">($${product.originalPrice})</span>         
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
    </div>
`);

hairCareContainer.innerHTML = productCards.join('');
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = event.target.getAttribute('data-product-id');
      addToCart(productId);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();
});

function addToCart(productId) {
  const selectedProduct = hairCareData.find(product => product.id === parseInt(productId));

  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existingItemIndex = existingCartItems.findIndex(item => item.id === selectedProduct.id);

  if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].quantity++;
  } else {
      existingCartItems.push({ ...selectedProduct, quantity: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cartCount");
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = totalItems;
}