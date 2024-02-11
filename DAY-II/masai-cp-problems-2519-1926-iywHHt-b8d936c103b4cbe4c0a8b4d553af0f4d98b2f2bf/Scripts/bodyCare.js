// data to map
const bodyCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1_340dd7ab-c7f7-4683-b52c-5aa9d45a89df_360x.jpg?v=1657680785%22",
    id: 101,
    originalPrice: 500,
    discountedPrice: 450,
    name: "Coffee Body Scrub for Tan-Free & Smooth Skin - 100 g - Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/PrimaryImage_3_44052f0e-d848-4985-9fe2-a324d38b288f.jpg?v=1669275527",
    id: 102,
    originalPrice: 350,
    discountedPrice: 300,
    name: "Moisturizing & Creamy Coffee Body Scrub with Berries for Smooth Skin - 200g",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_43da1e47-13c4-410e-a19f-3c2541099127.jpg?v=1675940080&width=550",
    id: 103,
    originalPrice: 1027,
    discountedPrice: 873,
    name: "Body Cleansing & Moisturizing Trio with Almonds",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_1.jpg?v=1669190993&width=550",
    id: 104,
    originalPrice: 705,
    discountedPrice: 599,
    name: "Body Polishing Kit with Berries- Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1a.jpg?v=1649159773&width=550",
    id: 105,
    originalPrice: 749,
    discountedPrice: 637,
    name: "Coffee Exfoliation and Tan Removal Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_74a6d4d9-6765-4b3e-b4e8-c72ca33f32b1_360x.jpg?v=1630554461%22",
    id: 106,
    originalPrice: 375,
    discountedPrice: 319,
    name: "Coffee Travel Polishing Essentials",
  },
  {
    img: "https://www.mcaffeine.com/cdn/shop/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=1500",
    id: 107,
    originalPrice: 375,
    discountedPrice: 319,
    name: "Coffee Travel Polishing Essentials",
  },
  {
    img: "https://www.mcaffeine.com/cdn/shop/products/1_3_44dacc57-22ab-40f8-955c-4acb9b9f60d2.jpg?v=1679385937",
    id: 108,
    originalPrice: 375,
    discountedPrice: 319,
    name: "Coffee Travel Polishing Essentials",
  },
];

// append to this div
let bodyCareContainer = document.getElementById("bodyCareContainer");

const productCards = bodyCareData.map(product => `
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

bodyCareContainer.innerHTML = productCards.join('');
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
  const selectedProduct = bodyCareData.find(product => product.id === parseInt(productId));

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