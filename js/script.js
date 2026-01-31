document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const menuContainer = document.getElementById('menu-container');

    document.getElementById('year').textContent = new Date().getFullYear();

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active class
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.target;

            // Query items dynamically from container
            const menuItems = menuContainer.querySelectorAll('.menu-item');

            menuItems.forEach(item => {
                const category = item.dataset.category;

                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hidden');
                    // replay animation
                    item.style.animation = 'none';
                    item.offsetHeight; // trigger reflow
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
