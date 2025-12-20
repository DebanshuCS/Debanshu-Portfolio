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

    // 2. View Switching Logic (SPA Feel)
    window.switchView = function(viewName) {
        // Stop default anchor behavior if called from link
        if(event) event.preventDefault();

        // 1. Handle Nav Active State
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNav = document.getElementById(`nav-${viewName}`);
        if(activeNav) activeNav.classList.add('active');

        // 2. Handle View Visibility
        const views = document.querySelectorAll('.view-section');
        views.forEach(view => {
            // Hide current
            view.classList.remove('active');
            view.classList.add('hidden');
        });

        // Show Target
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.remove('hidden');
            // Small timeout ensures CSS animation triggers cleanly
            setTimeout(() => {
                targetView.classList.add('active');
            }, 10);

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
});