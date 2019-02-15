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
        variableWidth: true
        
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
    $('.main-slider-base').on('afterChange', function () {

        if ($('.main-slider-base .slick-center').hasClass('main-slider__slide-wrapper_soap-white')) {
            console.log('white');
            $('.fade').fadeOut(1200);
            $('.fade-white').fadeIn(1000);
        }
        else if ($('.main-slider-base .slick-center').hasClass('main-slider__slide-wrapper_soap-active')) {
            console.log('active');
            $('.fade').fadeOut(1200);
            $('.fade-active').fadeIn(1000);
        }
        else if ($('.main-slider-base .slick-center').hasClass('main-slider__slide-wrapper_soap-milk')) {
            console.log('milk');
            $('.fade').fadeOut(1200);
            $('.fade-milk').fadeIn(1000);
        }
    });

    $('.main-slider-type').on('afterChange', function () {

        if ($('.main-slider-type .slick-center').hasClass('main-slider__slide-wrapper_aroma-coffee')) {
            console.log('coffee');
            $('.fade').fadeOut(1200);
            $('.fade-coffee').fadeIn(1000);
        }
        else if ($('.main-slider-type .slick-center').hasClass('main-slider__slide-wrapper_aroma-orange')) {
            console.log('orange');
            $('.fade').fadeOut(1200);
            $('.fade-orange').fadeIn(1000);
        }
        else if ($('.main-slider-type .slick-center').hasClass('main-slider__slide-wrapper_aroma-strawberry')) {
            console.log('strawberry');
            $('.fade').fadeOut(1200);
            $('.fade-strawberry').fadeIn(1000);
        }
    });



});