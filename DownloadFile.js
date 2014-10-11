var DownloadFile = function(link, name) {
  var elm = document.createElement('a');
  elm.href = link;
  elm.download = name;
  document.body.appendChild(elm);
  var event = document.createEvent("HTMLEvents");
  event.initEvent("click", true, true);
  event.eventName = "click";
  elm.dispatchEvent(event);
};
