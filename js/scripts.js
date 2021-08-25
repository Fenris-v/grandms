$(document).ready(() => {
    /**
     * HEADER
     */
    let header = $('header');
    if (!header.hasClass('bg') && pageYOffset > 50) {
        header.addClass('bg');
    }

    $(document).on('scroll', () => {
        if (!header.hasClass('bg') && pageYOffset > 50) {
            header.addClass('bg');
        }

        if (header.hasClass('bg') && pageYOffset <= 50) {
            header.removeClass('bg');
        }
    });

    /**
     * SLICK
     */
    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    $('.trust__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="34.5" fill="white" stroke="#E3E3E3"/><path d="M33.7049 29L32.2949 30.41L36.8749 35L32.2949 39.59L33.7049 41L39.7049 35L33.7049 29Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="34.5" transform="matrix(-1 0 0 1 35 35)" fill="white" stroke="#E3E3E3"/><path d="M36.2951 29L37.7051 30.41L33.1251 35L37.7051 39.59L36.2951 41L30.2951 35L36.2951 29Z" fill="black" fill-opacity="0.54"/></svg></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
        ]
    });

    $('.partners__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="#F2F2F2"/><path d="M21.624 18.9025L22.9515 17.5751L30.3765 25.0001L22.9515 32.425L21.624 31.0975L27.7215 25.0001L21.624 18.9025H21.624Z" fill="#6f6f6f"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#F2F2F2"/><path d="M28.376 18.9025L27.0485 17.5751L19.6235 25.0001L27.0485 32.425L28.376 31.0975L22.2785 25.0001L28.376 18.9025H28.376Z" fill="#6f6f6f"/></svg></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.feedbacks__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="#fff"/><path d="M21.624 18.9025L22.9515 17.5751L30.3765 25.0001L22.9515 32.425L21.624 31.0975L27.7215 25.0001L21.624 18.9025H21.624Z" fill="#6f6f6f"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#fff"/><path d="M28.376 18.9025L27.0485 17.5751L19.6235 25.0001L27.0485 32.425L28.376 31.0975L22.2785 25.0001L28.376 18.9025H28.376Z" fill="#6f6f6f"/></svg></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });

    $('.cases__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="34.5" fill="white" stroke="#E3E3E3"/><path d="M33.7049 29L32.2949 30.41L36.8749 35L32.2949 39.59L33.7049 41L39.7049 35L33.7049 29Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="34.5" transform="matrix(-1 0 0 1 35 35)" fill="white" stroke="#E3E3E3"/><path d="M36.2951 29L37.7051 30.41L33.1251 35L37.7051 39.59L36.2951 41L30.2951 35L36.2951 29Z" fill="black" fill-opacity="0.54"/></svg></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('body').toggleClass('overflow');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * FILE INPUT
     */
    $('input[type=file] ~ label').on('click', (e) => {
        $(e.target).siblings('input').trigger('click');
    })

    $('a[data-dropdown="true"]').on('click', (e) => {
        e.preventDefault();

        $('.menu_dropdown_mobile').slideToggle();
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });
});
