/* Copyright (c) 2014 Jonathan Herman - MIT License (http://opensource.org/licenses/MIT) */

function nudge(elmID) {
	var elm = document.getElementById(elmID);
	var oldStyle = getComputedStyle(elm).marginTop;
	var newStyle = (+oldStyle.substring(0, 1) + 1) + oldStyle.substring(1, oldStyle.length);
	elm.style.marginTop = newStyle;
}

function attachNudge(elmID, event) {
	function nudgeID() { nudge(elmID) };
	document.getElementById(elmID).addEventListener(event, nudgeID, false);
}

/* example */
attachNudge('logo_homepage_link', 'mouseover');
