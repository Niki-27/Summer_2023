// Get DOM elements
const orderButtons = document.querySelectorAll('.order-btn');
const cartItems = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-btn');
const cartSection = document.getElementById('cart');

// Add event listeners to order buttons
orderButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Add item to cart
function addToCart(event) {
  const restaurantName = event.target.parentElement.querySelector('h3').textContent;
  const item = document.createElement('li');
  item.textContent = restaurantName;
  cartItems.appendChild(item);
  cartSection.style.display = 'block';
}

// Checkout button event listener
checkoutButton.addEventListener('click', checkout);

// Checkout function
function checkout() {
  // Add code to process the payment and complete the order
  alert('Thank you for your order!');
  cartItems.innerHTML = '';
  cartSection.style.display = 'none';
}
