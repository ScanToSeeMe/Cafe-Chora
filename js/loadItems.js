const items = [
    'items/choco-pancakes.html',
    'items/avocado-toast.html',
    'items/freddo-espresso.html',
    'items/classic-burger.html',
    'items/quinoa-salad.html',
    'items/spicy-margarita.html',
    'items/craft-ipa.html',
    'items/cheesecake.html'
];

const container = document.getElementById('menu-container');

items.forEach(file => {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            container.insertAdjacentHTML('beforeend', html);
        })
        .catch(err => console.error('Error loading:', file, err));
});
