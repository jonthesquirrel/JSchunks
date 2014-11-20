function useMarklet(marklet) {
	alert(marklet);
}

function MarkletBootstrap(callback, template_location, $URL, $NAMESPACE) {
	var request = new XMLHttpRequest();
	request.onload = function() {
		var text = request.responseText;
		text = text.replace(/\$URL/g, $URL);
		text = text.replace(/\$NAMESPACE/g, $NAMESPACE);
		callback(text);
	};
	request.open('get', template_location);
	request.send();
}

MarkletBootstrap(useMarklet, 'MarkletBootstrap_template.js', 'http://username.github.io/marklets/example.js', 'username_markletname');
