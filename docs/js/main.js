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
      }, 100);

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

      function openMenu() {
        if ($(window).width() < 767) {
          $(".menu-mobile a").click(function () {
            $('#menuSidenav').css("width", "100%");
          });
          $(".search-menu a").click(function () {
            $('#menuSidenav').css("width", "100%");
          });
          $(".lang-menu a").click(function () {
            $('#menuSidenav').css("width", "100%");
          });
        } else {
          $(".menu-mobile a").click(function () {
            $('#menuSidenav').css("width", "250px");
            $('.black-layer').fadeIn();
          });
          $(".search-menu a").click(function () {
            $('#menuSidenav').css("width", "250px");
            $('.black-layer').fadeIn();
          });
          $(".lang-menu a").click(function () {
            $('#menuSidenav').css("width", "250px");
            $('.black-layer').fadeIn();
          });
        }
      }

      function closeMenu() {
        $(".sidenav .closebtn").click(function () {
          $('#menuSidenav').css("width", "0");
          $('.black-layer').fadeOut();
        });
        $(".search-sidenav .closebtn").click(function () {
          $('#menuSidenav').css("width", "0");
          $('.black-layer').fadeOut();
        });
        $(".lang-sidenav .closebtn").click(function () {
          $('#menuSidenav').css("width", "0");
          $('.black-layer').fadeOut();
        });
      }

      function openSidePanel() {
        if ($(window).width() < 767) {
          $("#side-link").click(function () {
            $('.side-panel').css("width", "100%");
          });
        } else {
          $("#side-link").click(function () {
            $('.side-panel').css("width", "100%");
            $('.black-layer').fadeIn();
          });
        }
      }

      function closeSidePanel() {
        $(".side-panel .closebtn").click(function () {
          $('.side-panel').css("width", "0");
          $('.black-layer').fadeOut();
        });
      }

      function homeBackground() {
        $('#m-projects').hover(function () {
          $(".bg-1").hide();
          $(".bg-2").show();
        }, function () {
          $(".bg-2").hide();
          $(".bg-1").show();
        });
        $('#m-process').hover(function () {
          $(".bg-1").hide();
          $(".bg-3").show();
        }, function () {
          $(".bg-1").show();
          $(".bg-3").hide();
        });
        $('#m-technology').hover(function () {
          $(".bg-1").hide();
          $(".bg-4").show();
        }, function () {
          $(".bg-1").show();
          $(".bg-4").hide();
        });
        $('#m-group').hover(function () {
          $(".bg-1").hide();
          $(".bg-5").show();
        }, function () {
          $(".bg-1").show();
          $(".bg-5").hide();
        });
      }

      window.onload = function () {
        //initialize swiper when document ready
        var mySwiper = new Swiper('.swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          slidesPerView: 3,
          spaceBetween: 150,
          centeredSlides: true,
          initialSlide: 1,
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 150
            }
          }
        });
      };

      setTimeout(function () {
        var scroll = getLocomotiveScroll();
        fixedHeader(scroll);
        homeBackground();
        openMenu();
        closeMenu();
        openSidePanel();
        closeSidePanel();
      }, 500);
    })();

})));
