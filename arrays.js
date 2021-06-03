
// //-----Adding elements----- 
// const numbers = [3, 4];

// //End
// numbers.push(5, 6);
// //Beggining
// numbers.unshift(1, 2);
// //Middle
// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers);

// // -----Finding elements (primitives)----
// const numbers = [1, 2, 3, 4];
// console.log(numbers.indexOf('a'));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(1) !== -1);
// //Better way:
// console.log(numbers.includes(1));
// const numbers = [1, 2, 3, 1, 4];
// console.log(number.indexOf(1, 2)) // findeng index of 2nd '1'

// // -----Finding elements (reference types)-----
// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];
// //Predicate or call back function / return the first element that mathces criteria
// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// console.log(course);
// // Arrow function (to make it prettier)
// const course = courses.find (course => course.name === 'a');

// // Removing element
// const numbers = [1, 2, 3, 4];
// //End
// const last = numbers.pop()
// console.log(numbers);
// console.log(last);
// //Beggining
// const first = numbers.shift();
// console.log(first);
// // Middle
// numbers.splice(2, 1);
// console.log(numbers);

// // Emptying array
// const numbers = [1, 2, 3, 4];
// // Solution 1 (change const to let / only works if you don't have any other refferences to original array
// let numbers = [1, 2, 3, 4];
// numbers = [];
// // Solution 2
// numbers.length = 0;
// // Solution 3
// numbers.splice(0, numbers.length);
// // Solution 4
// while (numbers.length > 0)
// numbers.pop();
// console.log(numbers);

// // ---Combining / slicing array---
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined);

// const slice = combined.slice(2, 4);
// console.log(slice);

// // The spread operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined);
// const copy = [...combined];

// //Iteration
// const numbers = [1, 2, 3];

// for (let number of numbers)
//    console.log(number);

// // Or
// numbers.forEach(function(number) {
//    console.log(number);
// });
// // Prettier
// numbers.forEach(number => console.log(number));

// // Joining arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);
// // Method for strings
// const message = 'This is blablabla';
// const parts = message.split(' ');
// console.log(parts);
// // This tequnic is usefull when building URL slug (all white spaces in url replaced with a hyphen)
// const combined = parts.join ('-');
// console.log(combined);

// // Sorting Arrays
// const numbers = [2, 3, 1, 4];
// numbers.sort()
// console.log(numbers); 
// // Reverse
// numbers.reverse()
// console.log(numbers);
// // For objects
// const courses = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'JavaScript.js'},
// ];
// courses.sort(function(a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
//     const nameA = a.name.toUppaerCase();
//     const nameB = b.name.toUppaerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0; 

// });

// console.log(courses);

// // Testing elements of array 
// const numbers = [1, 2, 3];
// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });
// console.log(allPositive);

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// });
// console.log(atLeastOnePositive);

// //Filtering array
// const numbers = [1, 2, -1, 3];
// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// });
// console.log(filtered);
// Prettier
// const filtered = numbers.filter(value => value >= 0);
// console.log(filtered);

// // Mapping array
// // Mapping items into string
// const numbers = [1, 2, -1, 3];
// const filtered = numbers.filter(n => n >= 0);
// const items = filtered.map(n => '<li>' + n + '</li>')
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);
// // Mapping items into objects
// const numbers = [1, 2, -1, 3];
// const filtered = numbers.filter(n => n >= 0);
// const items = filtered.map(n => {
//     const obj = {value: n };
//     return obj;
// });
// console.log(items);
// // Prettier
// const items = filtered.map(n => ({value: n}));
// console.log(items);
// // Or chaning
// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({value: n}));
// console.log(items);


// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({value: n}))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);

// console.log(items); 


// //Reducing array
// const numbers = [1, 2, -1, 3];
// let sum = 0;
// for (let n of numbers)
//    sum += n;
// console.log(sum)
// //Other way
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum)