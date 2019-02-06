$(document).ready(function () {

    $('.main-slider__inner').slick({
        infinite: true,
        arrows: false,
        speed: 300,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,

    });

    //custom navigation
    $(".main-slider__next").click(function(e) { 
        $(".main-slider__inner").slick('slickNext');
    });
    $(".main-slider__prev").click(function(e) { 
        $(".main-slider__inner").slick('slickPrev');
    });

    // added class for center slide
    $('.main-slider__inner').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-active').removeClass('main-slider__slide_active');
        $('.slick-center').addClass('main-slider__slide_active');        
    });


});