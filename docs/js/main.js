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

  var scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: false
  });
  $(document).ready(function () {
    $('.slide-live-project').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      infinite: false
    });
  });

})));
