$(document).ready(function () {

    $('.main-slider-base').slick({
        infinite: true,
        arrows: false,
        speed: 300,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,

    });
    
    $('.main-slider-type').slick({
        infinite: true,
        arrows: false,
        speed: 300,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,

    });

    $('.main-slider-aroma').slick({
        infinite: true,
        arrows: false,
        speed: 300,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,

    });

    //custom navigation
    $(".main-slider-base__next").click(function(e) { 
        $(".main-slider-base").slick('slickNext');
    });
    $(".main-slider-base__prev").click(function(e) { 
        $(".main-slider-base").slick('slickPrev');
    });


    $(".main-slider-type__next").click(function(e) { 
        $(".main-slider-type").slick('slickNext');
    });
    $(".main-slider-type__prev").click(function(e) { 
        $(".main-slider-type").slick('slickPrev');
    });


    $(".main-slider-aroma__next").click(function(e) { 
        $(".main-slider-aroma").slick('slickNext');
    });
    $(".main-slider-aroma__prev").click(function(e) { 
        $(".main-slider-aroma").slick('slickPrev');
    });



    // added class for center slide
    $('.main-slider__inner').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-active').removeClass('main-slider__slide_active');
        $('.slick-center').addClass('main-slider__slide_active');        
    });


});