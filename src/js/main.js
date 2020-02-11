import LocomotiveScroll from "locomotive-scroll";

(function() {
    document.documentElement.classList.add("is-loaded");
    document.documentElement.classList.remove("is-loading");

    setTimeout(() => {
        document.documentElement.classList.add("is-ready");
    }, 300);

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

    function slideLiveProject() {
        $(".slide-live-project").slick({
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 1,
            infinite: false
        });
    }

    function openMenu() {
        $(".menu-mobile a").click(function() {
            $('#menuSidenav').css("width", "250px");
        });
    }

    function closeMenu() {
        $(".sidenav .closebtn").click(function() {
            $('#menuSidenav').css("width", "0");
        });
    }

    function openSearch() {
        $(".search-menu a").click(function() {
            $('#searchSidenav').css("width", "250px");
        });
    }

    function closeSearch() {
        $(".search-sidenav .closebtn").click(function() {
            $('#searchSidenav').css("width", "0");
        });
    }

    function openLang() {
        $(".lang-menu a").click(function() {
            $('#langSidenav').css("height", "150px");
        });
    }

    function closeLang() {
        $(".lang-sidenav .closebtn").click(function() {
            $('#langSidenav').css("height", "0");
        });
    }


    $(document).ready(function() {
        const scroll = getLocomotiveScroll();
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