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
            $('.main__background').removeClass('main__background_milk');
            $('.main__background').removeClass('main__background_active');
            $('.main__background').addClass('main__background_white');
        }
        else if ($('.main-slider-base .slick-center').hasClass('main-slider__slide-wrapper_soap-active')) {
            console.log('active');
            $('.main__background').removeClass('main__background_white');
            $('.main__background').removeClass('main__background_soap');
            $('.main__background').addClass('main__background_active');
        }
        else if ($('.main-slider-base .slick-center').hasClass('main-slider__slide-wrapper_soap-milk')) {
            console.log('milk');
            $('.main__background').removeClass('main__background_white');
            $('.main__background').removeClass('main__background_active');
            $('.main__background').addClass('main__background_milk');
        }
    })


});