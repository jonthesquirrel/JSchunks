/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

var DownloadFile = function(url, filename) {
  var elm = document.createElement('a');
  elm.href = url;
  elm.download = filename;
  document.body.appendChild(elm);
  var event = document.createEvent("HTMLEvents");
  event.initEvent("click", true, true);
  event.eventName = "click";
  elm.dispatchEvent(event);
  elm.parentNode.removeChild(elm);
};
