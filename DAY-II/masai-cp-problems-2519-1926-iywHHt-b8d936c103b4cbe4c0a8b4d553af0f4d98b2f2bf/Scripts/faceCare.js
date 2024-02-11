// data to map
const faceCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
        id:201,
        originalPrice:325,
        discountedPrice:276,
        name:"Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
      },
      {
        img:"https://www.mcaffeine.com/cdn/shop/products/1_3_44dacc57-22ab-40f8-955c-4acb9b9f60d2.jpg?v=1679385937&width=750",
        id:202,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://rukminim2.flixcart.com/image/850/1000/kjem3rk0-0/combo-kit/5/e/f/miniature-face-care-essentials-20ml-35gm-scmb42-mcaffeine-original-imafyzhuwm7fnadz.jpeg?q=20&crop=false",
        id:203,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
        id:204,
        originalPrice:1309,
        discountedPrice:113,
        name:"Daily Glow Kit for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
        id:205,
        originalPrice:1175,
        discountedPrice:999,
        name:"Deep Pore Cleansing Regime for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
        id:206,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
        id:207,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
        id:208,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
]

// append to this div
let faceCareContainer = document.getElementById("faceCareContainer");

const productCards = faceCareData.map(product => `
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

faceCareContainer.innerHTML = productCards.join('');
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
  const selectedProduct = faceCareData.find(product => product.id === parseInt(productId));
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