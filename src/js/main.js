import LocomotiveScroll from "locomotive-scroll";

(function() {
    document.documentElement.classList.add("is-loaded");
    document.documentElement.classList.remove("is-loading");

    setTimeout(() => {
        document.documentElement.classList.add("is-ready");
    }, 100);


    function getLocomotiveScroll() {
        const scroll = new LocomotiveScroll({
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
        const body = document.body;
        const header = document.querySelector("#header");
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;

        function onPageDidScroll(top) {
            if (top == 0) {
                header.classList.remove(scrollUp);
                return;
            }
            if (top > 960) {}
            if (top > lastScroll && !header.classList.contains(scrollDown)) {
                // down
                header.classList.remove(scrollUp);
                header.classList.add(scrollDown);
            } else if (
                top < lastScroll &&
                header.classList.contains(scrollDown)
            ) {
                // up
                header.classList.remove(scrollDown);
                header.classList.add(scrollUp);
            }
            lastScroll = top;
        }

        if (scroll) {
            scroll.on("scroll", instance => {
                //console.log("scrolling", instance.scroll.y);
                onPageDidScroll(instance.scroll.y);
            });
        } else {
            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset;
                onPageDidScroll(currentScroll);
            });
        }
    }



    function openMenu() {
        if ($(window).width() < 767) {
            $(".menu-mobile a").click(function() {
                $('#menuSidenav').css("width", "100%");
            });
            $(".search-menu a").click(function() {
                $('#menuSidenav').css("width", "100%");
            });
            $(".lang-menu a").click(function() {
                $('#menuSidenav').css("width", "100%");
            });
        } else {
            $(".menu-mobile a").click(function() {
                $('#menuSidenav').css("width", "250px");
                $('.black-layer').fadeIn();
            });
            $(".search-menu a").click(function() {
                $('#menuSidenav').css("width", "250px");
                $('.black-layer').fadeIn();
            });
            $(".lang-menu a").click(function() {
                $('#menuSidenav').css("width", "250px");
                $('.black-layer').fadeIn();
            });
        }
    }

    function closeMenu() {
        $(".sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
            $('.black-layer').fadeOut();
        });
        $(".search-sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
            $('.black-layer').fadeOut();
        });
        $(".lang-sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
            $('.black-layer').fadeOut();
        });
    }

    function openSidePanel() {
        if ($(window).width() < 767) {
            $("#side-link").click(function() {
                $('.side-panel').css("width", "100%");
            });
        } else {
            $("#side-link").click(function() {
                $('.side-panel').css("width", "100%");
                $('.black-layer').fadeIn();
            });
        }
    }

    function closeSidePanel() {
        $(".side-panel .closebtn").click(function() {
            $('.side-panel').css("width", "0");
            $('.black-layer').fadeOut();
        });
    }

    function homeBackground() {
        $('#m-projects').hover(function() {
            $(".background").addClass('projects');
        }, function() {
            $(".background").removeClass('projects');
        })
        $('#m-process').hover(function() {
            $(".background").addClass('process');
        }, function() {
            $(".background").removeClass('process');
        })
        $('#m-technology').hover(function() {
            $(".background").addClass('technology');
        }, function() {
            $(".background").removeClass('technology');
        })
        $('#m-group').hover(function() {
            $(".background").addClass('group');
        }, function() {
            $(".background").removeClass('group');
        })
    }

    function projectsFilters() {
        $(".wrap-lv-1 a[data-link='tipology']").click(function() {
            $(this).toggleClass("active");
            $(".m-tipology").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='tipology']").removeClass("active");
            $(".wrap-lv-2").not(".m-tipology").removeClass("open");
        });
        $(".wrap-lv-1 a[data-link='size']").click(function() {
            $(this).toggleClass("active");
            $(".m-size").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='size']").removeClass("active");
            $(".wrap-lv-2").not(".m-size").removeClass("open");
        });
        $(".wrap-lv-1 a[data-link='status']").click(function() {
            $(this).toggleClass("active");
            $(".m-status").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='status']").removeClass("active");
            $(".wrap-lv-2").not(".m-status").removeClass("open");
        });
        $(".wrap-lv-1 a[data-link='location']").click(function() {
            $(this).toggleClass("active");
            $(".m-location").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='location']").removeClass("active");
            $(".wrap-lv-2").not(".m-location").removeClass("open");
        });
        $(".wrap-lv-1 a[data-link='architect']").click(function() {
            $(this).toggleClass("active");
            $(".m-architect").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='architect']").removeClass("active");
            $(".wrap-lv-2").not(".m-architect").removeClass("open");
        });
        $(".wrap-lv-1 a[data-link='technology']").click(function() {
            $(this).toggleClass("active");
            $(".m-technology").toggleClass("open");
            $(".wrap-lv-1 a").not("[data-link='technology']").removeClass("active");
            $(".wrap-lv-2").not(".m-technology").removeClass("open");
        });
    }

    function hoverImage() {
        $(".projects .image").mouseover(function() {
            $(this).find("img").css("opacity", "0");
        });
        $(".projects .image").mouseout(function() {
            $(this).find("img").css("opacity", "1");
        });
    }

    function anchorLink() {

        $("[data-anchor='one']").click(function() {
            $('html').animate({
                scrollTop: $("[data-section='one']").offset().top
            }, 'slow');
        })

    }



    window.onload = function() {
        //initialize swiper when document ready
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            centeredSlides: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 1,
                    spaceBetween: 150
                }
            }
        })
        var menu = ['1950 - 1960', '1970', '1975']
        var swiperGroup = new Swiper('.section--history .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            centeredSlides: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                }
            },

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 1,
                    spaceBetween: 150
                }
            }
        })
    };


    setTimeout(() => {
        var scroll = getLocomotiveScroll();
        fixedHeader(scroll);
        homeBackground();
        openMenu();
        closeMenu();
        openSidePanel();
        closeSidePanel();
        projectsFilters();
        hoverImage();
        anchorLink();
        showMoreLibrary();
    }, 500);



})();