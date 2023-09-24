// script.js
const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Order placed! Thank you for your order.');
    });
});
