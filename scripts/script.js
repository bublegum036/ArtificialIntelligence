const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 5,
    initialSlide: 7,
});

var wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       200,
    mobile:       true,
    live:         true
})
wow.init();
