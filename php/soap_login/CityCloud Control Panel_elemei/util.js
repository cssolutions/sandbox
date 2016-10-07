function versionCheck(currentVersion, titleText, text) {
	return true;
	var mine = "2.6.1";
	console.log("Version check. "+currentVersion + " vs. "+mine);
  if (mine != currentVersion) {
		$.weeboxs.open(text, {title: titleText, width: adjustWidth(500), draggable: true});
  }
  return true;
}

function showConfirmBox(confirmCommand, message) {
	if (!message) {
		message = "<span class='bold font16'>Are you sure?</span>";
	}

	var content = "";
  content    += "<div class='c'>"+message+"</div>";
	content    += "<div class='c'>";
	content    += " <div class=\"inline c mt10\">";
	content    += "  <div class=\"left rightpad20\">";
	content    += "   <a class=\"button\" onclick=\"$.weeboxs.getTopBox().close();\">Cancel</a>";
	content    += "  </div>";
	content    += "  <div class=\"right leftpad20\">";
		content    += "   <a class=\"button green\" onclick=\"javascript: $.weeboxs.getTopBox().close();"+confirmCommand+"\">Ok</a>";
	content    += "  </div>";
	content    += " </div>";
	content    += "</div>";
  $.weeboxs.open(content, {title: 'Confirm', width: adjustWidth(400), draggable: true});
}

function validateLogin() {
	var pass  = $("#password").prop("value");
	var login = $("#login").prop("value");
	
	$.get('/ajax.php?p=login&sub=validateLogin&login='+login+'&password='+pass, function(data) {
			if (data == "valid") {
				location.href='/';
			}
			else if (data == "valid_login_mismatch") {
				location.href='/?lkey=login_change';
			}
			else if (data == "invalid_login"){
				$().toastmessage('showErrorToast', 'Invalid login');
			}
			else {
				$().toastmessage('showErrorToast', "Unknown error occured");
			}
		});
}

function performLogout() {
    $.get('/ajax.php?p=basic&sub=logout', function(data) {
        location.href='/';
    });
}

function showLoggedInActionWindow() {
	$.weeboxs.open('/ajax.php?p=basic&sub=loggedinMenu', {contentType:'ajax', title: 'Options', width: adjustWidth(400), draggable: true});
}

function forgotPassword(login) {
		if (!login) {
				login = '';
		}
	$.weeboxs.open('/ajax.php?p=basic&sub=forgotpassword&login='+login, {contentType:'ajax', title: 'Reclaim lost password', width: adjustWidth(500)});
}

function twoFactorLogin(login, verification) {
    $.weeboxs.open('/ajax.php?p=basic&sub=twoFactorLogin&login='+login+'&verification='+verification, {contentType:'ajax', title: 'Two factor login', width: adjustWidth(500)});
}

function reclaimPassword() {
	var value = $("#username").prop("value");
	$("#response_layer").empty().append("<img src=\"/img/loaders/ajax_1.gif\" />");
	$.get("/ajax.php?p=basic&sub=reclaimPassword&u="+value, function(data) {
			$("#response_layer").empty().append(data);
		});
}


function setNewAccountPassword(ulid) {
	var password = $("#password").prop("value");
	var confirm  = $("#confirm_password").prop("value");
	if (password != confirm) {
		$().toastmessage('showErrorToast', 'Confirm password mismatch');
	}
	else {
		$.get('/ajax.php?p=basic&sub=resetpassword&pass='+password+'&ul='+ulid, function(data) {
				if (data == "success") {
					location.href='/?m=resetpassword_completed';
					return;
				}
				else {
					$().toastmessage('showErrorToast', data);
				}
			});
	}
}

function closeTopWeebox() {
	$.weeboxs.getTopBox().close();
}

function reloadTopWeebox() {
	var box = $.weeboxs.getTopBox();
	reloadWeebox(box);
}

function reloadWeeboxById(boxId) {
	var box = $.weeboxs.getBoxById(boxId);
	if (box) {
		reloadWeebox(box);
	}
}

function reloadWeebox(box, url) {
	if (!url) {
		url = box.ajaxurl;
	}
	box.setContent('<div class="dialog-loading"></div>');
	$.get(url, function(data) {
			box._content = data;
			box.setContent("<div class=\"dialog-content-div clearfix\">"+box._content+"</div>");
			try {
				var myScript = new Function($('script',box.getContent).html());
				myScript();
			} catch (e) {
			}
		});
}

function messageBox(str) {
	$.weeboxs.open(str, {width: adjustWidth(700)});	
}

function sprintf(str, value) {
	return str.replace("%s", value);
}

function leftPad(num, size) {
	var s = num+"";
	while (s.length < size) s = "0" + s;
	return s;
}

