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

function urlTitle(url) {
	var title = url.split('/').pop();

	title = title.replace(/-/gi, ' ');
	title =	title.toTitleCase();

	return title;
}

// urlTitle('http://jdh11235.github.io/web-experiments/really-cool-experiment');
// => "Really Cool Experiment"
