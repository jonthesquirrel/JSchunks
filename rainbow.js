/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

(function(){
	function randRange(min, max) {return Math.random() * (max - min) + min};
	function randInt(min, max) {return Math.round(randRange(min, max))};
	function randIntString(min, max) {return randInt(min, max).toString()};
	function randColor() {return 'rgb(' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ')'};
	function rainbow(elm) {elm.style.backgroundColor = randColor()};

	setInterval(function() {rainbow(document.body)}, 200);
})();
