const modeToggle = document.getElementById("modeToggle");
modeToggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
};

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.floating-icons .icon-item');
    const container = document.querySelector('.floating-icons');

    const iconSize = 72; // icon width and height in px

    function getRandomPosition(max) {
        return Math.random() * max;
    }

    function moveIcons() {
        const maxX = container.clientWidth - iconSize;
        const maxY = container.clientHeight - iconSize;

        icons.forEach(icon => {
            const newX = getRandomPosition(maxX);
            const newY = getRandomPosition(maxY);
            icon.style.transition = 'top 3s ease, left 3s ease';
            icon.style.top = `${newY}px`;
            icon.style.left = `${newX}px`;
        });
    }

    // Initial random placement
    icons.forEach(icon => {
        icon.style.position = 'absolute';
        icon.style.top = getRandomPosition(container.clientHeight - iconSize) + 'px';
        icon.style.left = getRandomPosition(container.clientWidth - iconSize) + 'px';
    });

    // Continuously move icons every 3 seconds
    setInterval(moveIcons, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');

    function animateOnScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 80) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');
    function animateCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 50) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });
    }
    window.addEventListener('scroll', animateCards);
    animateCards();
});

