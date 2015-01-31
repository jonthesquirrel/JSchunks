String.prototype.toTitleCase = function () {
	var str = this;
	var newStr = '';

	var words = str.split(' ');
	for (var i = 0; i < words.length; i++) {
		newStr += ' ' + words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
	}

	return newStr.trim();
};
