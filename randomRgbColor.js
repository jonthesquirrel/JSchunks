function randomRgbColor () {

	function randomFromRange (min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function d () {
		return randomFromRange(0, 255);
	}

	function rgb (r, g, b) {
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	return rgb( d(), d(), d() );
}
