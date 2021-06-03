// const numbers = arrayFromRange(4, 10);
// console.log(numbers)

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <=max; i++)
//        output.push(i);
//     return output;   
// }


// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 10));

// function includes(array, searchElement) {
//     for (let element of array)
//        if (element === searchElement)
//        return true;
//     return false;   
// }

// const numbers = [1, 2, 3, 4, 1, 1,];
// const output = except(numbers, [1, 2]);
// console.log(output);
// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//        if (!excluded.includes(element))
//         output.push(element);
//     return output;    
// }

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 0, -1);
// console.log(output);
// function move(array, index, offset) {
//     // !!! And then go back up here (Step 2)
//     // Solving issue with position not pasing array brackets 
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return; // So the rest of the function is not executed
//     }
//     // !!! Startin here (Step 1)
//     // Making clone of original array
//     const output = [...array];
//     // First we need to remove an element from array. 
//     // Going to given index and delete 1 item
//     const element = output.splice(index, 1) [0]; // will return an elemnt we just deleted
//     // Now we are adding it back to the array to specific position
//     // output.splice(index + offset, 0, element);
//     // after doing step 2 we replacing 
//     output.splice(position, 0, element);
//     return output; 
// }

// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 2);
// console.log(count);
// function countOccurrences(array, searchElement) {
// // {
// //     let count = 0; 
// //     for (let element of array)
// //       if (element === searchElement)
// //       count++;  
// //     return count;  
// // }
// //Reduce method:
// return array.reduce((accumulator, current) => {
//     const occurrence = (current === searchElement) ? 1: 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurrence;
// }, 0);
// }


// const numbers = [1, 2, 3, 4]
// const max = getMax([1, 2, 3, 4]);
// console.log(max);

// function getMax(array) {
// // {
// //     if (array.length === 0) return undefined;
// //     let max = array[0];
// //     for (i = 1; i <= array.length; i++)
// //     if (array[i] > max)
// //        max = array[i];
// //     return max;   
// // }
// // Reduce method
//    if (array.length === 0) return undefined;
//  return array.reduce((accumulator, current) => (accumulator > current) ? accumulator : current);
// //   return array.reduce((a, b) => (a > b) ? a : b);
// }


// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5},
// ]
// // All the movies in 2018 with rating >= 4
// // Sort by rating in descending order
// // Pick their title
// const titles = movies
// .filter(m => m.year === 2018 && m.rating >= 4)
// .sort((a, b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title)
// console.log(titles);