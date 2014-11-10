/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

//returns array if multiple items, item if single item
function $(s) {
	var a = document.querySelectorAll(s);
	if (a.length <= 1) {
		return a[0];
	} else {
		return a;
	}
}

//always returns array
function $(s) {
	return document.querySelectorAll(s);
}
