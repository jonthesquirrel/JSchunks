//randomColor() returns a random hex code color

function randomInRange (min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//BUG: this does not always return a six digit long hex code
//function randomColor () {
//	return '#' + randomInRange(0, 0xffffff).toString(16);
//}

function randomMiniHexColor () {
	var r = randomInRange(0, 0xf).toString(16);
	var g = randomInRange(0, 0xf).toString(16);
	var b = randomInRange(0, 0xf).toString(16);
	return '#' + r + g + b;
}
