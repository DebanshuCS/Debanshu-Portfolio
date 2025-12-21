document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark Mode Logic
    const modeToggle = document.getElementById("modeToggle");
    const modeIcon = modeToggle.querySelector("i");
    const body = document.body;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }

    modeToggle.onclick = () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        // Toggle Icon
        if (isDark) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // 2. Mobile Menu Logic (NEW)
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle Menu
    hamburger.onclick = () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Function to handle mobile link clicks
    window.mobileSwitch = function(viewName) {
        // Close menu
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Switch View
        window.switchView(viewName);
    };


    // 3. View Switching Logic (Existing)
    window.switchView = function(viewName) {
        if(event) event.preventDefault();

        // Handle Nav Active State (Desktop)
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNav = document.getElementById(`nav-${viewName}`);
        if(activeNav) activeNav.classList.add('active');

        // Handle View Visibility
        const views = document.querySelectorAll('.view-section');
        views.forEach(view => {
            view.classList.remove('active');
            view.classList.add('hidden');
        });

        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.remove('hidden');
            setTimeout(() => {
                targetView.classList.add('active');
            }, 10);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
});