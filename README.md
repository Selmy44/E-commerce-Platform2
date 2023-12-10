<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple E-commerce Platform</title>
    <link rel="stylesheet" href="/test.css">
</head>
<body>

<header>
    <h1>Simple E-commerce Platform</h1>
</header>

<div class="product-container" id="productContainer">
    <!-- Product cards will be dynamically added here using JavaScript -->
</div>

<script src="/test.js"></script>

</body>
</html>
<style>
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
    width: 200px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
}

.product-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

.product-price {
    color: #007bff;
    font-size: 14px;
    margin-bottom: 10px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>
<script>
    // Sample product data
const products = [
    { id: 1, title: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, title: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, title: 'Product 3', price: 39.99, image: 'product3.jpg' },
];

// Function to render product cards
function renderProducts() {
    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        image.classList.add('product-image');
        card.appendChild(image);

        const title = document.createElement('div');
        title.textContent = product.title;
        title.classList.add('product-title');
        card.appendChild(title);

        const price = document.createElement('div');
        price.textContent = `$${product.price.toFixed(2)}`;
        price.classList.add('product-price');
        card.appendChild(price);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Now';
        buyButton.addEventListener('click', () => buyProduct(product.id));
        card.appendChild(buyButton);

        productContainer.appendChild(card);
    });
}

// Function to simulate buying a product
function buyProduct(productId) {
    alert(`Product ${productId} has been added to the cart.`);
}

// Initial rendering
renderProducts();
</script>
