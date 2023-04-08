$(".banner__slider").slick({
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});

$(".slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,

    // the magic
    responsive: [{
        breakpoint: 1500,
        settings: {
            slidesToShow: 4,
            infinite: true
        }

    }, {

        breakpoint: 1201,
        settings: {
            slidesToShow: 3,
            dots: true
        }

    }, {

        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            dots: true
        },
    }]
});


$(".partner__slider").slick({
    // normal options...
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,

    // the magic
    responsive: [{

        breakpoint: 1500,
        settings: {
            slidesToShow: 4,
            infinite: true
        }

    }, {

        breakpoint: 1201,
        settings: {
            slidesToShow: 3,
            dots: true
        }

    }, {

        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
        }

    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
        }

    }]
});



$(".product-slider").slick({
    // normal options...
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});

//for testimonial
$('.testimonial__imgBox').slick({
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial__content',
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: 0,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: 0,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: 0,
            }
        }
    ]
});



$('.testimonial__content').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    centerPadding: 0,
    dots: false,
    speed: 1000,
    asNavFor: '.testimonial__imgBox',
    prevArrow: '<span class="testimonial__content__icon-left"><i class="fa-solid fa-angles-right"></i></span>',
    nextArrow: '<span class="testimonial__content__icon-right"><i class="fa-solid fa-angles-left"></i></span>',

    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// --------------------------------------------------

!(function (e) {
    "use strict";
    e(window).on("load", function () {
        e(".preloader-wrap").fadeOut(1e3);
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500);
                return false;
            }
        }
    });

    //for sticky
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 100) {
            $("#navbar").addClass("sticky");
        } else {
            $("#navbar").removeClass("sticky");
        }
    });

})(jQuery);