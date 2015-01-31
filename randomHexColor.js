function randomHexColor () {

	function randomFromRange (min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function d () {
		return randomFromRange(0, 0xf).toString(16);
	}

	return '#' + d() + d() + d() + d() + d() + d();
}