function presentDateTimeMinute(dateStr) {
		try {
				var d = new Date(dateStr);
				return d.getFullYear()+"-"+leftPad(d.getMonth()+1,2)+"-"+leftPad(d.getDate(),2)+" "+leftPad(d.getHours(),2)+":"+leftPad(d.getMinutes(),2);
		}
		catch(e) {
				console.log("Date conversion error: "+e);
				return dateStr;
		}
}

function substring(str, start, length, endChars) {
	if (endChars && str.length > length - start) {
 			return str.substring(start, length)+endChars;
	}
		return str.substring(start, length);
}

function adjustWidth(width) {
	var minWidth = 300;
  var viewPort = $(window).width();
	if (width > viewPort) {
    width = viewPort-50;
	}
	if (width < minWidth) {
		width = minWidth;
	}
	return width;
}

function triggerInlineEdit() {
		$(".editable").each(function() {
				var editName = $(this).data("name");
				var editType = $(this).data("type");
				var editUrl  = $(this).data("url");
				
				options = {
						indicator: "Saving...",
						tooltip: "Click to edit...",
						cssclass: "custom",
						name: editName,
						type: editType,
//						onblur: "ignore",
						callback : function(response, settings) {
								newValue = this.revert;
								try {
										response = jQuery.parseJSON(response);
								}
								catch (e) {
										$().toastmessage('showErrorToast', "Internal error occured. Please try again");
								}
								if (response.status != "success") {
										$().toastmessage('showErrorToast', "Error: "+response.msg);
								}
								else {
										$().toastmessage('showSuccessToast', response.msg);
										newValue = response.value;
								}
								$(this).text(newValue);
						}
				};
				
				if (editType == "textarea") {
						options.cancel = "Cancel";
						options.submit = "OK";
						options.width  = "100%";
						options.height = "200px";
				}
				
				$(this).editable(editUrl, options);
    });
}

$( document ).on( "click", ".advanced-title", function() {
		elId = $(this).data("content-id");
		
		if (typeof elId != "undefined") {
				$el = $("#"+elId);
				if ($(this).hasClass("active")) {
            $el.slideUp();
						$(this).removeClass("active");
        }
        else {
            $el.slideDown();
						$(this).addClass("active");
        }
		}
		else {
  			$el = $(".advanced-content", $(this).parent());
				if ($el.hasClass("active")) {
						$el.slideUp().removeClass("active");
				}
				else {
						$el.addClass("active").slideDown();
				}
		}
});


function IntervalHandler() {
	this.knownIntervals = {};

		this.addInterval = function(type, intervalId, data) {
//		console.log("Add interval "+type+" "+intervalId);
		if (!this.knownIntervals.hasOwnProperty(type)) {
			this.knownIntervals[type] = [];
		}
		this.knownIntervals[type]["int_"+intervalId] = data;
	}

	this.haltIntervalsForType = function(type) {
//		console.log("Halting all "+type+" intervals");
		if (this.knownIntervals.hasOwnProperty(type)) {
			for (var i in this.knownIntervals[type]) {
				clearInterval(i.substring(4));
				delete this.knownIntervals[type][i];
			}
		}
	}

	this.findMatchingIntervals = function(type, dataMatch) {
		var matches = [];
		if (this.knownIntervals.hasOwnProperty(type)) {
			for (var i in this.knownIntervals[type]) {
				var allMatch = true;
				for (var j in dataMatch) {
					if (this.knownIntervals[type][i][j] != dataMatch[j]) {
						allMatch = false;
						break;
					}
				}
				if (allMatch) {
					matches.push([i, this.knownIntervals[type][i]]);
				}
			}
		}
		return matches;
	}

	this.intervalExists = function(type, dataMatch) {
		return (this.findMatchingIntervals(type, dataMatch).length > 0);
	}

	this.haltMatchingIntervals = function(type, dataMatch) {
		var matches = this.findMatchingIntervals(type, dataMatch);
		for (var j in matches) {
			var i = matches[j][0];
			clearInterval(i.substring(4));
			delete this.knownIntervals[type][i];
		}
	}
}

function calculateTimeElapsed(startTime,
															endTime,
															formats) {
	if (!formats) {
		formats = [ "year", "month", "day", "hour", "minute", "second" ];
	}
	
	var timeFormats = {};
	
	timeFormats.year   = 60*60*24*365*1000;
	timeFormats.month  = 60*60*24*30*1000;
	timeFormats.week   = 60*60*24*7*1000;
	timeFormats.day    = 60*60*24*1000;
	timeFormats.hour   = 60*60*1000;
	timeFormats.minute = 60*1000;
	timeFormats.second = 1*1000;
	
	var ret = {};
	var timeDiff = endTime-startTime;
	if (timeDiff < 0) {
		timeDiff = 0;
	}
	for (var key in timeFormats) {
		if (formats.indexOf(key) < 0) {
			continue;
		}
		
		ret[key] = Math.floor(timeDiff / timeFormats[key]);
		timeDiff -= timeFormats[key] * ret[key];
	}
	return ret;
}
