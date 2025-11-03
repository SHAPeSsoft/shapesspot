function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

function animateRainbow() {
    document.querySelectorAll('.rainbow').forEach(element => {
        element.style.color = getRandomColor();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    animateRainbow();
    setInterval(animateRainbow, 200);
});