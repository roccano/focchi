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
            });
            $(".search-menu a").click(function() {
                $('#menuSidenav').css("width", "250px");
            });
            $(".lang-menu a").click(function() {
                $('#menuSidenav').css("width", "250px");
            });
        }
    }

    function closeMenu() {
        $(".sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
        });
        $(".search-sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
        });
        $(".lang-sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
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
            });
        }
    }

    function closeSidePanel() {
        $(".side-panel .closebtn").click(function() {
            $('.side-panel').css("width", "0");
        });
    }

    function homeBackground() {
        $('#m-projects').hover(function() {
            $(".bg-1").hide();
            $(".bg-2").show();
        }, function() {
            $(".bg-2").hide();
            $(".bg-1").show();
        })
        $('#m-process').hover(function() {
            $(".bg-1").hide();
            $(".bg-3").show();
        }, function() {
            $(".bg-1").show();
            $(".bg-3").hide();
        })
        $('#m-technology').hover(function() {
            $(".bg-1").hide();
            $(".bg-4").show();
        }, function() {
            $(".bg-1").show();
            $(".bg-4").hide();
        })
        $('#m-group').hover(function() {
            $(".bg-1").hide();
            $(".bg-5").show();
        }, function() {
            $(".bg-1").show();
            $(".bg-5").hide();
        })
    }

    window.onload = function() {
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
    }, 500);

})();