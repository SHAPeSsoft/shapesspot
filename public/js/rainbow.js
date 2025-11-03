function doRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

function animateText() {
    // make it sparkle!
    document.querySelectorAll('.rainbow').forEach(element => {
        element.style.color = doRandomColor();
    });
}

// do it!
document.addEventListener('DOMContentLoaded', function() {
    animateText();
    setInterval(animateText, 200);
});