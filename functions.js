// Function declaration
walk(); // We can call this type of function before it was declared
function walk(){
    console.log('walk');
}
 

//(Anonymous) Function Expression (Reminder: in JS functions are objects)
let run = function() {
    console.log('run');
};
let move = run;
run(); // We cannot call it before it defined
move();


//Arguments (object)
function sum() {
    let total = 0;
// To have a flaxability to pass as many argument as we want    
    for (let value of arguments) //This loop can be used on any object that have iterator
       total +=value;
    return total;   
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

//Rest operator to have a function with very number of parametrs, have all 
// of them and put in array. !! Rest parametr is always the last parametr in array
function sum(...args) {
    console.log(args); 
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
// To get the sum of all the numbers in array use reduce method
function sum(...args) {
    return args.reduce((a, b) => a + b)
}    
console.log(sum(1, 2, 3, 4, 5, 6, 7));

//Example: to add discount to the prices in the cart
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));


// Default parametrs
function interest(principal, rate, years) {
//We can use logical '||' operator to give a variable a default value
   rate = rate || 3.5;
   years = years || 5;
   return principal * rate / 100 * years;     
}
console.log(interest(10000)); //3.5, 5 ));
//Prettier way: !!When you give one parametr a value, you should give all 
// parametrs after that a value as well
function interest(principal, rate = 3.5, years =5) {
       return principal * rate / 100 * years;     
    }
console.log(interest(10000));

// Getters & Setters - special methods in objects
// Getters => access properties
// Setters => change (mutate) them
const person = {
    firstName: 'Ab',
    lastName: 'Bd',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    //To be able to set it from outside
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';

console.log(person);

// Split method could be used only for strings, therefor to avoid mistakes,
// we need to use typeof:
const person = {
    firstName: 'Ab',
    lastName: 'Bd',
    set fullName(value) {
        if (typeof value !== 'string') return;
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = null; // since it's not a string

console.log(person);

//When we need to report an error in app, we throw an exception
const person = {
    firstName: 'Ab',
    lastName: 'Bd',
    set fullName(value) {
        if (typeof value !== 'string')
          throw new Error('Value is not a string');
        const parts = value.split(' ');
        if (parts.length !== 2)
          throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
// we put it in try block, since it's where exception is
try {
    person.fullName = null; 
}
//and then we catch it and display it to dev or user
catch (e) {
    alert(e);
}
console.log(person);


//-------- This -------
// method => obj
// function => global (window, global)

// when dealing with a reg function this by default referances global onj
const video = {
    title: 'a',
    play () {
        console.log(this);
    }
};
//if call a function using new operator (construct f), this will referances 
// a new empty object

function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('b'); // {}

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
video.showTags();
// ----- Changing the value of this ------
// We can set this to a const self (or that) = this // or can use call
// or apply method
function playVideo(a, b) {
    console.log(this);
}
playVideo.call({name: 'a'}, 1, 2);
// or (here you can pass multiple arg as an array)
playVideo.apply({name:'a'}, [1, 2]);

playVideo();
// or we can simply use arrow function:
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
video.showTags();


