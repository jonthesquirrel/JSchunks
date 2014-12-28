//touching element will instantly respond and cancel later click event

var element = document.getElementById('example');

var anticlick = 0;

function doStuff () {
	console.log('stuff');
}

function handle_touchstart (event) {
	doStuff();

	anticlick++;
}

function handle_click (event) {
	if (anticlick > 0) {
		anticlick--;
	} else {
		doStuff();
	}
}

element.addEventListener('touchstart', handle_touchstart);
element.addEventListener('click', handle_click);
