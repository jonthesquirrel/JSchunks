String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.toTitleCase = function() {
	var words = this.split(' ');
	var compiledString = '';

	for (var i = 0; i < words.length; i++) {
		compiledString += (' ' + words[i].capitalize());
	}

	compiledString = compiledString.slice(1);

	return compiledString;
};
