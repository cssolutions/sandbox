// A <a target="_blank"> megvalósítása az XHTML Strict keretei között: <a rel="external">

function targetBlank(event) {

	event = event ? event : window.event;
	
	var target = event.srcElement ? event.srcElement : event.target;
	
	window.open(target.getAttribute("href"), "_blank");
	
	// DOM
	if (event.cancelable)
		event.preventDefault();
	
	// IE
	return false;
}

function targetBlankBind() {
	var tags = document.getElementsByTagName("A");
	var i;
	for (i=0; i<tags.length; i++)
		if (tags[i].getAttribute("rel") == "external") {
			tags[i].onclick = targetBlank;
		}
}
		
if (window.attachEvent) {
	// IE
	window.attachEvent("onload", targetBlankBind);
	
} else {
	// DOM
	window.addEventListener("load", targetBlankBind, false);
	
}
