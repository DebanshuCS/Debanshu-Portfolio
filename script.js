document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark Mode Logic
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Check for saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = "☀️";
    }

    modeToggle.onclick = () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        modeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // 2. View Switching Logic (SPA Feel)
    window.switchView = function(viewName) {
        // Prevent default jump behavior if called from anchor tag
        event?.preventDefault();

        // Get all views and nav items
        const views = document.querySelectorAll('.view-section');
        const navItems = document.querySelectorAll('.nav-item');

        // Hide all views
        views.forEach(view => {
            view.classList.remove('active');
            // Small timeout to allow CSS transition if needed,
            // but for display:none switching, we usually just toggle class
            setTimeout(() => {
                if(!view.classList.contains('active')) {
                    view.classList.add('hidden');
                }
            }, 100);
        });

        // Deactivate all nav links
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Show specific view
        const targetView = document.getElementById(`${viewName}-view`);
        const targetNav = document.getElementById(`nav-${viewName}`);

        if (targetView) {
            // Remove hidden first to allow display:block
            targetView.classList.remove('hidden');

            // Force reflow to enable animation
            void targetView.offsetWidth;

            // Add active class to trigger CSS animation
            targetView.classList.add('active');

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (targetNav) {
            targetNav.classList.add('active');
        }
    };
});