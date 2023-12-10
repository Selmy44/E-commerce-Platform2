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