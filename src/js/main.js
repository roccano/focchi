import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: false
});

$(document).ready(function(){
    $('.slide-live-project').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: false
    });
  });
          