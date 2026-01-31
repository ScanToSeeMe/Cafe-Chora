document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.target;

            menuItems.forEach(item => {
                const category = item.dataset.category;

                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hidden');
                    item.style.animation = 'none';
                    item.offsetHeight;
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
