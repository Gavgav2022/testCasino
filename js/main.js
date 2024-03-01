const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: {
        forceToAxis: true,
    }
});

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // If we need pagination 
    mousewheel: {
        forceToAxis: true,
    }
});

let menuSub = document.querySelectorAll('.menu__item');
for (item of menuSub) {
    let sub = item.querySelector('.menu__sub-list');
    if(sub) {
        item.addEventListener("mouseover", (e) => {
            sub.classList.add('menu__sub-list--active')
        })
        item.addEventListener("mouseout", (e) => {
            sub.classList.remove('menu__sub-list--active')
        })
    }
}

