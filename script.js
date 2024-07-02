// JavaScript to change background color on button click
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
