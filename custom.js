$(document).ready(function(){
    $('.my-slider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:true,
        nextArrow:true,
    });
});

$(document).ready(function(){
    $('.single-p-slider').slick({
        // autoplay:true,
        // autoplaySpeed:1000,
        prevArrow:true,
        nextArrow:true,
    });
});
$(document).ready(function(){
    $('.thumb-slider').slick({
        // autoplay:true,
        // autoplaySpeed:1000,
        prevArrow:true,
        nextArrow:true,
    });
});


const xcart = document.getElementById('x-mark');
const cartPopup = document.getElementById('cart-popup');
const showCart = document.getElementById('cart');

console.log(xcart,cartPopup,showCart)

showCart.addEventListener('click', () =>{
    cartPopup.style.display = "flex"
})
xcart.addEventListener('click', () =>{
    cartPopup.style.display = "none"
})

