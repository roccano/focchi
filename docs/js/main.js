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
          smoothMobile: true,
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
        var header = document.querySelector("#header");
        var scrollUp = "scroll-up";
        var scrollDown = "scroll-down";
        var lastScroll = 0;

        function onPageDidScroll(top) {
          if (top == 0) {
            header.classList.remove(scrollUp);
            return;
          }

          if (top > lastScroll && !header.classList.contains(scrollDown)) {
            // down
            header.classList.remove(scrollUp);
            header.classList.add(scrollDown);
          } else if (top < lastScroll && header.classList.contains(scrollDown)) {
            // up
            header.classList.remove(scrollDown);
            header.classList.add(scrollUp);
          }

          lastScroll = top;
        }

        if (scroll) {
          scroll.on("scroll", function (instance) {
            //console.log("scrolling", instance.scroll.y);
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

      function openMenu() {
        $(".menu-mobile a").click(function () {
          $('#menuSidenav').css("width", "250px");
        });
      }

      function closeMenu() {
        $(".sidenav .closebtn").click(function () {
          $('#menuSidenav').css("width", "0");
        });
      }

      function openSearch() {
        $(".search-menu a").click(function () {
          $('#searchSidenav').css("width", "250px");
        });
      }

      function closeSearch() {
        $(".search-sidenav .closebtn").click(function () {
          $('#searchSidenav').css("width", "0");
        });
      }

      function openLang() {
        $(".lang-menu a").click(function () {
          $('#langSidenav').css("height", "150px");
        });
      }

      function closeLang() {
        $(".lang-sidenav .closebtn").click(function () {
          $('#langSidenav').css("height", "0");
        });
      }

      $(document).ready(function () {
        var scroll = getLocomotiveScroll();
        fixedHeader(scroll);
        slideLiveProject();
        openMenu();
        closeMenu();
        openSearch();
        closeSearch();
        openLang();
        closeLang();
      });
    })();

})));
