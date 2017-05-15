(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_300x250_bg.jpg", id:"_300x250_bg"},
		{src:"images/_300x250_cta.png", id:"_300x250_cta"},
		{src:"images/_300x250_logo10_new.png", id:"_300x250_logo10_new"},
		{src:"images/_300x250_logo11_new.png", id:"_300x250_logo11_new"},
		{src:"images/_300x250_logo12_new.png", id:"_300x250_logo12_new"},
		{src:"images/_300x250_logo13_new.png", id:"_300x250_logo13_new"},
		{src:"images/_300x250_logo14_new.png", id:"_300x250_logo14_new"},
		{src:"images/_300x250_logo1_new.png", id:"_300x250_logo1_new"},
		{src:"images/_300x250_logo2_new.png", id:"_300x250_logo2_new"},
		{src:"images/_300x250_logo3_new.png", id:"_300x250_logo3_new"},
		{src:"images/_300x250_logo4_new.png", id:"_300x250_logo4_new"},
		{src:"images/_300x250_logo5_new.png", id:"_300x250_logo5_new"},
		{src:"images/_300x250_logo6_new.png", id:"_300x250_logo6_new"},
		{src:"images/_300x250_logo7_new.png", id:"_300x250_logo7_new"},
		{src:"images/_300x250_logo8_new.png", id:"_300x250_logo8_new"},
		{src:"images/_300x250_logo9_new.png", id:"_300x250_logo9_new"},
		{src:"images/_300x250_VIE_logo.png", id:"_300x250_VIE_logo"},
		{src:"images/_300x250_visual.jpg", id:"_300x250_visual"},
		{src:"images/_300x250_visualBlack.png", id:"_300x250_visualBlack"}
	]
};

// stage content:
(lib.VIE_2016_CITYTYPE_HU_300x250_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.body.style.position = "relative";
		var canvas = document.getElementById('canvas');
		var clicktagAnchor = document.createElement('a');
		clicktagAnchor.href = dhtml.getVar('clickTAG', 'http://www.example-1.com');
		clicktagAnchor.target = dhtml.getVar('landingPageTarget', '_blank');
		clicktagAnchor.id = "clicktag";
		document.body.appendChild(clicktagAnchor);
		clicktagAnchor.appendChild(canvas);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask.setTransform(150,125);

	// main
	this.instance = new lib.main();
	this.instance.setTransform(300,600,1,1,0,0,0,300,600);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);


