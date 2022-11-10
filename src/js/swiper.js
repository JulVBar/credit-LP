function swiper() {
    var swiper = new Swiper(".example-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // speed: 500,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".example-swiper-button-next",
            prevEl: ".example-swiper-button-prev",
        },
    })
}

export default swiper;