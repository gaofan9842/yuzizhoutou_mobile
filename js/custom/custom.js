// JavaScript Document
 
/*
Custom.js file includes following
 
- DONUT CHART
- CAROUSEL SLIDER
- TO TOP
- PARALLAX
- FITVID
- PRELOADER
- COUNTER UP
- MAGNIFIC POPUP
- STICKY NAV 
*/
$(document).ready(function() {
    'use strict';
      /*********************************************************************************** DONUT CHART STARTS */
    $(".donut").donutchart("animate");
     /*********************************************************************************** DONUT CHART ENDS */
      /*********************************************************************************** CAROUSEL SLIDER STARTS */
    var owl = $('.testimonial-carousel');
    owl.owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var owl = $('.testimonials-carousel');
    owl.owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var owl = $('.the-benefits-carousel');
    owl.owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var owl = $('.portfolio-carousel');
    owl.owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
     /*********************************************************************************** CAROUSEL SLIDER ENDS */
      
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
      /*********************************************************************************** TO TOP ENDS */
          /*********************************************************************************** PARALLAX STARTS */
    $('.parallax-1, .parallax-2, .parallax-3, .parallax-4, .parallax-5').parallax("50%", 0.5);
    /*********************************************************************************** PARALLAX ENDS */
      /*********************************************************************************** ACCORDION STARTS */
    function toggleChevron(e) {
        $(e.target).prev('.panel-heading').find("i.indicator2").toggleClass('fa-plus fa-minus');
    }
    $('.accordion_plusminus').on('hidden.bs.collapse', toggleChevron);
    $('.accordion_plusminus').on('shown.bs.collapse', toggleChevron);
      /*********************************************************************************** ACCORDION ENDS */
     /*********************************************************************************** FITVID STARTS */
    $(".fitvid").fitVids();
       /*********************************************************************************** FITVID ENDS */
          /*********************************************************************************** PRELOADER STARTS */
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
       /***********************************************************************************  PRELOADER ENDS */
       /*********************************************************************************** COUNTER UP STARTS */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
     /*********************************************************************************** COUNTER UP ENDS */
     /*********************************************************************************** MAGNIFIC POPUP STARTS*/
 
    
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    /*********************************************************************************** MAGNIFIC POPUP STARTS */
/*********************************************************************************** STICKY NAV STARTS */
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $(".navigation").removeClass("normal").addClass("sticky");
        } else {
            $(".navigation").removeClass("sticky").addClass("normal");
        }
    });
    /*********************************************************************************** STICKY NAV ENDS */
});