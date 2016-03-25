document.write('<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>');
document.write('<script type="text/javascript">_uacct = "UA-377008-1"; urchinTracker();</script>');

/*
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-377008-1";
urchinTracker();
</script>
*/

function topmessage() {
	/*
	var div = document.createElement("div");
	div.innerHTML = '<div style="background: black; margin: 8px; padding: 8px; border-bottom: 2px solid white; color: white;"><a style="color: white; text-decoration: none; font-size: 160%" href="http://www.youtube.com/watch?v=citzRjwk-sQ">Újabb szerzoi jogi törvény aláírására készül Európa. Tájékozódj, és oszd meg. (Magyar felirattal).</a></div>';
	document.body.insertBefore(div, document.body.firstChild);
	*/
}
		
if (window.attachEvent) {
	// IE
	window.attachEvent("onload", topmessage);
	
} else {
	// DOM
	window.addEventListener("load", topmessage, false);
	
}
