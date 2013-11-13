(function soimcCarousel() {
	var outer = 1;

	function startCarousel() {
		runCarousel = setInterval(function() {moveCarousel(outer);}, 5000);
	}

	function moveCarousel(inner) {var carousel_items = document.getElementsByClassName('carousel_item');document.getElementsByClassName('visible')[0].classList.remove('visible');outer++;carousel_items[inner].classList.add('visible');if(inner == carousel_items.length - 1) {outer = 0;}}

	carouselVideo = document.getElementsByClassName('carousel_video')[0];


	if(carouselVideo) {
		carouselVideo.addEventListener('play', function() {
			stopCarousel();
			carouselVideo.play();
		});

		carouselVideo.addEventListener('ended', function() {
			setTimeout(function() {moveCarousel(outer);}, 0);
			startCarousel();
			carouselVideo.load();
		});

		carouselVideo.addEventListener('mouseover', function() {
			toggleControls();
		});

		carouselVideo.addEventListener('mouseout', function() {
			toggleControls();
		});

		function toggleControls() {
			if (carouselVideo.hasAttribute('controls')) {
				carouselVideo.removeAttribute('controls');
			} else {
				carouselVideo.setAttribute('controls','controls');
			}
		}
	}

	function stopCarousel() {
		clearInterval(runCarousel);

	}

	startCarousel();
}());