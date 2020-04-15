var bannerSwiper = new Swiper('#about_banner', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    effect : 'flip',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})