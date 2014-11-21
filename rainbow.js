/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

function randRange(min, max) {
	return Math.random() * (max - min) + min
}
function randInt(min, max) {
	return Math.round(randRange(min, max))
}
function randIntString(min, max) {
	return randInt(min, max).toString()
}
function randColor() {
	return 'rgb(' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ')'
}

function rainbow(elementArray){
	elementArray.forEach(function(elm) {
		elm.style.backgroundColor = randColor();
		elm.style.color = randColor();
	});
}

//sane example
rainbow([document.body]);

//disco example
setInterval(function() {rainbow(document.querySelectorAll('*'))}, 200);
