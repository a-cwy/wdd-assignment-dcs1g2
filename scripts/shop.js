let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dash Miner D9',
        image: 'dash-miner-d9/product1.jpg',
        price: 4599
    },
    {
        id: 2,
        name: 'Bitcoin Miner S19k Pro',
        image: 'bitcoin-miner-s19k-pro/product1.jpg',
        price: 2520
    },
    {
        id: 3,
        name: 'CKB Miner K7',
        image: 'ckb-miner-k7/product1.png',
        price: 2900
    },
    {
        id: 4,
        name: 'Bitcoin Miner S19j XP',
        image: 'bitcoin-miner-s19j-xp/product1.jpg',
        price: 1120
    },

];
let listCarts = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img class="itemImageContainer" src="assets/images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="redirectToProductPage(${key})">&#187;</button>
            <button onclick="addToCart(${key})">&plus;</button> `;
        list.appendChild(newDiv);
    })
}


initApp();
function addToCart(key) {
    if (listCarts[key] == null) {

        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCarts[key];
    } else {
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}

function redirectToProductPage(key) {
    let productPageUrls = [
        './dash-miner-d9.html',
        './bitcoin-miner-s19k-pro.html',
        './ckb-miner-k7.html',
        './bitcoin-miner-s19j-xp.html'
    ];

    if (key >= 0 && key < productPageUrls.length) {
        window.location.href = productPageUrls[key];
    } else {

        console.error('Invalid product key.');
    }
}