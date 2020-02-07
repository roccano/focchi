import LocomotiveScroll from 'locomotive-scroll';

(function() {

    document.documentElement.classList.add('is-loaded');
    document.documentElement.classList.remove('is-loading');

    setTimeout(() => {
        document.documentElement.classList.add('is-ready');
    },300)

    setTimeout(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true,
            getSpeed: true,
            getDirection: false,
            useKeyboard: true,
            inertia: 1,
            "class": 'is-inview',
            scrollbarClass: 'c-scrollbar',
            scrollingClass: 'has-scroll-scrolling',
            draggingClass: 'has-scroll-dragging',
            smoothClass: 'has-scroll-smooth',
            initClass: 'has-scroll-init',
        });
    }, 1000)

})();


$(document).ready(function(){
    $('.slide-live-project').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: false
    });
});
          