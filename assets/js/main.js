// $(function() {
//     //====== Verticle Text =====//
//     let current = 1
//     let height = $('.headerTop__info-item').height()
//     let numberDivs = $('.headerTop__info-item').children().length
//     let first = $('.headerTop__info-item div:nth-child(1)')
//     setInterval(function() {
//         let number = current * -height
//         first.css('margin-top', number + 'px')
//         if (current === numberDivs) {
//             first.css('margin-top', '0px')
//             current = 1
//         } else current++
//     }, 5000)

//     //===== Menu Active =====//
//     var cururl = window.location.pathname
//     var curpage = cururl.substr(cururl.lastIndexOf('/') + 1)
//     var hash = window.location.hash.substr(1)
//     if ((curpage == '' || curpage == '/' || curpage == 'admin') && hash == '') {
//         //$("nav .navbar-nav > li:first-child").addClass("active");
//     } else {
//         $('.header__menu-list .list__item').each(function() {
//             $(this).removeClass('active')
//         })
//         if (hash != '')
//             $(".header__menu-list .list__item a[href*='" + hash + "']")
//             .parents('.list__item')
//             .addClass('active')
//         else
//             $(".header__menu-list .list__item a[href*='" + curpage + "']")
//             .parents('.list__item')
//             .addClass('active')
//     }

//     //===== Scroll Sticky Menu =====//
//     let header = document.querySelector('.header')
//     window.addEventListener('scroll', () => {
//         header.classList.toggle('sticky', window.scrollY > 0)
//     })

//     //===== Click Toggle Menu =====//
//     let body = document.querySelector('body')
//     let menuList = document.querySelector('.header__menu-list')
//     let logo = document.querySelector('.list__item-logo')
//     let overlay = document.querySelector('.header__overlay')
//     let button = document.querySelector('.header__menu-button')
//     button.addEventListener('click', () => {
//         button.classList.toggle('animate')
//         body.classList.toggle('overflow-hidden')
//         menuList.classList.toggle('show')
//         logo.classList.toggle('show')
//         overlay.classList.toggle('overlay')
//         $('.submenu').removeClass('show')
//         $('.has-child').removeClass('color')
//     })
// })

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: false,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     stagePadding: 50,
//     dots: false,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         600: {
//             items: 3,
//         },
//         1000: {
//             items: 5,
//         },
//         1400: {
//             items: 3,
//         },
//     },
// })

// ban đầu không work do nằm trong function(){}
//===== Owl Carousel =====//
$('.owl-banner').owlCarousel({
    loop: true,
    // margin: 30,
    nav: true,
    // Số lượng items khi slide
    items: 1,
    autoplay: true,
    autoplayTimeout: 300000,
    autoplayHoverPause: true,
})
$('.owl-about').owlCarousel({
    loop: false,
    // margin: 30,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
})
$('.owl-player').owlCarousel({
    loop: true,
    // margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
})