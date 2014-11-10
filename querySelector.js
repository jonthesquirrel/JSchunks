/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

function $(s) {
	var a = document.querySelectorAll(s);
	if (a.length <= 1) {
		return a[0];
	} else {
		return a;
	}
}
