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
			if (top > 960) {
				console.log("fine-hero");
			}
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
				console.log("scrolling", instance.scroll.y);
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

	$(document).ready(function() {
		const scroll = getLocomotiveScroll();
		fixedHeader(scroll);
		slideLiveProject();
	});
})();
