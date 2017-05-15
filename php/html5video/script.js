var media_events = new Array();

// was extracted from the spec in November 2011
media_events["loadstart"] = 0;
media_events["progress"] = 0;
media_events["suspend"] = 0;
media_events["abort"] = 0;
media_events["error"] = 0;
media_events["emptied"] = 0;
media_events["stalled"] = 0;
media_events["loadedmetadata"] = 0;
media_events["loadeddata"] = 0;
media_events["canplay"] = 0;
media_events["canplaythrough"] = 0;
media_events["playing"] = 0;
media_events["waiting"] = 0;
media_events["seeking"] = 0;
media_events["seeked"] = 0;
media_events["ended"] = 0;
media_events["durationchange"] = 0;
media_events["timeupdate"] = 0;
media_events["play"] = 0;
media_events["pause"] = 0;
media_events["ratechange"] = 0;
media_events["volumechange"] = 0;

var media_controller_events = new Array();

// was extracted from the spec in November 2011
media_controller_events["emptied"] = 0;
media_controller_events["loadedmetadata"] = 0;
media_controller_events["loadeddata"] = 0;
media_controller_events["canplay"] = 0;
media_controller_events["canplaythrough"] = 0;
media_controller_events["playing"] = 0;
media_controller_events["ended"] = 0;
media_controller_events["waiting"] = 0;
media_controller_events["durationchange"] = 0;
media_controller_events["timeupdate"] = 0;
media_controller_events["play"] = 0;
media_controller_events["pause"] = 0;
media_controller_events["ratechange"] = 0;
media_controller_events["volumechange"] = 0;

// was extracted from the spec in November 2011
var media_properties = [ "error", "src", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "initialTime", "duration", "startOffsetTime", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster" ];
var media_properties_elts = null;
var srcs = [], p = null;
function init() {
	document._video = document.getElementById("video");
	srcs = [null, document.getElementById("webm"), document.getElementById("ogv"), document.getElementById("mp4")];
	p = document.getElementById("p");
	init_events();
	init_properties();
	init_mediatypes();

	// properties are updated even if no event was triggered
	setInterval(update_properties, 2000);
}
document.addEventListener("DOMContentLoaded", init, false);

function init_events() {
	for (key in media_events) document._video.addEventListener(key, capture, false);
	var tbody = document.getElementById("events");
	var i = 1;
	var tr = null;
	for (key in media_events) {
		if (tr == null) tr    = document.createElement("tr");
		var th = document.createElement("th");
		th.textContent = key;
		var td = document.createElement("td");
		td.setAttribute("id", "e_" + key);
		td.innerHTML = "0";
		td.className = "false";
		tr.appendChild(th);
		tr.appendChild(td);
		if ((i++ % 5) == 0) {
			tbody.appendChild(tr);
			tr = null;
		}
	}
	if (tr != null) tbody.appendChild(tr);
}
function init_properties() {
	var tbody = document.getElementById("properties");
	var i = 0;
	var tr = null;
	media_properties_elts = new Array(media_properties.length);
	do {
		if (tr == null) tr    = document.createElement("tr");
		var th = document.createElement("th");
		th.textContent = media_properties[i];
		var td = document.createElement("td");
		td.setAttribute("id", "p_" + media_properties[i]);
		var r = eval("document._video." + media_properties[i]);
		td.innerHTML = r;
		if (typeof(r) != "undefined") {
			td.className = "true";
		} else {
			td.className = "false";
		}
		tr.appendChild(th);
		tr.appendChild(td);
		media_properties_elts[i] = td;
		if ((++i % 3) == 0) {
			tbody.appendChild(tr);
			tr = null;
		}
	} while (i < media_properties.length);
	if (tr != null) tbody.appendChild(tr);
}

function init_mediatypes() {
	var tbody = document.getElementById("m_video");
	var i = 0;
	var tr = document.createElement("tr");
	var videoTypes = [ "video/ogg", "video/mp4", "video/webm" ];
	i = 0;
	tr = document.createElement("tr");
	do {
		var td = document.createElement("th");
		td.innerHTML = videoTypes[i];
		tr.appendChild(td);
	} while (++i < videoTypes.length);
	tbody.appendChild(tr);

	i = 0;
	tr = document.createElement("tr");

	if (!!document._video.canPlayType) {
		do {
			var td = document.createElement("td");
			var support = document._video.canPlayType(videoTypes[i]);
			td.innerHTML = '"' + support + '"';
			if (support === "maybe") {
				td.className = "true";
			} else if (support === "") {
				td.className = "false";
			}
			tr.appendChild(td);
		} while (++i < videoTypes.length);
		tbody.appendChild(tr);
	}
}
function capture(event) {
	media_events[event.type] = media_events[event.type] + 1;
	for (key in media_events) {
		var e = document.getElementById("e_" + key);
		if (e) {
			e.innerHTML = media_events[key];
			if (media_events[key] > 0) e.className = "true";
		}
	}
	update_properties();
}
function update_properties() {
	var i = 0;
	for (key in media_properties) {
		var val = eval("document._video." + media_properties[key]);
		/*
	if (typeof val === "TimesRanges") {
	    val = val.length + " TimeRanges";
	}
	*/
		media_properties_elts[i++].innerHTML = val;
	}
	if (!!document._video.audioTracks) {
		var td = document.getElementById("m_audiotracks");
		td.innerHTML = document._video.audioTracks.length;
		td.className = "true";
	}
	if (!!document._video.videoTracks) {
		var td = document.getElementById("m_videotracks");
		td.innerHTML = document._video.videoTracks.length;
		td.className = "true";
	}
	if (!!document._video.textTracks) {
		var td = document.getElementById("m_texttracks");
		td.innerHTML = document._video.textTracks.length;
		td.className = "true";
	}
	document.getElementById("html").value = document.getElementById("videotag").innerHTML;
}
var videos = [
	["video.png","video.webm","video.ogv","video.mp4"],
	["video2.png", null, "video2.ogv","video2.mp4"],
	["video2_l.png", null, "video2_l.ogv","video2_l.mp4"],
	["video2_300.png","video2_300.webm","video2_300.ogv","video2_300.mp4"]
]

function switchVideo(n, i) {
	if (n >= videos.length) n = 0;
	if (isNaN(i)) i = 0;
	var parent = p.parentNode;
	document._video.setAttribute("poster", videos[n][0]);
	document._video.src = (i != 0 && videos[n][i] != null) ? videos[n][i] : "";

	for (k in srcs) {
		if (k > 0) {
			if (videos[n][k] != null && (i == k || i == 0)) {
				if (srcs[k].parentNode == null) parent.insertBefore(srcs[k], p);
				srcs[k].setAttribute("src", videos[n][k]);
			} else {
				if (srcs[k].parentNode != null) parent.removeChild(srcs[k]);
			}
		}
	}
	document._video.load();
	update_properties();
}