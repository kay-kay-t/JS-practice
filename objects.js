// Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }

};

circle.draw(); // Method


// Factory Functions produce objects
function createCircle(radius, location) {
    return {
    radius: radius,
    location: location,
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
  };
}
// Simplifiing 
function createCircle(radius, location) {
    return {
    radius,
    draw() {
        console.log('draw');
    }
  };
}
// To use this facctory function
const circle1 = createCircle(1);
console.log(circle1)


// Constructor function
fuction Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);


fuction Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
} 

const Circle1 = new Function ('radius', `
this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }`);
    const circle = new Circle(1);

    const another = new Circle(1);

// Methods inside the fuction
fuction Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
Circle.call({}, 1) // {} - passing an ampty object, to which 'this' refers,
                      // and then we pass as many arguments, as we want like 1, 2,...  
Circle.apply({}, [1, 2, 3]); // with this method we pass all arguments in an array

                      
const another = new Circle(1);

Primitives are copied by value
let x = {value: 10};
let y = x;

x.value = 20;

How to anumerate the property of the object
let obj = {value: 10};
function increase(obj) {
    obj.value++;
}

increase (obj);
console.log(obj);

Cloning an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}    
const another = {};
for (let key in circle)
  another[key] = circle[key];
// which means basicaly: another['radius'] = circle['radius'];
// better way to use assign method: const another = Object.assign({}, circle)
// or we can use spread operator: const another = {...circle};
console.log(another);

String primitive
const message = 'hi';

// String object
const another = new String('hi');

// Hoewever when we use dot notation, JS automaticaly turns it in string object
const message = 'hi';
message//(.trim, .toUpper, .split) or a lot of more

