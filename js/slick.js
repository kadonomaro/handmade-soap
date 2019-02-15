$(document).ready(function () {
    //init sliders
    $('.main-slider-base').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        
    });
    
    $('.main-slider-type').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true

    });

    $('.main-slider-aroma').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true

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


    //change slider background image
    $('.main-slider-base').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
        $('.fade-base').fadeOut(1000);
        $('.fade-base').eq(nextSlide).fadeIn(800);
    });

    
    $('.main-slider-type').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
        $('.fade-type').fadeOut(1000);
        $('.fade-type').eq(nextSlide).fadeIn(800);
    });


    $('.main-slider-aroma').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
        $('.fade-aroma').fadeOut(1000);
        $('.fade-aroma').eq(nextSlide).fadeIn(800);
    });

});