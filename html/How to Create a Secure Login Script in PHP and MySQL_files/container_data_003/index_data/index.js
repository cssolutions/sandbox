(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_01.png", id:"_01"},
		{src:"images/_02.png", id:"_02"},
		{src:"images/_03.png", id:"_03"},
		{src:"images/IntelLogoi7.png", id:"IntelLogoi7"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,172);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,190);


(lib._03 = function() {
	this.initialize(img._03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,149);


(lib.IntelLogoi7 = function() {
	this.initialize(img.IntelLogoi7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


(lib.yoga900Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,5.7).lineTo(-1.9,5.4).lineTo(-2.7,4.8).lineTo(-3.4,4.1).curveTo(-3.8,3.6,-4.4,2.2).curveTo(-4.5,1.6,-4.6,0).curveTo(-4.6,-0.8,-4.4,-2.2).lineTo(-3.9,-3.2).lineTo(-3.4,-4.1).lineTo(-2.7,-4.8).curveTo(-2.3,-5.1,-1.9,-5.3).curveTo(-1.5,-5.6,-1,-5.7).lineTo(-0,-5.8).curveTo(0.6,-5.8,1,-5.7).lineTo(1.9,-5.3).lineTo(2.7,-4.8).lineTo(3.4,-4.1).lineTo(3.9,-3.2).lineTo(4.4,-2.2).curveTo(4.6,-0.8,4.6,-0).lineTo(4.6,0).curveTo(4.5,1.5,4.3,2.2).curveTo(3.8,3.5,3.4,4.1).lineTo(2.7,4.8).curveTo(2.3,5.1,1.9,5.3).curveTo(1.5,5.6,1,5.7).curveTo(0.5,5.8,-0,5.8).curveTo(-0.6,5.8,-1,5.7).closePath().moveTo(-0.9,-4.9).lineTo(-1.6,-4.6).curveTo(-2.2,-4.2,-2.8,-3.5).curveTo(-3.3,-2.8,-3.6,-1.9).curveTo(-3.8,-1,-3.8,-0).lineTo(-3.8,0).curveTo(-3.8,1,-3.5,1.9).curveTo(-3.2,2.8,-2.7,3.5).curveTo(-2.2,4.2,-1.6,4.6).lineTo(-0.8,5).lineTo(-0,5.1).lineTo(0.9,5).lineTo(1.6,4.6).curveTo(2.3,4.3,2.7,3.5).curveTo(3.2,2.8,3.5,1.9).curveTo(3.8,1,3.8,0).curveTo(3.8,-1,3.5,-1.9).curveTo(3.2,-2.8,2.7,-3.5).curveTo(2.3,-4.2,1.6,-4.6).lineTo(0.8,-4.9).lineTo(-0,-5).lineTo(-0.9,-4.9).closePath();
	this.shape.setTransform(-8.1,-21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,5.7).lineTo(-1.9,5.4).lineTo(-2.7,4.8).lineTo(-3.4,4.1).curveTo(-3.8,3.6,-4.4,2.2).curveTo(-4.5,1.6,-4.6,0).curveTo(-4.6,-0.8,-4.4,-2.2).lineTo(-4,-3.2).lineTo(-3.4,-4.1).lineTo(-2.7,-4.8).curveTo(-2.3,-5.1,-1.9,-5.3).curveTo(-1.5,-5.6,-1,-5.7).lineTo(-0,-5.8).curveTo(0.6,-5.8,1,-5.7).lineTo(1.9,-5.3).lineTo(2.8,-4.8).lineTo(3.4,-4.1).lineTo(3.9,-3.2).lineTo(4.4,-2.2).curveTo(4.6,-0.8,4.6,-0).lineTo(4.6,0).curveTo(4.5,1.5,4.3,2.2).curveTo(3.8,3.5,3.4,4.1).lineTo(2.7,4.8).curveTo(2.4,5.1,1.9,5.3).curveTo(1.5,5.6,1,5.7).curveTo(0.5,5.8,-0,5.8).curveTo(-0.5,5.8,-1,5.7).closePath().moveTo(-0.8,-4.9).lineTo(-1.6,-4.6).curveTo(-2.2,-4.2,-2.8,-3.5).curveTo(-3.2,-2.8,-3.5,-1.9).curveTo(-3.8,-1,-3.8,-0).lineTo(-3.8,0).curveTo(-3.8,1,-3.5,1.9).curveTo(-3.2,2.8,-2.7,3.5).curveTo(-2.2,4.2,-1.6,4.6).lineTo(-0.8,5).lineTo(-0,5.1).lineTo(0.9,5).lineTo(1.6,4.6).curveTo(2.3,4.3,2.8,3.5).curveTo(3.2,2.8,3.5,1.9).curveTo(3.8,1,3.8,0).curveTo(3.8,-1,3.5,-1.9).curveTo(3.2,-2.8,2.8,-3.5).curveTo(2.3,-4.2,1.6,-4.6).lineTo(0.8,-4.9).lineTo(-0,-5).lineTo(-0.8,-4.9).closePath();
	this.shape_1.setTransform(-19.5,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,5.6).lineTo(-2.2,5.2).lineTo(-3.1,4.6).lineTo(-3.9,3.9).lineTo(-3.3,3.3).curveTo(-2.8,3.8,-1.7,4.5).lineTo(-0.8,4.9).lineTo(0.1,5).curveTo(0.7,5,1.3,4.7).curveTo(1.8,4.5,2.2,4.1).curveTo(2.6,3.8,2.8,3.2).curveTo(3.1,2.7,3.1,2.1).curveTo(3.1,1.5,2.8,1).curveTo(2.6,0.5,2.2,0.2).curveTo(1.8,-0.2,1.2,-0.4).curveTo(0.7,-0.6,-0,-0.6).curveTo(-0.7,-0.6,-1.4,-0.4).lineTo(-2.5,0.1).lineTo(-3.2,-0.3).lineTo(-2.9,-5.7).lineTo(3.4,-5.7).lineTo(3.4,-4.9).lineTo(-2.1,-4.9).lineTo(-2.4,-0.7).lineTo(-1.3,-1.1).curveTo(-0.6,-1.3,0.1,-1.3).curveTo(0.9,-1.3,1.6,-1.1).curveTo(2.3,-0.8,2.8,-0.4).curveTo(3.4,0.1,3.6,0.7).curveTo(3.9,1.3,3.9,2.1).lineTo(3.9,2.1).curveTo(3.9,2.9,3.6,3.6).curveTo(3.4,4.2,2.8,4.7).curveTo(2.3,5.2,1.6,5.5).curveTo(0.9,5.7,0,5.7).curveTo(-0.5,5.7,-1.1,5.6).closePath();
	this.shape_2.setTransform(-30.1,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.4,8.4).curveTo(-11.8,4.9,-11.9,0).curveTo(-11.8,-5,-8.4,-8.4).curveTo(-8,-8.8,-7.4,-8.8).curveTo(-6.8,-8.8,-6.4,-8.4).curveTo(-5.9,-7.9,-5.9,-7.4).curveTo(-5.9,-6.7,-6.4,-6.4).curveTo(-9,-3.8,-9,0).curveTo(-9,3.7,-6.4,6.3).curveTo(-3.7,8.9,0,8.9).curveTo(3.7,8.9,6.3,6.3).curveTo(8.9,3.7,8.9,0).curveTo(9,-3.3,6.8,-5.8).curveTo(4.7,-8.3,1.5,-8.9).lineTo(1.5,0).curveTo(1.5,0.6,1,1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1).curveTo(-1.5,0.6,-1.4,0).lineTo(-1.4,-10.4).curveTo(-1.5,-11,-1,-11.4).curveTo(-0.6,-11.8,0,-11.9).curveTo(4.9,-11.8,8.4,-8.4).curveTo(11.9,-4.9,11.8,0).curveTo(11.9,4.9,8.4,8.4).curveTo(4.9,11.9,0,11.8).curveTo(-4.9,11.9,-8.4,8.4).closePath();
	this.shape_3.setTransform(-71.1,-15.6,1,1,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.4,8.4).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.4,-8.4).curveTo(-4.9,-11.8,-0,-11.8).curveTo(4.9,-11.8,8.4,-8.4).curveTo(11.8,-4.9,11.8,-0).curveTo(11.8,4.9,8.4,8.4).curveTo(4.9,11.8,-0,11.8).curveTo(-4.9,11.8,-8.4,8.4).closePath().moveTo(-6.3,-6.3).curveTo(-8.9,-3.7,-8.9,-0).curveTo(-8.9,3.7,-6.3,6.3).curveTo(-3.7,8.9,-0,8.9).curveTo(3.7,8.9,6.3,6.3).curveTo(8.9,3.7,8.9,-0).curveTo(8.9,-3.7,6.3,-6.3).curveTo(3.7,-8.9,-0,-8.9).curveTo(-3.7,-8.9,-6.3,-6.3).closePath();
	this.shape_4.setTransform(-98.4,-15.7,1,1,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(9.7,11.7).lineTo(-11,1.3).curveTo(-11.8,0.9,-11.8,0).curveTo(-11.8,-0.9,-11,-1.3).lineTo(9.7,-11.7).curveTo(10.3,-11.9,10.9,-11.7).curveTo(11.4,-11.6,11.7,-11).curveTo(11.8,-10.7,11.8,-10.4).curveTo(11.8,-9.5,11,-9.1).lineTo(-7.1,0).lineTo(11,9.1).curveTo(11.8,9.5,11.8,10.4).curveTo(11.8,10.7,11.7,11).curveTo(11.4,11.6,10.9,11.8).lineTo(10.4,11.8).curveTo(10.1,11.8,9.7,11.7).closePath();
	this.shape_5.setTransform(-46.1,-15.6,1,1,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.4,11.4).curveTo(-11.8,11,-11.8,10.4).curveTo(-11.8,9.8,-11.4,9.3).lineTo(-2.1,-0).lineTo(-11.4,-9.3).curveTo(-11.8,-9.8,-11.8,-10.4).curveTo(-11.8,-10.9,-11.4,-11.4).curveTo(-11,-11.8,-10.4,-11.8).curveTo(-9.8,-11.8,-9.4,-11.4).lineTo(0.6,-1.5).lineTo(10.4,-1.5).curveTo(11,-1.5,11.4,-1).curveTo(11.8,-0.6,11.8,-0).curveTo(11.8,0.6,11.4,1).curveTo(11,1.4,10.4,1.5).lineTo(0.6,1.5).lineTo(-9.4,11.4).curveTo(-9.8,11.8,-10.4,11.8).curveTo(-11,11.8,-11.4,11.4).closePath();
	this.shape_6.setTransform(-123,-15.7,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.8,-33.2,134.5,29.5);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.5).lineTo(-1.4,3.3).lineTo(4.4,3.3).lineTo(4.4,5.3).closePath();
	this.shape.setTransform(45.8,-396.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.3).lineTo(-2.3,5).lineTo(-3.2,4.5).lineTo(-4,3.8).lineTo(-4.7,3).lineTo(-5.2,2.1).lineTo(-5.5,1.1).lineTo(-5.6,0).lineTo(-5.6,0).lineTo(-5.5,-1.1).lineTo(-5.2,-2.1).lineTo(-4.7,-3).lineTo(-4,-3.8).lineTo(-3.2,-4.5).lineTo(-2.2,-5).lineTo(-1.2,-5.3).lineTo(0,-5.5).curveTo(0.6,-5.4,1.2,-5.3).lineTo(2.3,-5).lineTo(3.2,-4.5).lineTo(4,-3.8).lineTo(4.7,-3).lineTo(5.2,-2.1).lineTo(5.5,-1.1).lineTo(5.6,-0.1).lineTo(5.6,0).lineTo(5.5,1.1).lineTo(5.2,2.1).lineTo(4.7,3).lineTo(4,3.8).lineTo(3.2,4.5).lineTo(2.2,5).lineTo(1.2,5.3).curveTo(0.6,5.5,-0,5.4).curveTo(-0.6,5.5,-1.2,5.3).closePath().moveTo(-1.3,-3).curveTo(-1.9,-2.8,-2.3,-2.4).curveTo(-2.7,-1.9,-2.9,-1.3).curveTo(-3.2,-0.7,-3.2,-0.1).lineTo(-3.2,0).curveTo(-3.2,0.6,-2.9,1.2).curveTo(-2.7,1.8,-2.3,2.4).curveTo(-1.8,2.8,-1.3,3).curveTo(-0.7,3.3,0,3.3).curveTo(0.7,3.3,1.3,3).curveTo(1.9,2.8,2.3,2.4).curveTo(2.7,1.9,2.9,1.3).curveTo(3.2,0.7,3.2,0).lineTo(3.2,0).curveTo(3.2,-0.6,2.9,-1.3).curveTo(2.7,-1.9,2.3,-2.3).curveTo(1.8,-2.8,1.3,-3).curveTo(0.7,-3.3,-0,-3.3).curveTo(-0.7,-3.3,-1.3,-3).closePath();
	this.shape_1.setTransform(32.6,-396.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.2,5.3).lineTo(2.2,1).lineTo(-2.1,1).lineTo(-2.1,5.3).lineTo(-4.5,5.3).lineTo(-4.5,-5.3).lineTo(-2.1,-5.3).lineTo(-2.1,-1.1).lineTo(2.2,-1.1).lineTo(2.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,5.3).closePath();
	this.shape_2.setTransform(19.1,-396.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,6.9).lineTo(2.2,4.6).lineTo(-2.2,4.6).lineTo(-3.2,6.9).lineTo(-5.6,6.9).lineTo(-1.1,-3.7).lineTo(1.1,-3.7).lineTo(5.6,6.9).closePath().moveTo(1.4,2.5).lineTo(-0,-0.9).lineTo(-1.4,2.5).lineTo(1.4,2.5).closePath().moveTo(-0.9,-4.6).lineTo(0.9,-6.9).lineTo(2.8,-6).lineTo(0.8,-4.6).closePath();
	this.shape_3.setTransform(5.9,-398.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2,5.3).lineTo(-1.2,0.8).lineTo(-2.5,2).lineTo(-2.5,5.3).lineTo(-4.8,5.3).lineTo(-4.8,-5.3).lineTo(-2.5,-5.3).lineTo(-2.5,-0.7).lineTo(1.8,-5.3).lineTo(4.6,-5.3).lineTo(0.3,-0.8).lineTo(4.8,5.3).closePath();
	this.shape_4.setTransform(-6.4,-396.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,5.3).lineTo(-2.4,-1.4).lineTo(-2.4,5.3).lineTo(-4.7,5.3).lineTo(-4.7,-5.3).lineTo(-2.5,-5.3).lineTo(2.4,1.2).lineTo(2.4,-5.3).lineTo(4.7,-5.3).lineTo(4.7,5.3).closePath();
	this.shape_5.setTransform(-19.9,-396.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.9,5).lineTo(-2.7,4.7).lineTo(-3.4,4.2).lineTo(-3.9,3.5).lineTo(-4.3,2.7).lineTo(-4.5,1.8).lineTo(-4.6,0.7).lineTo(-4.6,-5.3).lineTo(-2.3,-5.3).lineTo(-2.3,0.6).curveTo(-2.3,1.2,-2.1,1.7).curveTo(-2,2.2,-1.7,2.6).curveTo(-1.4,2.9,-1,3).curveTo(-0.5,3.2,-0,3.2).curveTo(0.5,3.2,0.9,3.1).curveTo(1.4,2.9,1.7,2.6).lineTo(2.1,1.8).curveTo(2.3,1.3,2.3,0.7).lineTo(2.3,-5.3).lineTo(4.6,-5.3).lineTo(4.6,0.6).lineTo(4.5,1.7).curveTo(4.4,2.2,4.2,2.7).lineTo(3.9,3.5).lineTo(3.3,4.2).lineTo(2.7,4.7).lineTo(1.9,5).curveTo(0.7,5.3,-0,5.3).curveTo(-1.4,5.2,-1.9,5).closePath();
	this.shape_6.setTransform(-32.9,-396.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.9,5.3).lineTo(2.9,-1.6).lineTo(-0,2.9).lineTo(-0,2.9).lineTo(-3,-1.6).lineTo(-3,5.3).lineTo(-5.2,5.3).lineTo(-5.2,-5.3).lineTo(-2.7,-5.3).lineTo(-0,-0.8).lineTo(2.8,-5.3).lineTo(5.3,-5.3).lineTo(5.3,5.3).closePath();
	this.shape_7.setTransform(-46.6,-396.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-408,109.9,22);


(lib.text32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.3,4.6).lineTo(-3.3,-4.6).lineTo(-1.3,-4.6).lineTo(-1.3,2.8).lineTo(3.3,2.8).lineTo(3.3,4.6).closePath();
	this.shape.setTransform(-146.9,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_1.setTransform(-157.9,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.2,4.6).lineTo(-4.2,-4.6).lineTo(-0.6,-4.6).lineTo(0.4,-4.4).lineTo(1.3,-4.2).lineTo(2.2,-3.8).lineTo(2.8,-3.2).lineTo(3.4,-2.6).lineTo(3.8,-1.8).lineTo(4.1,-1).lineTo(4.2,-0.1).lineTo(4.2,0).lineTo(4.1,1).lineTo(3.8,1.8).lineTo(3.4,2.5).lineTo(2.8,3.2).lineTo(2.2,3.8).lineTo(1.3,4.2).lineTo(0.4,4.4).lineTo(-0.6,4.6).closePath().moveTo(-2.2,2.8).lineTo(-0.6,2.8).curveTo(-0.1,2.7,0.5,2.5).curveTo(0.9,2.3,1.4,2).curveTo(1.7,1.6,1.9,1.2).curveTo(2.1,0.6,2.1,0).curveTo(2.1,-0.6,1.9,-1.1).curveTo(1.7,-1.6,1.4,-2).curveTo(0.9,-2.3,0.5,-2.5).curveTo(-0.1,-2.7,-0.6,-2.8).lineTo(-2.2,-2.8).closePath();
	this.shape_2.setTransform(-169.4,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.2,4.6).lineTo(-4.2,-4.6).lineTo(-0.7,-4.6).lineTo(0.3,-4.4).lineTo(1.3,-4.2).lineTo(2.1,-3.8).lineTo(2.8,-3.2).lineTo(3.4,-2.6).lineTo(3.8,-1.8).lineTo(4.1,-1).lineTo(4.2,-0.1).lineTo(4.2,0).lineTo(4.1,1).lineTo(3.8,1.8).lineTo(3.4,2.5).lineTo(2.8,3.2).lineTo(2.1,3.8).lineTo(1.3,4.2).lineTo(0.3,4.4).lineTo(-0.7,4.6).closePath().moveTo(-2.2,2.8).lineTo(-0.7,2.8).curveTo(-0,2.7,0.4,2.5).curveTo(1,2.3,1.3,2).curveTo(1.7,1.6,1.9,1.2).curveTo(2.1,0.6,2.1,0).curveTo(2.1,-0.6,1.9,-1.1).curveTo(1.7,-1.6,1.3,-2).curveTo(1,-2.3,0.4,-2.5).curveTo(-0,-2.7,-0.7,-2.8).lineTo(-2.2,-2.8).closePath();
	this.shape_3.setTransform(-181,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,6).lineTo(1.9,4).lineTo(-1.9,4).lineTo(-2.8,6).lineTo(-4.8,6).lineTo(-0.9,-3.1).lineTo(0.9,-3.1).lineTo(4.8,6).closePath().moveTo(1.2,2.2).lineTo(-0,-0.7).lineTo(-1.2,2.2).lineTo(1.2,2.2).closePath().moveTo(-0.8,-3.9).lineTo(0.8,-6).lineTo(2.5,-5.2).lineTo(0.7,-3.9).closePath();
	this.shape_4.setTransform(-193,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.6,4.6).lineTo(-1.5,4.3).lineTo(-2.3,4).lineTo(-3,3.4).lineTo(-3.6,2.7).lineTo(-4,1.9).lineTo(-4.2,1).lineTo(-4.3,0).lineTo(-4.2,-1).lineTo(-4,-1.9).lineTo(-3.6,-2.6).lineTo(-3,-3.3).lineTo(-2.3,-3.9).lineTo(-1.5,-4.3).lineTo(-0.6,-4.6).lineTo(0.4,-4.7).lineTo(1.6,-4.6).lineTo(2.5,-4.4).lineTo(4,-3.4).lineTo(2.8,-2).curveTo(2.2,-2.4,1.7,-2.6).curveTo(1.1,-2.9,0.4,-2.9).curveTo(-0.2,-2.9,-0.7,-2.6).lineTo(-1.5,-2.1).curveTo(-1.8,-1.6,-2,-1.1).curveTo(-2.2,-0.6,-2.2,-0.1).lineTo(-2.2,0).curveTo(-2.2,0.6,-2,1.2).curveTo(-1.8,1.6,-1.5,2.1).curveTo(-1.1,2.4,-0.6,2.6).curveTo(-0.1,2.9,0.5,2.9).curveTo(1.1,2.9,1.5,2.8).curveTo(2,2.6,2.4,2.3).lineTo(2.4,1.1).lineTo(0.4,1.1).lineTo(0.4,-0.7).lineTo(4.3,-0.7).lineTo(4.3,3.2).curveTo(3.3,4,2.7,4.3).lineTo(1.6,4.6).lineTo(0.4,4.7).lineTo(-0.6,4.6).closePath();
	this.shape_5.setTransform(-204.7,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,4.6).lineTo(-2,4.3).lineTo(-2.8,3.9).lineTo(-3.5,3.3).lineTo(-4.1,2.6).lineTo(-4.5,1.9).curveTo(-4.7,1.4,-4.7,1).lineTo(-4.8,0).lineTo(-4.7,-1).lineTo(-4.5,-1.9).lineTo(-4,-2.6).lineTo(-3.5,-3.3).lineTo(-2.8,-3.9).lineTo(-1.9,-4.3).lineTo(-1,-4.6).lineTo(0,-4.7).lineTo(1,-4.6).lineTo(2,-4.3).lineTo(2.8,-3.9).lineTo(3.5,-3.3).lineTo(4,-2.6).lineTo(4.5,-1.9).lineTo(4.7,-1).lineTo(4.8,-0.1).lineTo(4.8,0).lineTo(4.7,1).lineTo(4.5,1.9).lineTo(4,2.6).lineTo(3.5,3.3).lineTo(2.8,3.9).lineTo(1.9,4.3).lineTo(1,4.6).lineTo(-0,4.7).lineTo(-1,4.6).closePath().moveTo(-1.1,-2.6).curveTo(-1.6,-2.4,-2,-2.1).curveTo(-2.3,-1.6,-2.5,-1.1).curveTo(-2.7,-0.6,-2.7,-0.1).lineTo(-2.7,0).curveTo(-2.7,0.6,-2.5,1.1).curveTo(-2.3,1.6,-2,2).curveTo(-1.6,2.4,-1.1,2.6).curveTo(-0.6,2.9,0,2.9).curveTo(0.6,2.9,1.1,2.6).curveTo(1.6,2.4,2,2.1).curveTo(2.3,1.6,2.5,1.2).curveTo(2.7,0.6,2.7,0).curveTo(2.7,-0.6,2.5,-1.1).curveTo(2.3,-1.6,2,-2).curveTo(1.6,-2.4,1.1,-2.6).curveTo(0.6,-2.9,-0,-2.9).curveTo(-0.6,-2.9,-1.1,-2.6).closePath();
	this.shape_6.setTransform(-216.8,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,4.6).lineTo(-1,1).lineTo(-4.5,-4.6).lineTo(-2.1,-4.6).lineTo(0,-0.9).lineTo(2.2,-4.6).lineTo(4.5,-4.6).lineTo(1,1).lineTo(1,4.6).closePath();
	this.shape_7.setTransform(-228.4,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,4.6).lineTo(-1,-2.7).lineTo(-3.8,-2.7).lineTo(-3.8,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-2.7).lineTo(1,-2.7).lineTo(1,4.6).closePath();
	this.shape_8.setTransform(-244.2,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,6).lineTo(1.9,4).lineTo(-1.9,4).lineTo(-2.8,6).lineTo(-4.8,6).lineTo(-0.9,-3.1).lineTo(0.9,-3.1).lineTo(4.8,6).closePath().moveTo(1.2,2.2).lineTo(-0,-0.7).lineTo(-1.2,2.2).lineTo(1.2,2.2).closePath().moveTo(-0.8,-3.9).lineTo(0.8,-6).lineTo(2.5,-5.2).lineTo(0.7,-3.9).closePath();
	this.shape_9.setTransform(-255,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.1,4.5).lineTo(-1.9,4.2).curveTo(-2.4,4,-3.1,3.2).lineTo(-1.8,1.8).curveTo(-1.5,2.3,-1,2.5).curveTo(-0.6,2.7,-0.2,2.7).lineTo(0.3,2.7).lineTo(0.7,2.4).lineTo(1,1.9).lineTo(1,1.2).lineTo(1,-4.6).lineTo(3.1,-4.6).lineTo(3.1,1.3).curveTo(3.1,2.1,2.8,2.7).curveTo(2.6,3.3,2.2,3.8).curveTo(1.8,4.2,1.2,4.4).curveTo(0.6,4.6,-0.1,4.6).curveTo(-0.7,4.6,-1.1,4.5).closePath();
	this.shape_10.setTransform(-265.6,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_11.setTransform(-275.6,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.7,4.6).lineTo(-1.7,4.3).curveTo(-2.2,4.2,-2.7,3.9).curveTo(-3.2,3.6,-3.6,3.2).lineTo(-2.4,1.8).curveTo(-1.7,2.3,-1.1,2.6).lineTo(-0.5,2.9).lineTo(0.3,2.9).curveTo(0.9,2.9,1.3,2.7).curveTo(1.7,2.5,1.7,2.1).curveTo(1.7,1.6,1.3,1.4).curveTo(0.9,1.1,-0.2,0.8).lineTo(-1.5,0.5).lineTo(-2.4,0).curveTo(-2.8,-0.4,-3,-0.8).curveTo(-3.2,-1.3,-3.2,-1.9).lineTo(-3.2,-2).curveTo(-3.2,-2.6,-3,-3.1).curveTo(-2.8,-3.6,-2.3,-4).curveTo(-1.9,-4.3,-1.3,-4.5).curveTo(-0.7,-4.7,-0,-4.7).lineTo(1,-4.6).lineTo(1.8,-4.4).lineTo(2.6,-4).lineTo(3.3,-3.5).lineTo(2.3,-2).curveTo(1.7,-2.5,1.1,-2.6).curveTo(0.5,-2.9,-0,-2.9).curveTo(-0.6,-2.9,-0.9,-2.7).curveTo(-1.3,-2.5,-1.3,-2.1).curveTo(-1.2,-1.7,-0.8,-1.4).lineTo(0.8,-0.9).lineTo(2,-0.5).lineTo(2.9,0.1).curveTo(3.2,0.4,3.5,0.8).curveTo(3.6,1.2,3.6,1.9).curveTo(3.6,2.6,3.4,3.1).curveTo(3.2,3.6,2.7,4).curveTo(2.2,4.3,1.7,4.5).curveTo(1,4.7,0.3,4.7).lineTo(-0.7,4.6).closePath();
	this.shape_12.setTransform(-286.4,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_13.setTransform(-302.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.6,3.1,258.5,19.6);


(lib.text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.2).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.2).lineTo(4.4,-5.2).lineTo(4.4,-3.5).lineTo(-1.4,3.2).lineTo(4.4,3.2).lineTo(4.4,5.2).closePath();
	this.shape.setTransform(57.4,107.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.2).lineTo(4,-5.2).lineTo(4,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.2,-1.1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_1.setTransform(45.8,107.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.1,5.2).lineTo(2.1,1.1).lineTo(-2.1,1.1).lineTo(-2.1,5.2).lineTo(-4.5,5.2).lineTo(-4.5,-5.2).lineTo(-2.1,-5.2).lineTo(-2.1,-1.1).lineTo(2.1,-1.1).lineTo(2.1,-5.2).lineTo(4.4,-5.2).lineTo(4.4,5.2).closePath();
	this.shape_2.setTransform(33.4,107.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.2,4.5).curveTo(-3.7,4.2,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2,2.7,-1.3,3).lineTo(-0.6,3.2).lineTo(0.4,3.3).curveTo(1.1,3.3,1.4,3.1).curveTo(1.9,2.8,1.9,2.3).curveTo(1.9,1.9,1.4,1.6).curveTo(1,1.3,-0.3,1).lineTo(-1.7,0.5).lineTo(-2.8,-0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.8,-1.4,-3.8,-2.2).lineTo(-3.8,-2.3).curveTo(-3.7,-2.9,-3.4,-3.5).curveTo(-3.2,-4.1,-2.7,-4.5).curveTo(-2.2,-5,-1.5,-5.1).curveTo(-0.9,-5.4,-0,-5.4).lineTo(1.1,-5.3).lineTo(2.1,-5).lineTo(3,-4.7).lineTo(3.9,-4.1).lineTo(2.7,-2.3).curveTo(1.9,-2.9,1.2,-3.1).curveTo(0.5,-3.4,-0.1,-3.3).curveTo(-0.7,-3.4,-1.1,-3.1).curveTo(-1.4,-2.8,-1.5,-2.4).lineTo(-1.5,-2.4).curveTo(-1.4,-1.9,-1,-1.6).curveTo(-0.6,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.8,-0.3,3.3,0.1).curveTo(3.7,0.4,3.9,1).curveTo(4.1,1.5,4.1,2.1).lineTo(4.1,2.1).curveTo(4.1,2.9,3.9,3.6).curveTo(3.6,4.1,3,4.6).curveTo(2.6,5,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_3.setTransform(21.3,107.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,6.8).lineTo(-4,-3.6).lineTo(4,-3.6).lineTo(4,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,0.5).lineTo(3.2,0.5).lineTo(3.2,2.6).lineTo(-1.7,2.6).lineTo(-1.7,4.8).lineTo(4,4.8).lineTo(4,6.8).closePath().moveTo(-1,-4.4).lineTo(0.9,-6.9).lineTo(2.9,-6).lineTo(0.8,-4.4).closePath();
	this.shape_4.setTransform(10.3,105.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.6,5.3).lineTo(-1.8,5).curveTo(-2.2,4.9,-2.7,4.6).lineTo(-3.5,3.9).curveTo(-3.9,3.5,-4.1,3.1).lineTo(-4.6,2.2).lineTo(-4.9,1.2).lineTo(-5,0.1).lineTo(-5,-0).lineTo(-4.9,-1.1).lineTo(-4.6,-2.1).lineTo(-4.1,-3.1).lineTo(-3.5,-3.9).lineTo(-2.7,-4.5).lineTo(-1.7,-5).lineTo(-0.6,-5.3).curveTo(-0.1,-5.4,0.5,-5.4).lineTo(1.8,-5.3).lineTo(2.8,-5).curveTo(3.5,-4.8,4.6,-4).lineTo(3.2,-2.3).curveTo(2.5,-2.8,1.9,-3).curveTo(1.3,-3.3,0.5,-3.3).curveTo(-0.2,-3.3,-0.8,-3.1).curveTo(-1.3,-2.8,-1.7,-2.4).curveTo(-2.1,-1.9,-2.3,-1.3).curveTo(-2.6,-0.7,-2.6,-0).lineTo(-2.6,-0).curveTo(-2.6,0.7,-2.3,1.3).curveTo(-2.1,1.9,-1.7,2.4).curveTo(-1.2,2.8,-0.7,3.1).curveTo(-0.1,3.3,0.6,3.3).curveTo(1.2,3.3,1.7,3.1).curveTo(2.4,3,2.7,2.7).lineTo(2.7,1.2).lineTo(0.5,1.2).lineTo(0.5,-0.8).lineTo(5,-0.8).lineTo(5,3.8).curveTo(3.8,4.6,3.1,4.9).curveTo(2.5,5.2,1.9,5.3).lineTo(0.5,5.5).curveTo(-0.1,5.5,-0.6,5.3).closePath();
	this.shape_5.setTransform(-2.4,107.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.2).lineTo(3.9,-5.2).lineTo(3.9,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.2,-1.1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_6.setTransform(-14.5,107.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,5.3).lineTo(-5.3,-5.3).lineTo(-2.7,-5.3).lineTo(0,2.1).lineTo(2.8,-5.3).lineTo(5.3,-5.3).lineTo(1,5.3).closePath();
	this.shape_7.setTransform(-26.9,107.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.2).lineTo(3.9,-5.2).lineTo(3.9,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.2,-1.1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_8.setTransform(-38.8,107.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.1,4.5).curveTo(-3.7,4.2,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.5,3.2).lineTo(0.4,3.3).curveTo(1,3.3,1.4,3.1).curveTo(1.8,2.8,1.8,2.3).curveTo(1.8,1.9,1.4,1.6).curveTo(1,1.3,-0.3,1).lineTo(-1.7,0.5).lineTo(-2.8,-0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.7,-1.4,-3.8,-2.2).lineTo(-3.8,-2.3).curveTo(-3.8,-2.9,-3.4,-3.5).curveTo(-3.2,-4.1,-2.7,-4.5).curveTo(-2.2,-5,-1.5,-5.1).curveTo(-0.8,-5.4,-0.1,-5.4).lineTo(1.1,-5.3).lineTo(2.1,-5).lineTo(3,-4.7).lineTo(3.9,-4.1).lineTo(2.6,-2.3).curveTo(1.9,-2.9,1.3,-3.1).curveTo(0.5,-3.4,-0.1,-3.3).curveTo(-0.8,-3.4,-1.1,-3.1).curveTo(-1.5,-2.8,-1.4,-2.4).lineTo(-1.4,-2.4).curveTo(-1.5,-1.9,-1,-1.6).curveTo(-0.6,-1.4,0.8,-1.1).lineTo(2.3,-0.5).curveTo(2.8,-0.3,3.3,0.1).curveTo(3.7,0.4,4,1).curveTo(4.1,1.5,4.1,2.1).lineTo(4.1,2.1).curveTo(4.1,2.9,3.9,3.6).curveTo(3.6,4.1,3.1,4.6).curveTo(2.5,5,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_9.setTransform(-50.5,107.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.6,5.3).lineTo(-1.6,5).lineTo(-2.5,4.5).lineTo(-3.3,3.9).curveTo(-3.7,3.5,-4,3).lineTo(-4.4,2.1).lineTo(-4.8,1.2).lineTo(-4.9,0.1).lineTo(-4.9,-0).lineTo(-4.8,-1.1).lineTo(-4.4,-2.1).lineTo(-4,-3.1).lineTo(-3.3,-3.9).lineTo(-2.5,-4.5).lineTo(-1.6,-5).lineTo(-0.5,-5.3).lineTo(0.6,-5.4).curveTo(1.3,-5.4,2,-5.3).lineTo(3.1,-5).curveTo(3.7,-4.7,4.8,-3.8).lineTo(3.3,-2.1).curveTo(2.6,-2.7,2.1,-3).curveTo(1.3,-3.3,0.6,-3.3).curveTo(-0,-3.3,-0.6,-3.1).curveTo(-1.1,-2.8,-1.6,-2.4).curveTo(-2,-1.9,-2.2,-1.3).curveTo(-2.5,-0.7,-2.4,-0).lineTo(-2.4,-0).curveTo(-2.5,0.7,-2.2,1.2).curveTo(-2,1.8,-1.6,2.3).curveTo(-1.2,2.8,-0.6,3).curveTo(-0.1,3.3,0.6,3.3).curveTo(1.2,3.3,2.2,3).curveTo(2.7,2.7,3.3,2.1).lineTo(4.9,3.6).lineTo(4,4.3).lineTo(3.1,4.9).curveTo(2.5,5.2,1.9,5.3).curveTo(1.3,5.5,0.5,5.5).curveTo(-0,5.5,-0.6,5.3).closePath();
	this.shape_10.setTransform(-62.1,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,96.1,245,22);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.5).lineTo(-1.4,3.3).lineTo(4.4,3.3).lineTo(4.4,5.3).closePath();
	this.shape.setTransform(51.4,142.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.3).lineTo(-4,-5.3).lineTo(3.9,-5.3).lineTo(3.9,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1).lineTo(3.2,-1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.3).closePath();
	this.shape_1.setTransform(39.8,142.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.2,5.3).lineTo(2.2,1).lineTo(-2.2,1).lineTo(-2.2,5.3).lineTo(-4.5,5.3).lineTo(-4.5,-5.3).lineTo(-2.2,-5.3).lineTo(-2.2,-1.1).lineTo(2.2,-1.1).lineTo(2.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,5.3).closePath();
	this.shape_2.setTransform(27.4,142.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.4).curveTo(-3.7,4.2,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.3).lineTo(0.3,3.4).curveTo(1,3.3,1.5,3.1).curveTo(1.8,2.9,1.9,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.8,-1.4,-3.7,-2.2).lineTo(-3.7,-2.2).curveTo(-3.7,-2.9,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-5,-1.6,-5.2).curveTo(-0.9,-5.4,-0,-5.4).lineTo(1,-5.3).lineTo(2,-5.1).lineTo(3,-4.6).lineTo(3.8,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.8,1.2,-3.1).curveTo(0.6,-3.4,-0.1,-3.4).curveTo(-0.8,-3.4,-1.1,-3.1).curveTo(-1.5,-2.9,-1.5,-2.5).lineTo(-1.5,-2.4).curveTo(-1.5,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1).lineTo(2.2,-0.6).curveTo(2.9,-0.3,3.3,0).curveTo(3.7,0.4,3.9,0.9).curveTo(4.1,1.4,4.2,2.1).lineTo(4.2,2.1).curveTo(4.1,2.9,3.8,3.6).curveTo(3.6,4.1,3,4.5).curveTo(2.6,4.9,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_3.setTransform(15.3,142.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,6.9).lineTo(-4,-3.7).lineTo(3.9,-3.7).lineTo(3.9,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,0.6).lineTo(3.2,0.6).lineTo(3.2,2.6).lineTo(-1.7,2.6).lineTo(-1.7,4.8).lineTo(4,4.8).lineTo(4,6.9).closePath().moveTo(-0.9,-4.5).lineTo(0.9,-6.8).lineTo(2.9,-5.9).lineTo(0.8,-4.5).closePath();
	this.shape_4.setTransform(4.3,140.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.5).lineTo(-1.4,3.3).lineTo(4.4,3.3).lineTo(4.4,5.3).closePath();
	this.shape_5.setTransform(-7.8,142.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.3).lineTo(-4,-5.3).lineTo(3.9,-5.3).lineTo(3.9,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1).lineTo(3.3,-1).lineTo(3.3,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.3).closePath();
	this.shape_6.setTransform(-19.4,142.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.9,5.3).lineTo(2.9,-1.6).lineTo(-0,2.9).lineTo(-0,2.9).lineTo(-3,-1.6).lineTo(-3,5.3).lineTo(-5.2,5.3).lineTo(-5.2,-5.3).lineTo(-2.7,-5.3).lineTo(-0,-0.8).lineTo(2.8,-5.3).lineTo(5.3,-5.3).lineTo(5.3,5.3).closePath();
	this.shape_7.setTransform(-32.6,142.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.8,5.3).lineTo(-3.8,-5.3).lineTo(-1.5,-5.3).lineTo(-1.5,3.2).lineTo(3.8,3.2).lineTo(3.8,5.3).closePath();
	this.shape_8.setTransform(-44.9,142.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.3).lineTo(-1.2,-5.3).lineTo(1.2,-5.3).lineTo(1.2,5.3).closePath();
	this.shape_9.setTransform(-53.9,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.3).lineTo(-4,-5.3).lineTo(4,-5.3).lineTo(4,-3.1).lineTo(-1.7,-3.1).lineTo(-1.7,-0.9).lineTo(3.3,-0.9).lineTo(3.3,1.2).lineTo(-1.7,1.2).lineTo(-1.7,5.3).closePath();
	this.shape_10.setTransform(-62.4,142.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,131.1,297.9,22);


(lib.text12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.8,4.6).lineTo(-1.8,4.3).curveTo(-2.2,4.2,-2.7,3.8).curveTo(-3.2,3.6,-3.6,3.2).lineTo(-2.4,1.8).curveTo(-1.8,2.3,-1.1,2.6).lineTo(-0.4,2.8).lineTo(0.3,2.9).curveTo(0.9,2.9,1.3,2.7).curveTo(1.6,2.4,1.6,2).curveTo(1.6,1.6,1.3,1.4).curveTo(0.9,1.1,-0.2,0.8).lineTo(-1.4,0.5).lineTo(-2.4,0).curveTo(-2.8,-0.4,-3,-0.8).curveTo(-3.2,-1.3,-3.2,-1.9).lineTo(-3.2,-1.9).curveTo(-3.2,-2.6,-3,-3).curveTo(-2.7,-3.6,-2.3,-3.9).curveTo(-1.9,-4.3,-1.3,-4.5).curveTo(-0.7,-4.7,-0.1,-4.7).lineTo(0.9,-4.6).lineTo(1.8,-4.4).lineTo(2.6,-4).lineTo(3.4,-3.5).lineTo(2.3,-2).curveTo(1.7,-2.5,1.1,-2.7).curveTo(0.5,-2.9,-0.1,-2.9).curveTo(-0.6,-2.9,-1,-2.7).curveTo(-1.2,-2.4,-1.2,-2.1).curveTo(-1.2,-1.6,-0.9,-1.4).lineTo(0.7,-0.9).lineTo(1.9,-0.5).lineTo(2.8,0).curveTo(3.3,0.4,3.4,0.8).curveTo(3.6,1.3,3.6,1.8).curveTo(3.6,2.6,3.4,3).curveTo(3.1,3.6,2.7,3.9).curveTo(2.2,4.3,1.6,4.5).curveTo(1,4.7,0.3,4.7).lineTo(-0.8,4.6).closePath();
	this.shape.setTransform(-26.8,-263.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(1.6,4.5).lineTo(-0.4,1.7).lineTo(-1.9,1.7).lineTo(-1.9,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.6).lineTo(0.2,-4.6).curveTo(0.8,-4.5,1.8,-4.3).curveTo(2.4,-4.1,2.9,-3.7).curveTo(3.3,-3.3,3.5,-2.7).curveTo(3.7,-2.2,3.7,-1.6).lineTo(3.7,-1.5).lineTo(3.5,-0.5).lineTo(3.1,0.3).lineTo(2.5,0.9).lineTo(1.7,1.3).lineTo(3.9,4.5).closePath().moveTo(-1.9,-0.1).lineTo(0.1,-0.1).lineTo(0.7,-0.2).lineTo(1.2,-0.5).lineTo(1.5,-0.9).lineTo(1.6,-1.4).lineTo(1.6,-1.5).lineTo(1.5,-2).lineTo(1.2,-2.4).curveTo(1,-2.6,0.7,-2.7).lineTo(0.1,-2.8).lineTo(-1.9,-2.8).closePath();
	this.shape_1.setTransform(-36.7,-263.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,6).lineTo(1.9,3.9).lineTo(-1.9,3.9).lineTo(-2.8,6).lineTo(-4.8,6).lineTo(-0.9,-3.2).lineTo(0.9,-3.2).lineTo(4.8,6).closePath().moveTo(1.2,2.2).lineTo(-0,-0.8).lineTo(-1.2,2.2).lineTo(1.2,2.2).closePath().moveTo(-0.8,-3.9).lineTo(0.8,-6).lineTo(2.5,-5.3).lineTo(0.7,-3.9).closePath();
	this.shape_2.setTransform(-48.4,-264.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.7).lineTo(-3.8,-2.7).lineTo(-3.8,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-2.7).lineTo(1,-2.7).lineTo(1,4.5).closePath();
	this.shape_3.setTransform(-59.2,-263.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,-273.1,180.3,19.6);


(lib.text11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,6).lineTo(-2,5.7).lineTo(-2.8,5.3).lineTo(-3.5,4.7).lineTo(-4.1,4).lineTo(-4.5,3.2).curveTo(-4.7,2.8,-4.7,2.3).lineTo(-4.8,1.4).lineTo(-4.7,0.4).lineTo(-4.5,-0.5).lineTo(-4,-1.2).lineTo(-3.5,-1.9).lineTo(-2.8,-2.5).lineTo(-1.9,-3).lineTo(-1,-3.2).lineTo(0,-3.3).lineTo(1,-3.2).lineTo(2,-3).lineTo(2.8,-2.5).lineTo(3.5,-2).lineTo(4,-1.3).lineTo(4.5,-0.5).lineTo(4.7,0.4).lineTo(4.8,1.3).lineTo(4.8,1.4).lineTo(4.7,2.3).lineTo(4.5,3.2).lineTo(4,4).lineTo(3.5,4.7).lineTo(2.8,5.3).lineTo(1.9,5.7).lineTo(1,6).lineTo(-0,6.1).lineTo(-1,6).closePath().moveTo(-1.1,-1.3).curveTo(-1.6,-1,-2,-0.7).curveTo(-2.3,-0.3,-2.5,0.3).curveTo(-2.7,0.8,-2.7,1.3).lineTo(-2.7,1.4).curveTo(-2.7,2,-2.5,2.5).curveTo(-2.3,3,-2,3.4).curveTo(-1.6,3.8,-1.1,4).curveTo(-0.6,4.2,0,4.2).curveTo(0.6,4.2,1.1,4).curveTo(1.6,3.8,2,3.4).curveTo(2.3,3,2.5,2.5).curveTo(2.7,2,2.7,1.4).curveTo(2.7,0.8,2.5,0.3).curveTo(2.3,-0.2,2,-0.6).curveTo(1.6,-1,1.1,-1.3).curveTo(0.6,-1.5,-0,-1.5).curveTo(-0.6,-1.5,-1.1,-1.3).closePath().moveTo(-0.8,-4).lineTo(0.8,-6.1).lineTo(2.5,-5.3).lineTo(0.7,-4).closePath();
	this.shape.setTransform(65.6,-267.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6A00").beginStroke().moveTo(-4.2,4.5).lineTo(-4.2,-4.6).lineTo(-0.7,-4.6).lineTo(0.3,-4.5).lineTo(1.3,-4.2).lineTo(2.1,-3.8).lineTo(2.9,-3.2).lineTo(3.4,-2.6).lineTo(3.8,-1.8).lineTo(4.1,-1).lineTo(4.2,-0.1).lineTo(4.2,0).lineTo(4.1,0.9).lineTo(3.8,1.8).lineTo(3.4,2.5).lineTo(2.9,3.3).lineTo(2.1,3.8).lineTo(1.3,4.2).lineTo(0.3,4.4).lineTo(-0.7,4.5).closePath().moveTo(-2.2,2.7).lineTo(-0.7,2.7).curveTo(-0.1,2.7,0.4,2.5).curveTo(1,2.3,1.3,2).curveTo(1.7,1.6,1.9,1.2).curveTo(2.1,0.6,2.1,0).curveTo(2.1,-0.6,1.9,-1.1).curveTo(1.7,-1.6,1.3,-2).curveTo(1,-2.3,0.4,-2.6).curveTo(-0.1,-2.8,-0.7,-2.8).lineTo(-2.2,-2.8).closePath();
	this.shape_1.setTransform(53.8,-265.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,4.6).lineTo(-2,4.3).lineTo(-2.8,3.9).lineTo(-3.5,3.3).lineTo(-4.1,2.6).lineTo(-4.5,1.8).curveTo(-4.7,1.5,-4.7,0.9).lineTo(-4.8,0).lineTo(-4.7,-1).lineTo(-4.5,-1.9).lineTo(-4,-2.6).lineTo(-3.5,-3.3).lineTo(-2.8,-3.9).lineTo(-1.9,-4.4).lineTo(-1,-4.6).lineTo(0,-4.7).lineTo(1,-4.6).lineTo(2,-4.4).lineTo(2.8,-3.9).lineTo(3.5,-3.3).lineTo(4,-2.7).lineTo(4.5,-1.9).lineTo(4.7,-1).lineTo(4.8,-0.1).lineTo(4.8,0).lineTo(4.7,0.9).lineTo(4.5,1.8).lineTo(4,2.6).lineTo(3.5,3.3).lineTo(2.8,3.9).lineTo(1.9,4.3).lineTo(1,4.6).lineTo(-0,4.7).lineTo(-1,4.6).closePath().moveTo(-1.1,-2.7).curveTo(-1.6,-2.4,-2,-2.1).curveTo(-2.3,-1.7,-2.5,-1.1).curveTo(-2.7,-0.6,-2.7,-0.1).lineTo(-2.7,0).curveTo(-2.7,0.6,-2.5,1.1).curveTo(-2.3,1.6,-2,2).curveTo(-1.6,2.4,-1.1,2.6).curveTo(-0.6,2.8,0,2.8).curveTo(0.6,2.8,1.1,2.6).curveTo(1.6,2.4,2,2.1).curveTo(2.3,1.6,2.5,1.2).curveTo(2.7,0.6,2.7,0).curveTo(2.7,-0.6,2.5,-1.1).curveTo(2.3,-1.6,2,-2).curveTo(1.6,-2.4,1.1,-2.7).curveTo(0.6,-2.9,-0,-2.9).curveTo(-0.6,-2.9,-1.1,-2.7).closePath();
	this.shape_2.setTransform(41.4,-265.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF6A00").beginStroke().moveTo(1.7,4.5).lineTo(-1.1,0.7).lineTo(-2.1,1.7).lineTo(-2.1,4.5).lineTo(-4.2,4.5).lineTo(-4.2,-4.6).lineTo(-2.1,-4.6).lineTo(-2.1,-0.5).lineTo(1.5,-4.6).lineTo(3.9,-4.6).lineTo(0.2,-0.7).lineTo(4.2,4.5).closePath();
	this.shape_3.setTransform(30.2,-265.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.8,4.5).lineTo(-3.8,3.1).lineTo(1.2,-2.8).lineTo(-3.6,-2.8).lineTo(-3.6,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-3).lineTo(-1.2,2.8).lineTo(3.8,2.8).lineTo(3.8,4.5).closePath();
	this.shape_4.setTransform(18.9,-265.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_5.setTransform(7.6,-265.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.5,4.5).lineTo(2.5,-1.4).lineTo(0,2.5).lineTo(-0.1,2.5).lineTo(-2.6,-1.3).lineTo(-2.6,4.5).lineTo(-4.6,4.5).lineTo(-4.6,-4.6).lineTo(-2.4,-4.6).lineTo(0,-0.7).lineTo(2.4,-4.6).lineTo(4.5,-4.6).lineTo(4.5,4.5).closePath();
	this.shape_6.setTransform(-4.6,-265.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.3,4.5).lineTo(-3.3,-4.6).lineTo(-1.3,-4.6).lineTo(-1.3,2.7).lineTo(3.3,2.7).lineTo(3.3,4.5).closePath();
	this.shape_7.setTransform(-15.4,-265.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_8.setTransform(-26.4,-265.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF6A00").beginStroke().moveTo(1.7,4.5).lineTo(-1.1,0.7).lineTo(-2.1,1.7).lineTo(-2.1,4.5).lineTo(-4.1,4.5).lineTo(-4.1,-4.6).lineTo(-2.1,-4.6).lineTo(-2.1,-0.5).lineTo(1.5,-4.6).lineTo(4,-4.6).lineTo(0.2,-0.7).lineTo(4.2,4.5).closePath();
	this.shape_9.setTransform(-37.2,-265.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.3,4.5).lineTo(-3.3,-4.6).lineTo(-1.3,-4.6).lineTo(-1.3,2.7).lineTo(3.3,2.7).lineTo(3.3,4.5).closePath();
	this.shape_10.setTransform(-47.6,-265.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_11.setTransform(-58.6,-265.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-275.6,140.6,19.6);


(lib.textintel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.6).lineTo(-0.8,-3.7).lineTo(0.7,-3.7).lineTo(0.7,3.6).closePath();
	this.shape.setTransform(128.1,-334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,2.6).lineTo(-1.9,2.3).lineTo(-2.3,1.8).curveTo(-2.5,1.5,-2.5,1.1).curveTo(-2.5,0.7,-2.3,0.4).curveTo(-2.2,0,-1.9,-0.2).lineTo(-1.2,-0.5).lineTo(-0.3,-0.6).curveTo(0.2,-0.6,1,-0.4).lineTo(1,-0.5).lineTo(0.9,-0.9).lineTo(0.7,-1.2).lineTo(0.4,-1.4).lineTo(-0.1,-1.4).lineTo(-0.9,-1.4).lineTo(-1.6,-1.2).lineTo(-2,-2.3).lineTo(-1.1,-2.6).lineTo(0.1,-2.8).curveTo(0.7,-2.8,1.1,-2.6).curveTo(1.6,-2.5,1.9,-2.2).curveTo(2.2,-1.9,2.3,-1.4).curveTo(2.5,-1,2.5,-0.5).lineTo(2.5,2.6).lineTo(1,2.6).lineTo(1,2.1).curveTo(0.7,2.4,0.3,2.5).curveTo(-0.1,2.7,-0.6,2.8).lineTo(-1.3,2.6).closePath().moveTo(-0.7,0.5).curveTo(-1,0.6,-1,1.1).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.5,1.7,-0.2,1.7).lineTo(0.3,1.6).lineTo(0.7,1.4).lineTo(0.9,1.2).lineTo(1,0.7).lineTo(1,0.5).curveTo(0.6,0.3,0.1,0.3).curveTo(-0.4,0.3,-0.7,0.5).closePath();
	this.shape_1.setTransform(122,-333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.1,-2.1).lineTo(0.6,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.6,-1.1).lineTo(0.8,-1).curveTo(0.6,-0.9,0.4,-0.7).curveTo(0.1,-0.4,0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_2.setTransform(115.8,-333.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.8,-1).curveTo(0.5,-0.9,0.4,-0.7).curveTo(0.1,-0.4,0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_3.setTransform(110.2,-333.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.4,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.4,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.2,2.6).curveTo(0.4,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.5,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).lineTo(1.1,1).curveTo(1.2,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_4.setTransform(103.1,-333);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.7).lineTo(-2.3,1.6).lineTo(0.4,-1.5).lineTo(-2.2,-1.5).lineTo(-2.2,-2.7).lineTo(2.3,-2.7).lineTo(2.3,-1.6).lineTo(-0.4,1.4).lineTo(2.3,1.4).lineTo(2.3,2.7).closePath();
	this.shape_5.setTransform(95.5,-333);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.6).lineTo(-2.2,2).lineTo(-1.5,1).lineTo(-0.6,1.4).curveTo(-0.2,1.6,0.2,1.6).curveTo(0.5,1.6,0.7,1.5).curveTo(0.7,1.4,0.7,1.4).curveTo(0.8,1.4,0.8,1.4).curveTo(0.8,1.3,0.8,1.3).curveTo(0.8,1.3,0.8,1.2).lineTo(0.8,1.2).curveTo(0.8,1.1,0.8,1.1).curveTo(0.8,1,0.7,1).curveTo(0.7,0.9,0.6,0.9).curveTo(0.6,0.9,0.5,0.8).lineTo(-0.3,0.6).curveTo(-1.1,0.3,-1.4,0.1).lineTo(-1.8,-0.4).lineTo(-1.9,-1).lineTo(-1.9,-1.1).curveTo(-1.9,-1.5,-1.7,-1.8).curveTo(-1.6,-2.1,-1.3,-2.3).lineTo(-0.7,-2.7).lineTo(0.1,-2.8).lineTo(1.1,-2.6).lineTo(2.1,-2.1).lineTo(1.5,-1.1).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.4,-1.5).curveTo(-0.4,-1.5,-0.4,-1.4).curveTo(-0.5,-1.4,-0.5,-1.4).curveTo(-0.5,-1.3,-0.5,-1.3).curveTo(-0.5,-1.3,-0.5,-1.2).curveTo(-0.5,-1,-0.2,-0.8).lineTo(0.6,-0.6).lineTo(1.1,-0.3).lineTo(1.7,-0).lineTo(2,0.4).curveTo(2.2,0.7,2.2,1).curveTo(2.2,1.5,2,1.8).lineTo(1.6,2.4).curveTo(1.3,2.6,0.9,2.7).lineTo(0.1,2.8).curveTo(-0.5,2.8,-1,2.6).closePath();
	this.shape_6.setTransform(88.6,-333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.6).lineTo(-2.2,2).lineTo(-1.5,1).lineTo(-0.6,1.4).curveTo(-0.2,1.6,0.2,1.6).curveTo(0.5,1.6,0.7,1.5).curveTo(0.7,1.4,0.7,1.4).curveTo(0.8,1.4,0.8,1.4).curveTo(0.8,1.3,0.8,1.3).curveTo(0.8,1.3,0.8,1.2).lineTo(0.8,1.2).curveTo(0.8,1.1,0.8,1.1).curveTo(0.8,1,0.7,1).curveTo(0.7,0.9,0.6,0.9).curveTo(0.6,0.9,0.5,0.8).lineTo(-0.3,0.6).curveTo(-1.1,0.3,-1.4,0.1).lineTo(-1.8,-0.4).lineTo(-1.9,-1).lineTo(-1.9,-1.1).curveTo(-1.9,-1.5,-1.7,-1.8).curveTo(-1.6,-2.1,-1.3,-2.3).lineTo(-0.7,-2.7).lineTo(0.1,-2.8).lineTo(1.1,-2.6).lineTo(2.1,-2.1).lineTo(1.5,-1.1).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.4,-1.5).curveTo(-0.4,-1.5,-0.4,-1.4).curveTo(-0.5,-1.4,-0.5,-1.4).curveTo(-0.5,-1.3,-0.5,-1.3).curveTo(-0.5,-1.3,-0.5,-1.2).curveTo(-0.5,-1,-0.2,-0.8).lineTo(0.6,-0.6).lineTo(1.1,-0.3).lineTo(1.7,-0).lineTo(2,0.4).curveTo(2.2,0.7,2.2,1).curveTo(2.2,1.5,2,1.8).lineTo(1.6,2.4).curveTo(1.3,2.6,0.9,2.7).lineTo(0.1,2.8).curveTo(-0.5,2.8,-1,2.6).closePath();
	this.shape_7.setTransform(82.1,-333);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.4,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.7,0).curveTo(-2.6,-0.6,-2.5,-1.1).curveTo(-2.3,-1.6,-1.9,-2).curveTo(-1.5,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.7,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.5,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.4,1.8).lineTo(1.9,2.2).lineTo(1.5,2.5).lineTo(0.9,2.7).lineTo(0.1,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.1,-0.4).lineTo(1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.8,-1.3).lineTo(-1,-0.9).lineTo(-1.1,-0.4).lineTo(1.1,-0.4).lineTo(1.1,-0.4).closePath();
	this.shape_8.setTransform(75.1,-333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,2.7).lineTo(-0.8,2.6).curveTo(-1.3,2.4,-1.7,2).curveTo(-2,1.6,-2.2,1.1).lineTo(-2.5,0).curveTo(-2.5,-0.4,-2.2,-1.1).curveTo(-2,-1.6,-1.7,-2).curveTo(-1.3,-2.4,-0.8,-2.6).lineTo(-0.2,-2.7).lineTo(0.4,-2.8).lineTo(1,-2.7).lineTo(1.6,-2.5).curveTo(2,-2.4,2.4,-1.9).lineTo(1.5,-0.9).lineTo(1,-1.3).curveTo(0.7,-1.5,0.3,-1.5).lineTo(-0.2,-1.4).lineTo(-0.6,-1).lineTo(-0.9,-0.6).lineTo(-1,-0).lineTo(-1,0).lineTo(-0.9,0.6).lineTo(-0.6,1.1).lineTo(-0.2,1.4).lineTo(0.4,1.5).curveTo(0.7,1.5,1,1.3).lineTo(1.6,0.9).lineTo(2.5,1.8).lineTo(1.6,2.5).lineTo(1,2.7).lineTo(0.3,2.8).closePath();
	this.shape_9.setTransform(67.8,-333);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.5,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.5,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.2,2.6).curveTo(0.5,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.6,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).lineTo(1.1,1).curveTo(1.3,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_10.setTransform(60.1,-333);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.1,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.6,-1.1).lineTo(0.9,-1).curveTo(0.6,-0.9,0.3,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_11.setTransform(53.4,-333.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,3.5).lineTo(-2.8,-3.4).lineTo(-1.3,-3.4).lineTo(-1.3,-2.7).curveTo(-1,-3.1,-0.6,-3.3).lineTo(-0.2,-3.5).lineTo(0.4,-3.5).curveTo(0.8,-3.5,1.3,-3.4).curveTo(1.7,-3.2,2.1,-2.8).curveTo(2.4,-2.5,2.6,-2).lineTo(2.8,-0.8).lineTo(2.8,-0.7).lineTo(2.8,-0.1).lineTo(2.6,0.4).curveTo(2.4,0.9,2.1,1.3).curveTo(1.8,1.7,1.3,1.8).curveTo(0.8,2,0.4,2).lineTo(-0.2,2).lineTo(-0.6,1.8).lineTo(-1.3,1.2).lineTo(-1.3,3.5).closePath().moveTo(-0.5,-2.1).lineTo(-1,-1.8).lineTo(-1.2,-1.4).lineTo(-1.3,-0.8).lineTo(-1.3,-0.7).lineTo(-1.2,-0.1).lineTo(-1,0.3).lineTo(-0.5,0.6).lineTo(-0,0.7).lineTo(0.5,0.6).lineTo(0.9,0.3).lineTo(1.2,-0.1).lineTo(1.3,-0.7).lineTo(1.3,-0.8).lineTo(1.2,-1.4).lineTo(0.9,-1.8).lineTo(0.5,-2.1).lineTo(-0,-2.2).lineTo(-0.5,-2.1).closePath();
	this.shape_12.setTransform(46.4,-332.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,3.5).lineTo(0.7,-2.1).lineTo(-2.5,-2.1).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,-2.4).lineTo(-0.6,3.5).closePath();
	this.shape_13.setTransform(33.9,-333.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.6).lineTo(-0.8,-1.7).lineTo(0.7,-1.7).lineTo(0.7,3.6).closePath().moveTo(-0.8,-2.3).lineTo(-0.8,-3.7).lineTo(0.8,-3.7).lineTo(0.8,-2.3).closePath();
	this.shape_14.setTransform(27.7,-334);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,1.5).lineTo(2.5,-0.6).lineTo(1.6,0.8).lineTo(1.6,0.8).lineTo(0.7,-0.6).lineTo(0.7,1.5).lineTo(0,1.5).lineTo(0,-1.5).lineTo(0.8,-1.5).lineTo(1.6,-0.3).lineTo(2.4,-1.5).lineTo(3.2,-1.5).lineTo(3.2,1.5).closePath().moveTo(-2.2,1.5).lineTo(-2.2,-0.9).lineTo(-3.1,-0.9).lineTo(-3.1,-1.5).lineTo(-0.6,-1.5).lineTo(-0.6,-0.9).lineTo(-1.5,-0.9).lineTo(-1.5,1.5).closePath();
	this.shape_15.setTransform(126.1,-351.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.5,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.6,0).curveTo(-2.6,-0.6,-2.4,-1.1).curveTo(-2.2,-1.6,-1.9,-2).curveTo(-1.6,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.6,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.4,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.3,1.8).lineTo(2,2.2).lineTo(1.4,2.5).lineTo(0.9,2.7).lineTo(0.2,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.2,-0.4).lineTo(1.1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.7,-1.3).lineTo(-1,-0.9).lineTo(-1.2,-0.4).lineTo(1.2,-0.4).lineTo(1.2,-0.4).closePath();
	this.shape_16.setTransform(113.6,-349);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.9,-1).curveTo(0.5,-0.9,0.3,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_17.setTransform(107.2,-349.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.5,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.5,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.2,2.6).curveTo(0.5,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.6,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).curveTo(0.9,1.3,1.1,1).curveTo(1.3,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_18.setTransform(100.1,-349);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,3.5).lineTo(-1.1,3.3).lineTo(-1.7,3).lineTo(-2.2,2.5).lineTo(-2.7,2.1).lineTo(-3,1.5).lineTo(-3.2,0.7).lineTo(-3.2,0).lineTo(-3.2,-0.8).lineTo(-3,-1.4).lineTo(-2.7,-2).lineTo(-2.2,-2.6).lineTo(-1.7,-3).lineTo(-1.1,-3.3).lineTo(-0.4,-3.6).lineTo(0.4,-3.6).lineTo(1.3,-3.6).lineTo(2,-3.3).curveTo(2.5,-3.2,3.2,-2.6).lineTo(2.2,-1.4).curveTo(1.8,-1.8,1.4,-2).curveTo(0.9,-2.2,0.4,-2.2).lineTo(-0.4,-2.1).lineTo(-1.1,-1.5).lineTo(-1.5,-0.9).curveTo(-1.6,-0.5,-1.6,0).curveTo(-1.6,0.4,-1.5,0.8).lineTo(-1.1,1.5).lineTo(-0.4,2.1).lineTo(0.4,2.2).lineTo(1.4,2).lineTo(2.2,1.4).lineTo(3.2,2.4).lineTo(2.7,2.9).lineTo(2,3.3).lineTo(1.3,3.5).lineTo(0.3,3.6).lineTo(-0.4,3.5).closePath();
	this.shape_19.setTransform(91.7,-349.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,1.6).curveTo(-1,1.5,-1.2,1.2).curveTo(-1.5,1,-1.6,0.7).lineTo(-1.8,-0).lineTo(-1.6,-0.7).curveTo(-1.5,-1,-1.2,-1.3).curveTo(-1,-1.5,-0.7,-1.6).lineTo(0,-1.7).curveTo(0.4,-1.8,0.7,-1.6).curveTo(1,-1.5,1.2,-1.3).lineTo(1.6,-0.7).lineTo(1.8,-0).curveTo(1.7,0.3,1.6,0.6).lineTo(1.2,1.2).curveTo(1,1.5,0.7,1.6).curveTo(0.4,1.8,0,1.8).lineTo(-0.7,1.6).closePath().moveTo(-0.6,-1.5).lineTo(-1.1,-1.1).lineTo(-1.5,-0.6).lineTo(-1.6,-0).lineTo(-1.5,0.6).lineTo(-1.1,1.1).lineTo(-0.6,1.4).lineTo(0,1.5).lineTo(0.6,1.4).lineTo(1.1,1.1).lineTo(1.4,0.6).lineTo(1.6,-0).lineTo(1.4,-0.6).lineTo(1.1,-1.1).lineTo(0.6,-1.5).lineTo(0,-1.6).lineTo(-0.6,-1.5).closePath().moveTo(0.3,0.9).lineTo(-0.1,0.3).lineTo(-0.2,0.3).lineTo(-0.2,0.9).lineTo(-0.8,0.9).lineTo(-0.8,-0.9).lineTo(0.1,-0.9).curveTo(0.5,-0.9,0.7,-0.8).curveTo(0.9,-0.7,0.9,-0.4).lineTo(0.8,0.1).lineTo(0.5,0.2).lineTo(0.9,0.9).closePath().moveTo(-0.2,-0).lineTo(0.1,-0).curveTo(0.2,-0,0.2,-0.1).curveTo(0.3,-0.1,0.3,-0.1).curveTo(0.3,-0.1,0.3,-0.2).curveTo(0.3,-0.2,0.3,-0.3).curveTo(0.3,-0.3,0.3,-0.4).curveTo(0.3,-0.4,0.3,-0.4).curveTo(0.3,-0.5,0.2,-0.5).curveTo(0.2,-0.5,0.1,-0.5).lineTo(-0.2,-0.5).closePath();
	this.shape_20.setTransform(80.2,-351.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.7).lineTo(-0.8,-3.6).lineTo(0.7,-3.6).lineTo(0.7,3.7).closePath();
	this.shape_21.setTransform(75.3,-350);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.4,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.7,0).curveTo(-2.7,-0.6,-2.5,-1.1).curveTo(-2.3,-1.6,-1.9,-2).curveTo(-1.5,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.7,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.5,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.4,1.8).lineTo(1.9,2.2).lineTo(1.5,2.5).lineTo(0.9,2.7).lineTo(0.1,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.1,-0.4).lineTo(1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.8,-1.3).lineTo(-1,-0.9).lineTo(-1.1,-0.4).lineTo(1.1,-0.4).lineTo(1.1,-0.4).closePath();
	this.shape_22.setTransform(69.3,-349);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,3.3).curveTo(-0.5,3.3,-0.6,3.1).lineTo(-1,2.6).lineTo(-1.1,1.8).lineTo(-1.1,-0.7).lineTo(-1.7,-0.7).lineTo(-1.7,-2).lineTo(-1.1,-2).lineTo(-1.1,-3.4).lineTo(0.5,-3.4).lineTo(0.5,-2).lineTo(1.7,-2).lineTo(1.7,-0.7).lineTo(0.5,-0.7).lineTo(0.5,1.6).lineTo(0.5,1.9).curveTo(0.6,2,0.6,2).curveTo(0.7,2,0.7,2).curveTo(0.8,2.1,0.8,2.1).curveTo(0.9,2.1,1,2.1).curveTo(1.4,2.1,1.7,1.9).lineTo(1.7,3.1).lineTo(1.2,3.3).lineTo(0.5,3.4).lineTo(-0.2,3.3).closePath();
	this.shape_23.setTransform(62.6,-349.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,2.7).lineTo(0.9,-0.3).lineTo(0.9,-0.7).lineTo(0.7,-1.1).lineTo(0.4,-1.3).lineTo(-0,-1.4).lineTo(-0.4,-1.3).lineTo(-0.7,-1.1).lineTo(-0.9,-0.7).lineTo(-0.9,-0.3).lineTo(-0.9,2.7).lineTo(-2.5,2.7).lineTo(-2.5,-2.6).lineTo(-0.9,-2.6).lineTo(-0.9,-1.9).curveTo(-0.6,-2.3,-0.3,-2.5).lineTo(0.1,-2.7).lineTo(0.6,-2.7).curveTo(1.1,-2.7,1.4,-2.6).curveTo(1.7,-2.5,2,-2.2).curveTo(2.2,-1.9,2.3,-1.6).curveTo(2.4,-1.2,2.4,-0.7).lineTo(2.4,2.7).closePath();
	this.shape_24.setTransform(56,-349.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.5).lineTo(-0.8,-3.5).lineTo(0.8,-3.5).lineTo(0.8,3.5).closePath();
	this.shape_25.setTransform(49.7,-349.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.9,-1).curveTo(0.5,-0.9,0.4,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_26.setTransform(40.2,-349.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,3.8).lineTo(-1.9,3.5).lineTo(-2.3,2.9).curveTo(-2.5,2.7,-2.5,2.2).curveTo(-2.5,1.8,-2.3,1.5).curveTo(-2.2,1.1,-1.9,0.9).lineTo(-1.2,0.7).lineTo(-0.3,0.6).curveTo(0.2,0.6,1,0.8).lineTo(1,0.7).lineTo(0.9,0.2).lineTo(0.7,-0).lineTo(0.4,-0.2).lineTo(-0.1,-0.3).lineTo(-0.9,-0.2).lineTo(-1.6,-0).lineTo(-2,-1.2).lineTo(-1.1,-1.5).lineTo(0.1,-1.6).curveTo(0.7,-1.6,1.1,-1.5).curveTo(1.6,-1.3,1.9,-1).curveTo(2.2,-0.7,2.3,-0.3).curveTo(2.5,0.1,2.5,0.7).lineTo(2.5,3.8).lineTo(1,3.8).lineTo(1,3.2).curveTo(0.7,3.5,0.3,3.7).curveTo(-0.1,3.9,-0.6,3.9).lineTo(-1.3,3.8).closePath().moveTo(-0.7,1.7).curveTo(-1,1.8,-1,2.2).curveTo(-1,2.5,-0.8,2.7).curveTo(-0.5,2.9,-0.2,2.8).lineTo(0.3,2.8).lineTo(0.7,2.6).lineTo(0.9,2.3).lineTo(1,1.9).lineTo(1,1.7).curveTo(0.6,1.5,0.1,1.5).curveTo(-0.4,1.5,-0.7,1.7).closePath().moveTo(-0.4,-2.1).lineTo(0.7,-3.9).lineTo(2,-3.4).lineTo(0.7,-2.1).closePath();
	this.shape_27.setTransform(33.3,-350.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,3.7).lineTo(-0.5,1.4).lineTo(-1.1,2).lineTo(-1.1,3.7).lineTo(-2.6,3.7).lineTo(-2.6,-3.6).lineTo(-1.1,-3.6).lineTo(-1.1,0.3).lineTo(0.7,-1.7).lineTo(2.5,-1.7).lineTo(0.5,0.4).lineTo(2.6,3.7).closePath();
	this.shape_28.setTransform(26.3,-350);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,3.5).lineTo(1.5,2).lineTo(-1.5,2).lineTo(-2.1,3.5).lineTo(-3.7,3.5).lineTo(-0.7,-3.5).lineTo(0.7,-3.5).lineTo(3.7,3.5).closePath().moveTo(0.9,0.6).lineTo(0,-1.7).lineTo(-1,0.6).lineTo(0.9,0.6).closePath();
	this.shape_29.setTransform(17.6,-349.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-357.9,197.8,32);


(lib.textintel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).lineTo(-0.9,-0.9).lineTo(0.9,-0.9).lineTo(0.9,0.9).closePath();
	this.shape.setTransform(125.3,-313.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.5,1.8,-2.7,1.2).lineTo(-2.8,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.5,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.5,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.7,1.1).lineTo(2.6,2).lineTo(2.1,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1,2.8).closePath().moveTo(1.2,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.2,-0.5).lineTo(1.2,-0.5).closePath();
	this.shape_1.setTransform(118.9,-315.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-2,-1.6,-1.5,-1.8).curveTo(-0.9,-2,-0.5,-2).lineTo(0.2,-2).lineTo(0.7,-1.8).curveTo(1.1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1.1,3.6,0.7,3.8).lineTo(0.1,4).lineTo(-0.5,4.1).curveTo(-0.9,4.1,-1.5,3.9).closePath().moveTo(-0.6,-0.5).lineTo(-1,-0.2).lineTo(-1.4,0.3).lineTo(-1.5,1).lineTo(-1.4,1.7).lineTo(-1,2.2).lineTo(-0.6,2.6).lineTo(-0,2.7).lineTo(0.6,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.5,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.6,-0.5).curveTo(0.3,-0.6,-0,-0.6).curveTo(-0.3,-0.6,-0.6,-0.5).closePath();
	this.shape_2.setTransform(110.2,-316.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_3.setTransform(103.5,-316.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-2,2.5,-2.4,2.1).lineTo(-1.7,1).curveTo(-1.2,1.4,-0.7,1.6).lineTo(0.2,1.7).lineTo(0.7,1.7).curveTo(0.8,1.6,0.8,1.6).curveTo(0.8,1.6,0.8,1.5).curveTo(0.9,1.5,0.9,1.4).curveTo(0.9,1.4,0.9,1.4).lineTo(0.9,1.3).curveTo(0.9,1.1,0.5,0.9).lineTo(-0.3,0.7).curveTo(-1.2,0.4,-1.5,0.1).lineTo(-1.9,-0.4).curveTo(-2.1,-0.8,-2.1,-1.1).curveTo(-2.1,-1.6,-1.9,-1.9).curveTo(-1.8,-2.3,-1.5,-2.6).curveTo(-1.2,-2.8,-0.8,-2.9).curveTo(-0.4,-3,0.1,-3).curveTo(0.6,-3,1.2,-2.8).lineTo(2.3,-2.4).lineTo(1.6,-1.2).lineTo(0.8,-1.6).lineTo(0,-1.8).lineTo(-0.4,-1.7).lineTo(-0.6,-1.3).lineTo(-0.6,-1.3).curveTo(-0.6,-1.1,-0.2,-0.9).lineTo(0.6,-0.6).lineTo(1.2,-0.3).lineTo(1.8,-0.1).lineTo(2.2,0.5).curveTo(2.4,0.8,2.4,1.1).curveTo(2.4,1.7,2.2,2).curveTo(2.1,2.3,1.7,2.6).curveTo(1.5,2.9,1,2.9).lineTo(0.1,3).curveTo(-0.5,3,-1.1,2.8).closePath();
	this.shape_4.setTransform(97.5,-315.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.6).lineTo(-0.7,3.4).curveTo(-0.9,3.1,-1,2.8).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.2).lineTo(-1.2,-2.2).lineTo(-1.2,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.2).lineTo(1.9,-2.2).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.7,2.2).curveTo(0.7,2.2,0.7,2.2).curveTo(0.8,2.2,0.8,2.3).curveTo(0.8,2.3,0.9,2.3).curveTo(1,2.3,1,2.3).curveTo(1.5,2.3,1.8,2.1).lineTo(1.8,3.4).lineTo(1.3,3.6).lineTo(0.6,3.7).lineTo(-0.1,3.6).closePath();
	this.shape_5.setTransform(91,-316.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,2.9).curveTo(-1.9,2.7,-2.2,2.4).curveTo(-2.4,2.2,-2.5,1.8).curveTo(-2.7,1.3,-2.7,0.8).lineTo(-2.7,-3).lineTo(-1.1,-3).lineTo(-1.1,0.3).lineTo(-0.9,0.8).lineTo(-0.7,1.2).lineTo(-0.5,1.4).lineTo(-0,1.5).lineTo(0.4,1.4).lineTo(0.7,1.2).lineTo(1,0.8).lineTo(1.1,0.3).lineTo(1.1,-3).lineTo(2.7,-3).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.1).curveTo(0.7,2.5,0.4,2.7).lineTo(-0.1,3).lineTo(-0.7,3).curveTo(-1.2,3,-1.5,2.9).closePath();
	this.shape_6.setTransform(83.8,-315.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,3.9).lineTo(-1.7,3.6).lineTo(-2.3,3.3).lineTo(-2.9,2.8).lineTo(-3.4,2.3).lineTo(-3.8,1.6).lineTo(-4,0.8).lineTo(-4.1,0).lineTo(-4,-0.8).lineTo(-3.8,-1.6).lineTo(-3.4,-2.2).lineTo(-2.9,-2.8).lineTo(-2.3,-3.3).lineTo(-1.6,-3.7).lineTo(-0.8,-3.9).lineTo(0,-4).lineTo(0.9,-3.9).lineTo(1.7,-3.7).lineTo(2.3,-3.3).lineTo(2.9,-2.8).lineTo(3.4,-2.2).lineTo(3.8,-1.6).lineTo(4,-0.8).lineTo(4.1,0).lineTo(4,0.8).lineTo(3.8,1.6).lineTo(3.4,2.2).lineTo(2.9,2.8).lineTo(2.3,3.3).lineTo(1.6,3.6).lineTo(0.8,3.9).lineTo(-0,4).lineTo(-0.9,3.9).closePath().moveTo(-0.9,-2.2).curveTo(-1.4,-2.1,-1.7,-1.7).curveTo(-2,-1.4,-2.2,-1).curveTo(-2.3,-0.5,-2.3,0).curveTo(-2.3,0.5,-2.2,0.9).lineTo(-1.7,1.7).curveTo(-1.4,2,-0.9,2.3).curveTo(-0.5,2.4,0,2.4).curveTo(0.5,2.4,0.9,2.3).curveTo(1.4,2,1.7,1.7).curveTo(2,1.4,2.2,0.9).curveTo(2.3,0.5,2.3,0).curveTo(2.3,-0.5,2.1,-1).curveTo(2,-1.3,1.7,-1.7).curveTo(1.4,-2.1,0.9,-2.2).curveTo(0.5,-2.4,-0,-2.4).curveTo(-0.5,-2.4,-0.9,-2.2).closePath();
	this.shape_7.setTransform(74.2,-316.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.5,1.8,-2.7,1.2).lineTo(-2.8,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.5,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.5,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.7,1.1).lineTo(2.6,2).lineTo(2.1,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1,2.8).closePath().moveTo(1.2,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.2,-0.5).lineTo(1.2,-0.5).closePath();
	this.shape_8.setTransform(59.9,-315.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3,3).lineTo(-0.9,2.8).curveTo(-1.4,2.6,-1.9,2.2).curveTo(-2.3,1.7,-2.5,1.2).lineTo(-2.8,0).lineTo(-2.8,-0).curveTo(-2.7,-0.4,-2.5,-1.2).curveTo(-2.3,-1.8,-1.9,-2.2).curveTo(-1.4,-2.6,-0.9,-2.8).lineTo(-0.3,-3).lineTo(0.4,-3.1).lineTo(1.1,-3).lineTo(1.7,-2.8).lineTo(2.7,-2.1).lineTo(1.7,-1).curveTo(1.4,-1.3,1.1,-1.5).curveTo(0.8,-1.6,0.4,-1.6).lineTo(-0.2,-1.5).lineTo(-0.7,-1.2).lineTo(-1,-0.7).lineTo(-1.1,-0).lineTo(-1,0.6).lineTo(-0.7,1.1).curveTo(-0.5,1.4,-0.2,1.5).curveTo(0.1,1.6,0.4,1.6).curveTo(0.8,1.6,1.2,1.4).curveTo(1.5,1.3,1.7,1).lineTo(2.7,2).curveTo(2.2,2.6,1.7,2.8).lineTo(1.1,3).lineTo(0.4,3.1).closePath();
	this.shape_9.setTransform(52,-315.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).lineTo(1,-0.3).lineTo(0.9,-0.8).lineTo(0.7,-1.2).lineTo(0.5,-1.4).lineTo(0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.8,-1.2).lineTo(-1,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2.1).curveTo(-0.7,-2.5,-0.3,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.2,-3,1.6,-2.9).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.5,-2.1,2.5,-1.7).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_10.setTransform(43.9,-315.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,2.9).lineTo(-2.1,2.6).lineTo(-2.5,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.5,0.4).lineTo(-2.1,-0.2).lineTo(-1.3,-0.6).lineTo(-0.4,-0.7).curveTo(0.3,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1.1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.2,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.8,-3,1.3,-2.9).curveTo(1.7,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.5,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.4,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.4,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.8,1.7).curveTo(-0.6,1.9,-0.2,1.9).lineTo(0.4,1.8).lineTo(0.7,1.6).lineTo(1.1,1.3).lineTo(1.2,0.8).lineTo(1.2,0.6).curveTo(0.6,0.3,0.1,0.3).curveTo(-0.5,0.3,-0.8,0.5).closePath();
	this.shape_11.setTransform(35.6,-315.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.8,3).lineTo(2.8,-0.3).lineTo(2.8,-0.8).lineTo(2.5,-1.2).lineTo(2.2,-1.4).lineTo(1.9,-1.5).lineTo(1.4,-1.4).lineTo(1.1,-1.2).lineTo(0.9,-0.8).lineTo(0.9,-0.3).lineTo(0.9,3).lineTo(-0.8,3).lineTo(-0.8,-0.3).lineTo(-0.9,-0.8).lineTo(-1.1,-1.2).lineTo(-1.4,-1.4).lineTo(-1.8,-1.5).lineTo(-2.3,-1.4).lineTo(-2.5,-1.2).lineTo(-2.7,-0.8).lineTo(-2.9,-0.3).lineTo(-2.9,3).lineTo(-4.5,3).lineTo(-4.5,-2.9).lineTo(-2.9,-2.9).lineTo(-2.9,-2.1).curveTo(-2.5,-2.5,-2.2,-2.7).lineTo(-1.6,-3).lineTo(-1.1,-3).curveTo(-0.5,-3,-0.1,-2.8).curveTo(0.3,-2.5,0.5,-2.1).curveTo(1,-2.5,1.4,-2.8).lineTo(2,-3).lineTo(2.5,-3).curveTo(2.9,-3,3.3,-2.9).curveTo(3.7,-2.7,3.9,-2.4).curveTo(4.2,-2.2,4.3,-1.7).curveTo(4.5,-1.4,4.5,-0.8).lineTo(4.5,3).closePath();
	this.shape_12.setTransform(25.8,-315.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_13.setTransform(17,-315.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,3).lineTo(-1.3,2.8).lineTo(-2.3,2.2).curveTo(-2.7,1.7,-2.9,1.2).lineTo(-3.1,0.6).lineTo(-3.2,0).lineTo(-3.2,-0).curveTo(-3.2,-0.4,-2.9,-1.2).curveTo(-2.7,-1.8,-2.3,-2.2).curveTo(-2,-2.5,-1.3,-2.8).lineTo(-0.7,-3).lineTo(-0,-3.1).curveTo(0.5,-3.1,1.3,-2.8).lineTo(2.3,-2.2).curveTo(2.7,-1.8,2.9,-1.2).curveTo(3.2,-0.5,3.2,-0).lineTo(3.1,0.6).lineTo(2.9,1.2).curveTo(2.7,1.7,2.3,2.2).curveTo(1.7,2.7,1.2,2.8).curveTo(0.5,3.1,-0,3.1).closePath().moveTo(-0.7,-1.5).lineTo(-1.1,-1.2).lineTo(-1.5,-0.7).lineTo(-1.6,-0).lineTo(-1.5,0.6).lineTo(-1.1,1.1).curveTo(-0.9,1.4,-0.6,1.5).curveTo(-0.3,1.6,-0,1.6).curveTo(0.4,1.6,0.7,1.5).curveTo(1,1.4,1.1,1.1).lineTo(1.4,0.6).lineTo(1.6,0).lineTo(1.6,-0).lineTo(1.4,-0.6).lineTo(1.1,-1.2).lineTo(0.7,-1.5).lineTo(-0,-1.6).lineTo(-0.7,-1.5).closePath();
	this.shape_14.setTransform(9.3,-315.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,4).lineTo(-1.2,-0.4).lineTo(-1.9,-0.4).lineTo(-1.9,-1.8).lineTo(-1.2,-1.8).lineTo(-1.2,-2.2).lineTo(-1.1,-3).curveTo(-1,-3.3,-0.7,-3.6).curveTo(-0.3,-4.1,0.6,-4.1).curveTo(1.4,-4.1,1.8,-3.9).lineTo(1.8,-2.5).lineTo(1.1,-2.6).curveTo(1,-2.6,1,-2.6).curveTo(0.9,-2.6,0.8,-2.6).curveTo(0.8,-2.6,0.7,-2.6).curveTo(0.7,-2.5,0.6,-2.5).curveTo(0.5,-2.3,0.5,-2).lineTo(0.5,-1.8).lineTo(1.8,-1.8).lineTo(1.8,-0.4).lineTo(0.5,-0.4).lineTo(0.5,4).closePath();
	this.shape_15.setTransform(2.2,-316.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_16.setTransform(-3.6,-315.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.6,1.2).lineTo(-2.8,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.6,-1.2).curveTo(-2.5,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0.1,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.5,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.3,0.6).lineTo(-1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.7,1.7,1,1.6).lineTo(1.7,1.1).lineTo(2.6,2).lineTo(2.1,2.4).lineTo(1.6,2.8).lineTo(1,3).lineTo(0.2,3.1).lineTo(-1,2.8).closePath().moveTo(1.2,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0.1,-1.7).lineTo(-0.5,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.3,-0.5).lineTo(1.2,-0.5).lineTo(1.2,-0.5).closePath();
	this.shape_17.setTransform(-10.9,-315.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.8).lineTo(-3.1,-3.8).lineTo(0.1,-3.8).curveTo(0.8,-3.8,1.3,-3.7).curveTo(1.9,-3.5,2.3,-3.1).curveTo(2.7,-2.8,2.9,-2.2).curveTo(3,-1.7,3,-1.2).lineTo(3,-1.1).lineTo(3,-0.6).lineTo(2.8,0).curveTo(2.6,0.5,2.1,0.8).curveTo(1.7,1.2,1.1,1.4).curveTo(0.6,1.6,-0,1.6).lineTo(-1.4,1.6).lineTo(-1.4,3.8).closePath().moveTo(-1.4,0).lineTo(-0,0).lineTo(0.6,-0.1).lineTo(1,-0.3).lineTo(1.2,-0.7).lineTo(1.3,-1.1).lineTo(1.2,-1.7).lineTo(1,-2).lineTo(0.5,-2.2).lineTo(-0,-2.3).lineTo(-1.4,-2.3).closePath();
	this.shape_18.setTransform(-19.1,-316.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,3.7).lineTo(-2.6,3.5).lineTo(-2,2.2).curveTo(-1.7,2.5,-1.3,2.5).lineTo(-1,2.4).lineTo(-0.7,2).lineTo(-3.1,-3.8).lineTo(-1.3,-3.8).lineTo(0.1,0.1).lineTo(1.3,-3.8).lineTo(3.1,-3.8).lineTo(0.8,2.2).lineTo(0.5,2.9).lineTo(0.1,3.5).lineTo(-0.5,3.7).lineTo(-1.1,3.8).lineTo(-1.9,3.7).closePath();
	this.shape_19.setTransform(123.5,-331.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.2).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_20.setTransform(116.7,-332.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,2.9).lineTo(-2.1,2.6).lineTo(-2.5,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.5,0.4).lineTo(-2.1,-0.2).lineTo(-1.3,-0.6).lineTo(-0.3,-0.7).curveTo(0.2,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1.1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.2,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.7,-3,1.3,-2.9).curveTo(1.7,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.5,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.4,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.4,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.9,1.7).curveTo(-0.6,1.9,-0.2,1.9).lineTo(0.4,1.8).lineTo(0.7,1.6).lineTo(1.1,1.3).lineTo(1.2,0.8).lineTo(1.2,0.6).curveTo(0.6,0.3,0,0.3).curveTo(-0.5,0.3,-0.8,0.5).closePath();
	this.shape_21.setTransform(109.3,-332.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).lineTo(1.1,-0.3).lineTo(1,-0.8).lineTo(0.7,-1.2).lineTo(0.4,-1.4).lineTo(0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.7,-1.2).lineTo(-1,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2.1).curveTo(-0.7,-2.5,-0.4,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.1,-3,1.5,-2.9).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.4,-2.2,2.5,-1.8).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_22.setTransform(101.3,-332.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_23.setTransform(94.7,-333.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-2,-1.6,-1.5,-1.8).curveTo(-0.9,-2,-0.5,-2).lineTo(0.2,-2).lineTo(0.7,-1.8).curveTo(1.1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1.1,3.6,0.7,3.8).lineTo(0.1,4).lineTo(-0.5,4.1).curveTo(-0.9,4.1,-1.5,3.9).closePath().moveTo(-0.6,-0.5).lineTo(-1,-0.2).lineTo(-1.4,0.3).lineTo(-1.5,1).lineTo(-1.4,1.7).lineTo(-1,2.2).lineTo(-0.6,2.6).lineTo(-0,2.7).lineTo(0.6,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.5,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.6,-0.5).curveTo(0.3,-0.6,-0,-0.6).curveTo(-0.3,-0.6,-0.6,-0.5).closePath();
	this.shape_24.setTransform(87.7,-333.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.2).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_25.setTransform(80.6,-332.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,3).lineTo(-1.3,2.8).lineTo(-2.3,2.2).curveTo(-2.7,1.7,-3,1.2).lineTo(-3.1,0.6).lineTo(-3.2,0).lineTo(-3.2,-0).curveTo(-3.2,-0.4,-3,-1.2).curveTo(-2.7,-1.8,-2.2,-2.2).curveTo(-2,-2.5,-1.3,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).curveTo(0.4,-3.1,1.3,-2.8).lineTo(2.3,-2.2).curveTo(2.7,-1.8,3,-1.2).curveTo(3.2,-0.5,3.2,-0).lineTo(3.1,0.6).lineTo(3,1.2).curveTo(2.7,1.7,2.3,2.2).curveTo(1.6,2.7,1.3,2.8).curveTo(0.4,3.1,0,3.1).closePath().moveTo(-0.6,-1.5).lineTo(-1.2,-1.2).lineTo(-1.4,-0.7).lineTo(-1.5,-0).lineTo(-1.4,0.6).lineTo(-1.1,1.1).curveTo(-0.9,1.4,-0.6,1.5).curveTo(-0.3,1.6,0,1.6).curveTo(0.3,1.6,0.6,1.5).curveTo(0.9,1.4,1.2,1.1).lineTo(1.4,0.6).lineTo(1.5,0).lineTo(1.5,-0).lineTo(1.4,-0.6).lineTo(1.1,-1.2).lineTo(0.6,-1.5).lineTo(0,-1.6).lineTo(-0.6,-1.5).closePath();
	this.shape_26.setTransform(72.9,-332.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,2.9).lineTo(-2.1,2.6).lineTo(-2.5,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.5,0.4).lineTo(-2.1,-0.2).lineTo(-1.3,-0.6).lineTo(-0.4,-0.7).curveTo(0.3,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1.1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.2,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.8,-3,1.3,-2.9).curveTo(1.7,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.5,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.4,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.4,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.8,1.7).curveTo(-0.6,1.9,-0.2,1.9).lineTo(0.4,1.8).lineTo(0.7,1.6).lineTo(1.1,1.3).lineTo(1.2,0.8).lineTo(1.2,0.6).curveTo(0.6,0.3,0.1,0.3).curveTo(-0.5,0.3,-0.8,0.5).closePath();
	this.shape_27.setTransform(64.4,-332.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.2).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_28.setTransform(57.7,-332.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.6).lineTo(-0.7,3.4).curveTo(-0.9,3.2,-1,2.8).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.2).lineTo(-1.2,-2.2).lineTo(-1.2,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.2).lineTo(1.9,-2.2).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.7,2.2).curveTo(0.7,2.2,0.7,2.2).curveTo(0.8,2.2,0.8,2.3).curveTo(0.8,2.3,0.9,2.3).curveTo(1,2.3,1,2.3).curveTo(1.5,2.3,1.8,2).lineTo(1.8,3.4).lineTo(1.3,3.6).lineTo(0.6,3.7).lineTo(-0.1,3.6).closePath();
	this.shape_29.setTransform(51.4,-333.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,2.9).lineTo(0,1.1).lineTo(-1.2,2.9).lineTo(-3,2.9).lineTo(-0.9,-0).lineTo(-2.9,-2.9).lineTo(-1.1,-2.9).lineTo(0,-1.2).lineTo(1.2,-2.9).lineTo(2.9,-2.9).lineTo(0.9,-0).lineTo(3,2.9).closePath();
	this.shape_30.setTransform(44.5,-332.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,3.8).lineTo(-3,-3.8).lineTo(2.9,-3.8).lineTo(2.9,-2.4).lineTo(-1.2,-2.4).lineTo(-1.2,-0.8).lineTo(2.4,-0.8).lineTo(2.4,0.7).lineTo(-1.2,0.7).lineTo(-1.2,2.4).lineTo(3,2.4).lineTo(3,3.8).closePath();
	this.shape_31.setTransform(36.3,-333.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).lineTo(-0.9,-0.9).lineTo(0.9,-0.9).lineTo(0.9,0.9).closePath();
	this.shape_32.setTransform(125.3,-347.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,1.8).lineTo(-1.4,1.4).lineTo(-1.8,0.7).curveTo(-1.9,0.4,-1.9,-0).lineTo(-1.8,-0.8).lineTo(-1.4,-1.4).lineTo(-0.8,-1.8).lineTo(-0,-1.9).lineTo(0.8,-1.8).lineTo(1.4,-1.4).lineTo(1.8,-0.8).curveTo(1.9,-0.4,1.9,-0).curveTo(1.9,0.4,1.8,0.7).lineTo(1.4,1.3).curveTo(1.1,1.6,0.7,1.8).curveTo(0.4,1.9,-0,1.9).lineTo(-0.8,1.8).closePath().moveTo(-0.7,-1.6).curveTo(-1,-1.5,-1.2,-1.2).lineTo(-1.6,-0.7).lineTo(-1.7,-0).lineTo(-1.6,0.7).lineTo(-1.2,1.2).lineTo(-0.7,1.6).curveTo(-0.4,1.7,-0,1.7).lineTo(0.7,1.6).lineTo(1.2,1.2).lineTo(1.6,0.7).lineTo(1.7,-0).lineTo(1.6,-0.7).lineTo(1.2,-1.2).curveTo(1,-1.5,0.7,-1.6).curveTo(0.4,-1.7,-0,-1.7).curveTo(-0.4,-1.7,-0.7,-1.6).closePath().moveTo(0.4,1).lineTo(-0,0.4).lineTo(-0.3,0.4).lineTo(-0.3,1).lineTo(-0.8,1).lineTo(-0.8,-1.1).lineTo(0.1,-1.1).curveTo(0.5,-1.1,0.7,-0.9).curveTo(1,-0.7,1,-0.4).lineTo(0.9,0).lineTo(0.6,0.3).lineTo(1,1).closePath().moveTo(-0.3,-0.1).lineTo(0.1,-0.1).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.3,-0.1,0.3,-0.1).curveTo(0.4,-0.2,0.4,-0.2).curveTo(0.4,-0.3,0.4,-0.3).curveTo(0.4,-0.4,0.4,-0.4).curveTo(0.4,-0.5,0.3,-0.5).curveTo(0.3,-0.5,0.2,-0.6).curveTo(0.2,-0.6,0.1,-0.6).lineTo(-0.3,-0.6).closePath();
	this.shape_33.setTransform(120.2,-352.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.7,1.2).lineTo(-2.8,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.5,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0.1,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.5,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.7,1.7,0.9,1.6).lineTo(1.7,1.1).lineTo(2.6,2).lineTo(2.1,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1,2.8).closePath().moveTo(1.2,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0.1,-1.7).lineTo(-0.5,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.2,-0.5).lineTo(1.2,-0.5).closePath();
	this.shape_34.setTransform(113.4,-349.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3.1,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-1.9,-1.6,-1.5,-1.8).curveTo(-0.9,-2,-0.5,-2).lineTo(0.2,-2).lineTo(0.7,-1.8).curveTo(1.1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1.1,3.6,0.7,3.8).lineTo(0.1,4).lineTo(-0.5,4.1).curveTo(-0.9,4.1,-1.5,3.9).closePath().moveTo(-0.6,-0.5).lineTo(-1,-0.2).lineTo(-1.4,0.3).lineTo(-1.5,1).lineTo(-1.4,1.7).lineTo(-1,2.2).lineTo(-0.6,2.6).lineTo(-0,2.7).lineTo(0.5,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.4,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.5,-0.5).curveTo(0.3,-0.6,-0,-0.6).curveTo(-0.3,-0.6,-0.6,-0.5).closePath();
	this.shape_35.setTransform(104.7,-350.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_36.setTransform(98,-350.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-2,2.5,-2.4,2.1).lineTo(-1.7,1).curveTo(-1.2,1.4,-0.7,1.6).lineTo(0.2,1.8).lineTo(0.7,1.7).curveTo(0.8,1.6,0.8,1.6).curveTo(0.8,1.6,0.8,1.5).curveTo(0.9,1.5,0.9,1.4).curveTo(0.9,1.4,0.9,1.3).lineTo(0.9,1.3).curveTo(0.9,1,0.5,0.9).lineTo(-0.3,0.7).curveTo(-1.2,0.4,-1.5,0.1).lineTo(-1.9,-0.4).curveTo(-2.1,-0.7,-2.1,-1.1).curveTo(-2.1,-1.6,-1.9,-1.9).curveTo(-1.8,-2.3,-1.5,-2.6).curveTo(-1.2,-2.8,-0.8,-2.9).curveTo(-0.4,-3.1,0.1,-3.1).curveTo(0.6,-3,1.2,-2.8).lineTo(2.3,-2.4).lineTo(1.6,-1.2).lineTo(0.8,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.6,-1.4).lineTo(-0.6,-1.3).curveTo(-0.6,-1.1,-0.2,-0.9).lineTo(0.6,-0.6).lineTo(1.2,-0.4).lineTo(1.8,-0).lineTo(2.2,0.4).curveTo(2.4,0.8,2.4,1.1).curveTo(2.4,1.6,2.2,2).curveTo(2.1,2.4,1.7,2.6).curveTo(1.5,2.8,1,2.9).lineTo(0.1,3).curveTo(-0.5,3,-1.1,2.8).closePath();
	this.shape_37.setTransform(92,-349.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).lineTo(1,-0.3).lineTo(0.9,-0.8).lineTo(0.7,-1.2).lineTo(0.5,-1.4).lineTo(0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.8,-1.2).lineTo(-1,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2.1).curveTo(-0.7,-2.5,-0.3,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.2,-3,1.5,-2.9).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.5,-2.2,2.5,-1.8).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_38.setTransform(84.4,-349.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,3.8).lineTo(-0.9,-3.8).lineTo(0.8,-3.8).lineTo(0.8,3.8).closePath();
	this.shape_39.setTransform(77.7,-350.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-4).lineTo(0.8,-4).lineTo(0.8,4).closePath();
	this.shape_40.setTransform(67.9,-350.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.5,1.8,-2.7,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.4,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.2,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.3,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.3,-0.5).lineTo(1.3,-0.5).closePath();
	this.shape_41.setTransform(61.4,-349.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.6).lineTo(-0.7,3.4).curveTo(-0.9,3.1,-1.1,2.8).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.2).lineTo(-1.2,-2.2).lineTo(-1.2,-3.7).lineTo(0.5,-3.7).lineTo(0.5,-2.2).lineTo(1.9,-2.2).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.7,2.1).curveTo(0.7,2.2,0.7,2.2).curveTo(0.7,2.2,0.8,2.3).curveTo(0.8,2.3,0.9,2.3).curveTo(1,2.3,1,2.3).curveTo(1.5,2.3,1.8,2).lineTo(1.8,3.4).lineTo(1.3,3.6).lineTo(0.6,3.7).lineTo(-0.1,3.6).closePath();
	this.shape_42.setTransform(54.2,-350.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).lineTo(1,-0.3).lineTo(0.9,-0.8).lineTo(0.7,-1.2).lineTo(0.5,-1.4).lineTo(0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.8,-1.2).lineTo(-1,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2.1).curveTo(-0.7,-2.5,-0.3,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.2,-3,1.5,-2.9).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.5,-2.2,2.5,-1.8).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_43.setTransform(47.1,-349.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,3.8).lineTo(-0.9,-3.8).lineTo(0.8,-3.8).lineTo(0.8,3.8).closePath();
	this.shape_44.setTransform(40.3,-350.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-359.4,155.6,51.6);


(lib.teeextbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.2).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.2).lineTo(4.4,-5.2).lineTo(4.4,-3.5).lineTo(-1.4,3.2).lineTo(4.4,3.2).lineTo(4.4,5.2).closePath();
	this.shape.setTransform(58.6,184);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.3).lineTo(-2.3,5).lineTo(-3.2,4.5).lineTo(-4,3.9).lineTo(-4.7,3.1).lineTo(-5.2,2.2).lineTo(-5.5,1.1).lineTo(-5.6,0).lineTo(-5.6,0).lineTo(-5.5,-1.1).lineTo(-5.2,-2.1).lineTo(-4.7,-3.1).lineTo(-4,-3.9).lineTo(-3.2,-4.5).lineTo(-2.2,-5).lineTo(-1.2,-5.3).lineTo(0,-5.5).curveTo(0.6,-5.5,1.2,-5.3).lineTo(2.3,-5).lineTo(3.2,-4.5).lineTo(4,-3.9).lineTo(4.7,-3.1).lineTo(5.2,-2.1).lineTo(5.5,-1.1).lineTo(5.6,-0.1).lineTo(5.6,0).lineTo(5.5,1.1).lineTo(5.2,2.1).lineTo(4.7,3.1).lineTo(4,3.9).lineTo(3.2,4.5).lineTo(2.2,5).lineTo(1.2,5.3).lineTo(-0,5.4).curveTo(-0.6,5.4,-1.2,5.3).closePath().moveTo(-1.3,-3.1).curveTo(-1.9,-2.8,-2.3,-2.3).curveTo(-2.7,-1.9,-2.9,-1.3).curveTo(-3.2,-0.7,-3.2,-0.1).lineTo(-3.2,0).curveTo(-3.2,0.6,-2.9,1.3).curveTo(-2.7,1.9,-2.3,2.4).curveTo(-1.8,2.8,-1.3,3.1).curveTo(-0.7,3.3,0,3.3).curveTo(0.7,3.3,1.3,3.1).curveTo(1.9,2.8,2.3,2.4).curveTo(2.7,1.9,2.9,1.3).curveTo(3.2,0.7,3.2,0).lineTo(3.2,0).curveTo(3.2,-0.7,2.9,-1.3).curveTo(2.7,-1.8,2.3,-2.3).curveTo(1.8,-2.8,1.3,-3.1).curveTo(0.7,-3.3,-0,-3.3).curveTo(-0.7,-3.3,-1.3,-3.1).closePath();
	this.shape_1.setTransform(45.4,184);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.2,5.2).lineTo(2.2,1.1).lineTo(-2.2,1.1).lineTo(-2.2,5.2).lineTo(-4.5,5.2).lineTo(-4.5,-5.2).lineTo(-2.2,-5.2).lineTo(-2.2,-1.1).lineTo(2.2,-1.1).lineTo(2.2,-5.2).lineTo(4.4,-5.2).lineTo(4.4,5.2).closePath();
	this.shape_2.setTransform(31.9,184);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.4).curveTo(-3.7,4.1,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.2).lineTo(0.3,3.3).curveTo(1,3.4,1.5,3.1).curveTo(1.8,2.8,1.9,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.8,-1.5,-3.7,-2.2).lineTo(-3.7,-2.2).curveTo(-3.7,-3,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.6,-5.1).curveTo(-0.9,-5.4,-0,-5.4).lineTo(1,-5.3).lineTo(2,-5).lineTo(3,-4.7).lineTo(3.8,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.8,1.2,-3.1).curveTo(0.6,-3.3,-0.1,-3.3).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.5,-2.8,-1.5,-2.4).lineTo(-1.5,-2.4).curveTo(-1.5,-1.9,-1,-1.6).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.9,-0.3,3.3,0).curveTo(3.7,0.5,3.9,0.9).curveTo(4.1,1.5,4.2,2.1).lineTo(4.2,2.2).curveTo(4.1,2.9,3.8,3.5).curveTo(3.6,4.2,3,4.5).curveTo(2.6,4.9,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_3.setTransform(19.8,184);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,6.9).lineTo(2.2,4.6).lineTo(-2.2,4.6).lineTo(-3.2,6.9).lineTo(-5.6,6.9).lineTo(-1.1,-3.7).lineTo(1.1,-3.7).lineTo(5.6,6.9).closePath().moveTo(1.4,2.5).lineTo(-0,-0.9).lineTo(-1.4,2.5).lineTo(1.4,2.5).closePath().moveTo(-0.9,-4.6).lineTo(0.9,-6.9).lineTo(2.8,-6).lineTo(0.8,-4.6).closePath();
	this.shape_4.setTransform(7.6,182.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.1,4.4).curveTo(-3.7,4.1,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.5,3.2).lineTo(0.4,3.3).curveTo(1.1,3.4,1.5,3.1).curveTo(1.8,2.8,1.8,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.3,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.8,-2.2).lineTo(-3.8,-2.2).curveTo(-3.8,-3,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.5,-5.1).curveTo(-0.8,-5.4,-0.1,-5.4).lineTo(1,-5.3).lineTo(2.1,-5).lineTo(3,-4.7).lineTo(3.9,-4).lineTo(2.6,-2.3).curveTo(1.9,-2.8,1.3,-3.1).curveTo(0.5,-3.3,-0.1,-3.3).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.5,-2.8,-1.4,-2.4).lineTo(-1.4,-2.4).curveTo(-1.5,-1.9,-1,-1.6).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.3,-0.5).curveTo(2.8,-0.3,3.3,0).curveTo(3.7,0.5,4,0.9).curveTo(4.2,1.5,4.2,2.1).lineTo(4.2,2.2).curveTo(4.2,2.9,3.9,3.5).curveTo(3.6,4.2,3.1,4.5).curveTo(2.5,4.9,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_5.setTransform(-4.7,184);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,5.3).lineTo(2.2,2.9).lineTo(-2.2,2.9).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_6.setTransform(-16.8,183.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1,5.3).lineTo(-5.3,-5.3).lineTo(-2.7,-5.3).lineTo(0,2.1).lineTo(2.8,-5.3).lineTo(5.3,-5.3).lineTo(1,5.3).closePath();
	this.shape_7.setTransform(-29.9,184);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.8,5.2).lineTo(-3.8,-5.2).lineTo(-1.5,-5.2).lineTo(-1.5,3.2).lineTo(3.8,3.2).lineTo(3.8,5.2).closePath();
	this.shape_8.setTransform(-41.2,184);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.3).lineTo(-2.3,5).lineTo(-3.2,4.5).lineTo(-4,3.9).lineTo(-4.7,3.1).lineTo(-5.2,2.2).lineTo(-5.5,1.1).lineTo(-5.6,0).lineTo(-5.6,0).lineTo(-5.5,-1.1).lineTo(-5.2,-2.1).lineTo(-4.7,-3.1).lineTo(-4,-3.9).lineTo(-3.2,-4.5).lineTo(-2.2,-5).lineTo(-1.2,-5.3).lineTo(0,-5.5).curveTo(0.6,-5.5,1.2,-5.3).lineTo(2.3,-5).lineTo(3.2,-4.5).lineTo(4,-3.9).lineTo(4.7,-3.1).lineTo(5.2,-2.1).lineTo(5.5,-1.1).lineTo(5.6,-0.1).lineTo(5.6,0).lineTo(5.5,1.1).lineTo(5.2,2.1).lineTo(4.7,3.1).lineTo(4,3.9).lineTo(3.2,4.5).lineTo(2.2,5).lineTo(1.2,5.3).lineTo(-0,5.4).curveTo(-0.6,5.4,-1.2,5.3).closePath().moveTo(-1.3,-3.1).curveTo(-1.9,-2.8,-2.3,-2.3).curveTo(-2.7,-1.9,-2.9,-1.3).curveTo(-3.2,-0.7,-3.2,-0.1).lineTo(-3.2,0).curveTo(-3.2,0.6,-2.9,1.3).curveTo(-2.7,1.9,-2.3,2.4).curveTo(-1.8,2.8,-1.3,3.1).curveTo(-0.7,3.3,0,3.3).curveTo(0.7,3.3,1.3,3.1).curveTo(1.9,2.8,2.3,2.4).curveTo(2.7,1.9,2.9,1.3).curveTo(3.2,0.7,3.2,0).lineTo(3.2,0).curveTo(3.2,-0.7,2.9,-1.3).curveTo(2.7,-1.8,2.3,-2.3).curveTo(1.8,-2.8,1.3,-3.1).curveTo(0.7,-3.3,-0,-3.3).curveTo(-0.7,-3.3,-1.3,-3.1).closePath();
	this.shape_9.setTransform(-54.1,184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,172.8,130.1,22);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(23.4,91.8).curveTo(12.3,78.1,8.6,72.4).curveTo(2.5,72.9,-0,72.9).curveTo(-2.6,72.9,-8.6,72.4).curveTo(-12.5,78.2,-23.4,91.8).curveTo(-34.2,105.2,-36.6,105.2).curveTo(-37.1,105.2,-72,84.9).curveTo(-73.1,84.2,-73.1,82.9).curveTo(-73.1,75.8,-58.5,43.5).curveTo(-63.6,36.5,-67.1,28.7).curveTo(-109.6,24.4,-109.6,19.9).lineTo(-109.6,-20.1).curveTo(-109.6,-24.7,-67.1,-28.9).curveTo(-63.3,-37.3,-58.5,-43.8).curveTo(-73.1,-76.1,-73.1,-83.2).curveTo(-73.1,-84.3,-72,-85.2).curveTo(-71,-85.7,-62,-90.9).lineTo(-45.1,-100.6).curveTo(-37.1,-105.2,-36.6,-105.2).curveTo(-34.2,-105.2,-23.4,-91.9).curveTo(-12.5,-78.5,-8.6,-72.7).curveTo(-2.6,-73.2,-0,-73.2).curveTo(2.5,-73.2,8.6,-72.7).curveTo(23.1,-92.9,34.8,-104.6).lineTo(36.5,-105.2).curveTo(37.6,-105.2,71.9,-85.2).curveTo(73.1,-84.4,73.1,-83.2).curveTo(73.1,-76.1,58.5,-43.8).curveTo(63.5,-36.9,67.1,-28.9).curveTo(109.6,-24.6,109.6,-20.1).lineTo(109.6,19.9).curveTo(109.6,24.4,67.1,28.7).curveTo(63.6,36.5,58.5,43.5).curveTo(73.1,75.8,73.1,82.9).curveTo(73.1,84.2,71.9,84.9).curveTo(37.1,105.2,36.5,105.2).curveTo(34.2,105.2,23.4,91.8).closePath().moveTo(-25.7,-25.8).curveTo(-36.6,-15,-36.6,-0.1).curveTo(-36.6,15,-25.9,25.7).curveTo(-15.1,36.4,-0,36.4).curveTo(15.1,36.4,25.8,25.7).curveTo(36.5,15.1,36.5,-0.1).curveTo(36.5,-15,25.7,-25.8).curveTo(14.9,-36.6,-0,-36.7).curveTo(-14.9,-36.6,-25.7,-25.8).closePath();
	this.shape.setTransform(10.7,10.2,0.097,0.097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,20.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(23.4,91.8).curveTo(12.3,78.1,8.6,72.4).curveTo(2.5,73,-0,73).curveTo(-2.6,73,-8.6,72.4).curveTo(-12.5,78.2,-23.4,91.8).curveTo(-34.2,105.2,-36.6,105.2).curveTo(-37.1,105.2,-72,84.9).curveTo(-73.1,84.1,-73.1,83).curveTo(-73.1,75.8,-58.5,43.5).curveTo(-63.6,36.5,-67.1,28.7).curveTo(-109.6,24.4,-109.6,19.9).lineTo(-109.6,-20.1).curveTo(-109.6,-24.7,-67.1,-29).curveTo(-63.3,-37.4,-58.5,-43.8).curveTo(-73.1,-76,-73.1,-83.2).curveTo(-73.1,-84.4,-72,-85.2).lineTo(-62,-90.9).lineTo(-45.1,-100.6).curveTo(-37.1,-105.2,-36.6,-105.2).curveTo(-34.2,-105.2,-23.4,-91.9).curveTo(-12.5,-78.5,-8.6,-72.6).curveTo(-3.3,-73.2,-0,-73.2).curveTo(3.3,-73.2,8.6,-72.6).curveTo(23.1,-92.9,34.8,-104.6).lineTo(36.5,-105.2).curveTo(37.7,-105.2,71.9,-85.2).curveTo(73.1,-84.4,73.1,-83.2).curveTo(73.1,-76,58.5,-43.8).curveTo(63.5,-37,67.1,-29).curveTo(109.6,-24.6,109.6,-20.1).lineTo(109.6,19.9).curveTo(109.6,24.4,67.1,28.7).curveTo(63.6,36.5,58.5,43.5).curveTo(73.1,75.8,73.1,83).curveTo(73.1,84.1,71.9,84.9).curveTo(37.1,105.2,36.5,105.2).curveTo(34.2,105.2,23.4,91.8).closePath().moveTo(-25.7,-25.8).curveTo(-36.6,-14.9,-36.6,-0.2).curveTo(-36.6,15,-25.9,25.7).curveTo(-15.2,36.4,-0,36.4).curveTo(15.1,36.4,25.8,25.7).curveTo(36.5,15,36.5,-0.2).curveTo(36.5,-15,25.7,-25.8).curveTo(14.8,-36.7,-0,-36.7).curveTo(-14.8,-36.7,-25.7,-25.8).closePath();
	this.shape.setTransform(14.4,13.8,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,27.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-26.6,182.7).curveTo(-29.7,182.7,-32.2,180.6).curveTo(-34.9,178.3,-35.1,175.6).lineTo(-41.7,131.9).curveTo(-51.5,129.1,-63.1,123).lineTo(-96.8,148.4).curveTo(-98.7,150.5,-102.5,150.5).curveTo(-105.6,150.4,-108.5,148.2).curveTo(-149.6,110.2,-149.6,102.5).curveTo(-149.6,99.8,-147.6,97).curveTo(-144.5,92.8,-135.9,81.9).curveTo(-127.2,70.9,-122.5,64.5).curveTo(-129.1,51.7,-132.5,41.1).lineTo(-175.9,34.2).curveTo(-178.7,33.9,-180.7,31.5).curveTo(-182.7,29.2,-182.7,26).lineTo(-182.7,-26.8).curveTo(-182.7,-29.7,-180.7,-32.4).curveTo(-178.8,-35.1,-176.1,-35.4).lineTo(-131.9,-42.3).curveTo(-128.7,-52.3,-122.8,-64).curveTo(-132.3,-77.3,-148.4,-96.8).curveTo(-150.5,-99.8,-150.5,-102.5).curveTo(-150.5,-106,-148.4,-108.2).curveTo(-142.3,-116.7,-125,-133.6).curveTo(-108,-150.4,-102.5,-150.5).curveTo(-99.3,-150.4,-96.5,-148.5).lineTo(-63.6,-122.8).curveTo(-54,-127.9,-41.7,-131.9).curveTo(-38.6,-162.7,-35.1,-175.9).curveTo(-33.2,-182.7,-26.6,-182.7).lineTo(26.6,-182.7).curveTo(29.7,-182.7,32.2,-180.6).curveTo(34.9,-178.3,35.1,-175.6).lineTo(41.7,-131.9).curveTo(51.5,-129.1,63.1,-123).lineTo(96.8,-148.5).curveTo(99,-150.4,102.5,-150.5).curveTo(105.7,-150.5,108.5,-148.1).curveTo(149.6,-110.2,149.6,-102.5).curveTo(149.6,-99.9,147.6,-97).lineTo(135.6,-81.6).curveTo(126.7,-70.4,122.8,-64.5).curveTo(129.2,-51.1,132.5,-41.1).lineTo(175.9,-34.6).curveTo(178.7,-33.9,180.7,-31.6).curveTo(182.7,-29.2,182.7,-26).lineTo(182.7,26.8).curveTo(182.7,29.7,180.7,32.4).curveTo(178.7,35.1,176.1,35.4).lineTo(131.9,42.2).curveTo(128.7,52.3,122.8,63.9).curveTo(132.3,77.3,148.4,96.8).curveTo(150.5,99.6,150.5,102.5).curveTo(150.5,106,148.4,107.9).curveTo(141.7,116.6,124.9,133.5).curveTo(108,150.4,102.5,150.5).curveTo(99.3,150.5,96.5,148.4).lineTo(63.6,122.8).curveTo(52.7,128.4,41.7,131.6).curveTo(38.6,162.5,35.1,175.9).curveTo(33.2,182.7,26.6,182.7).closePath().moveTo(-51.7,-51.7).curveTo(-73.1,-30.3,-73.1,0).curveTo(-73.1,30.2,-51.7,51.7).curveTo(-30.3,73.1,-0,73.1).curveTo(30.2,73.1,51.7,51.7).curveTo(73.1,30.2,73.1,0).curveTo(73.1,-30.3,51.7,-51.7).curveTo(30.2,-73.1,-0,-73.1).curveTo(-30.3,-73.1,-51.7,-51.7).closePath();
	this.shape.setTransform(27.3,27.4,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.7,54.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.7).lineTo(-3.8,-2.7).lineTo(-3.8,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-2.7).lineTo(1,-2.7).lineTo(1,4.5).closePath();
	this.shape.setTransform(178.2,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_1.setTransform(167.3,-39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF6A00").beginStroke().moveTo(-4.2,4.5).lineTo(-4.2,-4.6).lineTo(-0.7,-4.6).lineTo(0.4,-4.5).lineTo(1.3,-4.2).lineTo(2.2,-3.8).lineTo(2.8,-3.2).lineTo(3.4,-2.6).lineTo(3.8,-1.8).lineTo(4.1,-1).lineTo(4.2,-0.1).lineTo(4.2,0).lineTo(4.1,0.9).lineTo(3.8,1.8).lineTo(3.4,2.5).lineTo(2.8,3.2).lineTo(2.2,3.8).lineTo(1.3,4.2).lineTo(0.4,4.4).lineTo(-0.7,4.5).closePath().moveTo(-2.2,2.7).lineTo(-0.7,2.7).curveTo(-0.1,2.7,0.5,2.5).curveTo(0.9,2.3,1.4,2).curveTo(1.7,1.6,1.9,1.2).curveTo(2.1,0.6,2.1,0).curveTo(2.1,-0.6,1.9,-1.1).curveTo(1.7,-1.6,1.4,-2).curveTo(0.9,-2.4,0.5,-2.5).curveTo(-0.1,-2.8,-0.7,-2.8).lineTo(-2.2,-2.8).closePath();
	this.shape_2.setTransform(155.9,-39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_3.setTransform(143.9,-39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.7).lineTo(-3.8,-2.7).lineTo(-3.8,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-2.7).lineTo(1,-2.7).lineTo(1,4.5).closePath();
	this.shape_4.setTransform(133.1,-39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1.7,4.4).lineTo(-2.4,4).lineTo(-2.9,3.6).lineTo(-3.4,3).lineTo(-3.7,2.3).lineTo(-3.9,1.5).lineTo(-4,0.6).lineTo(-4,-4.6).lineTo(-2,-4.6).lineTo(-2,0.5).curveTo(-2,1.1,-1.8,1.5).curveTo(-1.7,1.9,-1.5,2.2).lineTo(-0.8,2.6).curveTo(-0.5,2.8,-0,2.8).curveTo(0.5,2.8,0.8,2.6).lineTo(1.4,2.2).lineTo(1.8,1.5).lineTo(1.9,0.6).lineTo(1.9,-4.6).lineTo(4,-4.6).lineTo(4,0.5).lineTo(3.9,1.5).lineTo(3.7,2.3).lineTo(3.3,3).lineTo(2.9,3.6).curveTo(2.6,3.9,2.3,4).lineTo(1.6,4.4).curveTo(0.6,4.6,-0,4.6).lineTo(-1.7,4.4).closePath();
	this.shape_5.setTransform(122.5,-39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.8,4.5).lineTo(-3.8,3.1).lineTo(1.2,-2.8).lineTo(-3.6,-2.8).lineTo(-3.6,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-3.1).lineTo(-1.2,2.8).lineTo(3.8,2.8).lineTo(3.8,4.5).closePath();
	this.shape_6.setTransform(106.1,-39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_7.setTransform(94.9,-39.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FF6A00").beginStroke().moveTo(-0.6,4.6).lineTo(-1.5,4.3).lineTo(-2.3,4).lineTo(-3,3.4).lineTo(-3.6,2.7).lineTo(-4,1.9).lineTo(-4.2,1).lineTo(-4.3,0).lineTo(-4.2,-1).lineTo(-4,-1.9).lineTo(-3.6,-2.6).lineTo(-3,-3.3).lineTo(-2.3,-3.9).lineTo(-1.5,-4.3).lineTo(-0.6,-4.6).lineTo(0.4,-4.7).lineTo(1.6,-4.6).lineTo(2.5,-4.4).curveTo(3,-4.2,4,-3.4).lineTo(2.8,-2).curveTo(2.2,-2.4,1.7,-2.6).curveTo(1.1,-2.8,0.4,-2.9).curveTo(-0.2,-2.9,-0.7,-2.7).lineTo(-1.5,-2.1).curveTo(-1.8,-1.7,-2,-1.1).curveTo(-2.2,-0.6,-2.2,-0.1).lineTo(-2.2,0).curveTo(-2.2,0.6,-2,1.2).curveTo(-1.8,1.6,-1.5,2.1).curveTo(-1.1,2.4,-0.6,2.6).curveTo(-0.1,2.9,0.5,2.9).curveTo(1.1,2.9,1.5,2.7).curveTo(2,2.6,2.4,2.3).lineTo(2.4,1.1).lineTo(0.4,1.1).lineTo(0.4,-0.7).lineTo(4.3,-0.7).lineTo(4.3,3.2).curveTo(3.3,4,2.7,4.3).lineTo(1.6,4.6).lineTo(0.4,4.7).lineTo(-0.6,4.6).closePath();
	this.shape_8.setTransform(77.7,-39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.4,4.5).lineTo(-3.4,-4.6).lineTo(3.4,-4.6).lineTo(3.4,-2.8).lineTo(-1.4,-2.8).lineTo(-1.4,-0.9).lineTo(2.8,-0.9).lineTo(2.8,0.8).lineTo(-1.4,0.8).lineTo(-1.4,2.7).lineTo(3.4,2.7).lineTo(3.4,4.5).closePath();
	this.shape_9.setTransform(67.1,-39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.6,4.5).lineTo(2.6,-1.4).lineTo(0,2.5).lineTo(-0.1,2.5).lineTo(-2.6,-1.3).lineTo(-2.6,4.5).lineTo(-4.6,4.5).lineTo(-4.6,-4.6).lineTo(-2.4,-4.6).lineTo(0,-0.7).lineTo(2.4,-4.6).lineTo(4.5,-4.6).lineTo(4.5,4.5).closePath();
	this.shape_10.setTransform(55.4,-39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF6A00").beginStroke().moveTo(-4.2,4.5).lineTo(-4.2,-4.6).lineTo(-0.7,-4.6).lineTo(0.3,-4.5).lineTo(1.3,-4.2).lineTo(2.1,-3.8).lineTo(2.9,-3.2).lineTo(3.4,-2.6).lineTo(3.8,-1.8).lineTo(4.1,-1).lineTo(4.2,-0.1).lineTo(4.2,0).lineTo(4.1,0.9).lineTo(3.8,1.8).lineTo(3.4,2.5).lineTo(2.9,3.2).lineTo(2.1,3.8).lineTo(1.3,4.2).lineTo(0.3,4.4).lineTo(-0.7,4.5).closePath().moveTo(-2.2,2.7).lineTo(-0.7,2.7).curveTo(-0.1,2.7,0.4,2.5).curveTo(1,2.3,1.3,2).curveTo(1.7,1.6,1.9,1.2).curveTo(2.1,0.6,2.1,0).curveTo(2.1,-0.6,1.9,-1.1).curveTo(1.7,-1.6,1.3,-2).curveTo(1,-2.4,0.4,-2.5).curveTo(-0.1,-2.8,-0.7,-2.8).lineTo(-2.2,-2.8).closePath();
	this.shape_11.setTransform(38,-39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.3,4.5).lineTo(-3.3,-4.6).lineTo(-1.3,-4.6).lineTo(-1.3,2.7).lineTo(3.3,2.7).lineTo(3.3,4.5).closePath();
	this.shape_12.setTransform(27.6,-39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,6).lineTo(1.9,4).lineTo(-1.9,4).lineTo(-2.8,6).lineTo(-4.8,6).lineTo(-0.9,-3.1).lineTo(0.9,-3.1).lineTo(4.8,6).closePath().moveTo(1.2,2.2).lineTo(-0,-0.8).lineTo(-1.2,2.2).lineTo(1.2,2.2).closePath().moveTo(-0.8,-3.9).lineTo(0.8,-6).lineTo(2.5,-5.3).lineTo(0.7,-3.9).closePath();
	this.shape_13.setTransform(16.6,-41.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FF6A00").beginStroke().moveTo(-3.3,4.5).lineTo(-3.3,-4.6).lineTo(-1.3,-4.6).lineTo(-1.3,2.7).lineTo(3.3,2.7).lineTo(3.3,4.5).closePath();
	this.shape_14.setTransform(6.3,-39.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FF6A00").beginStroke().moveTo(2.7,4.6).lineTo(1.9,2.5).lineTo(-1.9,2.5).lineTo(-2.8,4.6).lineTo(-4.8,4.6).lineTo(-0.9,-4.6).lineTo(0.9,-4.6).lineTo(4.8,4.6).closePath().moveTo(1.2,0.8).lineTo(-0,-2.2).lineTo(-1.2,0.8).lineTo(1.2,0.8).closePath();
	this.shape_15.setTransform(-4.7,-39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.7).lineTo(-3.8,-2.7).lineTo(-3.8,-4.6).lineTo(3.8,-4.6).lineTo(3.8,-2.7).lineTo(1,-2.7).lineTo(1,4.5).closePath();
	this.shape_16.setTransform(-15.5,-39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-49.6,207.8,19.6);


(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-141.3,99.3).lineTo(-144.3,99.3).curveTo(-161.3,99.2,-171,86.1).curveTo(-179.5,74.6,-179.5,57.5).lineTo(-179.5,-109.6).curveTo(-179.5,-126,-171,-135.4).curveTo(-161.8,-145.5,-144.3,-145.5).lineTo(-130.6,-145.5).lineTo(-130.6,5.5).curveTo(-130.6,24.3,-120.2,36.8).curveTo(-109,50.3,-89.4,50.3).lineTo(179.5,50.3).lineTo(179.5,57.5).curveTo(179.5,73.1,164.6,86.1).curveTo(149.7,99.2,131.5,99.3).lineTo(-74,99.3).lineTo(-152.7,145.5).closePath();
	this.shape.setTransform(23,18.6,0.128,0.128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,37.2);


(lib.obrazok2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib._02();
	this.instance.setTransform(35,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35,-15,200,190);


(lib.modo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib._03();
	this.instance.setTransform(53,8,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,8,183.2,136.5);


(lib.LenovoLogoPOSRedai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lenovo Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(24.5,14.8).lineTo(24.5,-6.3).lineTo(15.4,8).lineTo(14.8,8).lineTo(5.7,-6.3).lineTo(5.7,14.8).lineTo(0.2,14.8).lineTo(0.2,-14.8).lineTo(6.3,-14.8).lineTo(15.2,-0.8).lineTo(24.2,-14.8).lineTo(30,-14.8).lineTo(30,14.8).closePath().moveTo(-20.8,14.8).lineTo(-20.8,-9.6).lineTo(-30,-9.6).lineTo(-30,-14.8).lineTo(-6.1,-14.8).lineTo(-6.1,-9.6).lineTo(-15.2,-9.6).lineTo(-15.2,14.8).closePath();
	this.shape.setTransform(1485.9,373.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-43.5,98).curveTo(-63.4,90.1,-78.4,75.6).curveTo(-93.6,61.1,-101.8,42).curveTo(-110.3,22.2,-110.3,0).curveTo(-110.3,-22,-101.7,-41.7).curveTo(-93.4,-60.8,-78.2,-75.4).curveTo(-63.1,-89.9,-43.1,-97.9).curveTo(-22.5,-106.1,0.4,-106.1).curveTo(23.2,-106.1,43.6,-98).curveTo(63.4,-90.1,78.4,-75.6).curveTo(93.6,-61.1,101.8,-42).curveTo(110.3,-22.2,110.3,0).curveTo(110.3,21.9,101.8,41.7).curveTo(93.4,60.8,78.3,75.4).curveTo(63.1,89.9,43.1,97.9).curveTo(22.6,106.1,-0.3,106.1).curveTo(-23.1,106.1,-43.5,98).closePath().moveTo(-39.4,-41.6).curveTo(-54.7,-25.4,-54.7,0).curveTo(-54.7,24.3,-38.7,41.1).curveTo(-22.7,57.8,0.4,57.8).curveTo(23.9,57.8,39.4,41.4).curveTo(54.7,25,54.7,0).curveTo(54.7,-24.3,38.8,-41.1).curveTo(22.8,-57.8,-0.3,-57.8).curveTo(-24,-57.8,-39.4,-41.6).closePath();
	this.shape_1.setTransform(913,285.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-43.6,98).curveTo(-63.4,90.1,-78.5,75.6).curveTo(-93.6,61.1,-101.8,42).curveTo(-110.3,22.2,-110.3,0).curveTo(-110.3,-22,-101.8,-41.7).curveTo(-93.5,-60.8,-78.2,-75.4).curveTo(-63,-89.9,-43.1,-97.9).curveTo(-22.5,-106.1,0.4,-106.1).curveTo(23.1,-106.1,43.6,-98).curveTo(63.4,-90.1,78.5,-75.6).curveTo(93.6,-61.1,101.8,-42).curveTo(110.3,-22.2,110.3,0).curveTo(110.3,21.9,101.8,41.7).curveTo(93.5,60.8,78.2,75.4).curveTo(63,89.9,43.1,97.9).curveTo(22.5,106.1,-0.4,106.1).curveTo(-23.1,106.1,-43.6,98).closePath().moveTo(-39.4,-41.6).curveTo(-54.7,-25.4,-54.7,0).curveTo(-54.7,24.3,-38.8,41.1).curveTo(-22.8,57.8,0.4,57.8).curveTo(24,57.8,39.4,41.4).curveTo(54.7,25,54.7,0).curveTo(54.7,-24.3,38.8,-41.1).curveTo(22.8,-57.8,-0.4,-57.8).curveTo(-24.1,-57.8,-39.4,-41.6).closePath();
	this.shape_2.setTransform(1347,285.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-92.6,133.3).lineTo(-92.6,-133.3).lineTo(-35.5,-133.3).lineTo(-35.5,81.6).lineTo(92.6,81.6).lineTo(92.6,133.3).closePath();
	this.shape_3.setTransform(241.1,255.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-39,98.3).curveTo(-59.8,90.6,-75.2,76.3).curveTo(-90.6,62,-98.8,42.7).curveTo(-107.2,23,-107.2,0).curveTo(-107.2,-22.3,-99,-42).curveTo(-90.9,-61.2,-76.1,-75.7).curveTo(-61.3,-90.2,-41.6,-98).curveTo(-21.3,-106.1,1.5,-106.1).curveTo(27,-106.1,47.7,-97.5).curveTo(68.4,-89,82.6,-72.5).curveTo(92.3,-61.1,98.6,-46.5).curveTo(104.8,-31.9,107.2,-15.2).lineTo(-36.9,44.6).curveTo(-20,61.3,8.6,61.3).curveTo(25.2,61.3,37.3,57).curveTo(50.1,52.4,67.4,39.5).lineTo(103.1,66.9).curveTo(88.9,83.3,62.8,94.4).curveTo(35.5,106.1,7.7,106.1).curveTo(-17.4,106.1,-39,98.3).closePath().moveTo(-22.5,-55.9).curveTo(-33.6,-50.6,-40.9,-40.8).curveTo(-47.8,-31.4,-50.8,-19.7).curveTo(-54.2,-6.6,-52.3,8.3).lineTo(46.2,-32.5).curveTo(40.1,-45.8,29,-53.3).curveTo(17.3,-61.3,2.5,-61.3).curveTo(-11.2,-61.3,-22.5,-55.9).closePath();
	this.shape_4.setTransform(446.3,285.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-30.9,102.6).lineTo(-115.4,-102.6).lineTo(-51,-102.6).lineTo(-0,37.2).lineTo(50.9,-102.6).lineTo(115.4,-102.6).lineTo(30.9,102.6).closePath();
	this.shape_5.setTransform(1130.1,285.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(47,104.3).lineTo(47,-12.5).curveTo(47,-31.9,32,-44.3).curveTo(18.1,-55.9,-0.5,-55.9).curveTo(-21.9,-55.9,-35.1,-42.1).curveTo(-47,-29.5,-47,-12.5).lineTo(-47,104.3).lineTo(-103.3,104.3).lineTo(-103.3,-101).lineTo(-47,-101).lineTo(-47,-71.5).curveTo(-35.1,-87.3,-16.2,-96.2).curveTo(1.4,-104.4,20,-104.4).curveTo(56.9,-104.4,80.2,-81.3).curveTo(103.3,-58.5,103.3,-22.9).lineTo(103.3,104.3).closePath();
	this.shape_6.setTransform(677.1,284.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EB6209").beginStroke().moveTo(-800,266.7).lineTo(-800,-266.6).lineTo(800,-266.6).lineTo(800,266.7).closePath();
	this.shape_7.setTransform(800,266.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,533.3);


(lib.intelLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.IntelLogoi7();
	this.instance.setTransform(113,-336,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,-336,60,60);


(lib.image1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib._01();
	this.instance.setTransform(-63,16,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,16,162.6,139.8);


(lib.Doplnění4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#73A4DF").beginStroke().moveTo(-18.9,67.7).lineTo(-16.5,48.6).curveTo(-7.6,42.2,-4.5,28).curveTo(1.2,2.6,12.2,-67.7).lineTo(18.9,-67.7).lineTo(1.8,59.1).curveTo(1,61.3,-1.4,63.4).curveTo(-6.3,67.7,-14.3,67.7).closePath();
	this.shape.setTransform(21.7,0.7,0.386,0.386);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#73A4DF").beginStroke().moveTo(-5.7,7.2).lineTo(-6.2,-6.5).lineTo(-4,-6.5).curveTo(1.9,-6.5,6.2,-7.2).lineTo(5.7,7.2).closePath();
	this.shape_1.setTransform(8.4,24,0.386,0.386);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#73A4DF").beginStroke().moveTo(7.2,16).curveTo(-0.8,15.9,-5.6,11.7).curveTo(-7,10.4,-8,8.8).lineTo(-8.7,7.4).lineTo(-11.9,-16).lineTo(-10.4,-13.2).curveTo(-8.3,-10,-6,-7.2).curveTo(1.7,1.6,10.2,2).lineTo(11.9,16).closePath();
	this.shape_2.setTransform(-1.6,20.7,0.386,0.386);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#8EB6E5").beginStroke().moveTo(-3.3,7).lineTo(-5,-7).lineTo(-4,-6.9).lineTo(4.5,-6.7).lineTo(5,7).closePath();
	this.shape_3.setTransform(4.2,24.1,0.386,0.386);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#8EB6E5").beginStroke().moveTo(-6.1,9.6).lineTo(-5.7,-4.9).curveTo(1.3,-6.1,6.1,-9.6).lineTo(3.8,9.6).closePath();
	this.shape_4.setTransform(12.9,23.2,0.386,0.386);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#528DD7").beginStroke().moveTo(-18.9,67.7).lineTo(-2.4,-67.7).lineTo(18.9,-67.7).lineTo(1.8,59.1).curveTo(1,61.3,-1.4,63.4).curveTo(-6.3,67.7,-14.3,67.7).closePath();
	this.shape_5.setTransform(21.7,0.7,0.386,0.386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#528DD7").beginStroke().moveTo(-2.2,26.1).lineTo(-3.9,-26.1).lineTo(3.8,-26.1).lineTo(2.2,26.1).closePath();
	this.shape_6.setTransform(8.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#528DD7").beginStroke().moveTo(14.3,67.7).curveTo(6.3,67.7,1.5,63.4).curveTo(-0,62.1,-1,60.5).lineTo(-1.7,59.1).lineTo(-18.9,-67.7).lineTo(2.4,-67.7).lineTo(18.9,67.7).closePath();
	this.shape_7.setTransform(-4.3,0.7,0.386,0.386);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#6B9CD7").beginStroke().moveTo(8.9,1.6).lineTo(9,-1.6).lineTo(31.3,-1.6).lineTo(30.9,1.6).closePath().moveTo(-30.9,1.6).lineTo(-31.3,-1.6).lineTo(-10.9,-1.6).lineTo(-10.8,1.6).closePath();
	this.shape_8.setTransform(8.7,-24.7,0.386,0.386);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#73A4DF").beginStroke().moveTo(-15.5,59).lineTo(-16.5,59).lineTo(-30.9,-59.2).lineTo(-10.8,-59.2).lineTo(-7,59.2).lineTo(-15.5,59).closePath().moveTo(8.9,-59.2).lineTo(30.9,-59.2).lineTo(17.1,53.8).curveTo(12.3,57.2,5.3,58.5).closePath();
	this.shape_9.setTransform(8.7,-1.3,0.386,0.386);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-59.9,8.6).lineTo(-59.9,-8.6).lineTo(59.9,-8.6).lineTo(59.9,8.6).closePath();
	this.shape_10.setTransform(8,-28.7,0.386,0.386);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D8D8D8").beginStroke().moveTo(-39,12.3).curveTo(-44.1,12.3,-47.7,8.7).curveTo(-51.4,5.1,-51.4,0).curveTo(-51.4,-5.1,-47.7,-8.7).curveTo(-44.1,-12.3,-39,-12.3).lineTo(39.1,-12.3).curveTo(44.2,-12.3,47.8,-8.7).curveTo(51.4,-5.1,51.4,0).curveTo(51.4,5.1,47.8,8.7).curveTo(44.2,12.3,39.1,12.3).closePath();
	this.shape_11.setTransform(8,-28.9,0.386,0.386);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#ED722E").beginStroke().moveTo(-18.7,-11.6).lineTo(-17.5,-12.9).lineTo(-18,-14.7).lineTo(-17.2,-15.8).lineTo(-17.4,-17.5).lineTo(-16.1,-18.3).lineTo(-16.2,-20.2).lineTo(-14.5,-20.6).lineTo(-14.8,-22.1).lineTo(-13.3,-22.5).lineTo(16.9,-48.1).lineTo(20.5,-44.6).lineTo(-7.7,-20.5).lineTo(-7.9,-18.8).lineTo(-9.4,-18.2).lineTo(-9.1,-16.7).lineTo(-10.4,-15.3).lineTo(-10.6,-13.5).lineTo(-12,-12.9).lineTo(-11.7,-11.1).lineTo(-12.7,-9.9).lineTo(-15.2,47).lineTo(-20.5,48.1).closePath();
	this.shape_12.setTransform(15.9,-40.3,0.386,0.386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-58.8,46.2,85.7);


(lib.Buy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1.2,5.6).lineTo(-1.2,-3.4).lineTo(-4.6,-3.4).lineTo(-4.6,-5.6).lineTo(4.6,-5.6).lineTo(4.6,-3.4).lineTo(1.2,-3.4).lineTo(1.2,5.6).closePath();
	this.shape.setTransform(114.9,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,5.6).curveTo(-1.6,5.6,-2.2,5.3).curveTo(-2.8,5.1,-3.4,4.7).curveTo(-4,4.4,-4.4,3.9).lineTo(-3,2.2).curveTo(-2.2,2.9,-1.4,3.2).lineTo(-0.6,3.5).lineTo(0.4,3.6).curveTo(1.1,3.6,1.5,3.3).curveTo(2,3,2,2.6).lineTo(2,2.5).curveTo(2,2,1.5,1.8).curveTo(1.1,1.4,-0.3,1).lineTo(-1.8,0.6).curveTo(-2.5,0.4,-3,-0).curveTo(-3.5,-0.4,-3.7,-0.9).curveTo(-4,-1.6,-4,-2.4).lineTo(-4,-2.4).curveTo(-4,-3.2,-3.7,-3.7).curveTo(-3.4,-4.4,-2.9,-4.8).curveTo(-2.4,-5.3,-1.7,-5.5).curveTo(-0.9,-5.7,-0.1,-5.7).lineTo(1.1,-5.6).lineTo(2.2,-5.4).lineTo(3.2,-5).lineTo(4.1,-4.4).lineTo(2.8,-2.5).curveTo(2,-3,1.3,-3.3).curveTo(0.6,-3.6,-0.1,-3.6).curveTo(-0.8,-3.6,-1.2,-3.3).curveTo(-1.6,-3.1,-1.6,-2.6).curveTo(-1.6,-2,-1.1,-1.7).curveTo(-0.6,-1.5,0.9,-1.1).lineTo(2.4,-0.6).curveTo(3.1,-0.3,3.5,0).curveTo(4,0.4,4.2,1).curveTo(4.4,1.6,4.4,2.2).lineTo(4.4,2.3).curveTo(4.4,3.1,4.1,3.7).curveTo(3.8,4.4,3.3,4.8).curveTo(2.7,5.3,2,5.5).curveTo(1.2,5.7,0.3,5.7).lineTo(-1,5.6).closePath();
	this.shape_1.setTransform(104.6,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1.2,5.7).lineTo(-2.4,5.4).lineTo(-3.4,4.8).lineTo(-4.3,4.1).lineTo(-5,3.3).lineTo(-5.5,2.2).curveTo(-5.7,1.7,-5.8,1.2).lineTo(-6,0).lineTo(-6,-0).lineTo(-5.8,-1.1).lineTo(-5.5,-2.3).lineTo(-4.9,-3.3).lineTo(-4.3,-4.1).lineTo(-3.4,-4.8).lineTo(-2.4,-5.4).lineTo(-1.2,-5.6).lineTo(0,-5.8).curveTo(0.6,-5.8,1.2,-5.6).lineTo(2.4,-5.4).curveTo(3,-5.1,3.4,-4.8).lineTo(4.3,-4.1).lineTo(5,-3.3).lineTo(5.5,-2.3).lineTo(5.9,-1.2).lineTo(6,-0).lineTo(6,-0).lineTo(5.9,1.1).lineTo(5.5,2.2).lineTo(5,3.3).lineTo(4.3,4.1).lineTo(3.4,4.8).lineTo(2.4,5.4).lineTo(1.2,5.6).lineTo(0,5.8).lineTo(-1.2,5.7).closePath().moveTo(-1.4,-3.3).curveTo(-2,-3,-2.5,-2.5).curveTo(-2.9,-2,-3.1,-1.4).curveTo(-3.4,-0.8,-3.4,-0).lineTo(-3.4,-0).curveTo(-3.4,0.7,-3.1,1.3).curveTo(-2.9,2,-2.4,2.5).curveTo(-2,3,-1.3,3.3).curveTo(-0.7,3.5,0,3.5).curveTo(0.8,3.5,1.4,3.3).curveTo(2,3,2.5,2.5).curveTo(2.9,2,3.2,1.4).curveTo(3.4,0.8,3.4,0).lineTo(3.4,-0).curveTo(3.4,-0.7,3.1,-1.4).curveTo(2.9,-2,2.5,-2.5).curveTo(1.9,-2.9,1.4,-3.3).curveTo(0.7,-3.5,0,-3.5).curveTo(-0.8,-3.5,-1.4,-3.3).closePath();
	this.shape_2.setTransform(92.8,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FF6A00").beginStroke().moveTo(3.1,5.6).lineTo(3.1,-1.7).lineTo(-0,3).lineTo(-0,3).lineTo(-3.2,-1.7).lineTo(-3.2,5.6).lineTo(-5.6,5.6).lineTo(-5.6,-5.6).lineTo(-2.9,-5.6).lineTo(-0,-0.9).lineTo(2.9,-5.6).lineTo(5.6,-5.6).lineTo(5.6,5.6).closePath();
	this.shape_3.setTransform(79.1,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,5.6).curveTo(-1.6,5.6,-2.2,5.3).curveTo(-2.8,5.1,-3.4,4.7).curveTo(-4,4.4,-4.4,3.9).lineTo(-3,2.2).curveTo(-2.2,2.9,-1.4,3.2).lineTo(-0.6,3.5).lineTo(0.4,3.6).curveTo(1.1,3.6,1.5,3.3).curveTo(2,3,2,2.6).lineTo(2,2.5).curveTo(2,2,1.5,1.8).curveTo(1.1,1.4,-0.3,1).lineTo(-1.8,0.6).curveTo(-2.5,0.4,-3,-0).curveTo(-3.5,-0.4,-3.7,-0.9).curveTo(-4,-1.6,-4,-2.4).lineTo(-4,-2.4).curveTo(-4,-3.2,-3.7,-3.7).curveTo(-3.4,-4.4,-2.9,-4.8).curveTo(-2.4,-5.3,-1.7,-5.5).curveTo(-0.9,-5.7,-0.1,-5.7).lineTo(1.1,-5.6).lineTo(2.2,-5.4).lineTo(3.2,-5).lineTo(4.1,-4.4).lineTo(2.8,-2.5).curveTo(2,-3,1.3,-3.3).curveTo(0.6,-3.6,-0.1,-3.6).curveTo(-0.8,-3.6,-1.2,-3.3).curveTo(-1.6,-3.1,-1.6,-2.6).curveTo(-1.6,-2,-1.1,-1.7).curveTo(-0.6,-1.5,0.9,-1.1).lineTo(2.4,-0.6).curveTo(3.1,-0.3,3.5,0).curveTo(4,0.4,4.2,1).curveTo(4.4,1.6,4.4,2.2).lineTo(4.4,2.3).curveTo(4.4,3.1,4.1,3.7).curveTo(3.8,4.4,3.3,4.8).curveTo(2.7,5.3,2,5.5).curveTo(1.2,5.7,0.3,5.7).lineTo(-1,5.6).closePath();
	this.shape_4.setTransform(62.1,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FF6A00").beginStroke().moveTo(3.4,7.4).lineTo(2.3,4.9).lineTo(-2.4,4.9).lineTo(-3.4,7.4).lineTo(-5.9,7.4).lineTo(-1.1,-3.9).lineTo(1.1,-3.9).lineTo(5.9,7.4).closePath().moveTo(1.4,2.7).lineTo(-0,-0.9).lineTo(-1.5,2.7).lineTo(1.4,2.7).closePath().moveTo(-1,-4.9).lineTo(0.9,-7.4).lineTo(3,-6.5).lineTo(0.9,-4.9).closePath();
	this.shape_5.setTransform(50.8,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FF6A00").beginStroke().moveTo(-4,5.6).lineTo(-4,-5.6).lineTo(-1.6,-5.6).lineTo(-1.6,3.4).lineTo(4,3.4).lineTo(4,5.6).closePath();
	this.shape_6.setTransform(40,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FF6A00").beginStroke().moveTo(2,5.6).lineTo(-0.4,2).lineTo(-2.4,2).lineTo(-2.4,5.6).lineTo(-4.8,5.6).lineTo(-4.8,-5.6).lineTo(0.3,-5.6).curveTo(1,-5.6,2.2,-5.3).curveTo(3,-5,3.6,-4.5).curveTo(4,-4,4.3,-3.4).curveTo(4.5,-2.7,4.5,-1.9).lineTo(4.5,-1.8).curveTo(4.5,-1.2,4.3,-0.7).curveTo(4.2,-0.1,3.8,0.3).lineTo(3.1,1.1).curveTo(2.7,1.4,2.1,1.6).lineTo(4.8,5.6).closePath().moveTo(-2.4,-0.1).lineTo(0.1,-0.1).lineTo(0.9,-0.2).lineTo(1.5,-0.6).curveTo(1.8,-0.8,1.9,-1.1).curveTo(2,-1.4,2,-1.7).curveTo(2,-2.2,1.9,-2.5).curveTo(1.8,-2.7,1.5,-2.9).lineTo(0.9,-3.3).curveTo(0.5,-3.4,0.1,-3.4).lineTo(-2.4,-3.4).closePath();
	this.shape_7.setTransform(29.2,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FF6A00").beginStroke().moveTo(3.4,7.4).lineTo(2.3,4.9).lineTo(-2.4,4.9).lineTo(-3.4,7.4).lineTo(-5.9,7.4).lineTo(-1.1,-3.9).lineTo(1.1,-3.9).lineTo(5.9,7.4).closePath().moveTo(1.4,2.7).lineTo(-0,-0.9).lineTo(-1.5,2.7).lineTo(1.4,2.7).closePath().moveTo(-1,-4.9).lineTo(0.9,-7.4).lineTo(3,-6.5).lineTo(0.9,-4.9).closePath();
	this.shape_8.setTransform(16.8,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1,5.6).curveTo(-1.6,5.6,-2.2,5.3).curveTo(-2.8,5.1,-3.4,4.7).curveTo(-4,4.4,-4.4,3.9).lineTo(-3,2.2).curveTo(-2.2,2.9,-1.4,3.2).lineTo(-0.6,3.5).lineTo(0.4,3.6).curveTo(1.1,3.6,1.5,3.3).curveTo(2,3,2,2.6).lineTo(2,2.5).curveTo(2,2,1.5,1.8).curveTo(1.1,1.4,-0.3,1).lineTo(-1.8,0.6).curveTo(-2.5,0.4,-3,-0).curveTo(-3.5,-0.4,-3.7,-0.9).curveTo(-4,-1.6,-4,-2.4).lineTo(-4,-2.4).curveTo(-4,-3.2,-3.7,-3.7).curveTo(-3.4,-4.4,-2.9,-4.8).curveTo(-2.4,-5.3,-1.7,-5.5).curveTo(-0.9,-5.7,-0.1,-5.7).lineTo(1.1,-5.6).lineTo(2.2,-5.4).lineTo(3.2,-5).lineTo(4.1,-4.4).lineTo(2.8,-2.5).curveTo(2,-3,1.3,-3.3).curveTo(0.6,-3.6,-0.1,-3.6).curveTo(-0.8,-3.6,-1.2,-3.3).curveTo(-1.6,-3.1,-1.6,-2.6).curveTo(-1.6,-2,-1.1,-1.7).curveTo(-0.6,-1.5,0.9,-1.1).lineTo(2.4,-0.6).curveTo(3.1,-0.3,3.5,0).curveTo(4,0.4,4.2,1).curveTo(4.4,1.6,4.4,2.2).lineTo(4.4,2.3).curveTo(4.4,3.1,4.1,3.7).curveTo(3.8,4.4,3.3,4.8).curveTo(2.7,5.3,2,5.5).curveTo(1.2,5.7,0.3,5.7).lineTo(-1,5.6).closePath();
	this.shape_9.setTransform(5.3,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF6A00").beginStroke().moveTo(3.4,7.4).lineTo(2.3,4.9).lineTo(-2.4,4.9).lineTo(-3.4,7.4).lineTo(-5.9,7.4).lineTo(-1.1,-3.9).lineTo(1.1,-3.9).lineTo(5.9,7.4).closePath().moveTo(1.4,2.7).lineTo(-0,-0.9).lineTo(-1.5,2.7).lineTo(1.4,2.7).closePath().moveTo(-1,-4.9).lineTo(0.9,-7.4).lineTo(3,-6.5).lineTo(0.9,-4.9).closePath();
	this.shape_10.setTransform(-6,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF6A00").beginStroke().moveTo(-1.1,5.7).lineTo(-5.6,-5.7).lineTo(-2.9,-5.7).lineTo(0.1,2.3).lineTo(3,-5.7).lineTo(5.6,-5.7).lineTo(1.1,5.7).closePath();
	this.shape_11.setTransform(-18.3,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,3.1,170.3,23.2);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(69.2,107.2).lineTo(-159.3,107.2).curveTo(-180.5,107.2,-196,95.9).curveTo(-212.1,84.2,-212.1,67).lineTo(-212.1,-122.3).curveTo(-212.1,-130.9,-207.7,-139.7).curveTo(-203.5,-148.2,-196,-155.1).curveTo(-179.6,-170.2,-159.3,-170.2).lineTo(153,-170.2).curveTo(163.1,-170.2,173.8,-166).curveTo(184.1,-162,192.9,-155.1).curveTo(201.7,-148.1,206.8,-139.7).curveTo(212.1,-130.8,212.1,-122.3).lineTo(212.1,67).curveTo(212.1,82.5,195.5,94.1).curveTo(180.2,104.8,159.6,106.7).lineTo(176.4,170.2).closePath().moveTo(86.1,-59.2).curveTo(77.2,-50.8,77.2,-38.6).curveTo(77.2,-27,85.4,-18.7).curveTo(93.7,-10.4,105.4,-10.4).curveTo(117.2,-10.4,125.4,-18.8).curveTo(133.7,-27.2,133.6,-39).curveTo(133.4,-50,125.8,-58).curveTo(118.1,-66.1,107.2,-66.8).lineTo(105.1,-66.8).curveTo(94.2,-66.8,86.1,-59.2).closePath().moveTo(-124.7,-59.2).curveTo(-133.6,-50.8,-133.6,-38.6).curveTo(-133.6,-27,-125.3,-18.7).curveTo(-117,-10.4,-105.4,-10.4).curveTo(-93.6,-10.4,-85.3,-18.8).curveTo(-77,-27.2,-77.2,-39).curveTo(-77.3,-49.9,-84.9,-58).curveTo(-92.6,-66.1,-103.5,-66.8).lineTo(-105.6,-66.8).curveTo(-116.5,-66.8,-124.7,-59.2).closePath().moveTo(-19.9,-58.6).curveTo(-29.1,-49.4,-28.1,-36.4).curveTo(-27.3,-26.1,-19.9,-18.7).curveTo(-12.5,-11.3,-2.3,-10.5).curveTo(10.7,-9.5,19.9,-18.7).curveTo(29.1,-27.9,28.1,-40.9).curveTo(27.3,-51.2,19.9,-58.6).curveTo(12.6,-65.9,2.3,-66.8).lineTo(-0.2,-66.9).curveTo(-11.6,-66.9,-19.9,-58.6).closePath();
	this.shape.setTransform(27.1,21.7,0.128,0.128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.5);


(lib.text31 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-287.2,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.9,1.6,207.7,19.6);


(lib.pohar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.Doplnění4("synched",0);
	this.instance.setTransform(15.1,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.2,85.7);


(lib.CogOrange = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Vrstva 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(10.7,10.2,1,1,0,0,0,10.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180,x:10.6,y:10.3},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,20.5);


(lib.CogBlue = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Vrstva 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(14.4,13.8,1,1,0,0,0,14.4,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90,y:13.9},14).to({rotation:-180},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,27.7);


(lib.CogBig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(27.4,27.4,1,1,0,0,0,27.4,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},15).to({regY:27.3,rotation:90},15).to({rotation:135},15).to({rotation:180,x:27.5},15).to({rotation:225},15).to({regY:27.4,rotation:270},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.7,54.7);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.4,5.6).lineTo(1.9,0).lineTo(-3.4,-5.6).lineTo(-3.4,-8.1).lineTo(3.4,-1.2).lineTo(3.4,1.2).lineTo(-3.4,8.1).closePath();
	this.shape.setTransform(220.2,194.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.4,5.6).lineTo(1.9,0).lineTo(-3.4,-5.6).lineTo(-3.4,-8.1).lineTo(3.4,-1.2).lineTo(3.4,1.2).lineTo(-3.4,8.1).closePath();
	this.shape_1.setTransform(228.2,194.4);

	this.instance = new lib.Buy();
	this.instance.setTransform(153.4,193.9,1,1,0,0,0,63.1,13.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Buy(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-2369.2,-1735.8).lineTo(2369.1,-1735.8).lineTo(2369.1,1735.8).lineTo(-2369.2,1735.8).closePath();
	this.shape_2.setTransform(1502.6,715.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6207").beginStroke().moveTo(-2369.1,1735.8).lineTo(-2369.1,-1735.8).lineTo(2369.1,-1735.8).lineTo(2369.1,1735.8).closePath();
	this.shape_3.setTransform(1502.6,715.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1,p:{x:228.2}},{t:this.shape,p:{x:220.2}}]}).to({state:[{t:this.instance},{t:this.shape_1,p:{x:233.9}},{t:this.shape,p:{x:225.8}}]},1).to({state:[{t:this.instance},{t:this.shape_1,p:{x:228.2}},{t:this.shape,p:{x:220.2}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.1,183.6,189.5,23.2);


// stage content:



(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_524 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(524).call(this.frame_524).wait(25));

	// IntelLogoi7
	this.instance = new lib.intelLogo();
	this.instance.setTransform(142,540,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(549));

	// Logo
	this.instance_1 = new lib.LenovoLogoPOSRedai("synched",0);
	this.instance_1.setTransform(283.4,69,0.063,0.062,-90,0,0,800.8,266.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(549));

	// LogoYoga
	this.instance_2 = new lib.yoga900Logo();
	this.instance_2.setTransform(172.8,117.3,1,1,0,0,0,14.7,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({alpha:0},6).to({_off:true},1).wait(284).to({_off:false,rotation:-90,x:117.6,y:57.1},0).to({alpha:1},5).wait(154).to({alpha:0},6).wait(7));

	// pic1
	this.instance_3 = new lib.image1();
	this.instance_3.setTransform(143.5,249.5,1,1,0,0,0,30.5,216.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:143.4,y:251.4,alpha:1},9).wait(156).to({alpha:0},6).to({_off:true},1).wait(377));

	// text1.1
	this.instance_4 = new lib.text11();
	this.instance_4.setTransform(100,469.5,1,1,0,0,0,49.1,9.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:3.5,regY:-267.1,x:65.8,y:193.2},0).wait(1).to({x:77.3},0).wait(1).to({x:88.7},0).wait(1).to({x:100.2},0).wait(1).to({x:96.7},0).wait(1).to({x:93.2},0).wait(1).to({x:89.7},0).wait(1).to({regX:49.1,regY:9.2,x:136.1,y:469.5},0).wait(63).to({x:136},0).wait(1).to({regX:3.5,regY:-267.1,x:88.1,y:193.2},0).wait(1).to({x:85.9},0).wait(2).to({x:87.8},0).wait(1).to({x:90.4},0).wait(1).to({x:88.5},0).wait(1).to({x:116.7},0).wait(1).to({x:142.4},0).to({_off:true},1).wait(459));

	// FlashAICB
	this.instance_5 = new lib.text12();
	this.instance_5.setTransform(113.1,488.3,1,1,0,0,0,64.3,9.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({regX:-43.1,regY:-264.6,x:12.6,y:214.5},0).wait(1).to({x:19.6},0).wait(1).to({x:26.6},0).wait(1).to({x:33.6},0).wait(1).to({x:40.6},0).wait(1).to({x:47.6},0).wait(1).to({x:43.6},0).wait(1).to({regX:64.3,regY:9.2,x:151.3,y:488.3},0).wait(62).to({x:151.1},0).wait(1).to({regX:-43.1,regY:-264.6,x:41.5,y:214.5},0).wait(1).to({x:38.9},0).wait(1).to({x:36.8},0).wait(1).to({x:39.1},0).wait(1).to({x:41.4},0).wait(1).to({x:59.5},0).wait(1).to({x:77.5},0).wait(1).to({x:95.6},0).to({_off:true},1).wait(457));

	// Vrstva 5
	this.instance_6 = new lib.txt2();
	this.instance_6.setTransform(57,440.8,1,1,0,0,0,40.2,9.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({_off:false},0).wait(1).to({regX:-0.8,regY:-398.4,x:38.3,y:33.2},0).wait(1).to({x:60.6},0).wait(1).to({x:83},0).wait(1).to({x:86.5},0).wait(1).to({x:89.4},0).wait(2).to({x:86.3},0).wait(1).to({x:83},0).wait(1).to({regX:40.2,regY:9.2,x:124.5,y:440.8},0).wait(55).to({x:123.2},0).wait(1).to({regX:-0.8,regY:-398.4,x:80.4,y:33.2},0).wait(1).to({x:78.9},0).wait(1).to({x:79.2},0).wait(1).to({x:80.9},0).wait(1).to({x:88.4},0).wait(1).to({x:96},0).wait(1).to({x:103.5},0).wait(1).to({x:111},0).to({_off:true},1).wait(383));

	// Vrstva 4
	this.instance_7 = new lib.txt22();
	this.instance_7.setTransform(46,464,1,1,0,0,0,28.7,9.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).wait(1).to({regX:0,regY:0,x:43.7,y:454.8},0).wait(1).to({x:70},0).wait(1).to({x:96.5},0).wait(1).to({x:93.9},0).wait(1).to({x:91.4},0).wait(1).to({x:88.9},0).wait(1).to({x:86.4},0).wait(1).to({x:83.8},0).wait(1).to({regX:28.7,regY:9.2,x:113.4,y:464},0).wait(55).to({x:113.1},0).wait(1).to({regX:0,regY:0,x:83.2,y:454.8},0).wait(1).to({x:82},0).wait(1).to({x:83.1},0).wait(1).to({x:84.3},0).wait(1).to({x:91.1},0).wait(1).to({x:98.3},0).wait(1).to({x:105.3},0).wait(1).to({x:112.3},0).to({_off:true},1).wait(382));

	// Vrstva 2
	this.instance_8 = new lib.obrazok2();
	this.instance_8.setTransform(150.7,118,1,1,0,0,0,136.7,77);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({_off:false},0).to({alpha:1},6).wait(126).to({alpha:0},5).to({_off:true},1).wait(242));

	// cup
	this.instance_9 = new lib.pohar();
	this.instance_9.setTransform(-25.1,87.9,1,1,0,0,0,23.1,42.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169).to({_off:false},0).to({x:62.9},6).wait(51).to({x:164.9},4).to({_off:true},1).wait(318));

	// text2.1
	this.instance_10 = new lib.text21();
	this.instance_10.setTransform(103,80.3,1,1,0,0,0,68.1,17.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).wait(1).to({regX:-5.3,regY:140.7,x:46.9,y:203.8},0).wait(1).to({x:64.3},0).wait(1).to({x:81.6},0).wait(1).to({x:85.2},0).wait(1).to({x:85},0).wait(1).to({x:81.6},0).wait(1).to({regX:68.1,regY:17.2,x:155.6,y:80.3},0).wait(51).to({x:155.1},0).wait(1).to({regX:-5.3,regY:140.7,x:78.5,y:203.8},0).wait(1).to({x:78.1},0).wait(1).to({x:81.6},0).wait(1).to({x:96.6},0).wait(1).to({x:111.6},0).wait(1).to({x:126.6},0).wait(1).to({x:141.6},0).to({_off:true},1).wait(315));

	// text2.2
	this.instance_11 = new lib.text22();
	this.instance_11.setTransform(103,115.5,1,1,0,0,0,68.1,17.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(238).to({_off:false},0).wait(1).to({regX:-2.6,regY:105.7,x:51.9,y:204},0).wait(1).to({x:71.6},0).wait(1).to({x:91.3},0).wait(1).to({x:89.5},0).wait(1).to({x:87.8},0).wait(1).to({x:86},0).wait(1).to({x:84.3},0).wait(1).to({regX:68.1,regY:17.2,x:155.6,y:115.5},0).wait(50).to({x:155.1},0).wait(1).to({regX:-2.6,regY:105.7,x:80.4,y:204},0).wait(1).to({x:79},0).wait(1).to({x:83.3},0).wait(1).to({x:98.5},0).wait(1).to({x:113.8},0).wait(1).to({x:129},0).wait(1).to({x:144.3},0).to({_off:true},1).wait(245));

	// Vrstva 7
	this.instance_12 = new lib.teeextbook();
	this.instance_12.setTransform(100.1,32.5,1,1,0,0,0,68.5,11);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(307).to({_off:false},0).wait(1).to({regX:1.6,regY:182.4,x:48.5,y:203.9,alpha:0.333},0).wait(1).to({x:63.8,alpha:0.667},0).wait(1).to({x:79.1,alpha:1},0).wait(1).to({x:83.2},0).wait(1).to({x:85.7},0).wait(1).to({x:81.6},0).wait(1).to({regX:68.5,regY:11,x:148.6,y:32.5},0).wait(42).to({x:147.1},0).wait(1).to({regX:1.6,regY:182.4,x:78.1,y:203.9},0).wait(1).to({x:76.5},0).wait(1).to({x:78.6},0).wait(1).to({x:90.5},0).wait(1).to({x:102.3},0).wait(1).to({x:114.2},0).to({_off:true},1).wait(186));

	// Vrstva 1
	this.instance_13 = new lib.modo4();
	this.instance_13.setTransform(149,119.5,1,1,0,0,0,150,84.5);
	this.instance_13.alpha = 0;
	this.instance_13.compositeOperation = "lighter";
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(307).to({_off:false},0).to({alpha:1},6).wait(49).to({regX:150.2,regY:84.6,scaleX:0.85,scaleY:0.85,rotation:38.7,x:149.2,y:137.1},5).wait(182));

	// text3.1
	this.instance_14 = new lib.text31();
	this.instance_14.setTransform(311.1,26.1,1,1,0,0,0,57.4,8.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(383).to({_off:false},0).wait(1).to({regX:-205.8,regY:10.1,x:75.5,y:27.6},0).wait(1).to({x:103.2},0).wait(1).to({x:130.9},0).wait(1).to({x:127.2},0).wait(1).to({x:123.5},0).wait(1).to({x:119.9},0).wait(1).to({regX:57.4,regY:8.6,x:383.4,y:26.1},0).wait(147).to({x:383.1},0).wait(1).to({regX:-205.8,regY:10.1,x:117.4,y:27.6},0).wait(1).to({x:116.6},0).wait(1).to({x:119.7},0).wait(1).to({x:121.9},0).wait(1).to({x:142.5},0).wait(1).to({x:163.1},0).wait(1).to({x:183.9},0).to({_off:true},1).wait(4));

	// text.intel1
	this.instance_15 = new lib.textintel1();
	this.instance_15.setTransform(233.2,565.3,1,1,0,0,0,77.8,25.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95).to({_off:false},0).to({x:150,alpha:1},7).wait(52).to({x:160,alpha:0},7).to({_off:true},1).wait(387));

	// Big
	this.instance_16 = new lib.CogBig();
	this.instance_16.setTransform(98.5,111.6,1,1,0,0,0,27.4,27.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(95).to({_off:false},0).to({alpha:1},7).wait(52).to({alpha:0},7).to({_off:true},1).wait(387));

	// Blue
	this.instance_17 = new lib.CogBlue();
	this.instance_17.setTransform(80.6,73.1,1,1,0,0,0,14.4,13.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({alpha:1},7).wait(50).to({alpha:0},7).to({_off:true},1).wait(388));

	// Orange
	this.instance_18 = new lib.CogOrange();
	this.instance_18.setTransform(60.5,92.5,1,1,0,0,0,10.7,10.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(97).to({_off:false},0).to({alpha:1},7).wait(48).to({alpha:0},7).to({_off:true},1).wait(389));

	// blue
	this.instance_19 = new lib.blue();
	this.instance_19.setTransform(123.9,77.8,1,1,0,0,0,27.1,21.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(238).to({_off:false},0).to({x:58.9,y:51.8},8).wait(50).to({x:123.9,y:84.3,alpha:0},6).to({_off:true},1).wait(246));

	// orange
	this.instance_20 = new lib.orange();
	this.instance_20.setTransform(44.7,62.6,1,1,0,0,0,22.9,18.6);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(246).to({_off:false},0).to({alpha:1},5).to({_off:true},45).wait(253));

	// text3.2
	this.instance_21 = new lib.text32();
	this.instance_21.setTransform(310.1,43.3,1,1,0,0,0,41.4,8.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(387).to({_off:false},0).wait(1).to({regX:-225.5,regY:11.7,x:59.9,y:46.4},0).wait(1).to({x:76.7},0).wait(1).to({x:93.4},0).wait(1).to({x:110.2},0).wait(1).to({x:106.8},0).wait(1).to({x:103.5},0).wait(1).to({x:100.2},0).wait(1).to({regX:41.4,regY:8.6,x:367.4,y:43.3},0).wait(145).to({x:367.1},0).wait(1).to({regX:-225.5,regY:11.7,x:97.3,y:46.4},0).wait(1).to({x:98.2},0).wait(1).to({x:102},0).wait(1).to({x:104.2},0).wait(1).to({x:126.8},0).wait(1).to({x:149.5},0).wait(1).to({x:172.2},0).to({_off:true},1).wait(1));

	// text.intel2
	this.instance_22 = new lib.textintel2();
	this.instance_22.setTransform(220,573.3,1,1,0,0,0,71.3,17.2);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(367).to({_off:false},0).to({x:150,alpha:1},7).wait(52).to({x:214,alpha:0},7).to({_off:true},1).wait(115));

	// Vrstva 8
	this.instance_23 = new lib.Button();
	this.instance_23.setTransform(-13,61,0.748,0.748);
	this.instance_23._off = true;
	new cjs.ButtonHelper(this.instance_23, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(428).to({_off:false},0).wait(1).to({regX:1502.5,regY:715.5,x:1120,y:596.1},0).wait(1).to({x:1129.2},0).wait(1).to({x:1138.4},0).wait(1).to({x:1140.1},0).wait(1).to({x:1141.6},0).wait(1).to({x:1141.5},0).wait(1).to({x:1139.8},0).wait(1).to({regX:0,regY:0,x:16.5,y:61},0).wait(113));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-150,125).lineTo(-150,-125).lineTo(150,-125).lineTo(150,125).closePath();
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(549));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;