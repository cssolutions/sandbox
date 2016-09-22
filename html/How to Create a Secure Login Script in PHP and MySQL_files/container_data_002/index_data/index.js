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
		{src:"images/_0.png", id:"_0"},
		{src:"images/image1.png", id:"image1"},
		{src:"images/image2.png", id:"image2"},
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



(lib._0 = function() {
	this.initialize(img._0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,302);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,213);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,104);


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

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB6209").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.1,4.4).curveTo(-3.7,4.2,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.5,3.3).lineTo(0.4,3.4).curveTo(1,3.3,1.5,3.1).curveTo(1.8,2.8,1.8,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.3,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.7,-1.4,-3.8,-2.2).lineTo(-3.8,-2.2).curveTo(-3.8,-2.9,-3.4,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.5,-5.2).curveTo(-0.8,-5.4,-0.1,-5.4).lineTo(1.1,-5.3).lineTo(2.1,-5.1).lineTo(3,-4.6).lineTo(3.9,-4).lineTo(2.6,-2.3).curveTo(1.9,-2.8,1.3,-3.1).curveTo(0.5,-3.4,-0.1,-3.4).curveTo(-0.8,-3.4,-1.1,-3.1).curveTo(-1.5,-2.9,-1.4,-2.5).lineTo(-1.4,-2.4).curveTo(-1.5,-1.9,-1,-1.7).curveTo(-0.6,-1.4,0.8,-1).lineTo(2.3,-0.6).curveTo(2.8,-0.3,3.3,0).curveTo(3.7,0.4,4,0.9).curveTo(4.1,1.4,4.1,2.1).lineTo(4.1,2.1).curveTo(4.1,2.9,3.9,3.5).curveTo(3.6,4.1,3.1,4.5).curveTo(2.5,4.9,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape.setTransform(21.1,-367.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EB6209").beginStroke().moveTo(3.1,6.9).lineTo(2.2,4.6).lineTo(-2.2,4.6).lineTo(-3.2,6.9).lineTo(-5.6,6.9).lineTo(-1.1,-3.7).lineTo(1.1,-3.7).lineTo(5.6,6.9).closePath().moveTo(1.4,2.5).lineTo(-0,-0.9).lineTo(-1.4,2.5).lineTo(1.4,2.5).closePath().moveTo(-0.9,-4.6).lineTo(0.9,-6.9).lineTo(2.8,-6).lineTo(0.8,-4.6).closePath();
	this.shape_1.setTransform(8.9,-368.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.5).lineTo(-1.4,3.3).lineTo(4.4,3.3).lineTo(4.4,5.3).closePath();
	this.shape_2.setTransform(-3.8,-367.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6209").beginStroke().moveTo(-0.6,5.3).lineTo(-1.7,5).curveTo(-2.3,4.8,-2.6,4.5).lineTo(-3.4,3.9).curveTo(-3.9,3.5,-4.1,3.1).lineTo(-4.6,2.2).lineTo(-4.9,1.1).lineTo(-5,0).lineTo(-5,0).lineTo(-4.9,-1.1).lineTo(-4.6,-2.1).lineTo(-4.1,-3).lineTo(-3.4,-3.8).lineTo(-2.6,-4.5).lineTo(-1.7,-5).lineTo(-0.6,-5.3).curveTo(-0.1,-5.4,0.5,-5.5).lineTo(1.8,-5.4).lineTo(2.9,-5.1).curveTo(3.5,-4.8,4.6,-4).lineTo(3.1,-2.2).curveTo(2.5,-2.8,2,-3).curveTo(1.3,-3.3,0.4,-3.3).curveTo(-0.2,-3.3,-0.7,-3).curveTo(-1.3,-2.8,-1.7,-2.4).curveTo(-2.1,-1.9,-2.4,-1.3).curveTo(-2.6,-0.7,-2.6,-0.1).lineTo(-2.6,0).curveTo(-2.6,0.7,-2.4,1.4).curveTo(-2.1,1.9,-1.7,2.4).curveTo(-1.2,2.9,-0.7,3.1).curveTo(-0.1,3.3,0.6,3.4).curveTo(1.2,3.4,1.8,3.2).curveTo(2.3,3,2.8,2.7).lineTo(2.8,1.2).lineTo(0.4,1.2).lineTo(0.4,-0.8).lineTo(5,-0.8).lineTo(5,3.7).curveTo(3.8,4.6,3,5).curveTo(2.5,5.2,1.9,5.3).curveTo(1.2,5.5,0.5,5.4).curveTo(-0.1,5.5,-0.6,5.3).closePath();
	this.shape_3.setTransform(-16.5,-367.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6209").beginStroke().moveTo(2.7,5.3).lineTo(-2.4,-1.4).lineTo(-2.4,5.3).lineTo(-4.7,5.3).lineTo(-4.7,-5.3).lineTo(-2.5,-5.3).lineTo(2.4,1.2).lineTo(2.4,-5.3).lineTo(4.7,-5.3).lineTo(4.7,5.3).closePath();
	this.shape_4.setTransform(-29.8,-367.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EB6209").beginStroke().moveTo(3.1,5.3).lineTo(2.2,3).lineTo(-2.2,3).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_5.setTransform(-43.1,-367.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EB6209").beginStroke().moveTo(2.2,5.3).lineTo(2.2,1).lineTo(-2.2,1).lineTo(-2.2,5.3).lineTo(-4.4,5.3).lineTo(-4.4,-5.3).lineTo(-2.2,-5.3).lineTo(-2.2,-1.1).lineTo(2.2,-1.1).lineTo(2.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,5.3).closePath();
	this.shape_6.setTransform(-56.2,-367.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-378.3,93.6,22);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.4).curveTo(-3.7,4.1,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.3).lineTo(0.3,3.3).curveTo(1.1,3.3,1.4,3.1).curveTo(1.9,2.8,1.9,2.4).curveTo(1.9,1.9,1.4,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.7,-2.2).lineTo(-3.7,-2.2).curveTo(-3.7,-3,-3.4,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.6,-5.1).curveTo(-0.8,-5.4,-0,-5.4).lineTo(1.1,-5.3).lineTo(2,-5).lineTo(3,-4.7).lineTo(3.8,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.8,1.2,-3.1).curveTo(0.6,-3.3,-0.1,-3.3).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.4,-2.8,-1.5,-2.4).lineTo(-1.5,-2.4).curveTo(-1.4,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.9,-0.3,3.3,0).curveTo(3.7,0.5,3.9,0.9).curveTo(4.1,1.5,4.1,2.1).lineTo(4.1,2.2).curveTo(4.1,2.9,3.8,3.5).curveTo(3.6,4.2,3,4.5).curveTo(2.5,4.9,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape.setTransform(71.9,-366.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.9,5).lineTo(-2.7,4.7).lineTo(-3.4,4.2).lineTo(-3.9,3.5).lineTo(-4.3,2.7).lineTo(-4.5,1.8).lineTo(-4.6,0.7).lineTo(-4.6,-5.3).lineTo(-2.3,-5.3).lineTo(-2.3,0.6).curveTo(-2.3,1.2,-2.1,1.7).curveTo(-2,2.2,-1.7,2.6).curveTo(-1.4,2.9,-1,3).curveTo(-0.5,3.2,-0,3.2).curveTo(0.5,3.2,0.9,3.1).curveTo(1.4,2.9,1.7,2.6).lineTo(2.1,1.8).curveTo(2.3,1.3,2.3,0.7).lineTo(2.3,-5.3).lineTo(4.6,-5.3).lineTo(4.6,0.6).lineTo(4.5,1.7).curveTo(4.4,2.2,4.2,2.7).lineTo(3.9,3.5).lineTo(3.3,4.2).lineTo(2.7,4.7).lineTo(1.9,5).curveTo(0.7,5.3,-0,5.3).curveTo(-1.4,5.2,-1.9,5).closePath();
	this.shape_1.setTransform(60,-366.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2,5.2).lineTo(-1.2,0.8).lineTo(-2.5,2.1).lineTo(-2.5,5.2).lineTo(-4.8,5.2).lineTo(-4.8,-5.3).lineTo(-2.5,-5.3).lineTo(-2.5,-0.6).lineTo(1.8,-5.3).lineTo(4.6,-5.3).lineTo(0.3,-0.8).lineTo(4.8,5.2).closePath();
	this.shape_2.setTransform(47.9,-366.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.2).lineTo(-1.2,-5.3).lineTo(1.2,-5.3).lineTo(1.2,5.2).closePath();
	this.shape_3.setTransform(37.9,-366.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.2).lineTo(-1.2,-3.1).lineTo(-4.4,-3.1).lineTo(-4.4,-5.3).lineTo(4.3,-5.3).lineTo(4.3,-3.1).lineTo(1.2,-3.1).lineTo(1.2,5.2).closePath();
	this.shape_4.setTransform(29.1,-366.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.4,5.2).lineTo(-4.4,3.5).lineTo(1.4,-3.2).lineTo(-4.2,-3.2).lineTo(-4.2,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.5).lineTo(-1.4,3.3).lineTo(4.4,3.3).lineTo(4.4,5.2).closePath();
	this.shape_5.setTransform(17.4,-366.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.4).curveTo(-3.7,4.1,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.3).lineTo(0.3,3.3).curveTo(1.1,3.3,1.4,3.1).curveTo(1.9,2.8,1.9,2.4).curveTo(1.9,1.9,1.4,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.7,-2.2).lineTo(-3.7,-2.2).curveTo(-3.7,-3,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.6,-5.1).curveTo(-0.8,-5.4,-0,-5.4).lineTo(1,-5.3).lineTo(2,-5).lineTo(3,-4.7).lineTo(3.8,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.8,1.2,-3.1).curveTo(0.6,-3.3,-0.1,-3.3).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.4,-2.8,-1.5,-2.4).lineTo(-1.5,-2.4).curveTo(-1.4,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.9,-0.3,3.3,0).curveTo(3.7,0.5,3.9,0.9).curveTo(4.1,1.5,4.1,2.1).lineTo(4.1,2.2).curveTo(4.1,2.9,3.8,3.5).curveTo(3.6,4.2,3,4.5).curveTo(2.5,4.9,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_6.setTransform(5.7,-366.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,5.3).lineTo(2.2,2.9).lineTo(-2.2,2.9).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_7.setTransform(-6.4,-366.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.2).lineTo(-1.2,-3.1).lineTo(-4.3,-3.1).lineTo(-4.3,-5.3).lineTo(4.4,-5.3).lineTo(4.4,-3.1).lineTo(1.1,-3.1).lineTo(1.1,5.2).closePath();
	this.shape_8.setTransform(-18.7,-366.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,5.2).lineTo(-2.4,-1.4).lineTo(-2.4,5.2).lineTo(-4.7,5.2).lineTo(-4.7,-5.3).lineTo(-2.5,-5.3).lineTo(2.4,1.2).lineTo(2.4,-5.3).lineTo(4.7,-5.3).lineTo(4.7,5.2).closePath();
	this.shape_9.setTransform(-31,-366.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,5.3).lineTo(2.2,2.9).lineTo(-2.2,2.9).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_10.setTransform(-44.3,-366.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.3).lineTo(4,-5.3).lineTo(4,-3.1).lineTo(-1.7,-3.1).lineTo(-1.7,-0.9).lineTo(3.4,-0.9).lineTo(3.4,1.2).lineTo(-1.7,1.2).lineTo(-1.7,5.2).closePath();
	this.shape_11.setTransform(-56.3,-366.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-377.6,144,22);


(lib.text32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.8,5.3).lineTo(-4.8,-5.2).lineTo(-0.8,-5.2).lineTo(0.5,-5.2).lineTo(1.5,-4.9).lineTo(2.5,-4.4).lineTo(3.3,-3.7).lineTo(3.9,-3).lineTo(4.4,-2.1).lineTo(4.7,-1.1).lineTo(4.8,-0).lineTo(4.8,-0).lineTo(4.7,1.1).curveTo(4.7,1.6,4.4,2).curveTo(4.3,2.5,3.9,2.9).lineTo(3.3,3.8).lineTo(2.5,4.4).lineTo(1.5,4.8).lineTo(0.5,5.2).lineTo(-0.8,5.3).closePath().moveTo(-2.6,3.1).lineTo(-0.8,3.1).curveTo(-0.1,3.1,0.6,2.9).curveTo(1.1,2.7,1.6,2.3).curveTo(2,1.9,2.2,1.3).curveTo(2.4,0.7,2.4,0.1).lineTo(2.4,-0).curveTo(2.4,-0.7,2.2,-1.3).curveTo(2,-1.9,1.6,-2.3).curveTo(1.1,-2.7,0.6,-2.9).curveTo(-0.1,-3.2,-0.8,-3.2).lineTo(-2.6,-3.2).closePath();
	this.shape.setTransform(-149.3,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,5.3).lineTo(2.2,3).lineTo(-2.2,3).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_1.setTransform(-162.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.5).curveTo(-3.7,4.2,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.2).lineTo(0.3,3.4).curveTo(1.1,3.4,1.4,3.1).curveTo(1.9,2.9,1.9,2.3).curveTo(1.9,1.9,1.4,1.6).curveTo(1,1.4,-0.2,1).lineTo(-1.7,0.5).lineTo(-2.8,-0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.7,-2.2).lineTo(-3.7,-2.3).curveTo(-3.7,-3,-3.5,-3.5).curveTo(-3.2,-4.1,-2.7,-4.5).curveTo(-2.2,-5,-1.6,-5.2).curveTo(-0.8,-5.4,-0,-5.4).lineTo(1,-5.3).lineTo(2,-5.1).lineTo(3,-4.6).lineTo(3.8,-4.1).lineTo(2.7,-2.3).curveTo(1.9,-2.9,1.2,-3.1).curveTo(0.6,-3.3,-0.1,-3.4).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.4,-2.8,-1.5,-2.5).lineTo(-1.5,-2.4).curveTo(-1.4,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1).lineTo(2.2,-0.6).curveTo(2.9,-0.3,3.3,0.1).curveTo(3.7,0.5,3.9,1).curveTo(4.1,1.4,4.1,2.1).lineTo(4.1,2.1).curveTo(4.1,2.9,3.8,3.6).curveTo(3.6,4.2,3,4.6).curveTo(2.5,4.9,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_2.setTransform(-175.2,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(1.8,5.3).lineTo(-0.4,1.9).lineTo(-2.2,1.9).lineTo(-2.2,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(0.3,-5.2).curveTo(0.9,-5.3,2.1,-5).curveTo(2.8,-4.7,3.3,-4.2).curveTo(3.7,-3.7,4,-3.2).curveTo(4.2,-2.5,4.2,-1.8).lineTo(4.2,-1.7).curveTo(4.2,-1.2,4.1,-0.6).curveTo(3.9,-0.1,3.6,0.3).lineTo(2.9,1).curveTo(2.5,1.3,2,1.5).lineTo(4.5,5.3).closePath().moveTo(-2.2,-0.1).lineTo(0.1,-0.1).lineTo(0.8,-0.2).curveTo(1.2,-0.4,1.4,-0.6).curveTo(1.7,-0.8,1.7,-1).curveTo(1.9,-1.3,1.9,-1.7).curveTo(1.9,-2,1.7,-2.3).curveTo(1.7,-2.6,1.4,-2.8).curveTo(1.1,-3,0.8,-3.1).lineTo(0,-3.2).lineTo(-2.2,-3.2).closePath();
	this.shape_3.setTransform(-186.4,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,6.9).lineTo(2.2,4.6).lineTo(-2.2,4.6).lineTo(-3.2,6.9).lineTo(-5.6,6.9).lineTo(-1.1,-3.7).lineTo(1.1,-3.7).lineTo(5.6,6.9).closePath().moveTo(1.4,2.5).lineTo(-0,-0.9).lineTo(-1.4,2.5).lineTo(1.4,2.5).closePath().moveTo(-0.9,-4.6).lineTo(0.9,-6.9).lineTo(2.8,-6).lineTo(0.8,-4.6).closePath();
	this.shape_4.setTransform(-199.6,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.1,5.3).lineTo(-1.1,-3.1).lineTo(-4.4,-3.1).lineTo(-4.4,-5.2).lineTo(4.4,-5.2).lineTo(4.4,-3.1).lineTo(1.1,-3.1).lineTo(1.1,5.3).closePath();
	this.shape_5.setTransform(-211.9,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.1,4.5).curveTo(-3.7,4.2,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.5,3.2).lineTo(0.4,3.4).curveTo(1,3.4,1.4,3.1).curveTo(1.8,2.9,1.8,2.3).curveTo(1.8,1.9,1.4,1.6).curveTo(1,1.4,-0.3,1).lineTo(-1.7,0.5).lineTo(-2.8,-0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.8,-2.2).lineTo(-3.8,-2.3).curveTo(-3.8,-3,-3.4,-3.5).curveTo(-3.2,-4.1,-2.7,-4.5).curveTo(-2.2,-5,-1.5,-5.2).curveTo(-0.8,-5.4,-0.1,-5.4).lineTo(1.1,-5.3).lineTo(2.1,-5.1).lineTo(3,-4.6).lineTo(3.9,-4.1).lineTo(2.6,-2.3).curveTo(1.9,-2.9,1.3,-3.1).curveTo(0.5,-3.3,-0.1,-3.4).curveTo(-0.8,-3.3,-1.1,-3.1).curveTo(-1.5,-2.8,-1.4,-2.5).lineTo(-1.4,-2.4).curveTo(-1.5,-1.9,-1,-1.7).curveTo(-0.6,-1.4,0.8,-1).lineTo(2.3,-0.6).curveTo(2.8,-0.3,3.3,0.1).curveTo(3.7,0.5,4,1).curveTo(4.1,1.4,4.1,2.1).lineTo(4.1,2.1).curveTo(4.1,2.9,3.9,3.6).curveTo(3.6,4.2,3.1,4.6).curveTo(2.5,4.9,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_6.setTransform(-229.1,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,5.3).lineTo(-2.4,-1.4).lineTo(-2.4,5.3).lineTo(-4.7,5.3).lineTo(-4.7,-5.2).lineTo(-2.5,-5.2).lineTo(2.4,1.2).lineTo(2.4,-5.2).lineTo(4.7,-5.2).lineTo(4.7,5.3).closePath();
	this.shape_7.setTransform(-241.3,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(3.1,6.9).lineTo(2.2,4.6).lineTo(-2.2,4.6).lineTo(-3.2,6.9).lineTo(-5.6,6.9).lineTo(-1.1,-3.7).lineTo(1.1,-3.7).lineTo(5.6,6.9).closePath().moveTo(1.4,2.5).lineTo(-0,-0.9).lineTo(-1.4,2.5).lineTo(1.4,2.5).closePath().moveTo(-0.9,-4.6).lineTo(0.9,-6.9).lineTo(2.8,-6).lineTo(0.8,-4.6).closePath();
	this.shape_8.setTransform(-254.6,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.7,5.3).lineTo(-1.7,5).curveTo(-2.3,4.9,-2.6,4.6).lineTo(-3.4,3.9).curveTo(-3.8,3.5,-4.1,3.1).lineTo(-4.6,2.2).lineTo(-4.9,1.1).lineTo(-5,0.1).lineTo(-5,-0).lineTo(-4.9,-1.1).lineTo(-4.6,-2.1).lineTo(-4.1,-3.1).lineTo(-3.4,-3.8).lineTo(-2.6,-4.5).lineTo(-1.7,-5).lineTo(-0.7,-5.3).curveTo(-0.1,-5.5,0.5,-5.4).lineTo(1.8,-5.3).lineTo(2.9,-5.1).curveTo(3.5,-4.8,4.6,-4).lineTo(3.1,-2.3).curveTo(2.5,-2.8,2,-3).curveTo(1.3,-3.3,0.4,-3.3).curveTo(-0.2,-3.3,-0.7,-3.1).curveTo(-1.3,-2.8,-1.7,-2.4).curveTo(-2.2,-1.9,-2.4,-1.3).curveTo(-2.6,-0.7,-2.6,-0).lineTo(-2.6,-0).curveTo(-2.6,0.7,-2.4,1.3).curveTo(-2.1,2,-1.7,2.4).curveTo(-1.2,2.8,-0.7,3.1).curveTo(-0.1,3.4,0.6,3.4).curveTo(1.2,3.3,1.8,3.1).curveTo(2.3,3,2.8,2.7).lineTo(2.8,1.2).lineTo(0.4,1.2).lineTo(0.4,-0.8).lineTo(5,-0.8).lineTo(5,3.8).curveTo(3.8,4.7,3,4.9).curveTo(2.5,5.2,1.9,5.3).lineTo(0.5,5.5).curveTo(-0.1,5.4,-0.7,5.3).closePath();
	this.shape_9.setTransform(-268,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.3).lineTo(-4,-5.2).lineTo(4,-5.2).lineTo(4,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1).lineTo(3.3,-1).lineTo(3.3,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.3).closePath();
	this.shape_10.setTransform(-280.1,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-3.8,5.3).lineTo(-3.8,-5.2).lineTo(-1.5,-5.2).lineTo(-1.5,3.1).lineTo(3.8,3.1).lineTo(3.8,5.3).closePath();
	this.shape_11.setTransform(-291.1,14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.3).lineTo(-4,-5.2).lineTo(4,-5.2).lineTo(4,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1).lineTo(3.2,-1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.3).closePath();
	this.shape_12.setTransform(-302.4,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.6,3.1,258.5,22);


(lib.text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.7,5.2).lineTo(-2.4,-1.4).lineTo(-2.4,5.2).lineTo(-4.7,5.2).lineTo(-4.7,-5.3).lineTo(-2.5,-5.3).lineTo(2.4,1.2).lineTo(2.4,-5.3).lineTo(4.7,-5.3).lineTo(4.7,5.2).closePath();
	this.shape.setTransform(-7.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.7,5.3).lineTo(-1.8,5).curveTo(-2.2,4.9,-2.7,4.5).lineTo(-3.5,3.9).curveTo(-3.8,3.6,-4.1,3.1).lineTo(-4.6,2.2).lineTo(-4.9,1.2).lineTo(-5,0).lineTo(-5,0).lineTo(-4.9,-1.1).lineTo(-4.6,-2.1).lineTo(-4.1,-3).lineTo(-3.5,-3.9).lineTo(-2.7,-4.5).lineTo(-1.7,-5).lineTo(-0.7,-5.3).curveTo(-0.1,-5.4,0.5,-5.5).lineTo(1.8,-5.4).lineTo(2.8,-5).curveTo(3.5,-4.8,4.6,-4).lineTo(3.1,-2.2).curveTo(2.5,-2.8,1.9,-3).curveTo(1.3,-3.3,0.4,-3.3).curveTo(-0.2,-3.3,-0.8,-3).curveTo(-1.3,-2.8,-1.7,-2.3).curveTo(-2.2,-1.9,-2.4,-1.3).curveTo(-2.6,-0.7,-2.6,-0.1).lineTo(-2.6,0).curveTo(-2.6,0.7,-2.4,1.4).curveTo(-2.1,1.9,-1.7,2.4).curveTo(-1.3,2.9,-0.7,3.1).curveTo(-0.1,3.3,0.6,3.3).curveTo(1.2,3.3,1.8,3.2).curveTo(2.3,3,2.7,2.7).lineTo(2.7,1.2).lineTo(0.4,1.2).lineTo(0.4,-0.8).lineTo(5,-0.8).lineTo(5,3.7).curveTo(3.8,4.7,3,5).curveTo(2.5,5.2,1.9,5.3).lineTo(0.5,5.4).curveTo(-0.1,5.4,-0.7,5.3).closePath();
	this.shape_1.setTransform(-20.7,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,5.2).lineTo(-1.2,-5.3).lineTo(1.2,-5.3).lineTo(1.2,5.2).closePath();
	this.shape_2.setTransform(-30.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.1,4.4).curveTo(-3.7,4.1,-4.1,3.7).lineTo(-2.8,2.1).curveTo(-2,2.7,-1.3,3).lineTo(-0.5,3.3).lineTo(0.4,3.3).curveTo(1,3.3,1.5,3.1).curveTo(1.8,2.8,1.8,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.7,-1.5,-3.8,-2.2).lineTo(-3.8,-2.2).curveTo(-3.8,-3,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.6,-5.1).curveTo(-0.8,-5.4,-0.1,-5.4).lineTo(1,-5.3).lineTo(2,-5).lineTo(3,-4.7).lineTo(3.8,-4).lineTo(2.6,-2.3).curveTo(1.9,-2.8,1.3,-3.1).curveTo(0.5,-3.3,-0.1,-3.3).curveTo(-0.7,-3.3,-1.1,-3.1).curveTo(-1.4,-2.8,-1.4,-2.4).lineTo(-1.4,-2.4).curveTo(-1.5,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.3,-0.5).curveTo(2.8,-0.3,3.3,0).curveTo(3.7,0.5,4,0.9).curveTo(4.2,1.5,4.2,2.1).lineTo(4.2,2.2).curveTo(4.2,2.9,3.8,3.5).curveTo(3.6,4.2,3.1,4.5).curveTo(2.5,4.9,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_3.setTransform(-39.4,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.3).lineTo(3.9,-5.3).lineTo(3.9,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.3,-1.1).lineTo(3.3,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_4.setTransform(-50.4,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.9,5.2).lineTo(-4.9,-5.3).lineTo(-0.7,-5.3).lineTo(0.4,-5.1).lineTo(1.5,-4.8).lineTo(2.4,-4.4).lineTo(3.3,-3.8).lineTo(3.9,-3).lineTo(4.4,-2.1).lineTo(4.7,-1.1).lineTo(4.8,-0.1).lineTo(4.8,0).lineTo(4.7,1.1).curveTo(4.6,1.6,4.4,2.1).curveTo(4.2,2.5,3.9,3).lineTo(3.3,3.7).lineTo(2.4,4.3).lineTo(1.5,4.9).lineTo(0.4,5.1).lineTo(-0.7,5.2).closePath().moveTo(-2.5,3.2).lineTo(-0.7,3.2).curveTo(-0.1,3.2,0.5,3).curveTo(1.1,2.7,1.5,2.3).curveTo(1.9,1.9,2.2,1.3).curveTo(2.4,0.7,2.4,0).lineTo(2.4,0).curveTo(2.4,-0.7,2.2,-1.3).curveTo(1.9,-1.8,1.5,-2.3).curveTo(1.1,-2.7,0.5,-3).curveTo(-0.1,-3.1,-0.7,-3.1).lineTo(-2.5,-3.1).closePath();
	this.shape_5.setTransform(-62.8,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,18.4,245,22);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB6209").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.1,4.5).curveTo(-3.7,4.2,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2,2.7,-1.3,3).lineTo(-0.6,3.2).lineTo(0.3,3.4).curveTo(1,3.4,1.5,3.1).curveTo(1.8,2.9,1.8,2.3).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.4,-0.2,1).lineTo(-1.7,0.5).lineTo(-2.8,-0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.8,-1.5,-3.7,-2.2).lineTo(-3.7,-2.3).curveTo(-3.7,-3,-3.5,-3.5).curveTo(-3.2,-4.1,-2.7,-4.5).curveTo(-2.2,-5,-1.6,-5.2).curveTo(-0.9,-5.4,-0.1,-5.4).lineTo(1,-5.3).lineTo(2,-5.1).lineTo(3,-4.6).lineTo(3.8,-4.1).lineTo(2.6,-2.3).curveTo(1.9,-2.9,1.2,-3.1).curveTo(0.6,-3.3,-0.1,-3.4).curveTo(-0.7,-3.3,-1.1,-3.1).curveTo(-1.5,-2.8,-1.5,-2.5).lineTo(-1.5,-2.4).curveTo(-1.5,-1.9,-1,-1.6).curveTo(-0.5,-1.4,0.8,-1).lineTo(2.3,-0.6).curveTo(2.9,-0.3,3.3,0.1).curveTo(3.7,0.5,3.9,1).curveTo(4.2,1.4,4.2,2.1).lineTo(4.2,2.1).curveTo(4.2,2.9,3.8,3.6).curveTo(3.6,4.2,3,4.6).curveTo(2.6,4.9,1.8,5.2).curveTo(1.2,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape.setTransform(26.6,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EB6209").beginStroke().moveTo(3.1,5.3).lineTo(2.2,3).lineTo(-2.2,3).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_1.setTransform(14.5,47.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EB6209").beginStroke().moveTo(3,5.3).lineTo(3,-1.6).lineTo(-0,2.9).lineTo(-0,2.9).lineTo(-3,-1.6).lineTo(-3,5.3).lineTo(-5.2,5.3).lineTo(-5.2,-5.3).lineTo(-2.7,-5.3).lineTo(-0,-0.8).lineTo(2.8,-5.3).lineTo(5.2,-5.3).lineTo(5.2,5.3).closePath();
	this.shape_2.setTransform(0.6,47.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6209").beginStroke().moveTo(-3.8,5.3).lineTo(-3.8,-5.3).lineTo(-1.5,-5.3).lineTo(-1.5,3.1).lineTo(3.8,3.1).lineTo(3.8,5.3).closePath();
	this.shape_3.setTransform(-11.7,47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6209").beginStroke().moveTo(3.1,5.3).lineTo(2.2,3).lineTo(-2.2,3).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_4.setTransform(-24.1,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EB6209").beginStroke().moveTo(-0.7,5.3).lineTo(-1.7,5).curveTo(-2.2,4.9,-2.6,4.6).lineTo(-3.5,3.9).curveTo(-3.8,3.5,-4.1,3.1).lineTo(-4.6,2.2).lineTo(-4.9,1.1).lineTo(-5,0.1).lineTo(-5,-0).lineTo(-4.9,-1.1).lineTo(-4.6,-2.1).lineTo(-4.1,-3.1).lineTo(-3.5,-3.8).lineTo(-2.6,-4.5).lineTo(-1.7,-5).lineTo(-0.7,-5.3).curveTo(-0.1,-5.5,0.5,-5.4).lineTo(1.8,-5.3).lineTo(2.8,-5.1).curveTo(3.5,-4.8,4.6,-4).lineTo(3.1,-2.3).curveTo(2.5,-2.8,1.9,-3).curveTo(1.3,-3.3,0.4,-3.3).curveTo(-0.2,-3.3,-0.8,-3.1).curveTo(-1.3,-2.8,-1.7,-2.4).curveTo(-2.2,-1.9,-2.4,-1.3).curveTo(-2.6,-0.7,-2.6,-0).lineTo(-2.6,-0).curveTo(-2.6,0.7,-2.4,1.3).curveTo(-2.1,2,-1.7,2.4).curveTo(-1.2,2.8,-0.7,3.1).curveTo(-0.1,3.4,0.6,3.4).curveTo(1.2,3.3,1.8,3.1).curveTo(2.4,3,2.8,2.7).lineTo(2.8,1.2).lineTo(0.4,1.2).lineTo(0.4,-0.8).lineTo(5,-0.8).lineTo(5,3.7).curveTo(3.8,4.7,3,4.9).curveTo(2.5,5.2,1.9,5.3).lineTo(0.5,5.5).curveTo(-0.1,5.4,-0.7,5.3).closePath();
	this.shape_5.setTransform(-37.5,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EB6209").beginStroke().moveTo(-1.9,5).lineTo(-2.7,4.7).lineTo(-3.4,4.2).lineTo(-3.9,3.5).lineTo(-4.3,2.7).lineTo(-4.5,1.8).lineTo(-4.6,0.7).lineTo(-4.6,-5.3).lineTo(-2.3,-5.3).lineTo(-2.3,0.6).curveTo(-2.3,1.2,-2.1,1.7).curveTo(-2,2.2,-1.7,2.6).curveTo(-1.4,2.9,-1,3).curveTo(-0.5,3.2,-0,3.2).curveTo(0.5,3.2,0.9,3.1).curveTo(1.4,2.9,1.7,2.6).lineTo(2.1,1.8).curveTo(2.3,1.3,2.3,0.7).lineTo(2.3,-5.3).lineTo(4.6,-5.3).lineTo(4.6,0.6).lineTo(4.5,1.7).curveTo(4.4,2.2,4.2,2.7).lineTo(3.9,3.5).lineTo(3.3,4.2).lineTo(2.7,4.7).lineTo(1.9,5).curveTo(0.7,5.3,-0,5.3).curveTo(-1.4,5.2,-1.9,5).closePath();
	this.shape_6.setTransform(-50.4,47.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EB6209").beginStroke().moveTo(1.8,5.3).lineTo(-0.4,1.9).lineTo(-2.3,1.9).lineTo(-2.3,5.3).lineTo(-4.5,5.3).lineTo(-4.5,-5.3).lineTo(0.2,-5.3).curveTo(0.9,-5.3,2,-5).curveTo(2.8,-4.7,3.3,-4.2).curveTo(3.7,-3.7,4,-3.2).curveTo(4.2,-2.5,4.2,-1.8).lineTo(4.2,-1.7).curveTo(4.2,-1.2,4,-0.6).curveTo(3.9,-0.1,3.6,0.3).lineTo(2.9,1).curveTo(2.5,1.3,1.9,1.5).lineTo(4.5,5.3).closePath().moveTo(-2.3,-0.1).lineTo(0.1,-0.1).lineTo(0.9,-0.2).curveTo(1.2,-0.4,1.4,-0.6).curveTo(1.6,-0.8,1.8,-1).curveTo(1.9,-1.3,1.9,-1.6).curveTo(1.9,-2,1.8,-2.3).curveTo(1.6,-2.6,1.4,-2.8).curveTo(1.2,-3,0.8,-3.1).lineTo(0,-3.2).lineTo(-2.3,-3.2).closePath();
	this.shape_7.setTransform(-62.6,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,36,297.9,22);


(lib.text12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.2,6.7).curveTo(-1.9,6.6,-2.6,6.3).curveTo(-3.3,6,-4,5.6).curveTo(-4.7,5.2,-5.2,4.7).lineTo(-3.5,2.6).curveTo(-2.6,3.5,-1.6,3.8).lineTo(-0.6,4.2).lineTo(0.4,4.3).curveTo(1.3,4.2,1.9,3.9).curveTo(2.3,3.6,2.3,3).lineTo(2.3,2.9).curveTo(2.3,2.4,1.9,2).curveTo(1.3,1.7,-0.4,1.3).curveTo(-1.5,1,-2.2,0.7).curveTo(-3,0.4,-3.5,-0.1).curveTo(-4.2,-0.5,-4.4,-1.1).curveTo(-4.8,-1.9,-4.8,-2.8).lineTo(-4.8,-2.9).curveTo(-4.8,-3.7,-4.4,-4.5).curveTo(-4.1,-5.2,-3.4,-5.7).curveTo(-2.8,-6.3,-2,-6.5).curveTo(-1.1,-6.8,-0.1,-6.8).lineTo(1.3,-6.7).lineTo(2.6,-6.4).curveTo(3.2,-6.2,3.8,-5.8).lineTo(4.8,-5.2).lineTo(3.3,-2.9).curveTo(2.5,-3.6,1.6,-3.9).curveTo(0.7,-4.3,-0.1,-4.3).curveTo(-1,-4.3,-1.4,-3.9).curveTo(-1.9,-3.6,-1.8,-3.1).lineTo(-1.8,-3).curveTo(-1.8,-2.4,-1.3,-2.1).curveTo(-0.7,-1.7,1.1,-1.3).curveTo(2.1,-1.1,2.9,-0.7).curveTo(3.6,-0.4,4.1,0.1).curveTo(4.7,0.6,5,1.2).curveTo(5.2,1.8,5.2,2.7).curveTo(5.2,3.7,4.9,4.5).curveTo(4.5,5.2,3.9,5.8).curveTo(3.3,6.3,2.3,6.5).curveTo(1.5,6.9,0.4,6.9).curveTo(-0.4,6.8,-1.2,6.7).closePath();
	this.shape.setTransform(114.9,-381.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(4,8.8).lineTo(2.8,5.7).lineTo(-2.9,5.7).lineTo(-4.1,8.8).lineTo(-7,8.8).lineTo(-1.4,-4.6).lineTo(1.3,-4.6).lineTo(7,8.8).closePath().moveTo(1.7,3.2).lineTo(-0.1,-1.1).lineTo(-1.8,3.2).lineTo(1.7,3.2).closePath().moveTo(-1.2,-5.8).lineTo(1.2,-8.8).lineTo(3.6,-7.7).lineTo(1.1,-5.8).closePath();
	this.shape_1.setTransform(99.9,-383.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.4,6.7).lineTo(-1.4,-3.9).lineTo(-5.5,-3.9).lineTo(-5.5,-6.6).lineTo(5.5,-6.6).lineTo(5.5,-3.9).lineTo(1.5,-3.9).lineTo(1.5,6.7).closePath();
	this.shape_2.setTransform(84.8,-381.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-2.5,8.7).lineTo(-2.5,-4.6).lineTo(0.4,-4.6).lineTo(0.4,8.7).closePath().moveTo(-2.3,-5.7).lineTo(0,-8.7).lineTo(2.5,-7.6).lineTo(-0.1,-5.7).closePath();
	this.shape_3.setTransform(75,-383.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.6,6.7).lineTo(-1.6,1).lineTo(-3.1,2.6).lineTo(-3.1,6.7).lineTo(-6.1,6.7).lineTo(-6.1,-6.6).lineTo(-3.1,-6.6).lineTo(-3.1,-0.9).lineTo(2.3,-6.6).lineTo(5.8,-6.6).lineTo(0.4,-1).lineTo(6.1,6.7).closePath();
	this.shape_4.setTransform(63.1,-381.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E8DDD").beginStroke().moveTo(4,6.7).lineTo(2.8,3.7).lineTo(-2.8,3.7).lineTo(-4,6.7).lineTo(-7.1,6.7).lineTo(-1.3,-6.7).lineTo(1.4,-6.7).lineTo(7.1,6.7).closePath().moveTo(1.7,1.2).lineTo(-0.1,-3.2).lineTo(-1.8,1.2).lineTo(1.7,1.2).closePath();
	this.shape_5.setTransform(46.4,-381.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-4.8,6.7).lineTo(-4.8,-6.6).lineTo(-1.9,-6.6).lineTo(-1.9,4).lineTo(4.8,4).lineTo(4.8,6.7).closePath();
	this.shape_6.setTransform(32,-381.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#3E8DDD").beginStroke().moveTo(4,6.7).lineTo(2.8,3.7).lineTo(-2.9,3.7).lineTo(-4.1,6.7).lineTo(-7,6.7).lineTo(-1.3,-6.7).lineTo(1.4,-6.7).lineTo(7,6.7).closePath().moveTo(1.7,1.2).lineTo(-0.1,-3.2).lineTo(-1.8,1.2).lineTo(1.7,1.2).closePath();
	this.shape_7.setTransform(16.7,-381.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-1.4,6.7).lineTo(-1.4,-6.6).lineTo(1.4,-6.6).lineTo(1.4,6.7).closePath();
	this.shape_8.setTransform(4.5,-381.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#3E8DDD").beginStroke().moveTo(2.5,6.7).lineTo(-1.6,1).lineTo(-3.1,2.6).lineTo(-3.1,6.7).lineTo(-6,6.7).lineTo(-6,-6.6).lineTo(-3.1,-6.6).lineTo(-3.1,-0.9).lineTo(2.3,-6.6).lineTo(5.8,-6.6).lineTo(0.4,-1).lineTo(6,6.7).closePath();
	this.shape_9.setTransform(-6.4,-381.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-395,140.8,26.8);


(lib.text11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB6209").beginStroke().moveTo(-2.5,8.4).lineTo(-3.5,7.9).curveTo(-3.9,7.7,-4.3,7.3).lineTo(-5,6.5).lineTo(-5.4,5.4).lineTo(-5.7,4.3).lineTo(-5.8,2.9).lineTo(-5.8,-4.7).lineTo(-2.9,-4.7).lineTo(-2.9,2.8).curveTo(-2.9,3.6,-2.7,4.2).curveTo(-2.5,4.8,-2.2,5.3).curveTo(-1.7,5.7,-1.2,5.9).curveTo(-0.7,6.1,-0,6.1).curveTo(0.6,6.1,1.2,5.9).curveTo(1.7,5.7,2.1,5.3).curveTo(2.5,4.9,2.7,4.3).curveTo(2.8,3.7,2.8,2.9).lineTo(2.8,-4.7).lineTo(5.8,-4.7).lineTo(5.8,2.8).lineTo(5.7,4.2).lineTo(5.4,5.4).lineTo(4.8,6.5).curveTo(4.6,6.9,4.2,7.3).curveTo(3.8,7.7,3.4,7.9).lineTo(2.3,8.4).curveTo(0.8,8.8,-0,8.8).curveTo(-1.7,8.7,-2.5,8.4).closePath().moveTo(0.5,-5.8).lineTo(2.8,-8.8).lineTo(5.2,-7.7).lineTo(2.6,-5.8).closePath().moveTo(-3.1,-5.8).lineTo(-0.8,-8.8).lineTo(1.6,-7.7).lineTo(-1,-5.8).closePath();
	this.shape.setTransform(24.6,-391.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EB6209").beginStroke().moveTo(-1.5,6.7).lineTo(-1.5,1.4).lineTo(-6.6,-6.7).lineTo(-3.2,-6.7).lineTo(-0,-1.3).lineTo(3.2,-6.7).lineTo(6.6,-6.7).lineTo(1.4,1.3).lineTo(1.4,6.7).closePath();
	this.shape_1.setTransform(9.1,-389.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EB6209").beginStroke().moveTo(3.5,6.7).lineTo(-3,-1.8).lineTo(-3,6.7).lineTo(-5.9,6.7).lineTo(-5.9,-6.7).lineTo(-3.2,-6.7).lineTo(3,1.5).lineTo(3,-6.7).lineTo(5.9,-6.7).lineTo(5.9,6.7).closePath();
	this.shape_2.setTransform(-6.7,-389.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6209").beginStroke().moveTo(3.5,6.7).lineTo(-3,-1.8).lineTo(-3,6.7).lineTo(-5.9,6.7).lineTo(-5.9,-6.7).lineTo(-3.2,-6.7).lineTo(3,1.5).lineTo(3,-6.7).lineTo(5.9,-6.7).lineTo(5.9,6.7).closePath();
	this.shape_3.setTransform(-23.2,-389.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6209").beginStroke().moveTo(-1.5,8.4).lineTo(-2.9,8.1).curveTo(-3.5,7.8,-4,7.4).curveTo(-4.6,7.1,-5.1,6.6).lineTo(-5.9,5.6).lineTo(-6.5,4.4).curveTo(-6.8,3.8,-6.9,3.1).curveTo(-7.1,2.4,-7.1,1.8).lineTo(-7.1,1.7).curveTo(-7.1,1,-6.9,0.3).lineTo(-6.5,-0.9).lineTo(-5.9,-2.2).lineTo(-5.1,-3.2).lineTo(-4,-4).curveTo(-3.5,-4.4,-2.8,-4.7).lineTo(-1.5,-5.1).lineTo(0,-5.2).curveTo(0.8,-5.2,1.5,-5.1).lineTo(2.9,-4.7).lineTo(4.1,-4).curveTo(4.6,-3.6,5.1,-3.2).curveTo(5.6,-2.7,5.9,-2.2).lineTo(6.5,-1).lineTo(6.9,0.3).curveTo(7.1,1,7.1,1.6).lineTo(7.1,1.7).curveTo(7.1,2.4,6.9,3.1).lineTo(6.5,4.3).lineTo(5.9,5.6).lineTo(5.1,6.6).lineTo(4,7.4).lineTo(2.8,8.1).lineTo(1.5,8.4).lineTo(-0,8.6).curveTo(-0.8,8.6,-1.5,8.4).closePath().moveTo(-1.6,-2.2).curveTo(-2.4,-1.9,-2.9,-1.3).curveTo(-3.4,-0.7,-3.7,0.1).curveTo(-4,0.8,-4,1.6).lineTo(-4,1.7).curveTo(-4,2.6,-3.7,3.3).curveTo(-3.4,4,-2.9,4.7).curveTo(-2.3,5.3,-1.6,5.6).curveTo(-0.8,5.9,0,5.9).curveTo(0.9,5.9,1.6,5.6).curveTo(2.4,5.3,2.9,4.7).curveTo(3.4,4.1,3.7,3.3).curveTo(4,2.6,4,1.8).lineTo(4,1.7).curveTo(4,0.8,3.7,0.1).curveTo(3.4,-0.6,2.9,-1.3).curveTo(2.3,-1.9,1.6,-2.2).curveTo(0.8,-2.5,-0,-2.5).curveTo(-0.9,-2.5,-1.6,-2.2).closePath().moveTo(0.7,-6.2).lineTo(0.7,-8.6).lineTo(3.5,-8.6).lineTo(3.5,-6.2).closePath().moveTo(-3.5,-6.2).lineTo(-3.5,-8.6).lineTo(-0.7,-8.6).lineTo(-0.7,-6.2).closePath();
	this.shape_4.setTransform(-40.3,-390.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EB6209").beginStroke().moveTo(2.6,6.7).lineTo(-1.6,1).lineTo(-3.2,2.6).lineTo(-3.2,6.7).lineTo(-6.1,6.7).lineTo(-6.1,-6.7).lineTo(-3.2,-6.7).lineTo(-3.2,-0.8).lineTo(2.2,-6.7).lineTo(5.8,-6.7).lineTo(0.4,-1).lineTo(6,6.7).closePath();
	this.shape_5.setTransform(-56,-389.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-402.8,101.2,26.8);


(lib.textintel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.6).lineTo(-0.8,-3.6).lineTo(0.7,-3.6).lineTo(0.7,3.6).closePath();
	this.shape.setTransform(128.1,-327.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,2.6).lineTo(-1.9,2.4).lineTo(-2.3,1.8).curveTo(-2.5,1.5,-2.5,1.1).curveTo(-2.5,0.6,-2.3,0.3).curveTo(-2.2,-0,-1.9,-0.2).lineTo(-1.2,-0.5).lineTo(-0.3,-0.6).curveTo(0.2,-0.6,1,-0.4).lineTo(1,-0.5).lineTo(0.9,-0.9).lineTo(0.7,-1.2).lineTo(0.4,-1.4).lineTo(-0.1,-1.5).lineTo(-0.9,-1.4).lineTo(-1.6,-1.2).lineTo(-2,-2.4).lineTo(-1.1,-2.7).lineTo(0.1,-2.8).curveTo(0.7,-2.7,1.1,-2.6).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.2,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.5,2.6).lineTo(1,2.6).lineTo(1,2).curveTo(0.7,2.4,0.3,2.6).curveTo(-0.1,2.7,-0.6,2.7).lineTo(-1.3,2.6).closePath().moveTo(-0.7,0.5).curveTo(-1,0.6,-1,1).curveTo(-1,1.3,-0.8,1.6).curveTo(-0.5,1.7,-0.2,1.7).lineTo(0.3,1.7).lineTo(0.7,1.5).lineTo(0.9,1.1).lineTo(1,0.8).lineTo(1,0.5).curveTo(0.6,0.3,0.1,0.3).curveTo(-0.4,0.3,-0.7,0.5).closePath();
	this.shape_1.setTransform(122,-326.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.1,-2.1).lineTo(0.6,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.6,-1.1).lineTo(0.8,-1).curveTo(0.6,-0.9,0.4,-0.7).curveTo(0.1,-0.4,0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_2.setTransform(115.8,-326.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.8,-1).curveTo(0.5,-0.9,0.4,-0.7).curveTo(0.1,-0.4,0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_3.setTransform(110.2,-326.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.4,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.4,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.2,2.6).curveTo(0.4,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.5,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).lineTo(1.1,1).curveTo(1.2,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_4.setTransform(103.1,-326.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.7).lineTo(-2.3,1.6).lineTo(0.4,-1.5).lineTo(-2.2,-1.5).lineTo(-2.2,-2.7).lineTo(2.3,-2.7).lineTo(2.3,-1.6).lineTo(-0.4,1.4).lineTo(2.3,1.4).lineTo(2.3,2.7).closePath();
	this.shape_5.setTransform(95.5,-326.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.6).lineTo(-2.2,2).lineTo(-1.5,1).lineTo(-0.6,1.4).curveTo(-0.2,1.6,0.2,1.6).curveTo(0.5,1.6,0.7,1.5).curveTo(0.7,1.5,0.7,1.4).curveTo(0.8,1.4,0.8,1.4).curveTo(0.8,1.3,0.8,1.3).curveTo(0.8,1.3,0.8,1.2).lineTo(0.8,1.2).curveTo(0.8,1.1,0.8,1.1).curveTo(0.8,1,0.7,1).curveTo(0.7,0.9,0.6,0.9).curveTo(0.6,0.9,0.5,0.8).lineTo(-0.3,0.6).curveTo(-1.1,0.3,-1.4,0.1).lineTo(-1.8,-0.4).lineTo(-1.9,-1).lineTo(-1.9,-1.1).curveTo(-1.9,-1.5,-1.7,-1.8).curveTo(-1.6,-2.1,-1.3,-2.3).lineTo(-0.7,-2.7).lineTo(0.1,-2.8).lineTo(1.1,-2.6).lineTo(2.1,-2.1).lineTo(1.5,-1.1).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.4,-1.5).curveTo(-0.4,-1.4,-0.4,-1.4).curveTo(-0.5,-1.4,-0.5,-1.4).curveTo(-0.5,-1.3,-0.5,-1.3).curveTo(-0.5,-1.3,-0.5,-1.2).curveTo(-0.5,-1,-0.2,-0.8).lineTo(0.6,-0.6).lineTo(1.1,-0.3).lineTo(1.7,-0).lineTo(2,0.4).curveTo(2.2,0.7,2.2,1).curveTo(2.2,1.5,2,1.8).lineTo(1.6,2.4).curveTo(1.3,2.6,0.9,2.7).lineTo(0.1,2.8).curveTo(-0.5,2.8,-1,2.6).closePath();
	this.shape_6.setTransform(88.6,-326.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,2.6).lineTo(-2.2,2).lineTo(-1.5,1).lineTo(-0.6,1.4).curveTo(-0.2,1.6,0.2,1.6).curveTo(0.5,1.6,0.7,1.5).curveTo(0.7,1.5,0.7,1.4).curveTo(0.8,1.4,0.8,1.4).curveTo(0.8,1.3,0.8,1.3).curveTo(0.8,1.3,0.8,1.2).lineTo(0.8,1.2).curveTo(0.8,1.1,0.8,1.1).curveTo(0.8,1,0.7,1).curveTo(0.7,0.9,0.6,0.9).curveTo(0.6,0.9,0.5,0.8).lineTo(-0.3,0.6).curveTo(-1.1,0.3,-1.4,0.1).lineTo(-1.8,-0.4).lineTo(-1.9,-1).lineTo(-1.9,-1.1).curveTo(-1.9,-1.5,-1.7,-1.8).curveTo(-1.6,-2.1,-1.3,-2.3).lineTo(-0.7,-2.7).lineTo(0.1,-2.8).lineTo(1.1,-2.6).lineTo(2.1,-2.1).lineTo(1.5,-1.1).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.4,-1.5).curveTo(-0.4,-1.4,-0.4,-1.4).curveTo(-0.5,-1.4,-0.5,-1.4).curveTo(-0.5,-1.3,-0.5,-1.3).curveTo(-0.5,-1.3,-0.5,-1.2).curveTo(-0.5,-1,-0.2,-0.8).lineTo(0.6,-0.6).lineTo(1.1,-0.3).lineTo(1.7,-0).lineTo(2,0.4).curveTo(2.2,0.7,2.2,1).curveTo(2.2,1.5,2,1.8).lineTo(1.6,2.4).curveTo(1.3,2.6,0.9,2.7).lineTo(0.1,2.8).curveTo(-0.5,2.8,-1,2.6).closePath();
	this.shape_7.setTransform(82.1,-326.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.4,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.7,0).curveTo(-2.6,-0.6,-2.5,-1.1).curveTo(-2.3,-1.6,-1.9,-2).curveTo(-1.5,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.7,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.5,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.4,1.8).lineTo(1.9,2.2).lineTo(1.5,2.5).lineTo(0.9,2.7).lineTo(0.1,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.1,-0.4).lineTo(1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.8,-1.3).lineTo(-1,-0.9).lineTo(-1.1,-0.4).lineTo(1.1,-0.4).lineTo(1.1,-0.4).closePath();
	this.shape_8.setTransform(75.1,-326.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,2.7).lineTo(-0.8,2.6).curveTo(-1.3,2.4,-1.7,2).curveTo(-2,1.6,-2.2,1.1).lineTo(-2.5,0).curveTo(-2.5,-0.4,-2.2,-1.1).curveTo(-2,-1.6,-1.7,-2).curveTo(-1.3,-2.4,-0.8,-2.6).lineTo(-0.2,-2.7).lineTo(0.4,-2.8).lineTo(1,-2.7).lineTo(1.6,-2.5).curveTo(2,-2.4,2.4,-1.9).lineTo(1.5,-0.9).lineTo(1,-1.3).curveTo(0.7,-1.5,0.3,-1.5).lineTo(-0.2,-1.4).lineTo(-0.6,-1).lineTo(-0.9,-0.6).lineTo(-1,-0).lineTo(-1,0).lineTo(-0.9,0.6).lineTo(-0.6,1.1).lineTo(-0.2,1.4).lineTo(0.4,1.5).curveTo(0.7,1.5,1,1.3).lineTo(1.6,0.9).lineTo(2.5,1.8).lineTo(1.6,2.5).lineTo(1,2.7).lineTo(0.3,2.8).closePath();
	this.shape_9.setTransform(67.8,-326.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.5,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.5,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.2,2.6).curveTo(0.5,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.6,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).lineTo(1.1,1).curveTo(1.3,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_10.setTransform(60.1,-326.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.1,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.6,-1.1).lineTo(0.9,-1).curveTo(0.6,-0.9,0.3,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_11.setTransform(53.4,-326.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,3.5).lineTo(-2.8,-3.4).lineTo(-1.3,-3.4).lineTo(-1.3,-2.7).curveTo(-1,-3.1,-0.6,-3.3).lineTo(-0.2,-3.5).lineTo(0.4,-3.5).curveTo(0.8,-3.5,1.3,-3.4).curveTo(1.7,-3.2,2.1,-2.8).curveTo(2.4,-2.5,2.6,-2).lineTo(2.8,-0.8).lineTo(2.8,-0.7).lineTo(2.8,-0.1).lineTo(2.6,0.4).curveTo(2.4,0.9,2.1,1.3).curveTo(1.8,1.7,1.3,1.8).curveTo(0.8,2,0.4,2).lineTo(-0.2,2).lineTo(-0.6,1.8).lineTo(-1.3,1.2).lineTo(-1.3,3.5).closePath().moveTo(-0.5,-2.1).lineTo(-1,-1.8).lineTo(-1.2,-1.4).lineTo(-1.3,-0.8).lineTo(-1.3,-0.7).lineTo(-1.2,-0.1).lineTo(-1,0.3).lineTo(-0.5,0.6).lineTo(-0,0.7).lineTo(0.5,0.6).lineTo(0.9,0.3).lineTo(1.2,-0.1).lineTo(1.3,-0.7).lineTo(1.3,-0.8).lineTo(1.2,-1.4).lineTo(0.9,-1.8).lineTo(0.5,-2.1).lineTo(-0,-2.2).lineTo(-0.5,-2.1).closePath();
	this.shape_12.setTransform(46.4,-325.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,3.5).lineTo(0.7,-2.2).lineTo(-2.5,-2.2).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,-2.4).lineTo(-0.6,3.5).closePath();
	this.shape_13.setTransform(126.6,-343);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.6).lineTo(-0.8,-1.7).lineTo(0.7,-1.7).lineTo(0.7,3.6).closePath().moveTo(-0.8,-2.3).lineTo(-0.8,-3.7).lineTo(0.8,-3.7).lineTo(0.8,-2.3).closePath();
	this.shape_14.setTransform(120.4,-343.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,1.6).lineTo(2.5,-0.5).lineTo(1.6,0.8).lineTo(1.6,0.8).lineTo(0.7,-0.5).lineTo(0.7,1.6).lineTo(0,1.6).lineTo(0,-1.6).lineTo(0.8,-1.6).lineTo(1.6,-0.2).lineTo(2.4,-1.6).lineTo(3.2,-1.6).lineTo(3.2,1.6).closePath().moveTo(-2.2,1.6).lineTo(-2.2,-1).lineTo(-3.1,-1).lineTo(-3.1,-1.6).lineTo(-0.6,-1.6).lineTo(-0.6,-1).lineTo(-1.5,-1).lineTo(-1.5,1.6).closePath();
	this.shape_15.setTransform(109.4,-345);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.5,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.6,0).curveTo(-2.6,-0.6,-2.4,-1.1).curveTo(-2.2,-1.6,-1.9,-2).curveTo(-1.6,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.6,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.4,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.3,1.8).lineTo(2,2.2).lineTo(1.4,2.5).lineTo(0.9,2.7).lineTo(0.2,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.1,-0.4).lineTo(1.1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.7,-1.3).lineTo(-1,-0.9).lineTo(-1.2,-0.4).lineTo(1.1,-0.4).lineTo(1.1,-0.4).closePath();
	this.shape_16.setTransform(97,-342.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.9,-1).curveTo(0.5,-0.9,0.4,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_17.setTransform(90.6,-342.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.7).lineTo(-1.2,2.6).lineTo(-2.1,2).curveTo(-2.5,1.6,-2.6,1.1).lineTo(-2.8,0.6).lineTo(-2.9,0).curveTo(-2.9,-0.4,-2.6,-1.1).curveTo(-2.5,-1.6,-2.1,-2).lineTo(-1.2,-2.6).lineTo(-0.6,-2.7).lineTo(0.1,-2.8).lineTo(1.2,-2.6).lineTo(2.1,-2).curveTo(2.5,-1.6,2.7,-1.1).lineTo(2.9,-0).lineTo(2.9,0).lineTo(2.9,0.6).lineTo(2.7,1.1).curveTo(2.5,1.6,2.1,2).lineTo(1.1,2.6).curveTo(0.5,2.8,-0,2.8).closePath().moveTo(-0.6,-1.4).lineTo(-1,-1).lineTo(-1.3,-0.6).lineTo(-1.4,-0).lineTo(-1.4,0).lineTo(-1.3,0.6).lineTo(-1,1).lineTo(-0.6,1.4).lineTo(0.1,1.5).lineTo(0.6,1.4).lineTo(1.1,1).curveTo(1.3,0.9,1.3,0.6).lineTo(1.4,0).lineTo(1.3,-0.6).lineTo(1.1,-1).lineTo(0.6,-1.4).lineTo(-0,-1.5).lineTo(-0.6,-1.4).closePath();
	this.shape_18.setTransform(83.5,-342.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,3.6).lineTo(-1.1,3.4).lineTo(-1.7,3).lineTo(-2.2,2.6).lineTo(-2.7,2).lineTo(-3,1.4).lineTo(-3.2,0.8).lineTo(-3.2,-0).lineTo(-3.2,-0.8).lineTo(-3,-1.4).lineTo(-2.7,-2).lineTo(-2.2,-2.6).lineTo(-1.7,-3).lineTo(-1.1,-3.4).lineTo(-0.4,-3.5).lineTo(0.4,-3.6).lineTo(1.3,-3.5).lineTo(2,-3.3).curveTo(2.5,-3.1,3.2,-2.6).lineTo(2.2,-1.4).curveTo(1.8,-1.8,1.4,-2).curveTo(0.9,-2.2,0.4,-2.2).lineTo(-0.4,-2).lineTo(-1.1,-1.6).lineTo(-1.5,-0.8).curveTo(-1.6,-0.5,-1.6,-0).curveTo(-1.6,0.4,-1.5,0.9).lineTo(-1.1,1.6).lineTo(-0.4,2).lineTo(0.4,2.2).lineTo(1.4,2).lineTo(2.2,1.4).lineTo(3.2,2.3).lineTo(2.7,2.9).lineTo(2,3.3).lineTo(1.3,3.6).lineTo(0.3,3.6).lineTo(-0.4,3.6).closePath();
	this.shape_19.setTransform(75.1,-343);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,1.6).curveTo(-1,1.5,-1.2,1.3).curveTo(-1.5,1,-1.6,0.7).lineTo(-1.8,0).lineTo(-1.6,-0.7).curveTo(-1.5,-1,-1.2,-1.2).curveTo(-1,-1.5,-0.7,-1.6).lineTo(0,-1.8).curveTo(0.4,-1.8,0.7,-1.6).curveTo(1,-1.5,1.2,-1.2).lineTo(1.6,-0.7).lineTo(1.8,0).curveTo(1.7,0.4,1.6,0.6).lineTo(1.2,1.3).curveTo(1,1.5,0.7,1.6).curveTo(0.4,1.7,0,1.7).lineTo(-0.7,1.6).closePath().moveTo(-0.6,-1.4).lineTo(-1.1,-1.1).lineTo(-1.5,-0.6).lineTo(-1.6,0).lineTo(-1.5,0.6).lineTo(-1.1,1.1).lineTo(-0.6,1.5).lineTo(0,1.5).lineTo(0.6,1.5).lineTo(1.1,1.1).lineTo(1.4,0.6).lineTo(1.6,0).lineTo(1.4,-0.6).lineTo(1.1,-1.1).lineTo(0.6,-1.4).lineTo(0,-1.5).lineTo(-0.6,-1.4).closePath().moveTo(0.3,0.9).lineTo(-0,0.4).lineTo(-0.2,0.4).lineTo(-0.2,0.9).lineTo(-0.8,0.9).lineTo(-0.8,-1).lineTo(0.1,-1).curveTo(0.5,-1,0.7,-0.8).curveTo(0.9,-0.6,0.9,-0.3).lineTo(0.8,0).lineTo(0.5,0.3).lineTo(0.9,0.9).closePath().moveTo(-0.2,-0.1).lineTo(0.1,-0.1).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.3,-0.1,0.3,-0.1).curveTo(0.3,-0.1,0.3,-0.2).curveTo(0.3,-0.2,0.3,-0.3).curveTo(0.3,-0.4,0.3,-0.4).curveTo(0.3,-0.4,0.3,-0.5).curveTo(0.3,-0.5,0.2,-0.5).curveTo(0.2,-0.5,0.1,-0.5).lineTo(-0.2,-0.5).closePath();
	this.shape_20.setTransform(63.5,-344.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.6).lineTo(-0.8,-3.7).lineTo(0.7,-3.7).lineTo(0.7,3.6).closePath();
	this.shape_21.setTransform(58.7,-343.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-1.4,2.4,-1.8,2).curveTo(-2.2,1.7,-2.4,1.2).lineTo(-2.6,0.6).lineTo(-2.6,0).curveTo(-2.7,-0.6,-2.5,-1.1).curveTo(-2.3,-1.6,-1.9,-2).curveTo(-1.5,-2.4,-1,-2.6).lineTo(-0.6,-2.7).lineTo(-0,-2.8).lineTo(0.7,-2.7).lineTo(1.2,-2.5).lineTo(1.7,-2.3).lineTo(2,-1.9).curveTo(2.3,-1.5,2.5,-1).curveTo(2.7,-0.5,2.7,0.1).lineTo(2.6,0.5).lineTo(-1.1,0.5).lineTo(-0.9,1).lineTo(-0.7,1.3).lineTo(-0.3,1.5).lineTo(0.2,1.6).lineTo(0.9,1.4).lineTo(1.5,1).lineTo(2.4,1.8).lineTo(1.9,2.2).lineTo(1.5,2.5).lineTo(0.9,2.7).lineTo(0.1,2.8).curveTo(-0.6,2.7,-0.9,2.6).closePath().moveTo(1.1,-0.4).lineTo(1,-0.9).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0,-1.6).lineTo(-0.4,-1.5).lineTo(-0.8,-1.3).lineTo(-1,-0.9).lineTo(-1.1,-0.4).lineTo(1.1,-0.4).lineTo(1.1,-0.4).closePath();
	this.shape_22.setTransform(52.6,-342.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,3.3).curveTo(-0.4,3.3,-0.6,3.1).lineTo(-1,2.6).lineTo(-1.1,1.8).lineTo(-1.1,-0.7).lineTo(-1.7,-0.7).lineTo(-1.7,-2).lineTo(-1.1,-2).lineTo(-1.1,-3.4).lineTo(0.4,-3.4).lineTo(0.4,-2).lineTo(1.7,-2).lineTo(1.7,-0.7).lineTo(0.4,-0.7).lineTo(0.4,1.6).lineTo(0.5,1.9).curveTo(0.6,2,0.6,2).curveTo(0.7,2,0.7,2).curveTo(0.8,2.1,0.8,2.1).curveTo(0.9,2.1,1,2.1).curveTo(1.4,2.1,1.7,1.9).lineTo(1.7,3.1).lineTo(1.2,3.3).lineTo(0.5,3.4).lineTo(-0.2,3.3).closePath();
	this.shape_23.setTransform(45.9,-342.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,2.7).lineTo(0.9,-0.3).lineTo(0.9,-0.7).lineTo(0.7,-1.1).lineTo(0.4,-1.3).lineTo(-0,-1.4).lineTo(-0.4,-1.3).lineTo(-0.7,-1.1).lineTo(-0.9,-0.7).lineTo(-0.9,-0.3).lineTo(-0.9,2.7).lineTo(-2.5,2.7).lineTo(-2.5,-2.6).lineTo(-0.9,-2.6).lineTo(-0.9,-1.9).curveTo(-0.6,-2.3,-0.3,-2.5).lineTo(0.1,-2.7).lineTo(0.6,-2.7).curveTo(1.1,-2.7,1.4,-2.6).curveTo(1.7,-2.5,2,-2.2).curveTo(2.2,-1.9,2.3,-1.6).curveTo(2.4,-1.2,2.4,-0.7).lineTo(2.4,2.7).closePath();
	this.shape_24.setTransform(39.4,-342.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.5).lineTo(-0.8,-3.5).lineTo(0.8,-3.5).lineTo(0.8,3.5).closePath();
	this.shape_25.setTransform(33,-343);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.7).lineTo(-1.6,-2.6).lineTo(-0.1,-2.6).lineTo(-0.1,-1.6).lineTo(0.2,-2.1).lineTo(0.5,-2.4).lineTo(1,-2.7).lineTo(1.6,-2.7).lineTo(1.6,-1.1).lineTo(1.5,-1.1).lineTo(0.9,-1).curveTo(0.5,-0.9,0.4,-0.7).curveTo(0.1,-0.4,-0,-0.1).lineTo(-0.1,0.7).lineTo(-0.1,2.7).closePath();
	this.shape_26.setTransform(23.5,-342.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,3.8).lineTo(-1.9,3.5).lineTo(-2.3,3).curveTo(-2.5,2.7,-2.5,2.2).curveTo(-2.5,1.8,-2.3,1.5).curveTo(-2.2,1.1,-1.9,1).lineTo(-1.2,0.6).lineTo(-0.3,0.5).curveTo(0.2,0.5,1,0.7).lineTo(1,0.6).lineTo(0.9,0.3).lineTo(0.7,-0.1).lineTo(0.4,-0.3).lineTo(-0.1,-0.3).lineTo(-0.9,-0.3).lineTo(-1.6,-0.1).lineTo(-2,-1.2).lineTo(-1.1,-1.5).lineTo(0.1,-1.6).curveTo(0.7,-1.6,1.1,-1.4).curveTo(1.6,-1.3,1.9,-1).curveTo(2.2,-0.8,2.3,-0.3).curveTo(2.5,0.1,2.5,0.7).lineTo(2.5,3.8).lineTo(1,3.8).lineTo(1,3.2).curveTo(0.7,3.6,0.3,3.7).curveTo(-0.1,3.9,-0.6,3.9).lineTo(-1.3,3.8).closePath().moveTo(-0.7,1.6).curveTo(-1,1.8,-1,2.2).curveTo(-1,2.5,-0.8,2.7).curveTo(-0.5,2.9,-0.2,2.9).lineTo(0.3,2.8).lineTo(0.7,2.6).lineTo(0.9,2.3).lineTo(1,1.9).lineTo(1,1.6).curveTo(0.6,1.4,0.1,1.4).curveTo(-0.4,1.4,-0.7,1.6).closePath().moveTo(-0.4,-2.2).lineTo(0.7,-3.9).lineTo(2,-3.3).lineTo(0.7,-2.2).closePath();
	this.shape_27.setTransform(16.6,-343.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,3.6).lineTo(-0.5,1.5).lineTo(-1.1,2).lineTo(-1.1,3.6).lineTo(-2.6,3.6).lineTo(-2.6,-3.7).lineTo(-1.1,-3.7).lineTo(-1.1,0.2).lineTo(0.7,-1.7).lineTo(2.5,-1.7).lineTo(0.5,0.4).lineTo(2.6,3.6).closePath();
	this.shape_28.setTransform(9.7,-343.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,3.5).lineTo(1.5,2).lineTo(-1.5,2).lineTo(-2.1,3.5).lineTo(-3.7,3.5).lineTo(-0.7,-3.5).lineTo(0.7,-3.5).lineTo(3.7,3.5).closePath().moveTo(0.9,0.6).lineTo(0,-1.7).lineTo(-1,0.6).lineTo(0.9,0.6).closePath();
	this.shape_29.setTransform(1,-343.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-351.1,197.8,32);


(lib.textintel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).lineTo(-0.9,-0.9).lineTo(0.9,-0.9).lineTo(0.9,0.9).closePath();
	this.shape.setTransform(170.1,-473.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.7,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.4,-1.8,-2.1,-2.2).curveTo(-1.7,-2.6,-1.2,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.3,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.2,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.3,-0.5).lineTo(1.2,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.3,-0.5).lineTo(1.3,-0.5).lineTo(1.3,-0.5).closePath();
	this.shape_1.setTransform(163.7,-475.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-2,-1.6,-1.4,-1.8).curveTo(-1,-2,-0.4,-2).lineTo(0.2,-2).lineTo(0.6,-1.8).curveTo(1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1,3.6,0.6,3.8).lineTo(0.1,4).lineTo(-0.4,4.1).curveTo(-1,4.1,-1.4,3.9).closePath().moveTo(-0.5,-0.5).lineTo(-1,-0.2).lineTo(-1.3,0.3).lineTo(-1.4,1).lineTo(-1.3,1.7).lineTo(-1,2.2).lineTo(-0.5,2.6).lineTo(0,2.7).lineTo(0.6,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.5,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.6,-0.5).curveTo(0.3,-0.6,0,-0.6).curveTo(-0.3,-0.6,-0.5,-0.5).closePath();
	this.shape_2.setTransform(155.1,-476.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_3.setTransform(148.3,-476.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.9).curveTo(-2,2.5,-2.4,2.2).lineTo(-1.7,1.1).curveTo(-1.2,1.4,-0.7,1.6).lineTo(0.2,1.7).lineTo(0.7,1.6).curveTo(0.8,1.6,0.8,1.6).curveTo(0.8,1.6,0.8,1.5).curveTo(0.9,1.5,0.9,1.4).curveTo(0.9,1.4,0.9,1.4).lineTo(0.9,1.3).curveTo(0.9,1,0.5,0.9).lineTo(-0.3,0.6).curveTo(-1.2,0.3,-1.5,0.1).lineTo(-1.9,-0.4).curveTo(-2.1,-0.8,-2.1,-1.2).curveTo(-2.1,-1.6,-1.9,-2).curveTo(-1.8,-2.3,-1.5,-2.5).curveTo(-1.2,-2.8,-0.8,-2.9).curveTo(-0.4,-3,0.1,-3.1).curveTo(0.6,-3.1,1.2,-2.9).lineTo(2.3,-2.3).lineTo(1.6,-1.2).lineTo(0.8,-1.6).lineTo(0,-1.8).lineTo(-0.4,-1.6).lineTo(-0.6,-1.3).lineTo(-0.6,-1.3).curveTo(-0.6,-1.1,-0.2,-0.9).lineTo(0.6,-0.6).lineTo(1.2,-0.4).lineTo(1.8,-0.1).lineTo(2.2,0.5).curveTo(2.4,0.7,2.4,1.2).curveTo(2.4,1.7,2.2,2).curveTo(2.1,2.3,1.7,2.6).curveTo(1.5,2.9,1,3).lineTo(0.1,3.1).curveTo(-0.5,3.1,-1.1,2.9).closePath();
	this.shape_4.setTransform(142.3,-475.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,3.7).lineTo(-0.7,3.4).curveTo(-1,3.2,-1.1,2.9).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.3).lineTo(-1.2,-2.3).lineTo(-1.2,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.3).lineTo(1.9,-2.3).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.6,2.1).curveTo(0.7,2.2,0.7,2.2).curveTo(0.7,2.2,0.8,2.3).curveTo(0.8,2.3,0.9,2.3).curveTo(1,2.3,1.1,2.3).curveTo(1.4,2.3,1.8,2.1).lineTo(1.8,3.4).lineTo(1.3,3.7).lineTo(0.5,3.8).lineTo(-0.2,3.7).closePath();
	this.shape_5.setTransform(135.8,-476.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,2.8).curveTo(-1.9,2.7,-2.1,2.4).curveTo(-2.5,2.1,-2.6,1.8).curveTo(-2.7,1.4,-2.7,0.8).lineTo(-2.7,-3).lineTo(-1,-3).lineTo(-1,0.3).lineTo(-0.9,0.8).lineTo(-0.8,1.2).lineTo(-0.5,1.4).lineTo(-0,1.5).lineTo(0.4,1.4).lineTo(0.8,1.2).lineTo(0.9,0.8).lineTo(1,0.3).lineTo(1,-3).lineTo(2.7,-3).lineTo(2.7,2.9).lineTo(1,2.9).lineTo(1,2).curveTo(0.7,2.5,0.3,2.7).lineTo(-0.1,2.9).lineTo(-0.7,3).curveTo(-1.1,3,-1.6,2.8).closePath();
	this.shape_6.setTransform(128.7,-475.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,3.9).lineTo(-1.7,3.6).lineTo(-2.3,3.3).lineTo(-2.9,2.8).lineTo(-3.4,2.3).lineTo(-3.8,1.5).lineTo(-4,0.8).lineTo(-4.1,0).lineTo(-4,-0.8).lineTo(-3.8,-1.5).lineTo(-3.4,-2.2).lineTo(-2.9,-2.8).lineTo(-2.3,-3.3).lineTo(-1.6,-3.7).lineTo(-0.8,-3.9).lineTo(0,-4).lineTo(0.9,-3.9).lineTo(1.7,-3.7).lineTo(2.3,-3.3).lineTo(2.9,-2.8).lineTo(3.4,-2.2).lineTo(3.8,-1.5).lineTo(4,-0.8).lineTo(4.1,0).lineTo(4,0.8).lineTo(3.8,1.5).lineTo(3.4,2.2).lineTo(2.9,2.8).lineTo(2.3,3.3).lineTo(1.6,3.6).lineTo(0.8,3.9).lineTo(-0,4).lineTo(-0.9,3.9).closePath().moveTo(-0.9,-2.2).curveTo(-1.4,-2,-1.7,-1.7).curveTo(-2,-1.4,-2.2,-1).curveTo(-2.3,-0.5,-2.3,0).curveTo(-2.3,0.5,-2.2,0.9).lineTo(-1.7,1.7).curveTo(-1.4,2.1,-0.9,2.3).curveTo(-0.5,2.4,0,2.4).curveTo(0.5,2.4,0.9,2.3).curveTo(1.4,2.1,1.7,1.7).curveTo(2,1.4,2.2,0.9).curveTo(2.3,0.5,2.3,0).curveTo(2.3,-0.5,2.1,-1).curveTo(2,-1.4,1.7,-1.7).curveTo(1.4,-2,0.9,-2.2).curveTo(0.5,-2.4,-0,-2.4).curveTo(-0.5,-2.4,-0.9,-2.2).closePath();
	this.shape_7.setTransform(119.1,-476.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.7,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.4,-1.8,-2.1,-2.2).curveTo(-1.7,-2.6,-1.2,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.2,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.3,-0.5).lineTo(1.2,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.3,-0.5).lineTo(1.3,-0.5).closePath();
	this.shape_8.setTransform(104.8,-475.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3,3).lineTo(-0.9,2.8).curveTo(-1.4,2.6,-1.8,2.2).curveTo(-2.3,1.7,-2.5,1.2).lineTo(-2.7,0).lineTo(-2.7,-0).curveTo(-2.7,-0.4,-2.5,-1.2).curveTo(-2.3,-1.8,-1.8,-2.2).curveTo(-1.4,-2.6,-0.9,-2.8).lineTo(-0.3,-3).lineTo(0.3,-3.1).lineTo(1.1,-3).lineTo(1.8,-2.8).lineTo(2.7,-2.1).lineTo(1.7,-1).curveTo(1.4,-1.3,1.1,-1.5).curveTo(0.7,-1.6,0.3,-1.6).lineTo(-0.3,-1.5).lineTo(-0.7,-1.2).lineTo(-1,-0.7).lineTo(-1.1,-0).lineTo(-1,0.6).lineTo(-0.7,1.1).curveTo(-0.5,1.4,-0.2,1.5).curveTo(0,1.6,0.4,1.6).curveTo(0.8,1.6,1.2,1.4).curveTo(1.4,1.3,1.8,1).lineTo(2.8,2).curveTo(2.1,2.6,1.8,2.8).lineTo(1.1,3).lineTo(0.3,3.1).closePath();
	this.shape_9.setTransform(96.9,-475.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).lineTo(1.1,-0.3).lineTo(1,-0.8).lineTo(0.7,-1.2).lineTo(0.4,-1.4).lineTo(-0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.7,-1.2).lineTo(-0.9,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2).curveTo(-0.7,-2.5,-0.4,-2.7).lineTo(0.1,-2.9).lineTo(0.7,-3).curveTo(1.1,-3,1.5,-2.8).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.4,-2.1,2.5,-1.7).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_10.setTransform(88.8,-475.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,2.9).lineTo(-2.1,2.6).lineTo(-2.6,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.6,0.4).lineTo(-2,-0.2).lineTo(-1.3,-0.6).lineTo(-0.4,-0.7).curveTo(0.3,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.1,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.8,-3,1.2,-2.9).curveTo(1.7,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.6,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.3,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.5,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.8,1.7).curveTo(-0.6,1.9,-0.1,1.9).lineTo(0.3,1.8).lineTo(0.8,1.6).lineTo(1,1.3).lineTo(1.1,0.8).lineTo(1.1,0.6).curveTo(0.6,0.3,0.1,0.3).curveTo(-0.4,0.3,-0.8,0.5).closePath();
	this.shape_11.setTransform(80.4,-475.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.8,3).lineTo(2.8,-0.3).lineTo(2.7,-0.8).lineTo(2.6,-1.2).lineTo(2.2,-1.4).lineTo(1.8,-1.5).lineTo(1.4,-1.4).lineTo(1.1,-1.2).lineTo(0.9,-0.8).lineTo(0.9,-0.3).lineTo(0.9,3).lineTo(-0.8,3).lineTo(-0.8,-0.3).lineTo(-0.9,-0.8).lineTo(-1.1,-1.2).lineTo(-1.4,-1.4).lineTo(-1.8,-1.5).lineTo(-2.3,-1.4).lineTo(-2.6,-1.2).lineTo(-2.7,-0.8).lineTo(-2.8,-0.3).lineTo(-2.8,3).lineTo(-4.5,3).lineTo(-4.5,-2.9).lineTo(-2.8,-2.9).lineTo(-2.8,-2).curveTo(-2.5,-2.5,-2.1,-2.7).lineTo(-1.7,-2.9).lineTo(-1.1,-3).curveTo(-0.5,-3,-0.1,-2.7).curveTo(0.3,-2.5,0.6,-2).curveTo(0.9,-2.6,1.5,-2.7).lineTo(1.9,-2.9).lineTo(2.5,-3).curveTo(3,-3,3.4,-2.8).curveTo(3.7,-2.7,3.9,-2.5).curveTo(4.2,-2.2,4.4,-1.7).curveTo(4.5,-1.3,4.5,-0.8).lineTo(4.5,3).closePath();
	this.shape_12.setTransform(70.6,-475.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-2.9).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.1).lineTo(0.4,-0.8).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_13.setTransform(61.8,-475.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,3).lineTo(-1.3,2.8).lineTo(-2.3,2.2).curveTo(-2.7,1.7,-2.9,1.2).lineTo(-3.1,0.6).lineTo(-3.2,0).lineTo(-3.2,-0).curveTo(-3.2,-0.4,-2.9,-1.2).curveTo(-2.7,-1.8,-2.2,-2.2).curveTo(-2,-2.5,-1.2,-2.8).lineTo(-0.7,-3).lineTo(0,-3.1).curveTo(0.4,-3.1,1.3,-2.8).lineTo(2.3,-2.2).curveTo(2.7,-1.8,2.9,-1.2).curveTo(3.2,-0.5,3.2,-0).lineTo(3.2,0.6).lineTo(2.9,1.2).curveTo(2.7,1.7,2.3,2.2).curveTo(1.7,2.7,1.3,2.8).curveTo(0.4,3.1,0,3.1).closePath().moveTo(-0.7,-1.5).lineTo(-1.1,-1.2).lineTo(-1.4,-0.7).lineTo(-1.6,-0).lineTo(-1.4,0.6).lineTo(-1.1,1.1).curveTo(-0.9,1.4,-0.6,1.5).curveTo(-0.4,1.6,0,1.6).curveTo(0.4,1.6,0.7,1.5).curveTo(0.9,1.4,1.1,1.1).lineTo(1.5,0.6).lineTo(1.6,0).lineTo(1.6,-0).lineTo(1.5,-0.6).lineTo(1.1,-1.2).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.7,-1.5).closePath();
	this.shape_14.setTransform(54.2,-475.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,4.1).lineTo(-1.2,-0.4).lineTo(-1.8,-0.4).lineTo(-1.8,-1.8).lineTo(-1.2,-1.8).lineTo(-1.2,-2.1).lineTo(-1,-3).curveTo(-0.9,-3.3,-0.7,-3.6).curveTo(-0.2,-4.1,0.6,-4).curveTo(1.3,-4,1.9,-3.9).lineTo(1.9,-2.5).lineTo(1.1,-2.7).curveTo(1,-2.7,1,-2.6).curveTo(0.9,-2.6,0.8,-2.6).curveTo(0.8,-2.6,0.7,-2.6).curveTo(0.7,-2.5,0.6,-2.5).curveTo(0.5,-2.4,0.5,-2).lineTo(0.5,-1.8).lineTo(1.9,-1.8).lineTo(1.9,-0.4).lineTo(0.5,-0.4).lineTo(0.5,4.1).closePath();
	this.shape_15.setTransform(47,-476.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-2.9).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.1).lineTo(0.4,-0.8).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_16.setTransform(41.3,-475.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.5,1.8,-2.7,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.4,-1.8,-2,-2.2).curveTo(-1.7,-2.6,-1.1,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.2,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.3,-0.5).lineTo(1.1,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.3,-0.5).lineTo(1.3,-0.5).closePath();
	this.shape_17.setTransform(33.9,-475.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,3.9).lineTo(-3,-3.9).lineTo(0.1,-3.9).curveTo(0.8,-3.9,1.4,-3.7).curveTo(1.9,-3.4,2.3,-3.1).curveTo(2.6,-2.7,2.8,-2.2).curveTo(3,-1.8,3,-1.2).lineTo(3,-1.2).lineTo(3,-0.5).lineTo(2.8,0).curveTo(2.6,0.5,2.1,0.8).curveTo(1.8,1.2,1.1,1.4).curveTo(0.6,1.5,-0.1,1.5).lineTo(-1.3,1.5).lineTo(-1.3,3.9).closePath().moveTo(-1.3,0).lineTo(0,0).lineTo(0.6,-0.1).lineTo(1,-0.3).lineTo(1.2,-0.6).lineTo(1.4,-1.2).lineTo(1.2,-1.6).lineTo(1,-2).lineTo(0.6,-2.2).lineTo(0,-2.3).lineTo(-1.3,-2.3).closePath();
	this.shape_18.setTransform(25.7,-476.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,3.7).lineTo(-2.6,3.4).lineTo(-2,2.3).curveTo(-1.7,2.4,-1.3,2.4).lineTo(-1,2.4).lineTo(-0.7,2.1).lineTo(-3.1,-3.9).lineTo(-1.3,-3.9).lineTo(0.1,0.1).lineTo(1.3,-3.9).lineTo(3.1,-3.9).lineTo(0.8,2.2).lineTo(0.5,3).lineTo(0.1,3.4).lineTo(-0.5,3.7).lineTo(-1.1,3.9).lineTo(-1.9,3.7).closePath();
	this.shape_19.setTransform(112.8,-492);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_20.setTransform(106,-493);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,2.9).lineTo(-2.1,2.6).lineTo(-2.6,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.6,0.4).lineTo(-2,-0.2).lineTo(-1.3,-0.6).lineTo(-0.3,-0.7).curveTo(0.2,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.1,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.7,-3,1.2,-2.9).curveTo(1.8,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.6,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.3,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.5,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.9,1.7).curveTo(-0.6,1.9,-0.1,1.9).lineTo(0.3,1.8).lineTo(0.8,1.6).lineTo(1,1.3).lineTo(1.1,0.8).lineTo(1.1,0.6).curveTo(0.7,0.3,0,0.3).curveTo(-0.4,0.3,-0.8,0.5).closePath();
	this.shape_21.setTransform(98.6,-492.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).lineTo(1,-0.3).lineTo(0.9,-0.8).lineTo(0.7,-1.2).lineTo(0.5,-1.4).lineTo(0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.8,-1.2).lineTo(-1,-0.8).lineTo(-1.1,-0.3).lineTo(-1.1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1.1,-2.9).lineTo(-1.1,-2.1).curveTo(-0.7,-2.5,-0.3,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.2,-3,1.6,-2.8).curveTo(1.9,-2.7,2.2,-2.4).curveTo(2.5,-2.2,2.6,-1.7).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_22.setTransform(90.6,-493);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_23.setTransform(84,-494);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3.1,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-1.9,-1.6,-1.5,-1.8).curveTo(-1,-2,-0.5,-2).lineTo(0.2,-2).lineTo(0.6,-1.8).curveTo(1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1,3.6,0.6,3.8).lineTo(0.2,4).lineTo(-0.5,4.1).curveTo(-1,4.1,-1.5,3.9).closePath().moveTo(-0.6,-0.5).lineTo(-1,-0.2).lineTo(-1.4,0.3).lineTo(-1.5,1).lineTo(-1.4,1.7).lineTo(-1,2.2).lineTo(-0.6,2.6).lineTo(-0,2.7).lineTo(0.5,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.4,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.5,-0.5).curveTo(0.3,-0.6,-0,-0.6).curveTo(-0.3,-0.6,-0.6,-0.5).closePath();
	this.shape_24.setTransform(77.1,-494);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_25.setTransform(69.9,-493);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,3).lineTo(-1.3,2.8).lineTo(-2.3,2.2).curveTo(-2.7,1.7,-2.9,1.2).lineTo(-3.1,0.6).lineTo(-3.2,0).lineTo(-3.2,-0).curveTo(-3.2,-0.4,-2.9,-1.2).curveTo(-2.7,-1.8,-2.2,-2.2).curveTo(-2,-2.5,-1.2,-2.8).lineTo(-0.7,-3).lineTo(0,-3.1).curveTo(0.4,-3.1,1.3,-2.8).lineTo(2.3,-2.2).curveTo(2.7,-1.8,2.9,-1.2).curveTo(3.2,-0.5,3.2,-0).lineTo(3.2,0.6).lineTo(2.9,1.2).curveTo(2.7,1.7,2.3,2.2).curveTo(1.7,2.7,1.3,2.8).curveTo(0.4,3.1,0,3.1).closePath().moveTo(-0.7,-1.5).lineTo(-1.1,-1.2).lineTo(-1.4,-0.7).lineTo(-1.6,-0).lineTo(-1.4,0.6).lineTo(-1.1,1.1).curveTo(-0.9,1.4,-0.6,1.5).curveTo(-0.4,1.6,0,1.6).curveTo(0.4,1.6,0.7,1.5).curveTo(0.9,1.4,1.1,1.1).lineTo(1.5,0.6).lineTo(1.6,0).lineTo(1.6,-0).lineTo(1.5,-0.6).lineTo(1.1,-1.2).lineTo(0.7,-1.5).lineTo(0,-1.6).lineTo(-0.7,-1.5).closePath();
	this.shape_26.setTransform(62.3,-492.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,2.9).lineTo(-2.1,2.6).lineTo(-2.6,2).curveTo(-2.7,1.7,-2.7,1.2).curveTo(-2.7,0.7,-2.6,0.4).lineTo(-2,-0.2).lineTo(-1.3,-0.6).lineTo(-0.3,-0.7).curveTo(0.2,-0.7,1.1,-0.4).lineTo(1.1,-0.5).lineTo(1,-1).lineTo(0.8,-1.3).lineTo(0.4,-1.5).lineTo(-0.2,-1.6).lineTo(-1,-1.5).lineTo(-1.8,-1.3).lineTo(-2.2,-2.6).lineTo(-1.2,-2.9).lineTo(0.1,-3).curveTo(0.7,-3,1.3,-2.9).curveTo(1.8,-2.7,2.1,-2.4).curveTo(2.4,-2.1,2.5,-1.6).curveTo(2.7,-1.1,2.7,-0.5).lineTo(2.7,2.9).lineTo(1.1,2.9).lineTo(1.1,2.3).curveTo(0.8,2.6,0.4,2.8).curveTo(-0.1,3,-0.7,3).lineTo(-1.4,2.9).closePath().moveTo(-0.8,0.5).curveTo(-1.1,0.7,-1.1,1.1).lineTo(-1.1,1.2).curveTo(-1.1,1.5,-0.9,1.7).curveTo(-0.6,1.9,-0.2,1.9).lineTo(0.4,1.8).lineTo(0.8,1.6).lineTo(1,1.3).lineTo(1.1,0.8).lineTo(1.1,0.6).curveTo(0.7,0.3,0,0.3).curveTo(-0.4,0.3,-0.8,0.5).closePath();
	this.shape_27.setTransform(53.7,-492.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3).lineTo(-1.8,-2.9).lineTo(-0.1,-2.9).lineTo(-0.1,-1.7).lineTo(0.2,-2.3).lineTo(0.6,-2.7).lineTo(1.1,-3).lineTo(1.8,-3).lineTo(1.8,-1.3).lineTo(1.7,-1.3).lineTo(0.9,-1.2).lineTo(0.4,-0.7).curveTo(0.1,-0.5,0,-0.1).curveTo(-0.1,0.3,-0.1,0.8).lineTo(-0.1,3).closePath();
	this.shape_28.setTransform(47.1,-493);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.7).lineTo(-0.7,3.4).curveTo(-0.9,3.2,-1,2.9).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.3).lineTo(-1.2,-2.3).lineTo(-1.2,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.3).lineTo(1.9,-2.3).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.6,2.2).curveTo(0.7,2.2,0.7,2.2).curveTo(0.8,2.2,0.8,2.3).curveTo(0.9,2.3,0.9,2.3).curveTo(1,2.3,1.1,2.3).curveTo(1.4,2.3,1.9,2.1).lineTo(1.9,3.4).lineTo(1.3,3.7).lineTo(0.5,3.8).lineTo(-0.1,3.7).closePath();
	this.shape_29.setTransform(40.7,-493.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,3).lineTo(0,1.1).lineTo(-1.2,3).lineTo(-2.9,3).lineTo(-0.9,-0.1).lineTo(-2.8,-3).lineTo(-1.1,-3).lineTo(0,-1.2).lineTo(1.1,-3).lineTo(2.9,-3).lineTo(0.9,-0.1).lineTo(2.9,3).closePath();
	this.shape_30.setTransform(33.8,-492.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,3.9).lineTo(-2.9,-3.9).lineTo(2.9,-3.9).lineTo(2.9,-2.3).lineTo(-1.2,-2.3).lineTo(-1.2,-0.8).lineTo(2.4,-0.8).lineTo(2.4,0.7).lineTo(-1.2,0.7).lineTo(-1.2,2.4).lineTo(2.9,2.4).lineTo(2.9,3.9).closePath();
	this.shape_31.setTransform(25.6,-493.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).lineTo(-0.9,-0.9).lineTo(0.9,-0.9).lineTo(0.9,0.9).closePath();
	this.shape_32.setTransform(108.6,-508.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,1.8).lineTo(-1.4,1.4).lineTo(-1.8,0.7).curveTo(-1.9,0.4,-1.9,-0).lineTo(-1.8,-0.8).lineTo(-1.4,-1.4).lineTo(-0.8,-1.8).lineTo(-0,-1.9).lineTo(0.8,-1.8).lineTo(1.4,-1.4).lineTo(1.8,-0.8).curveTo(1.9,-0.4,1.9,-0).curveTo(1.9,0.4,1.8,0.7).lineTo(1.4,1.3).curveTo(1.1,1.6,0.7,1.8).curveTo(0.4,1.9,-0,1.9).lineTo(-0.8,1.8).closePath().moveTo(-0.7,-1.6).curveTo(-1,-1.5,-1.2,-1.2).lineTo(-1.6,-0.7).lineTo(-1.7,-0).lineTo(-1.6,0.7).lineTo(-1.2,1.2).lineTo(-0.7,1.6).curveTo(-0.4,1.7,-0,1.7).lineTo(0.7,1.6).lineTo(1.2,1.2).lineTo(1.6,0.7).lineTo(1.7,-0).lineTo(1.6,-0.7).lineTo(1.2,-1.2).curveTo(1,-1.5,0.7,-1.6).curveTo(0.4,-1.7,-0,-1.7).curveTo(-0.4,-1.7,-0.7,-1.6).closePath().moveTo(0.4,1).lineTo(-0,0.4).lineTo(-0.3,0.4).lineTo(-0.3,1).lineTo(-0.8,1).lineTo(-0.8,-1.1).lineTo(0.1,-1.1).curveTo(0.5,-1.1,0.7,-0.9).curveTo(1,-0.7,1,-0.4).lineTo(0.9,0).lineTo(0.6,0.3).lineTo(1,1).closePath().moveTo(-0.3,-0.1).lineTo(0.1,-0.1).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.3,-0.1,0.3,-0.1).curveTo(0.4,-0.2,0.4,-0.2).curveTo(0.4,-0.3,0.4,-0.3).curveTo(0.4,-0.4,0.4,-0.4).curveTo(0.4,-0.5,0.3,-0.5).curveTo(0.3,-0.5,0.2,-0.6).curveTo(0.2,-0.6,0.1,-0.6).lineTo(-0.3,-0.6).closePath();
	this.shape_33.setTransform(103.5,-513.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.7,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.7,-1.2).curveTo(-2.4,-1.8,-2.1,-2.2).curveTo(-1.7,-2.6,-1.2,-2.8).lineTo(-0.6,-3).lineTo(0,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.2,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,0.9,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.2,2.4).lineTo(1.6,2.8).lineTo(0.9,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.3,-0.5).lineTo(1.2,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0,-1.7).lineTo(-0.4,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.2,-0.5).lineTo(1.3,-0.5).lineTo(1.3,-0.5).closePath();
	this.shape_34.setTransform(96.7,-510.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,3.9).curveTo(-1.9,3.7,-2.3,3.3).curveTo(-2.7,2.9,-2.9,2.3).lineTo(-3,1.7).lineTo(-3.1,1).curveTo(-3.1,0.5,-2.9,-0.3).curveTo(-2.7,-0.8,-2.3,-1.2).curveTo(-2,-1.6,-1.4,-1.8).curveTo(-1,-2,-0.4,-2).lineTo(0.2,-2).lineTo(0.7,-1.8).curveTo(1,-1.6,1.4,-1.1).lineTo(1.4,-4.1).lineTo(3.1,-4.1).lineTo(3.1,4).lineTo(1.4,4).lineTo(1.4,3.1).curveTo(1,3.6,0.7,3.8).lineTo(0.1,4).lineTo(-0.4,4.1).curveTo(-1,4.1,-1.4,3.9).closePath().moveTo(-0.5,-0.5).lineTo(-1,-0.2).lineTo(-1.3,0.3).lineTo(-1.4,1).lineTo(-1.3,1.7).lineTo(-1,2.2).lineTo(-0.5,2.6).lineTo(0,2.7).lineTo(0.6,2.6).lineTo(1,2.2).lineTo(1.3,1.7).lineTo(1.5,1).lineTo(1.3,0.3).lineTo(1,-0.2).lineTo(0.6,-0.5).curveTo(0.3,-0.6,0,-0.6).curveTo(-0.3,-0.6,-0.5,-0.5).closePath();
	this.shape_35.setTransform(88,-511.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-1.9).lineTo(0.8,-1.9).lineTo(0.8,4).closePath().moveTo(-0.9,-2.5).lineTo(-0.9,-4).lineTo(0.9,-4).lineTo(0.9,-2.5).closePath();
	this.shape_36.setTransform(81.3,-511.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-2,2.5,-2.4,2.2).lineTo(-1.7,1).curveTo(-1.2,1.4,-0.7,1.6).lineTo(0.2,1.7).lineTo(0.7,1.6).curveTo(0.8,1.6,0.8,1.6).curveTo(0.8,1.6,0.8,1.5).curveTo(0.9,1.5,0.9,1.4).curveTo(0.9,1.4,0.9,1.4).lineTo(0.9,1.3).curveTo(0.9,1.1,0.5,0.9).lineTo(-0.3,0.7).curveTo(-1.2,0.4,-1.5,0.1).lineTo(-1.9,-0.4).curveTo(-2.1,-0.8,-2.1,-1.1).curveTo(-2.1,-1.6,-1.9,-2).curveTo(-1.8,-2.3,-1.5,-2.6).curveTo(-1.2,-2.8,-0.8,-2.9).curveTo(-0.4,-3.1,0.1,-3).curveTo(0.6,-3,1.2,-2.9).lineTo(2.3,-2.3).lineTo(1.6,-1.2).lineTo(0.8,-1.6).lineTo(0,-1.8).lineTo(-0.4,-1.7).lineTo(-0.6,-1.3).lineTo(-0.6,-1.3).curveTo(-0.6,-1.1,-0.2,-0.9).lineTo(0.6,-0.6).lineTo(1.2,-0.3).lineTo(1.8,-0.1).lineTo(2.2,0.5).curveTo(2.4,0.7,2.4,1.1).curveTo(2.4,1.7,2.2,2).curveTo(2.1,2.3,1.7,2.6).curveTo(1.5,2.8,1,2.9).lineTo(0.1,3.1).curveTo(-0.5,3.1,-1.1,2.8).closePath();
	this.shape_37.setTransform(75.3,-510.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).lineTo(1.1,-0.3).lineTo(1,-0.8).lineTo(0.8,-1.2).lineTo(0.4,-1.4).lineTo(-0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.7,-1.2).lineTo(-0.9,-0.8).lineTo(-1,-0.3).lineTo(-1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1,-2.9).lineTo(-1,-2.1).curveTo(-0.7,-2.5,-0.4,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.1,-3,1.5,-2.9).curveTo(1.9,-2.7,2.1,-2.4).curveTo(2.4,-2.2,2.6,-1.7).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_38.setTransform(67.7,-510.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.8).lineTo(-0.8,-3.8).lineTo(0.9,-3.8).lineTo(0.9,3.8).closePath();
	this.shape_39.setTransform(61,-511);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-4).lineTo(0.8,-4).lineTo(0.8,4).closePath();
	this.shape_40.setTransform(51.2,-511.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,2.8).curveTo(-1.6,2.6,-2,2.2).curveTo(-2.4,1.8,-2.6,1.2).lineTo(-2.9,0.7).lineTo(-2.9,0).lineTo(-2.9,-0).curveTo(-2.9,-0.6,-2.6,-1.2).curveTo(-2.4,-1.8,-2.1,-2.2).curveTo(-1.7,-2.6,-1.2,-2.8).lineTo(-0.6,-3).lineTo(0.1,-3.1).lineTo(0.7,-3).lineTo(1.3,-2.8).lineTo(1.8,-2.5).lineTo(2.2,-2.1).curveTo(2.6,-1.7,2.7,-1.1).curveTo(2.9,-0.5,2.9,0.1).lineTo(2.9,0.6).lineTo(-1.3,0.6).lineTo(-1.1,1.1).lineTo(-0.7,1.4).lineTo(-0.3,1.6).lineTo(0.2,1.7).curveTo(0.6,1.7,1,1.6).lineTo(1.6,1.1).lineTo(2.6,2).lineTo(2.1,2.4).lineTo(1.6,2.8).lineTo(1,3).lineTo(0.2,3.1).lineTo(-1.1,2.8).closePath().moveTo(1.2,-0.5).lineTo(1.2,-1).lineTo(0.9,-1.4).lineTo(0.5,-1.6).lineTo(0.1,-1.7).lineTo(-0.5,-1.7).lineTo(-0.8,-1.4).lineTo(-1.1,-1).lineTo(-1.3,-0.5).lineTo(1.2,-0.5).lineTo(1.2,-0.5).closePath();
	this.shape_41.setTransform(44.7,-510.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,3.6).lineTo(-0.7,3.4).curveTo(-0.9,3.1,-1.1,2.9).curveTo(-1.2,2.5,-1.2,2).lineTo(-1.2,-0.8).lineTo(-1.9,-0.8).lineTo(-1.9,-2.2).lineTo(-1.2,-2.2).lineTo(-1.2,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.2).lineTo(1.9,-2.2).lineTo(1.9,-0.8).lineTo(0.5,-0.8).lineTo(0.5,1.7).curveTo(0.5,1.8,0.5,1.8).curveTo(0.5,1.9,0.5,2).curveTo(0.6,2,0.6,2.1).curveTo(0.6,2.1,0.6,2.2).curveTo(0.7,2.2,0.7,2.2).curveTo(0.7,2.2,0.8,2.3).curveTo(0.9,2.3,0.9,2.3).curveTo(1,2.3,1.1,2.3).curveTo(1.4,2.3,1.9,2.1).lineTo(1.9,3.4).lineTo(1.3,3.6).lineTo(0.5,3.8).lineTo(-0.2,3.6).closePath();
	this.shape_42.setTransform(37.5,-510.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).lineTo(1.1,-0.3).lineTo(1,-0.8).lineTo(0.8,-1.2).lineTo(0.4,-1.4).lineTo(-0,-1.5).lineTo(-0.4,-1.4).lineTo(-0.7,-1.2).lineTo(-0.9,-0.8).lineTo(-1,-0.3).lineTo(-1,3).lineTo(-2.7,3).lineTo(-2.7,-2.9).lineTo(-1,-2.9).lineTo(-1,-2.1).curveTo(-0.7,-2.5,-0.4,-2.7).lineTo(0.1,-3).lineTo(0.7,-3).curveTo(1.1,-3,1.5,-2.9).curveTo(1.9,-2.7,2.1,-2.4).curveTo(2.4,-2.2,2.6,-1.7).curveTo(2.7,-1.3,2.7,-0.8).lineTo(2.7,3).closePath();
	this.shape_43.setTransform(30.4,-510.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,3.8).lineTo(-0.8,-3.8).lineTo(0.9,-3.8).lineTo(0.9,3.8).closePath();
	this.shape_44.setTransform(23.6,-511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,-519.7,155.6,51.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib._0();
	this.instance.setTransform(0,0,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,225.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB6207").beginStroke().moveTo(-0.9,5.3).lineTo(-2,5).lineTo(-3.2,4.4).curveTo(-3.7,4.1,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2.1,2.7,-1.3,3).lineTo(-0.6,3.3).lineTo(0.3,3.4).curveTo(1,3.3,1.5,3.1).curveTo(1.8,2.8,1.8,2.4).curveTo(1.8,1.9,1.5,1.6).curveTo(1,1.3,-0.2,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.2,-0.4,-3.5,-0.9).curveTo(-3.8,-1.5,-3.7,-2.2).lineTo(-3.7,-2.2).curveTo(-3.7,-2.9,-3.5,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.6,-5.2).curveTo(-0.9,-5.4,-0,-5.4).lineTo(1,-5.3).lineTo(2,-5).lineTo(3,-4.7).lineTo(3.8,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.9,1.2,-3.1).curveTo(0.6,-3.4,-0.1,-3.4).curveTo(-0.8,-3.4,-1.1,-3.1).curveTo(-1.5,-2.9,-1.5,-2.5).lineTo(-1.5,-2.4).curveTo(-1.5,-1.9,-1,-1.7).curveTo(-0.5,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.9,-0.3,3.3,0).curveTo(3.7,0.5,3.9,0.9).curveTo(4.1,1.5,4.2,2.1).lineTo(4.2,2.2).curveTo(4.1,2.9,3.8,3.5).curveTo(3.6,4.2,3,4.5).curveTo(2.6,5,1.8,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape.setTransform(99.9,-43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EB6207").beginStroke().moveTo(-4,6.8).lineTo(-4,-3.7).lineTo(3.9,-3.7).lineTo(3.9,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,0.5).lineTo(3.2,0.5).lineTo(3.2,2.6).lineTo(-1.7,2.6).lineTo(-1.7,4.8).lineTo(4,4.8).lineTo(4,6.8).closePath().moveTo(-0.9,-4.5).lineTo(0.9,-6.8).lineTo(2.9,-5.9).lineTo(0.8,-4.5).closePath();
	this.shape_1.setTransform(88.9,-45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EB6207").beginStroke().moveTo(-0.9,5.3).lineTo(-2.1,5).lineTo(-3.2,4.4).curveTo(-3.7,4.1,-4.2,3.7).lineTo(-2.8,2.1).curveTo(-2,2.7,-1.3,3).lineTo(-0.5,3.3).lineTo(0.3,3.4).curveTo(1.1,3.3,1.4,3.1).curveTo(1.9,2.8,1.9,2.4).curveTo(1.9,1.9,1.4,1.6).curveTo(1,1.3,-0.3,1).lineTo(-1.7,0.6).lineTo(-2.8,0).curveTo(-3.3,-0.4,-3.5,-0.9).curveTo(-3.8,-1.5,-3.8,-2.2).lineTo(-3.8,-2.2).curveTo(-3.7,-2.9,-3.4,-3.6).curveTo(-3.2,-4.1,-2.7,-4.6).curveTo(-2.2,-4.9,-1.5,-5.2).curveTo(-0.9,-5.4,-0,-5.4).lineTo(1.1,-5.3).lineTo(2.1,-5).lineTo(3,-4.7).lineTo(3.9,-4).lineTo(2.7,-2.3).curveTo(1.9,-2.9,1.2,-3.1).curveTo(0.5,-3.4,-0.1,-3.4).curveTo(-0.7,-3.4,-1.1,-3.1).curveTo(-1.4,-2.9,-1.4,-2.5).lineTo(-1.4,-2.4).curveTo(-1.4,-1.9,-1,-1.7).curveTo(-0.6,-1.4,0.8,-1.1).lineTo(2.2,-0.5).curveTo(2.8,-0.3,3.3,0).curveTo(3.7,0.5,4,0.9).curveTo(4.1,1.5,4.1,2.1).lineTo(4.1,2.2).curveTo(4.1,2.9,3.9,3.5).curveTo(3.6,4.2,3.1,4.5).curveTo(2.6,5,1.9,5.2).curveTo(1.1,5.4,0.3,5.4).lineTo(-0.9,5.3).closePath();
	this.shape_2.setTransform(71.2,-43.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6207").beginStroke().moveTo(-1.2,6.9).lineTo(-2.3,6.6).lineTo(-3.2,6.1).lineTo(-4,5.4).lineTo(-4.7,4.6).lineTo(-5.2,3.7).lineTo(-5.5,2.7).lineTo(-5.6,1.6).lineTo(-5.6,1.6).lineTo(-5.5,0.5).lineTo(-5.2,-0.5).lineTo(-4.7,-1.5).lineTo(-4,-2.3).lineTo(-3.2,-2.9).lineTo(-2.2,-3.4).lineTo(-1.2,-3.7).lineTo(0,-3.9).curveTo(0.6,-3.9,1.2,-3.7).lineTo(2.3,-3.4).lineTo(3.2,-2.9).lineTo(4,-2.3).lineTo(4.7,-1.5).lineTo(5.2,-0.6).lineTo(5.5,0.5).lineTo(5.6,1.5).lineTo(5.6,1.6).lineTo(5.5,2.7).lineTo(5.2,3.7).lineTo(4.7,4.6).lineTo(4,5.4).lineTo(3.2,6.1).lineTo(2.2,6.6).lineTo(1.2,6.9).lineTo(-0,7).curveTo(-0.6,7,-1.2,6.9).closePath().moveTo(-1.3,-1.5).curveTo(-1.9,-1.2,-2.3,-0.8).curveTo(-2.7,-0.3,-2.9,0.3).curveTo(-3.2,0.9,-3.2,1.5).lineTo(-3.2,1.6).curveTo(-3.2,2.2,-2.9,2.8).curveTo(-2.7,3.4,-2.3,3.9).curveTo(-1.8,4.4,-1.3,4.6).curveTo(-0.7,4.9,0,4.9).curveTo(0.7,4.9,1.3,4.6).curveTo(1.9,4.4,2.3,3.9).curveTo(2.7,3.5,2.9,2.9).curveTo(3.2,2.3,3.2,1.6).lineTo(3.2,1.6).curveTo(3.2,0.9,2.9,0.3).curveTo(2.7,-0.3,2.3,-0.7).curveTo(1.8,-1.2,1.3,-1.5).curveTo(0.7,-1.7,-0,-1.7).curveTo(-0.7,-1.7,-1.3,-1.5).closePath().moveTo(0.4,-4.7).lineTo(2.2,-7).lineTo(4.1,-6.1).lineTo(2.1,-4.7).closePath().moveTo(-2.4,-4.7).lineTo(-0.6,-7).lineTo(1.3,-6.1).lineTo(-0.8,-4.7).closePath();
	this.shape_3.setTransform(58.6,-45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6207").beginStroke().moveTo(1.9,5.2).lineTo(-0.4,1.9).lineTo(-2.3,1.9).lineTo(-2.3,5.2).lineTo(-4.5,5.2).lineTo(-4.5,-5.3).lineTo(0.2,-5.3).curveTo(1,-5.3,2,-4.9).curveTo(2.8,-4.7,3.3,-4.2).curveTo(3.8,-3.8,4,-3.1).curveTo(4.2,-2.5,4.2,-1.8).lineTo(4.2,-1.8).curveTo(4.2,-1.1,4,-0.6).curveTo(3.9,-0.1,3.6,0.3).lineTo(2.9,1).curveTo(2.5,1.3,2,1.5).lineTo(4.6,5.2).closePath().moveTo(-2.3,-0.2).lineTo(0.1,-0.2).lineTo(0.9,-0.2).curveTo(1.2,-0.3,1.4,-0.5).curveTo(1.7,-0.8,1.8,-1.1).curveTo(1.9,-1.3,1.9,-1.7).curveTo(1.9,-2.1,1.8,-2.3).curveTo(1.7,-2.6,1.4,-2.8).curveTo(1.1,-3,0.8,-3).lineTo(0.1,-3.1).lineTo(-2.3,-3.1).closePath();
	this.shape_4.setTransform(45.8,-43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EB6207").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.3).lineTo(4,-5.3).lineTo(4,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.2,-1.1).lineTo(3.2,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_5.setTransform(33.7,-43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EB6207").beginStroke().moveTo(-4,5.2).lineTo(-4,-5.3).lineTo(4,-5.3).lineTo(4,-3.2).lineTo(-1.7,-3.2).lineTo(-1.7,-1.1).lineTo(3.3,-1.1).lineTo(3.3,1).lineTo(-1.7,1).lineTo(-1.7,3.2).lineTo(4,3.2).lineTo(4,5.2).closePath();
	this.shape_6.setTransform(16.1,-43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EB6207").beginStroke().moveTo(-1.2,5.2).lineTo(-1.2,-3.1).lineTo(-4.3,-3.1).lineTo(-4.3,-5.3).lineTo(4.3,-5.3).lineTo(4.3,-3.1).lineTo(1.2,-3.1).lineTo(1.2,5.2).closePath();
	this.shape_7.setTransform(4.5,-43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#EB6207").beginStroke().moveTo(3.1,5.3).lineTo(2.2,3).lineTo(-2.2,3).lineTo(-3.2,5.3).lineTo(-5.6,5.3).lineTo(-1.1,-5.3).lineTo(1.1,-5.3).lineTo(5.6,5.3).closePath().moveTo(1.4,0.9).lineTo(-0,-2.5).lineTo(-1.4,0.9).lineTo(1.4,0.9).closePath();
	this.shape_8.setTransform(-13.8,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-54.6,136.2,22);


(lib.soundeffect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,13.5).curveTo(-6.9,11.5,-6.9,8.6).lineTo(-6.9,-8.6).curveTo(-6.9,-11.5,-4.9,-13.5).curveTo(-2.9,-15.5,0,-15.5).curveTo(2.9,-15.5,4.8,-13.5).curveTo(6.9,-11.5,6.9,-8.6).lineTo(6.9,8.6).curveTo(6.9,11.5,4.8,13.5).curveTo(2.9,15.5,0,15.5).curveTo(-2.9,15.5,-4.9,13.5).closePath();
	this.shape.setTransform(137.3,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,15.8).curveTo(-6.9,13.5,-6.9,10.1).lineTo(-6.9,-10.1).curveTo(-6.9,-13.5,-4.9,-15.8).curveTo(-2.9,-18.2,0,-18.2).curveTo(2.9,-18.2,4.8,-15.8).curveTo(6.9,-13.5,6.9,-10.1).lineTo(6.9,10.1).curveTo(6.9,13.5,4.8,15.8).curveTo(2.9,18.2,0,18.2).curveTo(-2.9,18.2,-4.9,15.8).closePath();
	this.shape_1.setTransform(137.3,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,15.1).curveTo(-6.9,12.9,-6.9,9.6).lineTo(-6.9,-9.6).curveTo(-6.9,-12.8,-4.9,-15.1).curveTo(-2.9,-17.3,0,-17.3).curveTo(2.9,-17.3,4.8,-15.1).curveTo(6.9,-12.8,6.9,-9.6).lineTo(6.9,9.6).curveTo(6.9,12.9,4.8,15.1).curveTo(2.9,17.3,0,17.3).curveTo(-2.9,17.3,-4.9,15.1).closePath();
	this.shape_2.setTransform(137.3,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,14.3).curveTo(-6.9,12.2,-6.9,9.1).lineTo(-6.9,-9.1).curveTo(-6.9,-12.1,-4.9,-14.3).curveTo(-2.9,-16.4,0,-16.4).curveTo(2.9,-16.4,4.8,-14.3).curveTo(6.9,-12.1,6.9,-9.1).lineTo(6.9,9.1).curveTo(6.9,12.2,4.8,14.3).curveTo(2.9,16.4,0,16.4).curveTo(-2.9,16.4,-4.9,14.3).closePath();
	this.shape_3.setTransform(137.3,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,14.7).curveTo(-6.9,12.5,-6.9,9.4).lineTo(-6.9,-9.4).curveTo(-6.9,-12.4,-4.9,-14.7).curveTo(-2.9,-16.8,0,-16.8).curveTo(2.9,-16.8,4.8,-14.7).curveTo(6.9,-12.4,6.9,-9.4).lineTo(6.9,9.4).curveTo(6.9,12.5,4.8,14.7).curveTo(2.9,16.9,0,16.8).curveTo(-2.9,16.9,-4.9,14.7).closePath();
	this.shape_4.setTransform(137.3,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,15.8).curveTo(-6.9,13.5,-6.9,10.1).lineTo(-6.9,-10.1).curveTo(-6.9,-13.4,-4.9,-15.8).curveTo(-2.9,-18.2,0,-18.2).curveTo(2.9,-18.2,4.8,-15.8).curveTo(6.9,-13.4,6.9,-10.1).lineTo(6.9,10.1).curveTo(6.9,13.5,4.8,15.8).curveTo(2.9,18.2,0,18.2).curveTo(-2.9,18.2,-4.9,15.8).closePath();
	this.shape_5.setTransform(137.3,60.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,17).curveTo(-6.9,14.5,-6.9,10.8).lineTo(-6.9,-10.8).curveTo(-6.9,-14.4,-4.9,-16.9).curveTo(-2.9,-19.5,0,-19.5).curveTo(2.9,-19.5,4.8,-16.9).curveTo(6.9,-14.4,6.9,-10.8).lineTo(6.9,10.8).curveTo(6.9,14.5,4.8,17).curveTo(2.9,19.5,0,19.5).curveTo(-2.9,19.5,-4.9,17).closePath();
	this.shape_6.setTransform(137.3,58.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,18.2).curveTo(-6.9,15.4,-6.9,11.6).lineTo(-6.9,-11.5).curveTo(-6.9,-15.4,-4.9,-18.1).curveTo(-2.9,-20.8,0,-20.8).curveTo(2.9,-20.8,4.8,-18.1).curveTo(6.9,-15.4,6.9,-11.5).lineTo(6.9,11.6).curveTo(6.9,15.4,4.8,18.2).curveTo(2.9,20.8,0,20.8).curveTo(-2.9,20.8,-4.9,18.2).closePath();
	this.shape_7.setTransform(137.3,57.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,14.5).curveTo(-6.9,12.3,-6.9,9.2).lineTo(-6.9,-9.2).curveTo(-6.9,-12.3,-4.9,-14.5).curveTo(-2.9,-16.6,0,-16.6).curveTo(2.9,-16.6,4.8,-14.5).curveTo(6.9,-12.3,6.9,-9.2).lineTo(6.9,9.2).curveTo(6.9,12.3,4.8,14.5).curveTo(2.9,16.6,0,16.6).curveTo(-2.9,16.6,-4.9,14.5).closePath();
	this.shape_8.setTransform(137.3,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,15.4).curveTo(-6.9,13.2,-6.9,9.9).lineTo(-6.9,-9.8).curveTo(-6.9,-13,-4.9,-15.4).curveTo(-2.9,-17.7,0,-17.7).curveTo(2.9,-17.7,4.8,-15.4).curveTo(6.9,-13,6.9,-9.8).lineTo(6.9,9.9).curveTo(6.9,13.2,4.8,15.4).curveTo(2.9,17.7,0,17.7).curveTo(-2.9,17.7,-4.9,15.4).closePath();
	this.shape_9.setTransform(137.3,61.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,16.4).curveTo(-6.9,14,-6.9,10.4).lineTo(-6.9,-10.5).curveTo(-6.9,-13.9,-4.9,-16.3).curveTo(-2.9,-18.8,0,-18.8).curveTo(2.9,-18.8,4.8,-16.3).curveTo(6.9,-13.9,6.9,-10.5).lineTo(6.9,10.4).curveTo(6.9,14,4.8,16.4).curveTo(2.9,18.8,0,18.8).curveTo(-2.9,18.8,-4.9,16.4).closePath();
	this.shape_10.setTransform(137.3,60.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,17.3).curveTo(-6.9,14.7,-6.9,11.1).lineTo(-6.9,-11.1).curveTo(-6.9,-14.7,-4.9,-17.3).curveTo(-2.9,-19.8,0,-19.8).curveTo(2.9,-19.8,4.8,-17.3).curveTo(6.9,-14.7,6.9,-11.1).lineTo(6.9,11.1).curveTo(6.9,14.7,4.8,17.3).curveTo(2.9,19.9,0,19.9).curveTo(-2.9,19.9,-4.9,17.3).closePath();
	this.shape_11.setTransform(137.3,59.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,18.2).curveTo(-6.9,15.5,-6.9,11.6).lineTo(-6.9,-11.6).curveTo(-6.9,-15.5,-4.9,-18.3).curveTo(-2.9,-20.9,0,-21).curveTo(2.9,-20.9,4.8,-18.3).curveTo(6.9,-15.5,6.9,-11.6).lineTo(6.9,11.6).curveTo(6.9,15.5,4.8,18.2).curveTo(2.9,20.9,0,21).curveTo(-2.9,20.9,-4.9,18.2).closePath();
	this.shape_12.setTransform(137.3,58.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,19.2).curveTo(-6.9,16.3,-6.9,12.2).lineTo(-6.9,-12.2).curveTo(-6.9,-16.3,-4.9,-19.2).curveTo(-2.9,-22,0,-22).curveTo(2.9,-22,4.8,-19.2).curveTo(6.9,-16.3,6.9,-12.2).lineTo(6.9,12.2).curveTo(6.9,16.3,4.8,19.2).curveTo(2.9,22,0,22).curveTo(-2.9,22,-4.9,19.2).closePath();
	this.shape_13.setTransform(137.3,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,20.1).curveTo(-6.9,17.1,-6.9,12.8).lineTo(-6.9,-12.9).curveTo(-6.9,-17.1,-4.9,-20.2).curveTo(-2.9,-23.1,0,-23.1).curveTo(2.9,-23.1,4.8,-20.2).curveTo(6.9,-17.1,6.9,-12.9).lineTo(6.9,12.8).curveTo(6.9,17.1,4.8,20.1).curveTo(2.9,23.1,0,23.1).curveTo(-2.9,23.1,-4.9,20.1).closePath();
	this.shape_14.setTransform(137.3,56);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,21).curveTo(-6.9,18,-6.9,13.5).lineTo(-6.9,-13.4).curveTo(-6.9,-17.9,-4.9,-21.1).curveTo(-2.9,-24.2,0,-24.2).curveTo(2.9,-24.2,4.8,-21.1).curveTo(6.9,-17.9,6.9,-13.4).lineTo(6.9,13.5).curveTo(6.9,18,4.8,21).curveTo(2.9,24.2,0,24.2).curveTo(-2.9,24.2,-4.9,21).closePath();
	this.shape_15.setTransform(137.3,55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,15.2).curveTo(-6.9,12.9,-7,9.7).lineTo(-7,-9.7).curveTo(-6.9,-12.9,-4.9,-15.2).curveTo(-2.9,-17.4,0,-17.4).curveTo(2.9,-17.4,4.9,-15.2).curveTo(7,-12.9,7,-9.7).lineTo(7,9.7).curveTo(7,12.9,4.9,15.2).curveTo(2.9,17.4,0,17.4).curveTo(-2.9,17.4,-4.9,15.2).closePath();
	this.shape_16.setTransform(137.3,61.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,16.9).curveTo(-7,14.4,-7,10.7).lineTo(-7,-10.7).curveTo(-7,-14.3,-4.9,-16.8).curveTo(-2.9,-19.3,0,-19.3).curveTo(2.9,-19.3,5,-16.8).curveTo(7,-14.3,7,-10.7).lineTo(7,10.7).curveTo(7,14.4,5,16.9).curveTo(2.9,19.3,0,19.3).curveTo(-2.9,19.3,-4.9,16.9).closePath();
	this.shape_17.setTransform(137.3,60.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#EB6209").beginStroke().moveTo(-5,18.5).curveTo(-7.1,15.8,-7,11.8).lineTo(-7,-11.8).curveTo(-7.1,-15.7,-5,-18.5).curveTo(-3,-21.3,-0,-21.3).curveTo(2.9,-21.3,4.9,-18.5).curveTo(7.1,-15.7,7,-11.8).lineTo(7,11.8).curveTo(7.1,15.8,4.9,18.5).curveTo(2.9,21.3,-0,21.3).curveTo(-3,21.3,-5,18.5).closePath();
	this.shape_18.setTransform(137.4,58.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#EB6209").beginStroke().moveTo(-5,20.2).curveTo(-7.1,17.2,-7.1,12.9).lineTo(-7.1,-12.9).curveTo(-7.1,-17.1,-5,-20.2).curveTo(-3,-23.2,-0,-23.2).curveTo(2.9,-23.2,5,-20.2).curveTo(7.1,-17.1,7.1,-12.9).lineTo(7.1,12.9).curveTo(7.1,17.2,5,20.2).curveTo(2.9,23.2,-0,23.2).curveTo(-3,23.2,-5,20.2).closePath();
	this.shape_19.setTransform(137.4,57.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#EB6209").beginStroke().moveTo(-5,21.9).curveTo(-7.2,18.6,-7.1,13.9).lineTo(-7.1,-13.9).curveTo(-7.2,-18.5,-5,-21.8).curveTo(-3,-25.1,-0,-25.1).curveTo(3,-25.1,5,-21.8).curveTo(7.2,-18.5,7.2,-13.9).lineTo(7.2,13.9).curveTo(7.2,18.6,5,21.9).curveTo(3,25.1,-0,25.1).curveTo(-3,25.1,-5,21.9).closePath();
	this.shape_20.setTransform(137.4,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:76.8},0).wait(1).to({y:74.5},0).wait(1).to({y:72.2},0).to({_off:true},1).wait(3).to({_off:false,y:63.1},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({y:66.3},0).wait(1).to({y:69.5},0).wait(1).to({y:72.7},0).wait(1).to({y:75.9},0).wait(1).to({y:79.1},0).wait(1).to({y:71.1},0).wait(1).to({y:63.1},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({y:67.1},0).wait(1).to({y:71.1},0).wait(1).to({y:75.1},0).wait(1).to({y:79.1},0).wait(1).to({y:71.1},0).wait(1).to({y:63.1},0).to({_off:true},1).wait(6));

	// Vrstva 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#EB6209").beginStroke().moveTo(-5,39.6).curveTo(-7,37.5,-7,34.7).lineTo(-7,-34.7).curveTo(-7,-37.5,-5,-39.5).curveTo(-2.9,-41.6,-0.1,-41.6).curveTo(2.8,-41.6,5,-39.5).curveTo(7,-37.5,7,-34.7).lineTo(7,34.7).curveTo(7,37.5,5,39.6).curveTo(2.8,41.6,-0.1,41.6).curveTo(-2.9,41.6,-5,39.6).closePath();
	this.shape_21.setTransform(117.1,82.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1).to({y:80},0).wait(1).to({y:77.2},0).wait(1).to({y:74.4},0).wait(1).to({y:62.2},0).wait(1).to({y:62.5},0).wait(1).to({y:62.8},0).wait(1).to({y:63.1},0).wait(1).to({y:65.5},0).wait(1).to({y:67.9},0).wait(1).to({y:70.3},0).wait(1).to({y:72.7},0).wait(1).to({y:70.3},0).wait(1).to({y:67.9},0).wait(1).to({y:65.5},0).wait(1).to({y:63.1},0).wait(1).to({y:65.9},0).wait(1).to({y:68.7},0).wait(1).to({y:71.6},0).wait(1).to({y:74.4},0).wait(1).to({y:77.2},0).wait(1).to({y:80},0).wait(1).to({y:82.9},0).wait(1).to({y:63.1},0).wait(1).to({y:67.1},0).wait(1).to({y:71.1},0).wait(1).to({y:75.1},0).wait(1).to({y:79.1},0).wait(1).to({y:77.5},0).wait(1).to({y:75.9},0).wait(1).to({y:74.3},0).wait(1).to({y:72.7},0).wait(1).to({y:67.9},0).wait(1).to({y:63.1},0).wait(1).to({y:65.9},0).wait(1).to({y:68.7},0).wait(1).to({y:71.6},0).wait(1).to({y:74.4},0).wait(1).to({y:77.2},0).wait(1).to({y:80},0).wait(1).to({y:82.9},0).wait(1).to({y:63.1},0).wait(1).to({y:79.1},0).wait(2));

	// Vrstva 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,65.5).curveTo(-7,63.5,-7,60.6).lineTo(-7,-60.6).curveTo(-7,-63.5,-4.9,-65.5).curveTo(-2.8,-67.5,0.1,-67.5).curveTo(3,-67.5,5,-65.5).curveTo(7,-63.4,7,-60.6).lineTo(7,60.6).curveTo(7,63.5,5,65.5).curveTo(3,67.5,0.1,67.5).curveTo(-2.8,67.5,-4.9,65.5).closePath();
	this.shape_22.setTransform(96.8,91.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1).to({y:87.5},0).wait(1).to({y:83.5},0).wait(1).to({y:79.4},0).wait(1).to({y:75.3},0).wait(1).to({y:71.2},0).wait(1).to({y:67.1},0).wait(1).to({y:63},0).wait(1).to({y:55.6},0).wait(1).to({y:48.1},0).wait(1).to({y:40.7},0).wait(1).to({y:33.2},0).wait(1).to({y:48.3},0).wait(1).to({y:63.4},0).wait(1).to({y:78.4},0).wait(1).to({y:93.5},0).wait(1).to({y:87.4},0).wait(1).to({y:81.3},0).wait(1).to({y:75.2},0).wait(1).to({y:69.1},0).wait(1).to({y:63},0).wait(1).to({y:77.3},0).wait(1).to({y:91.6},0).wait(1).to({y:77.3},0).wait(1).to({y:63},0).wait(1).to({y:68.4},0).wait(1).to({y:73.7},0).wait(1).to({y:79},0).wait(1).to({y:86},0).wait(1).to({y:93},0).wait(1).to({y:63.1},0).wait(1).to({y:33.2},0).wait(1).to({y:63.4},0).wait(1).to({y:93.5},0).wait(1).to({y:87.4},0).wait(1).to({y:81.3},0).wait(1).to({y:75.2},0).wait(1).to({y:69.1},0).wait(1).to({y:63},0).wait(1).to({y:77.3},0).wait(1).to({y:91.6},0).wait(1).to({y:85.3},0).wait(1).to({y:79},0).wait(2));

	// Vrstva 5
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,48.2).curveTo(-6.9,46.2,-6.9,43.3).lineTo(-6.9,-43.3).curveTo(-6.9,-46.2,-4.9,-48.2).curveTo(-2.9,-50.2,-0,-50.2).curveTo(2.8,-50.2,4.9,-48.2).curveTo(6.9,-46.2,6.9,-43.3).lineTo(6.9,43.3).curveTo(6.9,46.2,4.9,48.2).curveTo(2.8,50.2,-0,50.2).curveTo(-2.9,50.2,-4.9,48.2).closePath();
	this.shape_23.setTransform(76.6,100.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({y:95},0).wait(1).to({y:89.6},0).wait(1).to({y:84.3},0).wait(1).to({y:96.8},0).wait(1).to({y:85.6},0).wait(1).to({y:74.3},0).wait(1).to({y:63.1},0).wait(12).to({y:72.4},0).wait(1).to({y:81.7},0).wait(1).to({y:91},0).wait(1).to({y:100.3},0).wait(1).to({y:63.1},0).wait(1).to({y:62},0).wait(1).to({y:60.9},0).wait(1).to({y:59.8},0).wait(1).to({y:58.7},0).wait(1).to({y:59.8},0).wait(1).to({y:60.9},0).wait(1).to({y:62},0).wait(1).to({y:63.1},0).wait(6).to({y:72.4},0).wait(1).to({y:81.7},0).wait(1).to({y:91},0).wait(1).to({y:100.3},0).wait(1).to({y:63.1},0).wait(1).to({y:58.7},0).wait(2));

	// Vrstva 6
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,30.9).curveTo(-7,28.9,-7,26).lineTo(-7,-26).curveTo(-7,-28.8,-4.9,-30.9).curveTo(-2.8,-32.9,-0.1,-32.9).curveTo(2.8,-32.9,5,-30.9).curveTo(7,-28.9,7,-26).lineTo(7,26).curveTo(7,28.9,5,30.9).curveTo(2.8,32.9,-0.1,32.9).curveTo(-2.8,32.9,-4.9,30.9).closePath();
	this.shape_24.setTransform(56.4,79.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1).to({y:76.8},0).wait(1).to({y:74.5},0).wait(1).to({y:72.2},0).wait(1).to({y:69.3},0).wait(1).to({y:67.2},0).wait(1).to({y:65.2},0).wait(1).to({y:63.1},0).wait(1).to({y:59},0).wait(1).to({y:55},0).wait(1).to({y:50.9},0).wait(1).to({y:46.9},0).wait(1).to({y:50.1},0).wait(1).to({y:53.4},0).wait(1).to({y:56.6},0).wait(1).to({y:59.8},0).wait(1).to({y:63.1},0).wait(1).to({y:65.7},0).wait(1).to({y:68.4},0).wait(1).to({y:71.1},0).wait(1).to({y:73.7},0).wait(1).to({y:76.4},0).wait(1).to({y:79.1},0).wait(1).to({y:63.1},0).wait(1).to({y:63.4},0).wait(1).to({y:63.7},0).wait(1).to({y:60.9},0).wait(1).to({y:58.1},0).wait(1).to({y:55.3},0).wait(1).to({y:52.5},0).wait(1).to({y:49.7},0).wait(1).to({y:46.9},0).wait(1).to({y:52.3},0).wait(1).to({y:57.7},0).wait(1).to({y:63.1},0).wait(1).to({y:65.7},0).wait(1).to({y:68.4},0).wait(1).to({y:71.1},0).wait(1).to({y:73.7},0).wait(1).to({y:76.4},0).wait(1).to({y:79.1},0).wait(1).to({y:63.1},0).wait(1).to({y:63.7},0).wait(2));

	// Vrstva 7
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,39.6).curveTo(-6.9,37.5,-6.9,34.7).lineTo(-6.9,-34.7).curveTo(-6.9,-37.5,-4.9,-39.5).curveTo(-2.9,-41.6,-0,-41.6).curveTo(2.9,-41.6,4.8,-39.5).curveTo(6.9,-37.5,6.9,-34.7).lineTo(6.9,34.7).curveTo(6.9,37.5,4.8,39.6).curveTo(2.9,41.6,-0,41.6).curveTo(-2.9,41.6,-4.9,39.6).closePath();
	this.shape_25.setTransform(36.2,105.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,40.3).curveTo(-6.9,38.2,-6.9,35.3).lineTo(-6.9,-35.4).curveTo(-6.9,-38.3,-4.9,-40.3).curveTo(-2.9,-42.4,-0,-42.4).curveTo(2.9,-42.4,4.8,-40.3).curveTo(6.9,-38.3,6.9,-35.4).lineTo(6.9,35.3).curveTo(6.9,38.2,4.8,40.3).curveTo(2.9,42.4,-0,42.4).curveTo(-2.9,42.4,-4.9,40.3).closePath();
	this.shape_26.setTransform(36.2,67.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,41).curveTo(-6.9,38.9,-6.9,36).lineTo(-6.9,-36).curveTo(-6.9,-38.9,-4.9,-41.1).curveTo(-2.9,-43.1,-0,-43.1).curveTo(2.9,-43.1,4.8,-41.1).curveTo(6.9,-38.9,6.9,-36).lineTo(6.9,36).curveTo(6.9,38.9,4.8,41).curveTo(2.9,43.2,-0,43.2).curveTo(-2.9,43.2,-4.9,41).closePath();
	this.shape_27.setTransform(36.2,66.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,41.3).curveTo(-6.9,39.1,-6.9,36.2).lineTo(-6.9,-36.2).curveTo(-6.9,-39.2,-4.9,-41.2).curveTo(-2.9,-43.4,-0,-43.3).curveTo(2.9,-43.4,4.8,-41.2).curveTo(6.9,-39.2,6.9,-36.2).lineTo(6.9,36.2).curveTo(6.9,39.1,4.8,41.3).curveTo(2.9,43.3,-0,43.4).curveTo(-2.9,43.3,-4.9,41.3).closePath();
	this.shape_28.setTransform(36.2,66.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,40.7).curveTo(-6.9,38.6,-6.9,35.7).lineTo(-6.9,-35.7).curveTo(-6.9,-38.6,-4.9,-40.7).curveTo(-2.9,-42.8,-0,-42.7).curveTo(2.9,-42.8,4.8,-40.7).curveTo(6.9,-38.6,6.9,-35.7).lineTo(6.9,35.7).curveTo(6.9,38.6,4.8,40.7).curveTo(2.9,42.7,-0,42.8).curveTo(-2.9,42.7,-4.9,40.7).closePath();
	this.shape_29.setTransform(36.2,68.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,40.1).curveTo(-6.9,38.1,-6.9,35.2).lineTo(-6.9,-35.2).curveTo(-6.9,-38.1,-4.9,-40.1).curveTo(-2.9,-42.2,-0,-42.2).curveTo(2.9,-42.2,4.8,-40.1).curveTo(6.9,-38.1,6.9,-35.2).lineTo(6.9,35.2).curveTo(6.9,38.1,4.8,40.1).curveTo(2.9,42.2,-0,42.2).curveTo(-2.9,42.2,-4.9,40.1).closePath();
	this.shape_30.setTransform(36.2,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({y:99.1},0).wait(1).to({y:93.1},0).wait(1).to({y:87.1},0).wait(1).to({y:68.1},0).to({_off:true},1).wait(2).to({_off:false,scaleY:1.06,y:65.5},0).to({_off:true},1).wait(3).to({_off:false,scaleY:1,y:70.7},0).wait(1).to({y:68.1},0).wait(1).to({y:65.6},0).wait(1).to({y:63.1},0).wait(1).to({y:71.5},0).wait(1).to({y:79.9},0).wait(1).to({y:88.3},0).wait(1).to({y:96.7},0).wait(1).to({y:105.1},0).wait(1).to({y:94.6},0).wait(1).to({y:84.1},0).wait(1).to({y:73.6},0).wait(1).to({y:63.1},0).wait(1).to({y:64.2},0).wait(1).to({y:65.4},0).wait(1).to({y:66.5},0).wait(1).to({y:67.7},0).wait(1).to({y:68.4},0).wait(1).to({y:69.2},0).wait(1).to({y:69.9},0).wait(1).to({y:70.7},0).wait(1).to({y:63.1},0).wait(1).to({y:71.5},0).wait(1).to({y:79.9},0).wait(1).to({y:88.3},0).wait(1).to({y:96.7},0).wait(1).to({y:105.1},0).wait(1).to({y:94.6},0).wait(1).to({y:84.1},0).wait(1).to({y:73.6},0).wait(1).to({y:63.1},0).wait(1).to({y:59.7},0).wait(2));

	// Vrstva 8
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#EB6209").beginStroke().moveTo(-1.7,7.7).curveTo(-2.4,7.1,-2.4,6).lineTo(-2.4,-6).curveTo(-2.4,-7,-1.7,-7.8).curveTo(-1,-8.4,-0,-8.5).curveTo(1,-8.4,1.7,-7.8).curveTo(2.4,-7,2.4,-6).lineTo(2.4,6).curveTo(2.4,7.1,1.7,7.7).curveTo(1,8.5,-0,8.4).curveTo(-0.9,8.5,-1.7,7.7).closePath();
	this.shape_31.setTransform(15.9,79.1,2.876,2.876);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,22.3).curveTo(-6.9,20.2,-6.9,17.4).lineTo(-6.9,-17.3).curveTo(-6.9,-20.2,-4.9,-22.3).curveTo(-2.8,-24.3,0,-24.3).curveTo(2.9,-24.3,4.9,-22.3).curveTo(6.9,-20.2,6.9,-17.3).lineTo(6.9,17.4).curveTo(6.9,20.2,4.9,22.3).curveTo(2.9,24.3,0,24.3).curveTo(-2.7,24.3,-4.9,22.3).closePath();
	this.shape_32.setTransform(15.9,76.8);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,22.2).curveTo(-6.9,20.3,-6.9,17.4).lineTo(-6.9,-17.3).curveTo(-6.9,-20.2,-4.9,-22.3).curveTo(-2.8,-24.3,0,-24.3).curveTo(2.9,-24.3,4.9,-22.3).curveTo(6.9,-20.2,6.9,-17.3).lineTo(6.9,17.4).curveTo(6.9,20.3,4.9,22.2).curveTo(2.9,24.3,0,24.3).curveTo(-2.7,24.3,-4.9,22.2).closePath();
	this.shape_33.setTransform(15.9,72.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,22.2).curveTo(-6.9,20.3,-6.9,17.4).lineTo(-6.9,-17.3).curveTo(-6.9,-20.1,-4.9,-22.3).curveTo(-2.8,-24.3,0,-24.3).curveTo(2.9,-24.3,4.9,-22.3).curveTo(6.9,-20.1,6.9,-17.3).lineTo(6.9,17.4).curveTo(6.9,20.3,4.9,22.2).curveTo(2.9,24.3,0,24.3).curveTo(-2.7,24.3,-4.9,22.2).closePath();
	this.shape_34.setTransform(15.9,70);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#EB6209").beginStroke().moveTo(-4.9,22.2).curveTo(-6.9,20.2,-6.9,17.4).lineTo(-6.9,-17.3).curveTo(-6.9,-20.1,-4.9,-22.3).curveTo(-2.8,-24.3,0,-24.3).curveTo(2.9,-24.3,4.9,-22.3).curveTo(6.9,-20.1,6.9,-17.3).lineTo(6.9,17.4).curveTo(6.9,20.2,4.9,22.2).curveTo(2.9,24.3,0,24.3).curveTo(-2.7,24.3,-4.9,22.2).closePath();
	this.shape_35.setTransform(15.9,71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{y:72.3}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{y:69.1}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33,p:{y:72.3}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).to({_off:true},1).wait(6).to({_off:false,y:63.1},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,y:79.1},0).to({_off:true},1).wait(2).to({_off:false,y:63.1},0).to({_off:true},1).wait(5).to({_off:false,y:79.1},0).to({_off:true},1).wait(1).to({_off:false,y:63.1},0).to({_off:true},1).wait(6).to({_off:false,y:79.1},0).to({_off:true},1).wait(2).to({_off:false,y:63.1},0).wait(1).to({y:79.1},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1).to({_off:false},0).wait(1).to({y:74.6},0).to({_off:true},1).wait(2).to({_off:false,y:67.7},0).wait(1).to({y:65.4},0).to({_off:true},1).wait(6).to({_off:false,y:65.1},0).wait(1).to({y:67.1},0).to({_off:true},1).wait(3).to({_off:false,y:75.1},0).wait(1).to({y:77.1},0).to({_off:true},1).wait(1).to({_off:false,y:73.8},0).wait(1).to({y:68.5},0).to({_off:true},1).wait(1).to({_off:false,y:65.8},0).wait(1).to({y:68.5},0).to({_off:true},1).wait(1).to({_off:false,y:73.8},0).wait(1).to({y:76.5},0).to({_off:true},1).wait(3).to({_off:false,y:65.4},0).wait(1).to({y:67.7},0).to({_off:true},1).wait(2).to({_off:false,y:74.6},0).wait(1).to({y:76.8},0).to({_off:true},1).wait(1).to({_off:false,y:73.8},0).wait(1).to({y:68.5},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:63.1},0).wait(3).to({_off:true},1).wait(5).to({_off:false,y:73.1},0).to({_off:true},1).wait(16).to({_off:false,y:70},0).to({_off:true},1).wait(9));

	// Vrstva 9
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#EB6209").beginStroke().moveTo(53.5,58.7).lineTo(53.5,-56.7).lineTo(67.8,-56.7).lineTo(67.8,58.7).closePath().moveTo(13,37.1).lineTo(13,-31.8).lineTo(27.2,-31.8).lineTo(27.2,37.1).closePath().moveTo(33.3,33.7).lineTo(33.3,-33.4).lineTo(47.4,-33.4).lineTo(47.4,33.7).closePath().moveTo(-27.4,26.1).lineTo(-27.4,-58.7).lineTo(-13.3,-58.7).lineTo(-13.3,26.1).closePath().moveTo(-7.2,22.3).lineTo(-7.2,-45.7).lineTo(6.7,-45.7).lineTo(6.7,22.3).closePath().moveTo(-67.8,19.8).lineTo(-67.8,-44.7).lineTo(-53.8,-44.7).lineTo(-53.8,19.8).closePath().moveTo(-47.4,19.7).lineTo(-47.4,-34.3).lineTo(-33.5,-34.3).lineTo(-33.5,19.7).closePath();
	this.shape_36.setTransform(76.7,123.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,24.1,135.5,158.5);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.image2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,104);


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


