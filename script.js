Fancybox.bind("[data-fancybox]", {

});
const container = document.getElementById("bannerCarousel");

const options = {
    Autoplay: {
        timeout: 3500,
        hoverPause: true
    },
    Navigation: true,
    Dots: false,
    Infinite: true
};

new Carousel(container, options, { Autoplay });
