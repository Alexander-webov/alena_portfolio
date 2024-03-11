const swiper = new Swiper('.services__content', {
    slideClass: 'services__slider-box',
    wrapperClass: 'services__slider',
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        800: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
    }


});
const swiperMyLastProject = new Swiper('.project__wrapper', {
    slideClass: 'project__item-box',
    wrapperClass: 'project__items',
    autoplay: {
        delay: 4000,
    },
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 3,

        },
        480: {
            slidesPerView: 2,
            centeredSlides: true,
            initialSlide: 0, // -с какого начать!
            spaceBetween: 10,

        },

        320: {
            slidesPerView: 2,
            centeredSlides: true,
            initialSlide: 0, // -с какого начать!
            spaceBetween: 10,

        },
    }
});
const swiper2 = new Swiper('.project__content', {
    slideClass: 'project__slider-box',
    wrapperClass: 'project__slider',
    slidesPerView: 1,
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
        delay: 6000000,
    },
    breakpoints: {
        1320: {
            slidesPerView: 4,
        },
        920: {
            slidesPerView: 3,

        },
        620: {
            slidesPerView: 2,


        },
    }
});








/* Modal gallery */
const imgProgect = document.querySelector('.project__item');
const imageModalElement = document.querySelector('.modal-content');
const modalImageBlock = document.querySelector('.modal-image');
const btnCloseModal = document.querySelector('.close');
const wrapper = document.querySelector('.wrapper');


const imgProgectAll = document.querySelectorAll('.project__item');

imgProgectAll.forEach((element) => element.addEventListener('click', () => {
    const imgForModal = element.getAttribute('data_src');
    imageModalElement.src = imgForModal;
    modalImageBlock.classList.add('show');

}));

$(document).ready(function () {
    $('.image-popup').magnificPopup();
});




/* Modal contact */
const modalContact = document.querySelector('.modal-contact');
const btnOpenModalContact = document.querySelector('.menu__link-btn');
const btnCloseModalContact = document.querySelector('.modal-contact__close');

btnOpenModalContact.addEventListener('click', () => {
    modalContact.classList.add('show-modal');

})

btnCloseModalContact.addEventListener('click', () => {
    modalContact.classList.remove('show-modal');

})




var mixer = mixitup('.projectContent__items');