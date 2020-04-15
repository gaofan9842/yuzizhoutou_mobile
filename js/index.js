
(function ($) {
    console.log($)
    function hasUserInfo() {
        var token = localStorage.getItem('token');
        return token ? true : false;
    }
    function changeUserTemplate(params) {
        if(hasUserInfo()){
            if($('#user_center').hasClass('d-none')) $('#user_center').removeClass('d-none')
            if($('#login_or_regist').hasClass('d-none')) $('#login_or_regist').addClass('d-none')
        }else{
            if($('#user_center').hasClass('d-none')) $('#user_center').addClass('d-none')
            if($('#login_or_regist').hasClass('d-none')) $('#login_or_regist').removeClass('d-none')
        }
    }
    $('docuemnt').ready(changeUserTemplate)


    var bannerSwiper = new Swiper('#cake_banner', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    var mySwiper = new Swiper('#new_banner', {
        loop: true,
        slidesPerView : 4,
        spaceBetween : 18,
    })
    $('#btn1').click(function(){
        mySwiper.slidePrev();
    })
    $('#btn2').click(function(){
        mySwiper.slideNext();
    })

    
})(jQuery)