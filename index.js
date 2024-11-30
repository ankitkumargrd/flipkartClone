// Simple cart functionality
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});
