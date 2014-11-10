function $(s) {
	var a = document.querySelectorAll(s);
	if (a.length <= 1) {
		return a[0];
	} else {
		return a;
	}
}