(lib.image1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.image1();
	this.instance.setTransform(-96,67,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,67,201.3,171.5);


(lib.Doplnění2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib._0();
	this.instance.setTransform(-112,-112.7,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-112.7,224,225.5);


(lib.Buy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,2.6).lineTo(1.9,0).lineTo(-4.6,-2.6).lineTo(-4.6,-5.3).lineTo(4.6,-1.3).lineTo(4.6,1.3).lineTo(-4.6,5.3).closePath();
	this.shape.setTransform(328.9,513.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,6.4).curveTo(-0.8,6.2,-1.2,5.9).curveTo(-1.6,5.5,-1.8,4.9).curveTo(-2.1,4.3,-2,3.4).lineTo(-2,-1.4).lineTo(-3.2,-1.4).lineTo(-3.2,-3.9).lineTo(-2,-3.9).lineTo(-2,-6.5).lineTo(0.8,-6.5).lineTo(0.8,-3.9).lineTo(3.3,-3.9).lineTo(3.3,-1.4).lineTo(0.8,-1.4).lineTo(0.8,3).curveTo(0.9,3.5,1.1,3.7).curveTo(1.3,4,1.8,4).curveTo(2.6,4,3.2,3.6).lineTo(3.2,5.9).lineTo(2.2,6.3).curveTo(1.7,6.5,0.9,6.5).lineTo(-0.2,6.4).closePath();
	this.shape_1.setTransform(312.9,514);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.9).curveTo(-3.5,4.3,-4.1,3.7).lineTo(-2.9,1.8).curveTo(-2.1,2.4,-1.2,2.7).curveTo(-0.4,3,0.3,3).curveTo(0.9,3,1.2,2.8).curveTo(1.5,2.6,1.5,2.3).lineTo(1.5,2.2).curveTo(1.5,1.8,0.9,1.5).lineTo(-0.6,1.1).curveTo(-2,0.6,-2.6,0.1).curveTo(-3.1,-0.3,-3.3,-0.7).curveTo(-3.6,-1.3,-3.6,-2).lineTo(-3.6,-2).curveTo(-3.6,-2.8,-3.3,-3.4).curveTo(-3,-4,-2.5,-4.4).curveTo(-2,-4.8,-1.3,-5).curveTo(-0.7,-5.3,0.1,-5.3).curveTo(1.1,-5.3,2.1,-5).curveTo(3.1,-4.6,3.9,-4.1).lineTo(2.8,-2.1).lineTo(1.3,-2.8).curveTo(0.6,-3,0.1,-3).curveTo(-0.5,-3,-0.7,-2.8).curveTo(-1,-2.6,-1,-2.3).curveTo(-1,-1.9,-0.4,-1.6).lineTo(1.1,-1.1).lineTo(2.1,-0.7).curveTo(2.7,-0.4,3.1,-0.1).curveTo(3.6,0.3,3.9,0.8).curveTo(4.1,1.3,4.1,1.9).lineTo(4.1,2).curveTo(4.1,2.8,3.8,3.4).curveTo(3.5,4.1,3,4.5).curveTo(2.5,4.9,1.8,5.1).curveTo(1.1,5.3,0.2,5.3).curveTo(-0.9,5.3,-2,4.9).closePath();
	this.shape_2.setTransform(304.2,515.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,5.2).lineTo(-2.2,4.8).curveTo(-3.4,4.2,-3.9,3.7).curveTo(-4.7,3,-5.1,2).lineTo(-5.4,1.1).lineTo(-5.5,0).curveTo(-5.5,-0.8,-5.1,-2.1).curveTo(-4.7,-3.1,-3.9,-3.7).curveTo(-3.5,-4.2,-2.2,-4.9).lineTo(-1.1,-5.2).lineTo(0,-5.3).curveTo(0.8,-5.3,2.2,-4.9).curveTo(2.9,-4.6,4,-3.8).curveTo(4.7,-3.1,5.1,-2.1).curveTo(5.5,-0.8,5.5,-0).lineTo(5.5,0).lineTo(5.4,1).lineTo(5.1,2).curveTo(4.7,3,4,3.7).curveTo(2.9,4.6,2.2,4.8).curveTo(0.8,5.3,0,5.3).closePath().moveTo(-1.1,-2.6).curveTo(-1.6,-2.4,-2,-2).curveTo(-2.3,-1.6,-2.4,-1.1).curveTo(-2.6,-0.6,-2.7,-0).lineTo(-2.7,0).curveTo(-2.6,0.6,-2.4,1).curveTo(-2.3,1.6,-1.9,1.9).curveTo(-1.5,2.3,-1.1,2.6).curveTo(-0.5,2.8,0,2.8).curveTo(0.6,2.8,1.2,2.6).curveTo(1.6,2.3,2,1.9).curveTo(2.3,1.6,2.5,1.1).curveTo(2.6,0.6,2.6,0).curveTo(2.6,-0.6,2.5,-1.1).curveTo(2.3,-1.6,2,-2).curveTo(1.5,-2.4,1.1,-2.6).curveTo(0.5,-2.9,0,-2.8).curveTo(-0.6,-2.9,-1.1,-2.6).closePath();
	this.shape_3.setTransform(293.3,515.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.9,5.2).lineTo(4.9,-0.5).lineTo(4.8,-1.4).lineTo(4.4,-2.1).curveTo(4.2,-2.3,3.9,-2.4).curveTo(3.6,-2.6,3.2,-2.6).curveTo(2.8,-2.6,2.4,-2.4).curveTo(2.1,-2.3,1.9,-2.1).curveTo(1.7,-1.8,1.6,-1.4).curveTo(1.4,-1,1.4,-0.5).lineTo(1.4,5.2).lineTo(-1.5,5.2).lineTo(-1.5,-0.5).lineTo(-1.6,-1.4).lineTo(-1.9,-2.1).curveTo(-2.1,-2.3,-2.4,-2.4).curveTo(-2.7,-2.6,-3.1,-2.6).curveTo(-3.6,-2.6,-3.9,-2.4).curveTo(-4.2,-2.3,-4.4,-2.1).curveTo(-4.7,-1.8,-4.8,-1.4).lineTo(-4.9,-0.5).lineTo(-4.9,5.2).lineTo(-7.8,5.2).lineTo(-7.8,-5).lineTo(-4.9,-5).lineTo(-4.9,-3.6).curveTo(-4.3,-4.3,-3.7,-4.7).lineTo(-2.9,-5.1).lineTo(-1.9,-5.2).curveTo(-0.9,-5.2,-0.2,-4.8).curveTo(0.6,-4.4,1,-3.6).curveTo(1.7,-4.4,2.5,-4.8).lineTo(3.3,-5.1).lineTo(4.3,-5.2).curveTo(5.1,-5.2,5.8,-5).curveTo(6.4,-4.7,6.8,-4.3).curveTo(7.3,-3.8,7.5,-3.1).curveTo(7.8,-2.4,7.8,-1.5).lineTo(7.8,5.2).closePath();
	this.shape_4.setTransform(278,515.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.9).curveTo(-3.5,4.3,-4.1,3.7).lineTo(-2.9,1.8).curveTo(-2.1,2.4,-1.2,2.7).curveTo(-0.4,3,0.3,3).curveTo(0.9,3,1.2,2.8).curveTo(1.5,2.6,1.5,2.3).lineTo(1.5,2.2).curveTo(1.5,1.8,0.9,1.5).lineTo(-0.6,1.1).curveTo(-2,0.6,-2.6,0.1).curveTo(-3.1,-0.3,-3.3,-0.7).curveTo(-3.6,-1.3,-3.6,-2).lineTo(-3.6,-2).curveTo(-3.6,-2.8,-3.3,-3.4).curveTo(-3,-4,-2.5,-4.4).curveTo(-2,-4.8,-1.3,-5).curveTo(-0.7,-5.3,0.1,-5.3).curveTo(1.1,-5.3,2.1,-5).curveTo(3.1,-4.6,3.9,-4.1).lineTo(2.8,-2.1).lineTo(1.3,-2.8).curveTo(0.6,-3,0.1,-3).curveTo(-0.5,-3,-0.7,-2.8).curveTo(-1,-2.6,-1,-2.3).curveTo(-1,-1.9,-0.4,-1.6).lineTo(1.1,-1.1).lineTo(2.1,-0.7).curveTo(2.7,-0.4,3.1,-0.1).curveTo(3.6,0.3,3.9,0.8).curveTo(4.1,1.3,4.1,1.9).lineTo(4.1,2).curveTo(4.1,2.8,3.8,3.4).curveTo(3.5,4.1,3,4.5).curveTo(2.5,4.9,1.8,5.1).curveTo(1.1,5.3,0.2,5.3).curveTo(-0.9,5.3,-2,4.9).closePath();
	this.shape_5.setTransform(258.4,515.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,7.2).curveTo(-3.2,7,-3.7,6.6).curveTo(-4.2,6.2,-4.4,5.6).curveTo(-4.7,5,-4.7,4.3).lineTo(-4.7,4.3).curveTo(-4.7,3.4,-4.4,2.8).curveTo(-4.1,2.2,-3.5,1.8).curveTo(-3,1.4,-2.2,1.2).curveTo(-1.5,1,-0.6,1).curveTo(0.4,1,1.9,1.4).lineTo(1.9,1.3).lineTo(1.8,0.5).lineTo(1.4,-0.1).curveTo(1.1,-0.4,0.7,-0.5).curveTo(0.3,-0.6,-0.3,-0.6).curveTo(-1.1,-0.6,-1.8,-0.5).lineTo(-3.1,-0).lineTo(-3.8,-2.3).lineTo(-2.1,-2.9).curveTo(-1.1,-3.1,0.1,-3.1).curveTo(1.3,-3.1,2.2,-2.8).curveTo(3,-2.5,3.6,-1.9).curveTo(4.1,-1.4,4.4,-0.5).curveTo(4.7,0.3,4.7,1.3).lineTo(4.7,7.2).lineTo(1.9,7.2).lineTo(1.9,6.1).curveTo(1.3,6.7,0.6,7.1).curveTo(-0.2,7.4,-1.2,7.4).curveTo(-1.9,7.4,-2.6,7.2).closePath().moveTo(-1.4,3.1).curveTo(-1.9,3.5,-1.9,4.1).lineTo(-1.9,4.2).curveTo(-1.9,4.8,-1.5,5.1).curveTo(-1,5.4,-0.3,5.4).curveTo(0.2,5.4,0.6,5.3).curveTo(1,5.2,1.3,4.9).lineTo(1.8,4.4).curveTo(1.9,4,1.9,3.6).lineTo(1.9,3.1).curveTo(1.1,2.7,0.1,2.7).curveTo(-0.8,2.7,-1.4,3.1).closePath().moveTo(-0.9,-4.1).lineTo(1.3,-7.4).lineTo(3.7,-6.4).lineTo(1.3,-4.1).closePath();
	this.shape_6.setTransform(247.9,513.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,6.9).lineTo(-1.4,-6.9).lineTo(1.4,-6.9).lineTo(1.4,6.9).closePath();
	this.shape_7.setTransform(239.7,513.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,5.2).lineTo(-3.1,-5).lineTo(-0.2,-5).lineTo(-0.2,-3).curveTo(0,-3.5,0.3,-3.9).lineTo(1,-4.6).curveTo(1.4,-4.9,1.9,-5.1).curveTo(2.4,-5.2,3.1,-5.2).lineTo(3.1,-2.2).lineTo(2.9,-2.2).curveTo(2.2,-2.2,1.6,-2).curveTo(1,-1.7,0.6,-1.3).curveTo(0.2,-0.8,0,-0.2).curveTo(-0.2,0.5,-0.2,1.4).lineTo(-0.2,5.2).closePath();
	this.shape_8.setTransform(233.3,515.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,7.2).curveTo(-3.2,7,-3.7,6.6).curveTo(-4.2,6.2,-4.4,5.6).curveTo(-4.7,5,-4.7,4.3).lineTo(-4.7,4.3).curveTo(-4.7,3.4,-4.4,2.8).curveTo(-4.1,2.2,-3.5,1.8).curveTo(-3,1.4,-2.2,1.2).curveTo(-1.5,1,-0.6,1).curveTo(0.4,1,1.9,1.4).lineTo(1.9,1.3).lineTo(1.8,0.5).lineTo(1.4,-0.1).curveTo(1.1,-0.4,0.7,-0.5).curveTo(0.3,-0.6,-0.3,-0.6).curveTo(-1.1,-0.6,-1.8,-0.5).lineTo(-3.1,-0).lineTo(-3.8,-2.3).lineTo(-2.1,-2.9).curveTo(-1.1,-3.1,0.1,-3.1).curveTo(1.3,-3.1,2.2,-2.8).curveTo(3,-2.5,3.6,-1.9).curveTo(4.1,-1.4,4.4,-0.5).curveTo(4.7,0.3,4.7,1.3).lineTo(4.7,7.2).lineTo(1.9,7.2).lineTo(1.9,6.1).curveTo(1.3,6.7,0.6,7.1).curveTo(-0.2,7.4,-1.2,7.4).curveTo(-1.9,7.4,-2.6,7.2).closePath().moveTo(-1.4,3.1).curveTo(-1.9,3.5,-1.9,4.1).lineTo(-1.9,4.2).curveTo(-1.9,4.8,-1.5,5.1).curveTo(-1,5.4,-0.3,5.4).curveTo(0.2,5.4,0.6,5.3).curveTo(1,5.2,1.3,4.9).lineTo(1.8,4.4).curveTo(1.9,4,1.9,3.6).lineTo(1.9,3.1).curveTo(1.1,2.7,0.1,2.7).curveTo(-0.8,2.7,-1.4,3.1).closePath().moveTo(-0.9,-4.1).lineTo(1.3,-7.4).lineTo(3.7,-6.4).lineTo(1.3,-4.1).closePath();
	this.shape_9.setTransform(223.1,513.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.9).curveTo(-3.5,4.3,-4.1,3.7).lineTo(-2.9,1.8).curveTo(-2.1,2.4,-1.2,2.7).curveTo(-0.4,3,0.3,3).curveTo(0.9,3,1.2,2.8).curveTo(1.5,2.6,1.5,2.3).lineTo(1.5,2.2).curveTo(1.5,1.8,0.9,1.5).lineTo(-0.6,1.1).curveTo(-2,0.6,-2.6,0.1).curveTo(-3.1,-0.3,-3.3,-0.7).curveTo(-3.6,-1.3,-3.6,-2).lineTo(-3.6,-2).curveTo(-3.6,-2.8,-3.3,-3.4).curveTo(-3,-4,-2.5,-4.4).curveTo(-2,-4.8,-1.3,-5).curveTo(-0.7,-5.3,0.1,-5.3).curveTo(1.1,-5.3,2.1,-5).curveTo(3.1,-4.6,3.9,-4.1).lineTo(2.8,-2.1).lineTo(1.3,-2.8).curveTo(0.6,-3,0.1,-3).curveTo(-0.5,-3,-0.7,-2.8).curveTo(-1,-2.6,-1,-2.3).curveTo(-1,-1.9,-0.4,-1.6).lineTo(1.1,-1.1).lineTo(2.1,-0.7).curveTo(2.7,-0.4,3.1,-0.1).curveTo(3.6,0.3,3.9,0.8).curveTo(4.1,1.3,4.1,1.9).lineTo(4.1,2).curveTo(4.1,2.8,3.8,3.4).curveTo(3.5,4.1,3,4.5).curveTo(2.5,4.9,1.8,5.1).curveTo(1.1,5.3,0.2,5.3).curveTo(-0.9,5.3,-2,4.9).closePath();
	this.shape_10.setTransform(212.9,515.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,7.2).curveTo(-3.2,7,-3.7,6.6).curveTo(-4.2,6.2,-4.4,5.6).curveTo(-4.7,5,-4.7,4.3).lineTo(-4.7,4.3).curveTo(-4.7,3.4,-4.4,2.8).curveTo(-4.1,2.2,-3.5,1.8).curveTo(-3,1.4,-2.2,1.2).curveTo(-1.5,1,-0.6,1).curveTo(0.4,1,1.9,1.4).lineTo(1.9,1.3).lineTo(1.8,0.5).lineTo(1.4,-0.1).curveTo(1.1,-0.4,0.7,-0.5).curveTo(0.3,-0.6,-0.3,-0.6).curveTo(-1.1,-0.6,-1.8,-0.5).lineTo(-3.1,-0).lineTo(-3.8,-2.3).lineTo(-2.1,-2.9).curveTo(-1.1,-3.1,0.1,-3.1).curveTo(1.3,-3.1,2.2,-2.8).curveTo(3,-2.5,3.6,-1.9).curveTo(4.1,-1.4,4.4,-0.5).curveTo(4.7,0.3,4.7,1.3).lineTo(4.7,7.2).lineTo(1.9,7.2).lineTo(1.9,6.1).curveTo(1.3,6.7,0.6,7.1).curveTo(-0.2,7.4,-1.2,7.4).curveTo(-1.9,7.4,-2.6,7.2).closePath().moveTo(-1.4,3.1).curveTo(-1.9,3.5,-1.9,4.1).lineTo(-1.9,4.2).curveTo(-1.9,4.8,-1.5,5.1).curveTo(-1,5.4,-0.3,5.4).curveTo(0.2,5.4,0.6,5.3).curveTo(1,5.2,1.3,4.9).lineTo(1.8,4.4).curveTo(1.9,4,1.9,3.6).lineTo(1.9,3.1).curveTo(1.1,2.7,0.1,2.7).curveTo(-0.8,2.7,-1.4,3.1).closePath().moveTo(-0.9,-4.1).lineTo(1.3,-7.4).lineTo(3.7,-6.4).lineTo(1.3,-4.1).closePath();
	this.shape_11.setTransform(202.4,513.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,6.7).lineTo(-6.7,-6.7).lineTo(-3.4,-6.7).lineTo(0,2.7).lineTo(3.5,-6.7).lineTo(6.7,-6.7).lineTo(1.3,6.7).closePath();
	this.shape_12.setTransform(189.9,513.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180.8,500.1,156.3,26.8);


(lib.text31 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Vrstva 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-287.2,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.9,-3.4,136.1,22);


(lib.Button = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Buy();
	this.instance.setTransform(157.8,-278.6,1.006,1.006,0,0,0,63.2,13.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Buy(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF6A00").beginStroke().moveTo(-69.6,17.5).curveTo(-73,17.5,-75.4,15.3).curveTo(-77.8,13,-77.8,9.8).lineTo(-77.8,-9.7).curveTo(-77.8,-12.9,-75.4,-15.2).curveTo(-73,-17.5,-69.6,-17.6).lineTo(69.5,-17.6).curveTo(73,-17.5,75.3,-15.2).curveTo(77.8,-12.9,77.8,-9.7).lineTo(77.8,9.8).curveTo(77.8,13,75.3,15.3).curveTo(73,17.5,69.5,17.5).closePath();
	this.shape.setTransform(354.5,223.9,1.045,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#3E8DDD").beginStroke().moveTo(-65.9,17.5).curveTo(-69.1,17.5,-71.4,15.3).curveTo(-73.7,13,-73.7,9.8).lineTo(-73.7,-9.7).curveTo(-73.7,-12.9,-71.4,-15.2).curveTo(-69.1,-17.5,-65.9,-17.6).lineTo(65.9,-17.6).curveTo(69.2,-17.5,71.4,-15.2).curveTo(73.7,-12.9,73.7,-9.7).lineTo(73.7,9.8).curveTo(73.7,13,71.4,15.3).curveTo(69.2,17.5,65.9,17.5).closePath();
	this.shape_1.setTransform(354.5,223.9,1.107,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF6A00").beginStroke().moveTo(-47.4,12.6).curveTo(-49.7,12.6,-51.3,11).curveTo(-53,9.3,-53,7).lineTo(-53,-7).curveTo(-53,-9.3,-51.3,-11).curveTo(-49.7,-12.6,-47.4,-12.6).lineTo(47.4,-12.6).curveTo(49.7,-12.6,51.3,-11).curveTo(53,-9.3,53,-7).lineTo(53,7).curveTo(53,9.3,51.3,11).curveTo(49.7,12.6,47.4,12.6).closePath();
	this.shape_2.setTransform(354.5,223.8,1.541,1.391);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-2369.2,-1735.8).lineTo(2369.1,-1735.8).lineTo(2369.1,1735.8).lineTo(-2369.2,1735.8).closePath();
	this.shape_3.setTransform(1502.6,715.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EB6207").beginStroke().moveTo(-2369.1,1735.8).lineTo(-2369.1,-1735.8).lineTo(2369.1,-1735.8).lineTo(2369.1,1735.8).closePath();
	this.shape_4.setTransform(1502.6,715.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.instance}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.3,206.3,162.6,35.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount = 1;
	}
	this.frame_361 = function() {
		if(this.loopCount === 1){
		this.loopCount++;
		this.gotoAndPlay(363);
		}else{
		this.stop();
		}
	}
	this.frame_401 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(361).call(this.frame_361).wait(40).call(this.frame_401).wait(1));

	// Logo
	this.instance = new lib.LenovoLogoPOSRedai("synched",0);
	this.instance.setTransform(283.4,69,0.063,0.062,-90,0,0,800.8,266.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(402));

	// LogoYoga
	this.instance_1 = new lib.yoga900Logo();
	this.instance_1.setTransform(172.8,117.3,1,1,0,0,0,14.7,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({alpha:0},6).to({_off:true},1).wait(81).to({_off:false,rotation:-90,x:117.6,y:58.6},0).to({alpha:1},7).wait(121).to({alpha:0},6).to({_off:true},7).wait(12));

	// IntelLogoi7
	this.instance_2 = new lib.intelLogo();
	this.instance_2.setTransform(142,540,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(163).to({alpha:0},5).wait(1).to({x:-62.8,y:386},0).to({alpha:1},4).wait(71).to({alpha:0},4).wait(6).to({x:142,y:540},0).to({alpha:1},4).wait(144));

	// text1.1
	this.instance_3 = new lib.text11();
	this.instance_3.setTransform(100,469.5,1,1,0,0,0,49.1,9.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regX:-15.9,regY:-391.1,x:46.4,y:69.2},0).wait(1).to({x:57.9},0).wait(1).to({x:69.3},0).wait(1).to({x:80.8},0).wait(1).to({x:77.3},0).wait(1).to({x:73.8},0).wait(1).to({x:70.3},0).wait(1).to({regX:49.1,regY:9.2,x:136.1,y:469.5},0).wait(63).to({x:136},0).wait(1).to({regX:-15.9,regY:-391.1,x:68.7,y:69.2},0).wait(1).to({x:66.5},0).wait(2).to({x:68.4},0).wait(1).to({x:71},0).wait(1).to({x:69.1},0).wait(1).to({x:97.3},0).wait(1).to({x:123},0).to({_off:true},1).wait(312));

	// text1.2
	this.instance_4 = new lib.text12();
	this.instance_4.setTransform(63.1,488.3,1,1,0,0,0,64.3,9.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({regX:53.8,regY:-383.5,x:59.5,y:95.6},0).wait(1).to({x:66.5},0).wait(1).to({x:73.5},0).wait(1).to({x:80.5},0).wait(1).to({x:87.5},0).wait(1).to({x:94.5},0).wait(1).to({x:90.5},0).wait(1).to({regX:64.3,regY:9.2,x:101.3,y:488.3},0).wait(62).to({x:101.1},0).wait(1).to({regX:53.8,regY:-383.5,x:88.4,y:95.6},0).wait(1).to({x:85.8},0).wait(1).to({x:83.7},0).wait(1).to({x:86},0).wait(1).to({x:88.3},0).wait(1).to({x:106.4},0).wait(1).to({x:124.4},0).wait(1).to({x:142.5},0).to({_off:true},1).wait(310));

	// Vrstva 5
	this.instance_5 = new lib.txt2();
	this.instance_5.setTransform(57,440.8,1,1,0,0,0,40.2,9.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({regX:7.9,regY:-366.5,x:47,y:65.1},0).wait(1).to({x:69.3},0).wait(1).to({x:91.7},0).wait(1).to({x:95.2},0).wait(1).to({x:98.1},0).wait(2).to({x:95},0).wait(1).to({x:91.7},0).wait(1).to({regX:40.2,regY:9.2,x:124.5,y:440.8},0).wait(55).to({x:123.2},0).wait(1).to({regX:7.9,regY:-366.5,x:89.1,y:65.1},0).wait(1).to({x:87.6},0).wait(1).to({x:87.9},0).wait(1).to({x:89.6},0).wait(1).to({x:97.1},0).wait(1).to({x:104.7},0).wait(1).to({x:112.2},0).wait(1).to({x:119.7},0).to({_off:true},1).wait(239));

	// Vrstva 4
	this.instance_6 = new lib.txt22();
	this.instance_6.setTransform(46,464,1,1,0,0,0,28.7,9.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).wait(1).to({regX:-17.8,regY:-368.7,x:25.9,y:86.1},0).wait(1).to({x:52.2},0).wait(1).to({x:78.7},0).wait(1).to({x:76.1},0).wait(1).to({x:73.6},0).wait(1).to({x:71.1},0).wait(1).to({x:68.6},0).wait(1).to({x:66},0).wait(1).to({regX:28.7,regY:9.2,x:113.4,y:464},0).wait(55).to({x:113.1},0).wait(1).to({regX:-17.8,regY:-368.7,x:65.4,y:86.1},0).wait(1).to({x:64.2},0).wait(1).to({x:65.3},0).wait(1).to({x:66.5},0).wait(1).to({x:73.3},0).wait(1).to({x:80.5},0).wait(1).to({x:87.5},0).wait(1).to({x:94.5},0).to({_off:true},1).wait(235));

	// pic1
	this.instance_7 = new lib.image1_1();
	this.instance_7.setTransform(143.5,249.5,1,1,0,0,0,30.5,216.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9).wait(156).to({alpha:0},6).to({_off:true},1).wait(230));

	// Vrstva 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_99 = new cjs.Graphics().moveTo(-108.5,112.4).lineTo(-108.5,-63.6).lineTo(108.5,-63.6).lineTo(108.5,112.4).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_graphics_99,x:72.9,y:112.4}).wait(303));

	// FlashAICB
	this.instance_8 = new lib.soundeffect();
	this.instance_8.setTransform(40.9,206.5,1,1,0,0,0,67.6,67.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({y:182.5,alpha:1},4).wait(59).to({y:206.5,alpha:0},4).to({_off:true},1).wait(235));

	// Vrstva 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_170 = new cjs.Graphics().moveTo(33.9,119.3).lineTo(33.7,119).lineTo(31.5,118.7).lineTo(30,117.3).lineTo(29.7,116.4).lineTo(30.6,115).lineTo(29.7,113.8).lineTo(29.5,113.2).lineTo(30,112.3).lineTo(31.1,111.4).lineTo(111.9,110.6).lineTo(120.5,111.5).lineTo(120.3,117.5).lineTo(109.8,119.1).lineTo(36.3,119.4).lineTo(36.1,118.9).lineTo(35.2,118.9).lineTo(35.1,119.5).closePath();
	var mask_1_graphics_175 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(26.7,114.4).lineTo(26.2,113.8).lineTo(26,113.2).lineTo(26.5,112.3).lineTo(27.7,111.4).lineTo(32,111.4).lineTo(111.7,67.3).curveTo(124,89.3,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_176 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(26.6,114.2).lineTo(26.2,113.8).lineTo(26,113.2).lineTo(26.5,112.3).lineTo(27.7,111.4).lineTo(29.6,111.4).lineTo(97.7,48).curveTo(124,76.1,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_177 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(26.4,114.1).lineTo(26.2,113.8).lineTo(26,113.2).lineTo(26.5,112.3).lineTo(27.7,111.4).lineTo(28,111.4).lineTo(76.5,30.8).curveTo(98.6,44,111.2,66.4).curveTo(124,88.9,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_178 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(26.3,113.9).lineTo(26.2,113.8).lineTo(26,113.2).lineTo(26.5,112.3).lineTo(26.9,112).lineTo(54.7,21).curveTo(85.6,30.5,104.7,56.4).curveTo(124,82.4,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_179 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(26.1,113.3).lineTo(26,113.2).lineTo(26.1,113.1).lineTo(26.1,16.8).curveTo(66.6,16.8,95.2,45.4).curveTo(124,74.2,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_180 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(2.4,19.7).curveTo(31.9,12.2,60.4,23).curveTo(89,33.9,106.5,59).curveTo(124,84.2,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_181 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(-21.3,29.1).curveTo(9.7,11.9,44.2,18.4).curveTo(78.7,25,101.3,52.2).curveTo(124,79.5,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_182 = new cjs.Graphics().moveTo(-11.8,51.1).lineTo(-12,50.9).lineTo(-14.2,50.6).lineTo(-15.7,49.1).lineTo(-16,48.3).lineTo(-15.1,46.9).lineTo(-15.4,46.5).lineTo(74.7,46.5).lineTo(74.6,49.3).lineTo(64.1,51).lineTo(-9.4,51.2).lineTo(-9.6,50.8).lineTo(-10.5,50.8).lineTo(-10.6,51.3).closePath().moveTo(74.7,46.5).lineTo(-15.4,46.5).lineTo(-16.2,46.5).lineTo(-81.7,-26.2).curveTo(-52.2,-52.6,-12.8,-51.2).lineTo(-12.8,-51.2).curveTo(26.8,-49.9,54.2,-21.4).lineTo(54.2,-21.4).curveTo(81.7,7,81.7,46.5).lineTo(81.7,46.5).closePath();
	var mask_1_graphics_183 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(-57.8,64.3).curveTo(-40.7,36.1,-10.1,23.8).curveTo(20.5,11.5,52.1,20.3).curveTo(83.9,29.2,103.9,55.5).curveTo(124,81.8,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_184 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(26.1,114.7).lineTo(-66.5,82.8).curveTo(-54.7,49,-23.9,30.6).curveTo(7,12.2,42.2,18.2).curveTo(77.5,24.1,100.7,51.5).curveTo(124,78.9,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_185 = new cjs.Graphics().moveTo(30.4,119.3).lineTo(30.3,119).lineTo(28.1,118.7).lineTo(26.6,117.3).lineTo(26.2,116.4).lineTo(27.1,115).lineTo(26.9,114.7).lineTo(-71.8,113).curveTo(-71.1,72.8,-42.2,44.6).curveTo(-13.3,16.5,26.9,16.8).curveTo(67.1,17.1,95.5,45.8).curveTo(124,74.5,124,114.7).lineTo(116.9,114.7).lineTo(116.8,117.5).lineTo(106.3,119.1).lineTo(32.9,119.4).lineTo(32.6,118.9).lineTo(31.8,118.9).lineTo(31.7,119.5).closePath();
	var mask_1_graphics_186 = new cjs.Graphics().moveTo(-61.6,63.6).curveTo(-46.4,32.9,-15.6,18.4).curveTo(15.3,3.8,48.3,11.6).curveTo(81.4,19.5,102.7,46.3).curveTo(124,73.1,124,106.9).lineTo(116.9,106.9).lineTo(116.8,109.7).lineTo(106.3,111.3).lineTo(32.9,111.6).lineTo(32.6,111.2).lineTo(31.8,111.2).lineTo(31.7,111.7).lineTo(30.4,111.5).lineTo(30.3,111.3).lineTo(28.1,111).lineTo(26.6,109.5).lineTo(26.2,108.6).lineTo(27.1,107.3).lineTo(26.9,106.9).lineTo(26.1,106.9).lineTo(-69.7,127.3).curveTo(-76.8,94.2,-61.6,63.6).closePath();
	var mask_1_graphics_187 = new cjs.Graphics().moveTo(-68.7,70.6).curveTo(-59.4,34.8,-28.8,14).curveTo(1.7,-6.9,38.3,-2.3).curveTo(74.9,2.4,99.3,30.3).curveTo(124,58.1,124,94.9).lineTo(116.9,94.9).lineTo(116.8,97.7).lineTo(106.3,99.3).lineTo(32.9,99.6).lineTo(32.6,99.1).lineTo(31.8,99.1).lineTo(31.7,99.6).lineTo(30.4,99.5).lineTo(30.3,99.2).lineTo(28.1,98.9).lineTo(26.6,97.5).lineTo(26.2,96.6).lineTo(27.1,95.2).lineTo(26.9,94.9).lineTo(26.1,94.9).lineTo(-61.1,139.3).curveTo(-78,106.3,-68.7,70.6).closePath();
	var mask_1_graphics_188 = new cjs.Graphics().moveTo(-71.6,78.8).curveTo(-68.8,39.4,-39.5,12.9).curveTo(-10,-13.5,29.5,-12.1).curveTo(69,-10.8,96.5,17.7).curveTo(124,46.1,124,85.6).lineTo(116.9,85.6).lineTo(116.8,88.4).lineTo(106.3,90.1).lineTo(32.9,90.3).lineTo(32.6,89.9).lineTo(31.8,89.9).lineTo(31.7,90.4).lineTo(30.4,90.2).lineTo(30.3,90).lineTo(28.1,89.7).lineTo(26.6,88.2).lineTo(26.2,87.4).lineTo(27.1,86).lineTo(26.9,85.6).lineTo(26.1,85.6).lineTo(-48.9,148.5).curveTo(-74.4,118.3,-71.6,78.8).closePath();
	var mask_1_graphics_189 = new cjs.Graphics().moveTo(-67.3,105.4).curveTo(-77.8,71.9,-64.7,39.3).curveTo(-51.6,6.8,-20.7,-10).curveTo(10.3,-26.7,44.7,-20.1).curveTo(79.2,-13.4,101.6,13.8).curveTo(124,40.9,124,76).lineTo(116.9,76).lineTo(116.8,78.8).lineTo(106.3,80.5).lineTo(32.9,80.7).lineTo(32.6,80.3).lineTo(31.8,80.3).lineTo(31.7,80.8).lineTo(30.4,80.6).lineTo(30.3,80.4).lineTo(28.1,80.1).lineTo(26.6,78.6).lineTo(26.2,77.8).lineTo(27.1,76.4).lineTo(26.9,76).lineTo(26.1,76).lineTo(-27.2,158.1).curveTo(-56.7,139,-67.3,105.4).closePath();
	var mask_1_graphics_190 = new cjs.Graphics().moveTo(-60.1,117.5).curveTo(-77.8,84.7,-69.3,48.6).curveTo(-60.6,12.5,-30,-9.1).curveTo(0.6,-30.5,37.4,-26.2).curveTo(74.2,-21.9,99.1,6).curveTo(124,33.8,124,71.1).lineTo(116.9,71.1).lineTo(116.8,73.9).lineTo(106.3,75.5).lineTo(32.9,75.8).lineTo(32.6,75.4).lineTo(31.8,75.4).lineTo(31.7,75.9).lineTo(30.4,75.7).lineTo(30.3,75.4).lineTo(28.1,75.2).lineTo(26.6,73.7).lineTo(26.2,72.8).lineTo(27.1,71.5).lineTo(26.9,71.1).lineTo(26.1,71.1).lineTo(-7.4,163).curveTo(-42.3,150.3,-60.1,117.5).closePath();
	var mask_1_graphics_191 = new cjs.Graphics().moveTo(-46.2,134.2).curveTo(-73.2,104.8,-71.8,64.7).curveTo(-70.3,24.7,-41.3,-2.9).curveTo(-12.2,-30.4,27.8,-29.7).curveTo(67.9,-29,95.9,-0.4).curveTo(124,28.1,124,68.2).lineTo(116.9,68.2).lineTo(116.8,71).lineTo(106.3,72.6).lineTo(32.9,72.9).lineTo(32.6,72.4).lineTo(31.8,72.4).lineTo(31.7,73).lineTo(30.4,72.8).lineTo(30.3,72.5).lineTo(28.1,72.2).lineTo(26.6,70.8).lineTo(26.2,69.9).lineTo(27.1,68.5).lineTo(26.9,68.2).lineTo(26.1,68.2).lineTo(21,166).curveTo(-19,163.8,-46.2,134.2).closePath();
	var mask_1_graphics_192 = new cjs.Graphics().moveTo(-24.1,152).curveTo(-54.6,133.7,-66.4,100.4).curveTo(-78.1,67.1,-65.7,33.9).curveTo(-53.1,0.8,-22.2,-17).curveTo(8.8,-34.6,43.5,-28.2).curveTo(78.3,-21.8,101.1,5.4).curveTo(124,32.8,124,68.1).lineTo(116.9,68.1).lineTo(116.8,70.9).lineTo(106.3,72.5).lineTo(32.9,72.8).lineTo(32.6,72.3).lineTo(31.8,72.3).lineTo(31.7,72.9).lineTo(30.4,72.7).lineTo(30.3,72.4).lineTo(28.1,72.1).lineTo(26.6,70.7).lineTo(26.4,70.3).lineTo(41.3,164.8).curveTo(33.3,166.1,25.4,166.1).curveTo(-0.5,166.1,-24.1,152).closePath().moveTo(26.3,69.7).lineTo(27.1,68.4).lineTo(26.9,68.1).lineTo(26.1,68.1).closePath();
	var mask_1_graphics_193 = new cjs.Graphics().moveTo(-0,162.3).curveTo(-36.5,152.3,-56.7,119.9).curveTo(-77,87.7,-70.2,50.6).curveTo(-63.4,13.5,-33.2,-9.7).curveTo(-2.9,-32.8,34.8,-29.4).curveTo(72.5,-26,98.2,2.1).curveTo(124,30.3,124,68.1).lineTo(116.9,68.1).lineTo(116.8,70.9).lineTo(106.3,72.5).lineTo(32.9,72.8).lineTo(32.6,72.3).lineTo(31.8,72.3).lineTo(31.7,72.9).lineTo(30.4,72.7).lineTo(30.3,72.4).lineTo(28.2,72.1).lineTo(70.5,155.3).curveTo(49.2,166.1,26.8,166.1).curveTo(13.6,166.1,-0,162.3).closePath().moveTo(26.6,69.2).lineTo(27.1,68.4).lineTo(26.9,68.1).lineTo(26.1,68.1).closePath();
	var mask_1_graphics_194 = new cjs.Graphics().moveTo(18.7,165.7).curveTo(-20.8,162.7,-47.2,132.8).curveTo(-73.6,103,-71.7,63.4).curveTo(-69.8,23.8,-40.4,-3.4).curveTo(-11,-30.7,28.6,-29.8).curveTo(68.3,-28.7,96.1,-0.2).curveTo(124,28.5,124,68.1).lineTo(116.9,68.1).lineTo(116.8,70.9).lineTo(106.3,72.6).lineTo(32.9,72.8).lineTo(32.6,72.4).lineTo(31.8,72.4).lineTo(31.7,72.9).lineTo(30.4,72.7).lineTo(30.3,72.5).lineTo(29.6,72.4).lineTo(89,143.1).curveTo(61.5,166,26.8,166).curveTo(22.8,166,18.7,165.7).closePath().moveTo(26.8,69).lineTo(27.1,68.5).lineTo(26.9,68.1).lineTo(26.1,68.1).closePath();
	var mask_1_graphics_195 = new cjs.Graphics().moveTo(-17.1,155.8).curveTo(-49.8,139.7,-64.1,106.4).curveTo(-78.3,73.1,-67.3,38.6).curveTo(-56.3,4.1,-25.6,-15.1).curveTo(5.2,-34.3,40.9,-28.8).curveTo(76.8,-23.2,100.3,4.3).curveTo(124,31.9,124,68).lineTo(116.9,68).lineTo(116.8,70.8).lineTo(106.3,72.5).lineTo(32.9,72.7).lineTo(32.6,72.3).lineTo(32.2,72.3).lineTo(106.3,124.1).curveTo(85.4,153.9,50.5,162.9).curveTo(38,166.1,25.7,166.1).curveTo(3.9,166.1,-17.1,155.8).closePath().moveTo(27,68.6).lineTo(27.1,68.4).lineTo(26.9,68).lineTo(26.1,68).closePath();
	var mask_1_graphics_196 = new cjs.Graphics().moveTo(0.7,162.5).curveTo(-36.1,152.8,-56.5,120.7).curveTo(-76.9,88.6,-70.3,51).curveTo(-63.7,13.6,-33.5,-9.7).curveTo(-3.3,-32.8,34.6,-29.5).curveTo(72.5,-26.1,98.2,1.9).curveTo(124,30,124,68.1).lineTo(116.9,68.1).lineTo(116.8,70.9).lineTo(106.3,72.5).lineTo(38.9,72.8).lineTo(118,101.6).curveTo(105.1,137.3,71.3,154.8).curveTo(49.7,166.1,26.8,166.1).curveTo(14,166.1,0.7,162.5).closePath().moveTo(27.1,68.4).lineTo(26.9,68.1).lineTo(26.1,68.1).lineTo(27.1,68.4).closePath();
	var mask_1_graphics_197 = new cjs.Graphics().moveTo(-43.2,137.3).curveTo(-71.8,108.7,-71.8,68.2).curveTo(-71.8,27.7,-43.2,-1.1).curveTo(-14.4,-29.7,26.1,-29.7).curveTo(66.6,-29.7,95.2,-1.1).curveTo(124,27.7,124,68.2).curveTo(124,108.7,95.2,137.3).curveTo(66.6,166,26.1,166).curveTo(-14.4,166,-43.2,137.3).closePath();
	var mask_1_graphics_198 = new cjs.Graphics().moveTo(-43.2,137.3).curveTo(-71.8,108.7,-71.8,68.2).curveTo(-71.8,27.7,-43.2,-1.1).curveTo(-14.4,-29.7,26.1,-29.7).curveTo(66.6,-29.7,95.2,-1.1).curveTo(124,27.7,124,68.2).curveTo(124,108.7,95.2,137.3).curveTo(66.6,166,26.1,166).curveTo(-14.4,166,-43.2,137.3).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_1_graphics_170,x:120.5,y:119.5}).wait(5).to({graphics:mask_1_graphics_175,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_176,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_177,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_178,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_179,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_180,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_181,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_182,x:166.2,y:187.6}).wait(1).to({graphics:mask_1_graphics_183,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_184,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_185,x:124,y:119.5}).wait(1).to({graphics:mask_1_graphics_186,x:124,y:127.3}).wait(1).to({graphics:mask_1_graphics_187,x:124,y:139.3}).wait(1).to({graphics:mask_1_graphics_188,x:124,y:148.5}).wait(1).to({graphics:mask_1_graphics_189,x:124,y:158.1}).wait(1).to({graphics:mask_1_graphics_190,x:124,y:163.1}).wait(1).to({graphics:mask_1_graphics_191,x:124,y:166}).wait(1).to({graphics:mask_1_graphics_192,x:124,y:166.1}).wait(1).to({graphics:mask_1_graphics_193,x:124,y:166.1}).wait(1).to({graphics:mask_1_graphics_194,x:124,y:166}).wait(1).to({graphics:mask_1_graphics_195,x:124,y:166.1}).wait(1).to({graphics:mask_1_graphics_196,x:124,y:166.1}).wait(1).to({graphics:mask_1_graphics_197,x:124,y:166}).wait(1).to({graphics:mask_1_graphics_198,x:124,y:166}).wait(35).to({graphics:null,x:0,y:0}).wait(169));

	// Vrstva 1
	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(149.3,234.2,0.801,0.801,0,0,0,112,112.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Doplnění2("synched",0);
	this.instance_10.setTransform(149.3,234.2,0.801,0.801,0,0,0,0.1,0);
	this.instance_10._off = true;

	this.instance_9.mask = this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).to({_off:true,regX:0.1,regY:0,alpha:1,mode:"synched",startPosition:0},5).wait(227));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(170).to({_off:false},5).wait(57).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(160));

	// text2.1
	this.instance_11 = new lib.text21();
	this.instance_11.setTransform(103,80.3,1,1,0,0,0,68.1,17.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(168).to({_off:false},0).wait(1).to({regX:-18.2,regY:47.1,x:34,y:110.2},0).wait(1).to({x:51.4},0).wait(1).to({x:68.7},0).wait(1).to({x:72.3},0).wait(1).to({x:72.1},0).wait(1).to({x:68.7},0).wait(1).to({regX:68.1,regY:17.2,x:155.6,y:80.3},0).wait(51).to({x:155.1},0).wait(1).to({regX:-18.2,regY:47.1,x:65.6,y:110.2},0).wait(1).to({x:65.2},0).wait(1).to({x:68.7},0).wait(1).to({x:83.7},0).wait(1).to({x:98.7},0).wait(1).to({x:113.7},0).wait(1).to({x:128.7},0).to({_off:true},1).wait(168));

	// text2.2
	this.instance_12 = new lib.text22();
	this.instance_12.setTransform(103,115.5,1,1,0,0,0,68.1,17.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(171).to({_off:false},0).wait(1).to({regX:-35.2,regY:29.5,x:19.3,y:127.8},0).wait(1).to({x:39},0).wait(1).to({x:58.7},0).wait(1).to({x:56.9},0).wait(1).to({x:55.2},0).wait(1).to({x:53.4},0).wait(1).to({x:51.7},0).wait(1).to({regX:68.1,regY:17.2,x:155.6,y:115.5},0).wait(50).to({x:155.1},0).wait(1).to({regX:-35.2,regY:29.5,x:47.8,y:127.8},0).wait(1).to({x:46.4},0).wait(1).to({x:50.7},0).wait(1).to({x:65.9},0).wait(1).to({x:81.2},0).wait(1).to({x:96.4},0).wait(1).to({x:111.7},0).to({_off:true},1).wait(165));

	// text3.1
	this.instance_13 = new lib.text31();
	this.instance_13.setTransform(311.1,26.1,1,1,0,0,0,57.4,8.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(251).to({_off:false},0).wait(1).to({regX:-244.9,regY:6.1,x:36.4,y:23.6},0).wait(1).to({x:64.1},0).wait(1).to({x:91.8},0).wait(1).to({x:88.1},0).wait(1).to({x:84.4},0).wait(1).to({x:80.8},0).wait(1).to({regX:57.4,regY:8.6,x:383.4,y:26.1},0).wait(126).to({x:383.1},0).wait(1).to({regX:-244.9,regY:6.1,x:78.3,y:23.6},0).wait(1).to({x:77.5},0).wait(1).to({x:80.6},0).wait(1).to({x:82.8},0).wait(1).to({x:103.4},0).wait(1).to({x:124},0).wait(1).to({x:144.8},0).to({_off:true},1).wait(10));

	// text3.2
	this.instance_14 = new lib.text32();
	this.instance_14.setTransform(310.1,43.3,1,1,0,0,0,41.4,8.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(254).to({_off:false},0).wait(1).to({regX:-225.4,regY:12.7,x:60,y:47.4},0).wait(1).to({x:76.8},0).wait(1).to({x:93.5},0).wait(1).to({x:110.3},0).wait(1).to({x:106.9},0).wait(1).to({x:103.6},0).wait(1).to({x:100.3},0).wait(1).to({regX:41.4,regY:8.6,x:367.4,y:43.3},0).wait(125).to({x:367.1},0).wait(1).to({regX:-225.4,regY:12.7,x:97.4,y:47.4},0).wait(1).to({x:98.3},0).wait(1).to({x:102.1},0).wait(1).to({x:104.3},0).wait(1).to({x:126.9},0).wait(1).to({x:149.6},0).wait(1).to({x:172.3},0).to({_off:true},1).wait(7));

	// text.intel1
	this.instance_15 = new lib.textintel1();
	this.instance_15.setTransform(133.2,565.3,1,1,0,0,0,77.8,25.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(186).to({_off:false},0).to({x:150,alpha:1},4).wait(51).to({x:160,alpha:0},4).to({_off:true},1).wait(156));

	// text.intel2
	this.instance_16 = new lib.textintel2();
	this.instance_16.setTransform(110,573.3,1,1,0,0,0,71.3,17.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(256).to({_off:false},0).to({x:150,alpha:1},7).wait(52).to({x:214,alpha:0},7).to({_off:true},1).wait(79));

	// Button
	this.instance_17 = new lib.Button();
	this.instance_17.setTransform(-142.5,31.5,0.782,0.782,0,0,0,-0.1,0.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(322).to({_off:false},0).to({alpha:1},7).wait(55).to({alpha:0},10).to({_off:true},1).wait(7));

	// pic2
	this.instance_18 = new lib.pic2();
	this.instance_18.setTransform(150,122,1,1,0,0,0,65,52);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(243).to({_off:false},0).to({alpha:1},7).wait(129).to({alpha:0},9).to({_off:true},1).wait(13));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-150,125).lineTo(-150,-125).lineTo(150,-125).lineTo(150,125).closePath();
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(402));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,271.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;