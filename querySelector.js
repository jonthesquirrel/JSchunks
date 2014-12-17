/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

//returns array if multiple items, item if single item, undefined if nothing
function $(s) {
	var a = document.querySelectorAll(s);
	if (a.length <= 1) {
		return a[0];
	} else {
		return a;
	}
}

//always returns array, empty array if nothing
function $(s) {
	return document.querySelectorAll(s);
}
