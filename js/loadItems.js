const items = [
    'items/toast.html',
    'items/club-sandwich.html',
    'items/ice-cream.html',
    'items/waffles.html',
    'items/ouzo.html',
    'items/tsipouro.html',
    'items/semi-sweet-beer.html',
    'items/freddo-espresso.html'
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
