function showProps(obj, objName) {
	
	if (typeof(objName) == "undefined")
		objName = "object";

	var result = "";
	for (var i in obj) {
		result += objName + "." + i + " = ";
		
		try {
			result += obj[i];
		} catch (e) {
			result += e;
		}
		
		result += "\n";
	}
	
	var w = window.open("", "w", "width=560,height=450,resizable=yes,scrollbars=yes");
	w.document.write("<pre>" + result + "</pre>");
	w.document.close();
}

function explodeString(string, separator) {
	var arr = new Array();
	var pos = 0;
	var epos = 0;
	var idx = 0;
	
	while ((epos = string.indexOf(separator, pos)) != -1) {
		arr[idx++] = string.substring(pos, epos);
		pos = epos + separator.length;
	}
	arr[idx++] = string.substring(pos);
	return arr;
}
