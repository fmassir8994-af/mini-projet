// ================= MENU =================
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

if(menu){
    menu.onclick = () => {
        navbar.classList.toggle('active');
    };
}


// ================= ADD TO CART =================
let cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Produit ajouté au panier 🛒");
    });
});


// ================= HEART (LIKE) =================
let hearts = document.querySelectorAll('.fa-heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('active');

        if (heart.classList.contains('active')) {
            heart.style.color = 'red';
        } else {
            heart.style.color = 'white';
        }
    });
});


// ================= SHARE BUTTON =================
let shares = document.querySelectorAll('.fa-share');

shares.forEach(share => {
    share.addEventListener('click', () => {
        alert("Lien partagé 📤");
    });
});