// png képek átalakítása Internet Explorer számára

function alphaImages() {
	var els = document.getElementsByTagName("IMG");
	var s, w, h;
	for (var i=0; i<els.length; i++) {
		s = els[i].src;
		if (s.toLowerCase().indexOf(".png") != -1) {
			els[i].src = "spacer.gif";
			els[i].style.filter += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + s + "', sizingMethod=image);";
		}
	}
}

if (navigator.userAgent.indexOf("MSIE") != -1 && navigator.userAgent.indexOf("Windows") != -1)
	window.attachEvent("onload", alphaImages);
