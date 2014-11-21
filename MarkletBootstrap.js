function useMarklet(title, marklet) {
	var elm = document.createElement('p');
	elm.innerHTML = title;
	elm.href = marklet;
	document.body.appendChild(elm);
}

function MarkletBootstrap(callback, title, template_location, $URL, $NAMESPACE) {
	var request = new XMLHttpRequest();
	request.onload = function() {
		var text = request.responseText;
		text = text.replace(/\$URL/g, $URL);
		text = text.replace(/\$NAMESPACE/g, $NAMESPACE);
		callback(title, text);
	};
	request.open('get', template_location);
	request.send();
}

MarkletBootstrap(useMarklet, 'GiveBox', '//hypersphere.localMarkletBootstrap_template.js', 'http://username.github.io/marklets/example.js', 'username_markletname');
