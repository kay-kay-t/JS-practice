// function sum(...args) {
//     if (DataTransferItemList.length === 1 && Array.isArray(args[0]))
//        args = [...items[0]];
//     return args.reduce((a, b) => a + b);
// }    
// console.log(sum(1, 2, 3)); 


// // To create a read-only property we use getter
// const circle = {
//     radius : 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };
// console.log(circle.area)


try {
const numbers = [1, 2, 3, 4, 1];
const count = countOccurrences(null, 1);
console.log(count);
}
catch (e) {
    console.log(e.message);
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) 
       throw new Error('Value is not an array');
    return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1: 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
}, 0)};
 