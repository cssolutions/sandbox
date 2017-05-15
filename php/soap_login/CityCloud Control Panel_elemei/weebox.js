/**
 * weebox.js
 *
 * weebox js
 *
 * @category   javascript
 * @package    jquery
 * @author     Jack <xiejinci@gmail.com>
 * @copyright  Copyright (c) 2006-2008 9wee Com. (http://www.9wee.com)
 * @license    http://www.9wee.com/license/
 * @version    
 */ 
(function($) {
	/*if(typeof($.fn.bgIframe) == 'undefined') {
		$.ajax({
			type: "GET",
		  	url: '/js/jquery/bgiframe.js',//è·¯å¾„ä¸?å¥½å¤„ç?†
		  	success: function(js){eval(js);},
		  	async: false				  	
		});
	}*/
	var weebox = function(content, options) {
		var self = this;
		this._dragging = false;
		this._content = content;
		this._options = options;
		this.dh = null;
		this.mh = null;
		this.dt = null;
		this.dc = null;
		this.bo = null;
		this.bc = null;
		this.selector = null;	
		this.ajaxurl = null;
		this.options = null;
		this.defaults = {
			boxid: null,
			boxclas: null,
			title: '',
			width: 400,
			height: 0,
			timeout: 0, 
			draggable: false,
			showreload: false,
			modal: true,
			focus: null,
			position: 'center',
			overlay: 50,
			showTitle: true,
			showButton: false,
			showCancel: false, 
			showOk: true,
			okBtnName: 'wb_button_ok',
			cancelBtnName: 'wb_button_cancel',
			contentType: 'html',
			contentChange: false,
			clickClose: false,
			zIndex: 999,
			animate: true,
			trigger: null,
			onclose: null,
			unload: null,
			onopen: null,
			onok: null,
			scrollLock: true,
			xPositionTo: null,
			yPositionTo: null,
			xPositionOffset: 0,
			yPositionOffset: 0
		};
		this.types = new Array(
			"dialog", 
			"error", 
			"warning", 
			"success", 
			"prompt",
			"box",
			"clean"
		);
		this.titles = {
			"error": 	"!! Error !!",
			"warning": 	"Warning!",
			"success": 	"Success",
			"prompt": 	"Please Choose",
			"dialog": 	"",
			"box":		"",
			"clean":	""
		};
		
		this.initOptions = function() {	
			if (typeof(self._options) == "undefined") {
				self._options = {};
			}
			if (typeof(self._options.type) == "undefined") {
				self._options.type = "";
			}
			if(!$.inArray(self._options.type, self.types)) {
				self._options.type = self.types[0];
			}
			if (typeof(self._options.boxclass) == "undefined") {
//				self._options.boxclass = self._options.type+"box";
				self._options.boxclass = self._options.type;
			}
			if (typeof(self._options.title) == "undefined") {
				self._options.title = self.titles[self._options.type];
			}

			if (self._options.contentType!="ajax") {
				self._content = "<div class=\"dialog-content-div\">"+self._content+"</div>";
			}

			if (content.substr(0, 1) == "#") {
				self._options.contentType = 'selector';
				self.selector = content; 
			}
			self.options = $.extend({}, self.defaults, self._options);
		};

		this.initBox = function() {
			var reloadImg = "";
			if (self.options.showreload) {
				if (!self.options.boxid) {
					// Set random boxid
					self.options.boxid = Math.floor(Math.random()*1001);
				}
				reloadImg = '<div class="right rightpad10 mt10 pointer"><img class="weeReload" onclick=\"reloadWeeboxById(\''+self.options.boxid+'\')\" src="core/img/icons/icon-reload.png" /></div>';
			}

			var html = '';

			switch (self.options.type) {
				case "wee":
				 
					html = 	'<div class="weedialog">' +
							'	<div class="dialog-header">' +
							'		<div class="dialog-tl"></div>' +
							'		<div class="dialog-title"></div>' +
							'		<div class="dialog-tr">' +
							'			<div class="dialog-close" title="Close"><a href="#"></a></div>' +
							'		</div>' +
							'	</div>' +
							'	<div class="dialog-con">' +
							'		<div class="dialog-con2">' +
							'			<div class="dialog-content"></div>' +
							'			<div class="dialog-button">' +
							'				<input type="button" class="dialog-ok" value="Ok" />&nbsp;' +
							'				<input type="button" class="dialog-cancel" value="Cancel" />' +
							'			</div>' +
							'		</div>' +
							'	</div>' +	
							'	<div class="dialog-bot">' +
							'		<div class="dialog-bl"></div>' +
							'		<div class="dialog-bc"></div>' +
							'		<div class="dialog-br"></div>' +
							'	</div>' +
							'</div>';

					break;

				case "clean":
					html  = "<div class='cleanWeeBox inline'>";
					html += " <div class='weedialog'>";
					html += "  <div class='dialog-header cleanWeeBoxHead inline' style='width: 100%'>";
					html += "   <span class='dialog-title center'></span>";
					html += "   <span class='right'><img src='core/img/icons/inactive.gif' class='pointer dialog-cancel' /></span>";
					html += "  </div>";
					html += "  <div class='dialog-content' style='padding: 5px 5px 5px 5px;'></div>";
					html += " </div>";
					html += "</div>";
					break;

				default:
					html = 	'<div class="weedialog">' +
							'	<div class="dialog-header">' +
							'		<div class="dialog-tl"></div>' +
							'		<div class="dialog-title"></div>' +
							'		<div class="dialog-tr">' +
							'			<div class="dialog-close" title="Close"><img src="/img/buttons/Button-Close-Window.png" alt="Close Window"/></div>' +
						reloadImg+
							'		</div>' +
							'	</div>' +
							'	<div class="dialog-con">' +
							'		<div class="dialog-con2">' +
							'			<div class="dialog-content"></div>' +
							'			<div class="dialog-button">' +
							'				<input type="button" class="dialog-ok" value="Ok" />&nbsp;' +
							'				<input type="button" class="dialog-cancel" value="Cancel" />' +
							'			</div>' +
							'		</div>' +
							'	</div>' +	
							'	<div class="dialog-bot">' +
							'		<div class="dialog-bl"></div>' +
							'		<div class="dialog-bc"></div>' +
							'		<div class="dialog-br"></div>' +
							'	</div>' +
							'</div>';
					break;

			}

			self.dh = $(html).appendTo('body').hide().css({
				position: 'absolute',	
				overflow: 'visible',
				width: self.options.width+'px',
				zIndex: self.options.zIndex
			});	
			self.dt = self.dh.find('.dialog-title');
			self.dc = self.dh.find('.dialog-content');
			self.bo = self.dh.find('.dialog-ok');
			self.bc = self.dh.find('.dialog-cancel');
			if (self.options.boxid) {
				self.dh.attr('id', self.options.boxid);
			}	
		  if (self.options.boxclass) {
				self.dh.addClass(self.options.boxclass);
			}
			if (self.options.height>0) {
				self.dc.css('height', self.options.height);
			}
			/*if (self.options.width>0) {
				self.dh.css('width', self.options.width);
			}*/
			//self.dh.bgiframe();	
		}

		this.initMask = function() {
			if (self.options.modal) {

				if ($.weeboxs.length() > 0) {
					self.options.overlay = 30;
				}

				self.mh = $("<div class='dialog-mask'></div>")
				.appendTo('body').hide().css({
					opacity: self.options.overlay/100,
					filter: 'alpha(opacity='+self.options.overlay+')',
					width: self.bwidth(),
					height: self.bheight(),
					zIndex: self.options.zIndex-1
				});
			}
		}

		this.initContent = function(content) {

			self.dh.find(".dialog-ok").val(self.options.okBtnName);
			self.dh.find(".dialog-cancel").val(self.options.cancelBtnName);	
			this.setTitle(self.options.title);
			//self.dh.find('.dialog-title').html(self.options.title);
			if (!self.options.showTitle) {
				self.dh.find('.dialog-header').hide();
			}	
			if (!self.options.showButton) {
				self.dh.find('.dialog-button').hide();
			}
			if (!self.options.showCancel) {
				self.dh.find('.dialog-cancel').hide();
			}							
			if (!self.options.showOk) {
				self.dh.find(".dialog-ok").hide();
			}			
			if (self.options.contentType == "selector") {
				self.selector = self._content;
				self._content = $(self.selector).html();
				self.setContent(self._content);
				//if have checkbox do
				var cs = $(self.selector).find(':checkbox');
				self.dh.find('.dialog-content').find(':checkbox').each(function(i){
					this.checked = cs[i].checked;
				});
				$(self.selector).empty();
				self.onopen();
				self.show();
				self.focus();
			} else if (self.options.contentType == "ajax") {	
				self.ajaxurl = self._content;
				self.setContent('<div class="dialog-loading"></div>');
				self.show();
				$.get(self.ajaxurl, function(data) {
					self._content = data;
			    self.setContent("<div class=\"dialog-content-div clearfix\">"+self._content+"</div>");
			    try {
			  		var myScript = new Function($('script',self.getContent).html());
			  		myScript();
			    } catch (e) {
			    	//alert(e);
			    }
			    self.onopen();
					if (self.options.position == 'center') {
						self.setCenterPosition();
					}

			    self.focus();
				});
			} else {
				self.setContent(self._content);
				self.onopen();
				self.show();
				self.focus();
				return false;
			}
		}

		this.initEvent = function() {
			self.dh.find(".dialog-close, .dialog-cancel, .dialog-ok").unbind('click').click(function(){self.close(true);});
			if (typeof(self.options.onok) == "function") {
				self.dh.find(".dialog-ok").unbind('click').click(self.options.onok);
			} 
			if (typeof(self.options.oncancel) == "function") {
				self.dh.find(".dialog-cancel").unbind('click').click(self.options.oncancel);
			}			
			if (self.options.timeout>0) {
				window.setTimeout(self.close, (self.options.timeout * 1000));
			}	
			this.draggable();
		}

		this.draggable = function() {
			if (self.options.draggable && self.options.showTitle) {
				self.dh.find('.dialog-header').mousedown(function(event){
					self._ox = self.dh.position().left;
					self._oy = self.dh.position().top;
					self._mx = event.clientX;
					self._my = event.clientY;
					self._dragging = true;
				});
				if (self.mh) {
					var handle = self.mh;
				} else {
					var handle = $(document);
				}
				$(document).mousemove(function(event){
					if (self._dragging == true) {
						//window.status = "X:"+event.clientX+"Y:"+event.clientY;
						self.dh.css({
							left: self._ox+event.clientX-self._mx, 
							top: self._oy+event.clientY-self._my
						});
					}
				}).mouseup(function(){
					self._mx = null;
					self._my = null;
					self._dragging = false;
				});
				var e = self.dh.find('.dialog-header').get(0);
				e.unselectable = "on";
				e.onselectstart = function() { 
					return false; 
				};
				if (e.style) { 
					e.style.MozUserSelect = "none"; 
				}
			}	
		}

		this.onopen = function() {
			if (self.options.onopen != null) {
				try {
					if (jQuery.isFunction(self.options.onopen)) {
						self.options.onopen();
					} else {
						eval(self.options.onopen);
					}
				} 
				catch(e) {
					alert(e)
				};
			}
			/*if (typeof(self.options.onopen) == "function") {
				self.options.onopen();
			}	*/
		}

		this.show = function() {	
			if (self.options.position == 'center') {
				self.setCenterPosition();
			}
			if (self.options.position == 'element') {
				self.setElementPosition();
			}
			if (self.options.animate) {
				if (self.mh) {
					self.mh.fadeIn("fast");
				}
				self.dh.fadeIn("normal");
			} else {
				self.dh.show();
				if (self.mh) {
					self.mh.show();
				}
			}	
		}

		this.focus = function() {
			if (self.options.focus) {
				self.dh.find(self.options.focus).focus();
			} else {
				self.dh.find('.dialog-cancel').focus();
			}
		}
		
		this.find = function(selector) {
			return self.dh.find(selector);
		}

		this.setTitle = function(title) {
			
// 			if (self._options.title != "") {
// 				titleSize = Math.max(20, Math.round(titleSize-(title.length-20)/4)); // decrease title size if it's long
// 			}
// 			else {
// 				self._options.title == "";
// 			}

			self.dh.find('.dialog-title').html(title);

		}
		
		this.getTitle = function() {
			return self.dh.find('.dialog-title').html();
		}
		
		this.setContent = function(content) {
			self.dh.find('.dialog-content').html(content);
		}
		
		this.getContent = function() {
			return self.dh.find('.dialog-content').html();
		}
		
		this.hideButton = function(btname) {
			self.dh.find('.dialog-'+btname).hide();			
		}
		
		this.showButton = function(btname) {
			self.dh.find('.dialog-'+btname).show();	
		}
		
		this.setButtonTitle = function(btname, title) {
			self.dh.find('.dialog-'+btname).val(title);	
		}
		
		this.close = function(closedManually) {

			// only call onclose if it was closed manually (This is to keep the weebox behave like the old lightbox)
			var onCloseCalled = false;
			if (closedManually) {
				if (self.options.onclose != null && (jQuery.isFunction(self.options.onclose) || self.options.onclose != "")) {
					try {
						if (jQuery.isFunction(self.options.onclose)) {
							self.options.onclose();
						} else {
							eval(self.options.onclose);
						}
						onCloseCalled = true;
					} 
					catch(e) {
						alert(e)
					};
				}
			}

			// Let the box remove itself from the list of open boxes, but not if onclose was called (This is to keep the weebox behave like the old lightbox)
			if (!onCloseCalled) {
				
				if (self.options.animate) {
					self.dh.fadeOut("fast", function () { self.dh.remove(); });
					if (self.mh) {
						self.mh.fadeOut("fast", function () { self.mh.remove(); });
					}
				} else {
					self.dh.remove();
					if (self.mh) {
						self.mh.remove();
					}
				}
				if (self.options.contentType == 'selector') {
					if (self.options.contentChange) {
						//if have checkbox do
						var cs = self.find(':checkbox');
						$(self.selector).html(self.getContent());
						if (cs.length > 0) {
							$(self.selector).find(':checkbox').each(function(i){
								this.checked = cs[i].checked;
							});
						}
					} else {
						$(self.selector).html(self._content);
					}
				}
	
				// Script supplied here will be executed when a weebox is closed
				if (self.options.unload != null && (jQuery.isFunction(self.options.unload) || self.options.unload != "")) {
					try {
						if (jQuery.isFunction(self.options.unload)) {
							self.options.unload();
						} else {
							eval(self.options.unload);
						} 
					} 
					catch(e) {
						alert(e)
					};
				}
				
				var openBoxes = $.weeboxs.getOpenBoxes();
				for(var i=0; i<openBoxes.length; i++) {
					if (openBoxes[i] == this) {
						openBoxes.splice(i, 1);
						break;
					}
				}
			}

			// If there are no open lightboxes after it has removed itself, do some special stuff
			if ($.weeboxs.length() == 0) {
				$(".overflowHidden").css({overflow:'auto'});
				
				$(document).unbind('keydown', null);
				// enableBanners();
				
				if (typeof(onLightboxClose) != "undefined") {
					onLightboxClose();
				}
			}

		}

		this.bheight = function() {
			//if ($.browser.msie && $.browser.versionNumber < 7) {
			if (jQuery.support.boxModel == false) {
				var scrollHeight = Math.max(
					document.documentElement.scrollHeight,
					document.body.scrollHeight
				);
				var offsetHeight = Math.max(
					document.documentElement.offsetHeight,
					document.body.offsetHeight
				);
				
				if (scrollHeight < offsetHeight) {
					return $(window).height();
				} else {
					return scrollHeight;
				}
			} else {
				return $(document).height();
			}
		}

		this.bwidth = function() {
			//if ($.browser.msie && $.browser.versionNumber < 7) {
			if (jQuery.support.boxModel == false) {
				var scrollWidth = Math.max(
					document.documentElement.scrollWidth,
					document.body.scrollWidth
				);
				var offsetWidth = Math.max(
					document.documentElement.offsetWidth,
					document.body.offsetWidth
				);

				if (scrollWidth < offsetWidth) {
					return $(window).width();
				} else {
					return scrollWidth;
				}
			}
			else {
				return $(document).width();
			}
		}

		this.setCenterPosition = function(m) {
			var wnd = $(window), doc = $(document),
				pTop = doc.scrollTop(),	pLeft = doc.scrollLeft(),
				minTop = pTop;	
			pTop += (wnd.height() - self.dh.height()) / 2;
			pTop = Math.max(pTop, minTop);
			pLeft += (wnd.width() - self.dh.width()) / 2;
			if (typeof(m) != 'undefined') {
				if (wnd.height() > self.dh.height()) {
					self.dh.css({top: pTop});
				}
				if (wnd.width() > self.dh.width()) {
					self.dh.css({left: pLeft});
				}
			}
			else {
				self.dh.css({top: pTop, left: pLeft});
			}

		}

		this.setElementPosition = function() {
			var trigger = $("#"+self.options.trigger);			
			if (trigger.length == 0) {
				alert('Trigger missing');
				self.close();
				return false;
			}
			var scrollWidth = 0;
			//if (!$.browser.msie || $.browser.versionNumber >= 7) {
			if (jQuery.support.boxModel == false) {
				scrollWidth = $(window).width() - document.body.scrollWidth;
			}

			var left = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)+trigger.position().left;
			if (left+self.dh.width() > document.body.clientWidth) {
				left = trigger.position().left + trigger.width() + scrollWidth - self.dh.width();
			} 
			
			var top = Math.max(document.documentElement.scrollTop, document.body.scrollTop)+trigger.position().top;
			if (top+self.dh.height()+trigger.height() > document.documentElement.clientHeight) {
				top = top - self.dh.height() - 5;
			} else {
				top = top + trigger.height() + 5;
			}

			if (self.options.xPositionTo) {
				left += $("#"+self.options.xPositionTo).position().left;
			}

			if (self.options.yPositionTo) {
				top += $("#"+self.options.yPositionTo).position().top;
			}

			left += self.options.xPositionOffset;
			top  += self.options.yPositionOffset;

			self.dh.css({top: top, left: left});
			return true;
		}	
		//PNGé€?æ˜Žå›¾ç‰‡
		this.correctPNG = function() {
		    /*for(var i=0; i<document.images.length; i++) {
				var img = document.images[i]
				var imgName = img.src.toUpperCase()
				if (imgName.substring(imgName.length-3, imgName.length) == "PNG") {
					var imgID = (img.id) ? "id='" + img.id + "' " : ""
					var imgClass = (img.className) ? "class='" + img.className + "' " : ""
					var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
					var imgStyle = "display:inline-block;" + img.style.cssText
					if (img.align == "left") imgStyle = "float:left;" + imgStyle
					if (img.align == "right") imgStyle = "float:right;" + imgStyle
					if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle  
					var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"	+ "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
					img.outerHTML = strNewHTML;
					i = i-1;
				}
		    }*/
		}		
		//çª—å?£åˆ?å§‹åŒ–	
		this.initialize = function() {
			self.initOptions();
			self.initMask();
			self.initBox();		
			self.initContent();
			self.initEvent();
			self.correctPNG();		
			return self;
		}
		//åˆ?å§‹åŒ–
		this.initialize();
	}	

	var weeboxs = function() {		
		var self = this;
		this._onbox = false;
		this._opening = false;
		this.boxs = new Array();
		this.zIndex = 999;
		this.push = function(box) {
			this.boxs.push(box);
		}
		this.pop = function() {
			if (this.boxs.length > 0) {
				return this.boxs.pop();
			} else {
				return false;
			}
		}
		this.open = function(content, options) {
			if ($.weeboxs.length() == 0) {
				$(".overflowHidden").css({overflow:'hidden'});
				
				$(document).bind('keydown', function(e) {
					if (e.keyCode == 27) {
						$.weeboxs.getTopBox().close();
					}
				});

				// disableBanners();
			}
			
			self._opening = true;
			if (typeof(options) == "undefined") {
				options = {};
			}
			if (options.boxid) {
				this.close(options.boxid);
			}
			options.zIndex = this.zIndex;
			this.zIndex += 10;
			var box = new weebox(content, options);
			box.dh.click(function(){
				self._onbox = true;
			});
			this.push(box);
			return box;
		}
		this.close = function(id) {
			if (id) {
				for(var i=0; i<this.boxs.length; i++) {
					if (this.boxs[i].dh.attr('id') == id) {
						this.boxs[i].close();
					}
				}
			} else {
				if (this.boxs.length > 0) {
					this.boxs[this.boxs.length-1].close();
				}
			}
		}
		this.closeAll = function() {
			while(this.boxs.length) {
				this.close();
			}
		}
		this.length = function() {
			return this.boxs.length;
		}
		this.getOpenBoxes = function() {
			return this.boxs;
		}
		this.getBoxById = function(id) {
			var openBoxes = $.weeboxs.getOpenBoxes();
			for(var i=0; i<openBoxes.length; i++) {
				if (this.boxs[i]["options"]['boxid']==id) {
					return this.boxs[i];
					break;
				}
			}
			return null;
		}
		this.getTopBox = function() {
			return this.boxs[this.boxs.length-1];
		}	
		this.find = function(selector) {
			return this.getTopBox().dh.find(selector);
		}		
		this.setTitle = function(title) {
			this.getTopBox().setTitle(title);
		}		
		this.getTitle = function() {
			return this.getTopBox().getTitle();
		}		
		this.setContent = function(content) {
			this.getTopBox().setContent(content);
		}		
		this.getContent = function() {
			return this.getTopBox().getContent();
		}		
		this.hideButton = function(btname) {
			this.getTopBox().hideButton(btname);			
		}		
		this.showButton = function(btname) {
			this.getTopBox().showButton(btname);	
		}		
		this.setButtonTitle = function(btname, title) {
			this.getTopBox().setButtonTitle(btname, title);	
		}
		$(window).scroll(function() {
			if (self.length() > 0) {
				var box = self.getTopBox();
				if (box.options.position == "center" && !box.options.scrollLock) {
					self.getTopBox().setCenterPosition("check_sizes");
				}
			}
		});
		$(window).resize(function() {
			if (self.length() > 0) {
				var box = self.getTopBox();
				if (box.options.position == "center") {
					self.getTopBox().setCenterPosition("check_sizes");
				}
				// Make overlay full width/height upon browser window dimension changes.
				$(".dialog-mask").css({width: document.body.offsetWidth});
				$(".dialog-mask").css({width: self.getTopBox().bwidth(), height: self.getTopBox().bheight()});
			}
		});
		$(document).click(function() {
			if (self.length()>0) {
				var box = self.getTopBox();
				if(!self._opening && !self._onbox && box.options.clickClose) {
					box.close();
				}
			}
			self._opening = false;
			self._onbox = false;
		});
	}
	$.extend({weeboxs: new weeboxs()});

})(jQuery);

function keyPressEvents(e) {

		return;
	if(e.keyCode == 37){
		$(document).unbind('keydown', keypressEvents);
		$("a#contentPrevious").click();
	}
	else if(e.keyCode == 39){
		$(document).unbind('keydown', keypressEvents);
		$("a#contentNext").click();
	}

}
