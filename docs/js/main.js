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
	  document.documentElement.classList.add("is-loaded");
	  document.documentElement.classList.remove("is-loading");
	  setTimeout(function () {
	    document.documentElement.classList.add("is-ready");
	  }, 300);

	  function getLocomotiveScroll() {
	    var scroll = new LocomotiveScroll({
	      el: document.querySelector("#js-scroll"),
	      smooth: true,
	      getSpeed: true,
	      getDirection: false,
	      useKeyboard: true,
	      inertia: 1,
	      class: "is-inview",
	      scrollbarClass: "c-scrollbar",
	      scrollingClass: "has-scroll-scrolling",
	      draggingClass: "has-scroll-dragging",
	      smoothClass: "has-scroll-smooth",
	      initClass: "has-scroll-init"
	    });
	    return scroll;
	  }

	  function fixedHeader(scroll) {
	    var body = document.body;
	    var scrollUp = "scroll-up";
	    var scrollDown = "scroll-down";
	    var lastScroll = 0;

	    function onPageDidScroll(top) {
	      if (top == 0) {
	        body.classList.remove(scrollUp);
	        return;
	      }

	      if (top > lastScroll && !body.classList.contains(scrollDown)) {
	        // down
	        body.classList.remove(scrollUp);
	        body.classList.add(scrollDown);
	      } else if (top < lastScroll && body.classList.contains(scrollDown)) {
	        // up
	        body.classList.remove(scrollDown);
	        body.classList.add(scrollUp);
	      }

	      lastScroll = top;
	    }

	    if (scroll) {
	      scroll.on("scroll", function (instance) {
	        console.log("scrolling", instance.scroll.y);
	        onPageDidScroll(instance.scroll.y);
	      });
	    } else {
	      window.addEventListener("scroll", function () {
	        var currentScroll = window.pageYOffset;
	        onPageDidScroll(currentScroll);
	      });
	    }
	  }

	  function slideLiveProject() {
	    $(".slide-live-project").slick({
	      centerMode: true,
	      centerPadding: "60px",
	      slidesToShow: 1,
	      infinite: false
	    });
	  }

	  $(document).ready(function () {
	    var scroll = getLocomotiveScroll();
	    fixedHeader(scroll);
	    slideLiveProject();
	  });
	})();

})));
