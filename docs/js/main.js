/**
 * @license focchi v1.0.0
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('locomotive-scroll')) :
    typeof define === 'function' && define.amd ? define('main', ['locomotive-scroll'], factory) :
    (global = global || self, factory(global.LocomotiveScroll));
}(this, (function (LocomotiveScroll) { 'use strict';

    LocomotiveScroll = LocomotiveScroll && LocomotiveScroll.hasOwnProperty('default') ? LocomotiveScroll['default'] : LocomotiveScroll;

    (function () {
      document.documentElement.classList.add('is-loaded');
      document.documentElement.classList.remove('is-loading');
      setTimeout(function () {
        document.documentElement.classList.add('is-ready');
      }, 300);
      setTimeout(function () {
        var scroll = new LocomotiveScroll({
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
          initClass: 'has-scroll-init'
        });
      }, 1000);
    })();

    $(document).ready(function () {
      $('.slide-live-project').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: false
      });
    });

})));