// symbols:
(lib._300x250_bg = function() {
	this.initialize(img._300x250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,141);


(lib._300x250_cta = function() {
	this.initialize(img._300x250_cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,82);


(lib._300x250_logo10_new = function() {
	this.initialize(img._300x250_logo10_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,32);


(lib._300x250_logo11_new = function() {
	this.initialize(img._300x250_logo11_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,50);


(lib._300x250_logo12_new = function() {
	this.initialize(img._300x250_logo12_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,48);


(lib._300x250_logo13_new = function() {
	this.initialize(img._300x250_logo13_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,42);


(lib._300x250_logo14_new = function() {
	this.initialize(img._300x250_logo14_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,34);


(lib._300x250_logo1_new = function() {
	this.initialize(img._300x250_logo1_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,26);


(lib._300x250_logo2_new = function() {
	this.initialize(img._300x250_logo2_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,38);


(lib._300x250_logo3_new = function() {
	this.initialize(img._300x250_logo3_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,24);


(lib._300x250_logo4_new = function() {
	this.initialize(img._300x250_logo4_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,34);


(lib._300x250_logo5_new = function() {
	this.initialize(img._300x250_logo5_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,46);


(lib._300x250_logo6_new = function() {
	this.initialize(img._300x250_logo6_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,40);


(lib._300x250_logo7_new = function() {
	this.initialize(img._300x250_logo7_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,30);


(lib._300x250_logo8_new = function() {
	this.initialize(img._300x250_logo8_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,20);


(lib._300x250_logo9_new = function() {
	this.initialize(img._300x250_logo9_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,44);


(lib._300x250_VIE_logo = function() {
	this.initialize(img._300x250_VIE_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,28);


(lib._300x250_visual = function() {
	this.initialize(img._300x250_visual);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,241);


(lib._300x250_visualBlack = function() {
	this.initialize(img._300x250_visualBlack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,241);


(lib.visualChild = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_visual();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,241);


(lib.logo14 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo14_new();
	this.instance.setTransform(0,-11,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-11,65,22.1);


(lib.logo13 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo13_new();
	this.instance.setTransform(0,-13,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13,58.5,27.3);


(lib.logo12 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo12_new();
	this.instance.setTransform(0,-15,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-15,53.3,31.2);


(lib.logo11 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo11_new();
	this.instance.setTransform(0,-16,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-16,45.5,32.5);


(lib.logo10 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo10_new();
	this.instance.setTransform(0,-10,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10,67.6,20.8);


(lib.logo9 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo9_new();
	this.instance.setTransform(0,-14,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-14,59.8,28.6);


(lib.logo8 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo8_new();
	this.instance.setTransform(0,-6,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6,80.6,13);


(lib.logo7 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo7_new();
	this.instance.setTransform(0,-9,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-9,75.4,19.5);


(lib.logo6 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo6_new();
	this.instance.setTransform(0,-13,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13,63.7,26);


(lib.logo5 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo5_new();
	this.instance.setTransform(0,-14,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-14,44.2,29.9);


(lib.logo4 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo4_new();
	this.instance.setTransform(0,-11,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-11,54.6,22.1);


(lib.logo3 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo3_new();
	this.instance.setTransform(0,-7,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7,135.2,15.6);


(lib.logo2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo2_new();
	this.instance.setTransform(0,-12,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-12,62.4,24.7);


(lib.logo1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_logo1_new();
	this.instance.setTransform(0,-8,0.65,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8,89.7,16.9);


(lib.ctaText2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(95,14.1,0.91,0.91);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,28.3);


(lib.ctaText1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOfBnIAAgXIANACQAJAAAEgGQAEgFAAgNIAAh6IAbAAIAAB6QAAAXgKAMQgKAMgVAAQgKAAgGgCgAP7BBQgEgEAAgIQAAgGAEgFQADgEAIAAQAIAAAEAEQAEAEAAAHQAAAIgEAEQgEAEgIAAQgHAAgEgEgAEoA8IAAgaIAWAJQAKACAHAAQAJAAAFgDQAFgEAAgHIgCgHIgHgGQgDgCgOgHQgLgFgGgEQgHgGgDgGQgEgIAAgIQAAgSAMgKQAMgKAUAAQAKAAAKACIATAHIgJAWIgRgGQgGgCgHAAQgIAAgEAEQgFAEAAAGQAAAEACACIAFAGIASAJQASAIAHAIQAHAJAAANQAAASgNAKQgMAKgXAAQgVAAgQgIgAjPAzQgQgTAAggQAAgfAQgSQAQgRAeAAQAeAAAQARQAQASAAAfQAAAhgQASQgQARgeAAQgeAAgQgRgAi6ggQgIAMAAAUQAAAWAIALQAJAMAQAAQAhAAAAgtQAAgrghAAQgQAAgJALgAufA8IAAgaIAWAJQAKACAHAAQAIAAAGgDQAFgEAAgHQAAgDgDgEIgGgGIgRgJQgMgGgGgDQgFgFgEgHQgEgIAAgIQAAgSAMgKQAMgKAUAAQAKAAAKACIATAHIgJAWQgKgEgHgCQgGgCgIAAQgHAAgFAEQgEAEAAAGQAAADACADIAFAGIASAJQASAIAHAIQAHAJAAANQAAASgNAKQgNAKgWAAQgVAAgQgIgAwFAzQgQgRAAgiQAAgTAIgPQAHgQAOgIQAOgIASAAQASAAAUAJIgIAXIgPgGQgIgDgHAAQgPAAgJAMQgIANAAATQAAAsAgAAQAQAAASgHIAAAXQgQAHgUAAQgdAAgOgRgAOKBCIgfgyIgOAAIAAAyIgcAAIAAiCIAmAAQAaAAANAKQANAJAAAVQAAALgGAJQgHAIgLAFIAmA5gANdgFIAIAAQAOAAAGgFQAGgEAAgKQAAgJgGgEQgHgEgNAAIgIAAgALYBCIAAiCIBKAAIAAAXIgvAAIAAAdIAsAAIAAAVIgsAAIAAAiIAvAAIAAAXgAJ9BCIAAgyIgrhQIAeAAIAbA2IAbg2IAeAAIgsBPIAAAzgAIbBCIg5hiIAAAAIABBiIgYAAIAAiCIAiAAIA5BhIABAAIgChhIAZAAIAACCgADGBCIAAiCIBLAAIAAAXIgvAAIAAAdIAsAAIAAAVIgsAAIAAAiIAvAAIAAAXgAAbBCIAAgSIA+hZIg9AAIAAgXIBeAAIAAASIg/BZIBAAAIAAAXgAhRBCIAAgSIA/hZIg9AAIAAgXIBbAAIAAASIg8BZIA+AAIAAAXgAkMBCIgig3IgMAIIAAAvIgbAAIAAiCIAbAAIAAA9IALgQIAjgtIAfAAIguA7IAuBHgAmHBCIgKgfIgvAAIgJAfIgeAAIAuiDIAiAAIAuCDgAmXALIgRg3IgRA3IAiAAgApBBCIAAiCIAbAAIAABrIA1AAIAAAXgAqYBCIAAhrIgjAAIAAgXIBiAAIAAAXIgjAAIAABrgArgBCIgJgfIgwAAIgJAfIgeAAIAuiDIAiAAIAuCDgArwALIgOguIgDgJIgRA3IAiAAgAP8AWIgFhWIAfAAIgFBWgADchLIAAgCQAPgSAGgJIAeAAIAAABIgQAOIgRAOg");
	this.shape.setTransform(106,10.7,1.013,1.014);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,21.5);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ASIDCIAKAAIAAAAQAAAGgDACIAAAAQgCACgFABIAAAAIAAgLgAR9DNIAAgLIAAAAIALAAIAAAAIAAALIAAAAIgLAAgARzDNIiBAAIAAAAIn3AAIAAAAIj7AAIAAAAIhCAAIAAAAIqdAAIiKAAIAAAAIi/AAIgVAAIAAAAIiCAAIAAAAIhPAAIAAAAIhuAAIAAAAQAAgGgDgCIAAAAQgCgDgFAAIAAAAIgKAAIAAAAIgKAAIAAAAQAAgFgDgCIAAAAQgCgDgGAAIAAAAQAAgFgCgCIAAAAQgCgDgGAAIAAAAQABgFgDgCIAAAAQgCgDgGAAIAAAAQABgFgDgCIAAAAQgDgCgEgBIAAAAIAAgKIAAAAQgFAAgDgCIAAAAQgCgDAAgFIAAAAIAAgJIAAAAQAEgBADADIAAAAQADACAAAFIAAAAQAAgFgDgCIAAAAQgDgDgEABIAAAAIAAgKIAAAAIAAgfIAAAAIAAgKIAAAAIAAgoIAAAAIAAhiIAAg8IAAAAIAAgKIAAAAIAKAAIAAAAIgKAAIAAAAIAAgJIAAAAIAKAAIAAAAIAAgKIAAAAIAAgLIAAAAIAJAAIAAAAIAAgKIAAAAIAKAAIAAAAIAAgKIAAAAIAKAAIAAAAIAAgKIAAAAIALAAIAAAAIAKAAIAAAAIAAgKIAAAAIAKAAIAAAAIAKAAIAAAAIBuAAIAAAAIBPAAIAAAAICCAAIAAAAIAVAAIAAAAIC/AAICKAAIAAAAID7AAIBMAAIAAAAIFWAAIBCAAIAAAAID7AAIAAAAIH3AAIAAAAICBAAIAAAAIAKAAIAAAAIALAAIAAAAQAFABACACIAAAAQADACAAAFIAAAAIAKAAIAAAAQAFAAACADIAAAAQADACAAAFIAAAAQAEAAADADIAAAAQACACABAFIAAAAQAEAAADADIAAAAQADACAAAFIAAAAQAEAAADADIAAAAQADACgBAGIAAAAIAAAKIAAAAIAAAJIAAAAIAAgJIAAAAQAGgBACADIAAAAQADACgBAFIAAAAIAAAKIAAAAIAAA8IAAAAIAABiIAAAoIAAAAIAAAKIAAAAIAAAfIAAAAIAAAKIAAAAIgKAAIAAAAIAAAJIAAAAIAAAKIAAAAIAAAKIAAAAIgJAAIAAAAIAAAKIAAAAIgKAAIAAAAIAAAKIAAAAIgKAAIAAAAIAAAKIAAAAIgKAAIAAAAIAAAKIAAAAIgKAAIAAAAIgKAAIAAAAIgLAAIAAAAIAAALIAAAAIgKAAgAyGDNQgFgBgDgCIAAAAQgCgCAAgGIAAAAIAKAAIAAAAQAFAAACADIAAAAQADACAAAGIAAAAIgKAAgAScC4IAKAAIAAAAQAAAFgDADIAAAAQgCACgFAAIAAAAIAAgKgAyiDAQgDgDAAgFIAAAAQAGAAACADIAAAAQADACAAAFIAAAAQgGAAgCgCgASmCuIAKAAIAAAAQgBAFgCADIAAAAQgDACgEAAIAAAAIAAgKgAysC2QgCgDgBgFIAAAAQAGAAACADIAAAAQACACAAAFIAAAAQgEAAgDgCgASwCkIAKAAIAAAAQAAAFgDADIAAAAQgDADgEgBIAAAAIAAgKgAy2CsQgCgDgBgFIAAAAQAGAAACADIAAAAQADACgBAFIAAAAQgEABgDgDgAS6CaIAJAAIAAAAQABAFgDADIAAAAQgDADgEgBIAAAAIAAgKgAzACiQgCgDAAgFIAAAAQAEABADACIAAAAQADACgBAFIAAAAQgEABgDgDgATDCGIAKAAIAAAAQABAFgDADIAAAAQgCACgGAAIAAAAIAAgKgATDCGIAAgJIAAAAIAKAAIAAAAIAAAJIAAAAIgKAAg");
	mask.setTransform(123,20.5);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.549)").s().p("A36GoII9tPMAm3AAAIo8NPg");
	this.shape.setTransform(-152.9,40.3);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.549)").s().p("A36GoII9tPMAm4AAAIo9NPg");
	this.shape_1.setTransform(-97.5,40.3);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.549)").s().p("A35GoII8tPMAm4AAAIo9NPg");
	this.shape_2.setTransform(-69.8,40.3);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.549)").s().p("A35GoII8tPMAm3AAAIo8NPg");
	this.shape_3.setTransform(-42.2,40.3);
	this.shape_3._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(114).to({_off:false},0).wait(1).to({x:-125.2},0).to({_off:true},1).wait(3).to({_off:false,x:-14.5},0).to({_off:true},1).wait(3).to({_off:false,x:96.3},0).to({_off:true},1).wait(3).to({_off:false,x:207},0).to({_off:true},1).wait(4).to({_off:false,x:345.4},0).to({_off:true},1).wait(46).to({_off:false,x:-152.9},0).wait(1).to({x:-125.2},0).to({_off:true},1).wait(3).to({_off:false,x:-14.5},0).to({_off:true},1).wait(3).to({_off:false,x:96.3},0).to({_off:true},1).wait(3).to({_off:false,x:207},0).to({_off:true},1).wait(4).to({_off:false,x:345.4},0).to({_off:true},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(116).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:13.2},0).to({_off:true},1).wait(3).to({_off:false,x:123.9},0).to({_off:true},1).wait(3).to({_off:false,x:234.7},0).to({_off:true},1).wait(4).to({_off:false,x:373.1},0).to({_off:true},46).wait(2).to({_off:false,x:-97.5},0).to({_off:true},1).wait(3).to({_off:false,x:13.2},0).to({_off:true},1).wait(3).to({_off:false,x:123.9},0).to({_off:true},1).wait(3).to({_off:false,x:234.7},0).to({_off:true},1).wait(4).to({_off:false,x:373.1},0).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(117).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:40.9},0).to({_off:true},1).wait(3).to({_off:false,x:151.6},0).to({_off:true},1).wait(3).to({_off:false,x:262.4},0).wait(1).to({x:290},0).to({_off:true},1).wait(51).to({_off:false,x:-69.8},0).to({_off:true},1).wait(3).to({_off:false,x:40.9},0).to({_off:true},1).wait(3).to({_off:false,x:151.6},0).to({_off:true},1).wait(3).to({_off:false,x:262.4},0).wait(1).to({x:290},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(118).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:68.6},0).to({_off:true},1).wait(3).to({_off:false,x:179.3},0).to({_off:true},1).wait(4).to({_off:false,x:317.7},0).to({_off:true},1).wait(51).to({_off:false,x:-42.2},0).to({_off:true},1).wait(3).to({_off:false,x:68.6},0).to({_off:true},1).wait(3).to({_off:false,x:179.3},0).to({_off:true},1).wait(4).to({_off:false,x:317.7},0).to({_off:true},1).wait(53));

	// shape
	this.instance = new lib._300x250_cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,41);


(lib.bg = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib._300x250_bg();
	this.instance.setTransform(0,60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,60,300,141);


(lib.visual = function() {
	this.initialize();

	// Ebene 2
	this.instance = new lib.visualChild();
	this.instance.setTransform(80,79.5,1,1,0,0,0,80,79.5);
	this.instance.compositeOperation = "lighter";

	// Ebene 1
	this.instance_1 = new lib._300x250_visualBlack();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,241);


(lib.logoleiste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var container = this;
		var logos = [this.logo1, this.logo2, this.logo3, this.logo4, this.logo5, this.logo6, this.logo7, this.logo8, this.logo9, this.logo10, this.logo11, this.logo12, this.logo13, this.logo14];
		var xPos = 20;
		var yPos = 25;
		
		function shuffle(a) {
		    var j, x, i;
		    for (i = a.length; i; i -= 1) {
		        j = Math.floor(Math.random() * i);
		        x = a[i - 1];
		        a[i - 1] = a[j];
		        a[j] = x;
		    }
		    return a;
		}
		
		shuffle(logos);
		
		for (i = 0; i < logos.length; i++)
		{
			var width = logos[i].getBounds().width;
			logos[i].x = xPos;
			logos[i].y = yPos;
			xPos = xPos + width + 40;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logos
	this.logo14 = new lib.logo14();
	this.logo14.setTransform(472.5,-21);

	this.logo13 = new lib.logo13();
	this.logo13.setTransform(472.5,-56);

	this.logo12 = new lib.logo12();
	this.logo12.setTransform(472.5,-91);

	this.logo11 = new lib.logo11();
	this.logo11.setTransform(472.5,-128);

	this.logo10 = new lib.logo10();
	this.logo10.setTransform(471.5,-155.5);

	this.logo9 = new lib.logo9();
	this.logo9.setTransform(470.5,-186.5);

	this.logo8 = new lib.logo8();
	this.logo8.setTransform(471,-214);

	this.logo7 = new lib.logo7();
	this.logo7.setTransform(472,-252);

	this.logo6 = new lib.logo6();
	this.logo6.setTransform(474.5,-289);

	this.logo5 = new lib.logo5();
	this.logo5.setTransform(475.5,-321.5);

	this.logo4 = new lib.logo4();
	this.logo4.setTransform(475,-360.4);

	this.logo3 = new lib.logo3();
	this.logo3.setTransform(480,-397.9);

	this.logo2 = new lib.logo2();
	this.logo2.setTransform(480,-439.9);

	this.logo1 = new lib.logo1();
	this.logo1.setTransform(480,-469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo1},{t:this.logo2},{t:this.logo3},{t:this.logo4},{t:this.logo5},{t:this.logo6},{t:this.logo7},{t:this.logo8},{t:this.logo9},{t:this.logo10},{t:this.logo11},{t:this.logo12},{t:this.logo13},{t:this.logo14}]}).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh2vAD6IAAnzMDtfAAAIAAHzg");
	this.shape.setTransform(762.5,25,1.003,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-477,1525,527);


(lib.logoCont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_749 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(749).call(this.frame_749).wait(1));

	// Ebene 1
	this.logos = new lib.logoleiste();
	this.logos.setTransform(150,230,1,1,0,0,0,150,30);

	this.timeline.addTween(cjs.Tween.get(this.logos).to({scaleX:1.02,x:-1101},749).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-277,1525,527);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loopPnt:1});

	// timeline functions:
	this.frame_0 = function() {
		this.loops = 0;
	}
	this.frame_228 = function() {
		if(this.loops < 2)
			this.loops++;
		else {
			this.stop();
			this.cta.stop();
		}
	}
	this.frame_249 = function() {
		this.gotoAndPlay('loopPnt');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(228).call(this.frame_228).wait(21).call(this.frame_249).wait(1));

	// logo_vie
	this.instance = new lib._300x250_VIE_logo();
	this.instance.setTransform(198,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

	// logos
	this.logos = new lib.logoCont();
	this.logos.setTransform(630,280.4,1,1,0,0,0,630,280.4);

	this.timeline.addTween(cjs.Tween.get(this.logos).wait(250));

	// ctaText2
	this.instance_1 = new lib.ctaText2();
	this.instance_1.setTransform(157,168,1,1,0,0,0,103,14);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({alpha:1},5).wait(75).to({alpha:0},10).to({_off:true},1).wait(10));

	// ctaText1
	this.instance_2 = new lib.ctaText1();
	this.instance_2.setTransform(156,165.6,0.03,0.03,0,0,0,111.7,10);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({regX:112,regY:9,scaleX:1.05,scaleY:1.05,y:167.1},5,cjs.Ease.get(-0.4)).to({scaleX:1,scaleY:1,y:167},2,cjs.Ease.get(0.4)).wait(38).to({alpha:0},5).to({_off:true},1).wait(100));

	// cta
	this.cta = new lib.cta();
	this.cta.setTransform(80,488,1,1,0,0,0,71,36);
	this.cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(99).to({regX:123.4,regY:21.7,scaleX:0.03,scaleY:0.03,x:150,y:169.5,alpha:1},0).to({regX:123,regY:20.9,scaleX:1.05,scaleY:1.05,y:170},5,cjs.Ease.get(-0.4)).to({scaleX:1,scaleY:1,y:169.9},2,cjs.Ease.get(0.4)).wait(123).to({alpha:0},10).wait(11));

	// visual
	this.instance_3 = new lib.visual();
	this.instance_3.setTransform(150.3,-65.1,0.503,0.503,0,0,0,88,121.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({y:104.9},5,cjs.Ease.get(-0.4)).to({scaleX:0.54,scaleY:0.46,y:109.9},2).to({scaleX:0.5,scaleY:0.5,y:104.9},2,cjs.Ease.get(0.4)).wait(26).to({scaleX:0.75,scaleY:0.75,x:150.2,y:114},10,cjs.Ease.get(-0.5)).to({regY:121,scaleX:1,scaleY:1,x:150,y:123},10,cjs.Ease.get(0.5)).wait(155).to({alpha:0},10).to({_off:true},1).wait(10));

	// welt
	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({y:372},10,cjs.Ease.get(-0.5)).to({y:444},10,cjs.Ease.get(0.5)).wait(155).to({y:372},10,cjs.Ease.get(-0.5)).to({y:300},10,cjs.Ease.get(0.5)).wait(1));

	// bgShape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7EDF1").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-277,1525,770);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;