$(document).ready(function(){
    $('.my-slider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:true,
        nextArrow:true,
    });
});

// $(document).ready(function(){
//     $('.slider-section-p').slick({
//         autoplay:true,
//         autoplaySpeed:1000,
//         prevArrow:true,
//         nextArrow:true,
//     });
// });
// $(document).ready(function(){
//     $('.thumb-slider').slick({
//         // autoplay:true,
//         // autoplaySpeed:1000,
//         prevArrow:true,
//         nextArrow:true,
//     });
// });

// cart popup
const xcart = document.getElementById('x-mark');
const cartPopup = document.getElementById('cart-popup');
const showCart = document.getElementById('cart');
const CartSd = document.getElementById('cart-s-d');
const contShop = document.getElementById('cont-shop');

console.log(xcart,cartPopup,showCart)

showCart.addEventListener('click', () =>{
    cartPopup.style.display = "flex"
    CartSd.innerHTML = `1 ITEM BDT 5468`
})
xcart.addEventListener('click', () =>{
    cartPopup.style.display = "none"
})
contShop.addEventListener('click', () =>{
    cartPopup.style.display = "none"
})

// cart popup ends


const mbOpen = document.getElementById('mb-open');
const mbclose = document.getElementById('mbm-x');
const mbMenu = document.getElementById('mb-mnu');

mbOpen.addEventListener('click', () =>{
    mbMenu.style.display = "flex"
})

mbclose.addEventListener('click', () =>{
    mbMenu.style.display = "none"
})

