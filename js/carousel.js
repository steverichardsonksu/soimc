			var outer = 1;
			function moveCarousel(inner) {var carousel_items = document.getElementsByClassName('carousel_item');document.getElementsByClassName('visible')[0].classList.remove('visible');outer++;carousel_items[inner].classList.add('visible');if(inner == carousel_items.length - 1) {outer = 0;}}
			setInterval(function() {moveCarousel(outer);}, 1000);
