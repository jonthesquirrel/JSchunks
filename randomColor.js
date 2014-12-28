//randomColor() returns a random hex code color

function randomInRange (min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomColor () {
	return '#' + randomInRange(0, 0xffffff).toString(16);
}
