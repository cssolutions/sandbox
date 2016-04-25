// kliensoldali include parancs HTML fájlokba használat: <a rel="fragment" href="belso.html">Alternatív szöveg</a>

function htmlInclude() {
	var req;
	if (typeof(XMLHttpRequest) == "undefined") {
		// IE
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				return;
			}
		}
	} else {
		// OTHERS
		req = new XMLHttpRequest();
	}
	
	var tags = document.getElementsByTagName("A");
	var i;
	for (i=0; i<tags.length; i++) {
		if (tags[i].getAttribute("rel") == "fragment") {
			
			req.open('GET', tags[i].getAttribute("href"), false);
			if (document.characterSet)
				req.overrideMimeType("text/html; charset=" + document.characterSet);
			req.send(null);
			
			if (req.status == 200) {
				var span = document.createElement("SPAN");
				span.innerHTML = req.responseText;
				
				if (tags[i].nextSibling) {
					var target = tags[i].nextSibling;
					tags[i].parentNode.removeChild(tags[i]);
					target.parentNode.insertBefore(span, target);
				} else {
					tags[i].parentNode.removeChild(tags[i]);
					tags[i].parentNode.appendChild(span);
				}
			}
		}
	}
}
		
if (window.attachEvent) {
	// IE
	window.attachEvent("onload", htmlInclude);
	
} else {
	// DOM
	window.addEventListener("load", htmlInclude, false);
	
}
