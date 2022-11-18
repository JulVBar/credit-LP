function swiper() {
    var swiperExample = new Swiper(".example-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".example-swiper-button-next",
            prevEl: ".example-swiper-button-prev",
        },
    })

    var swiperReview = new Swiper(".review-swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 500,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
        },
    })
}

export default swiper;