const swiper = new Swiper('.services__content', {
    slideClass: 'services__slider-box',
    wrapperClass: 'services__slider',
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 3,
    spaceBetween: 20
});

const swiper2 = new Swiper('.project__content', {
    slideClass: 'project__slider-box',
    wrapperClass: 'project__slider',
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },


});


let a = 6;
let b = 6;
let Stroka = "sasha";
if (a > b) {
    console.log(Stroka)
} else {
    console.log('Саша молодец, что учит ПРОГРАММИРОВАНИЕ!')
}


