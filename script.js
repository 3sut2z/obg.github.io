// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalElement = document.querySelector('.total');
let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('.price').textContent.slice(1));

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice}`;

    cartItems.appendChild(cartItem);

    total += productPrice;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  });
});
