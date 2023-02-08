window.addEventListener('DOMContentLoaded', () => {
    const swiperSlide = document.querySelectorAll(".swiper-slide");
    const infiniteSlider = new Swiper(".infinite-slider", {
        loop: true,
        loopedSlides: swiperSlide.length,
        slidesPerView: "auto",
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
    });
});