//make radion buttons uncheckable
$('input[type="radio"]').each(function() {
	var radio = $(this), initial = false;
	radio.click(function() {
		radio.prop('checked', (initial = !initial));
	});
});

//-------------------           -------------------           -------------------           -------------------           -------------------
//Animal.prototype._doWalk    -> Protected property
//static properties
function Animal() { 
  Animal.count++;
}
Animal.count = 0;

new Animal();

alert(Animal.count) // 2
//-------------------           -------------------           -------------------
//Pseudo classical
function extend(Child, Parent) {
	Child.prototype = inherit(Parent.prototype);
	Child.prototype.constructor = Child;
	Child.parent = Parent.prototype;
}
function inherit(proto) {
	function F() {}
	F.prototype = proto;
	return new F;
}
//USAGE
function Animal(name) {
  this.name = name;
}
Animal.prototype.run = function() {
  alert(this + " is running!");
};
Animal.prototype.toString = function() {
  return this.name;
};
function Rabbit(name) {
  Rabbit.parent.constructor.apply(this, arguments);
}
extend(Rabbit, Animal);

Rabbit.prototype.run = function() {
  Rabbit.parent.run.apply(this);
  alert(this + " bounces high into the sky!");
};

var rabbit = new Rabbit('Jumper');
rabbit.run();
//-------------------           -------------------           -------------------
//All in one
function Animal(name) {
	this.name = name;
	this.run = function() {
		alert("running "+this.name);
	};
}
function Rabbit(name) {
	Animal.apply(this, arguments); //Animal.call(this, "Mr. " + name.toUpperCase())    //with custom parameters too
	var parentRun = this.run;  // keep parent method
	this.run = function() {  
		alert("bouncing "+this.name);
		parentRun.apply(this);  // call parent method
	};
}
rabbit = new Rabbit("Rab");
rabbit.run();    // inherited method
//-------------------           -------------------           -------------------
//Factory
function Animal(name) {
	return {
		 run: function() {
			alert(name + " is running!");
		 }
	}
}

var animal = Animal("fox");
animal.run();

function Rabbit(name) {
	var rabbit = Animal(name); // make animal
	var speed = 100;                    // private prop
	function openWings() { /* ... */ } // private method
	rabbit.bounce = function() { // mutate
		this.run();
		alert(name + " bounces to the skies! :)");
		openWings();
	};
	return rabbit; // return the result
}

var rabbit = Rabbit("rab");
rabbit.bounce();
