	function scrollToTop(duration) {
		if (duration <= 0) return;
		var difference = document.documentElement.scrollHeight + window.scrollY;
		var perTick = difference / duration * 10;

		setTimeout(function() {
			window.scroll(0, window.scrollY - perTick);
			scrollToTop(duration - 10);
		}, 10);
	}

	window.onscroll = function(event) {
		//console.log(window.scrollY);
		if(window.scrollY == 0) {
			document.getElementById("scroll-btn").style.display = 'none';
		}  else {
			document.getElementById("scroll-btn").style.display = 'block';
		}
	}

