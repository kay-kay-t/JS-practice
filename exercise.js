let number = max (3, 5);
   console.log(number);

function max (a, b) {
return (a > b) ? a : b;
}

console.log (isLandscape(800, 600));
function isLandscape (width, height) {
return (width > height);
}

checkSpeed(70);
function checkSpeed (speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    if (speed <= speedLimit + kmPerPoint)
       console.log ('Ok');
    else {
       const points = Math.floor((speed - speedLimit) / kmPerPoint);
       if (points >= 12)
          console.log('License suspended');
       else
          console.log('Points', points)
    }   
}
// To make code cleaner and remove indentation
function checkSpeed (speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    if (speed <= speedLimit + kmPerPoint)
       console.log ('Ok');
       retuern;
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points) 
}


const array = [0, null, '', 1, 2, 3]
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0; 
    for (let value of array)
        if (value)
          count++;
    return count;      
}



const movies = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movies);

function showProperties(obj) {
    for (let key in obj)
       if (typeof obj[key] === 'string')
           console.log(key, obj[key]);   
}      



console.log(sum(10));

function sum(limit) {
    let sum = 0;
    
    for (let i = 0; i <= limit; i++)
       if (i % 3 === 0 || i % 5 === 0)
       sum += i;

    return sum;   
}


const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
for (let value of array)
    sum += value;
return sum / array.lenght; 

}


showStars(5);

function showStars(rows) {
    for (row = 1; row <= rows; row++) {
       let pattern = '';
       for (let column = 0; column < row; column++)
           pattern += '*';
        console.log(pattern);   
    }
}


-------To finish------
showStars(5);

function showStars(rows) {
    for (row = 1; row <= rows; row++) {
       for (let space=1; space<=(rows - row); space++)
           console.log('');   
       for (let column = 1; column <= row; column++)
           console.log('*'); 
        console.log("");   
    }
}

showPrimes(20);

function showPrimes(limit){
    for (let number = 2; number < limit; number++ ){

        let isPrime = true;
        for (let factor = 2; factor < number; factor++){
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) console.log(number);
    }
}

// Prettier: 
function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
      if (isPrime(number)) console.log(number);
}
function isPrime(number){
    for (let factor = 2; factor < number; factor++)
       if (number % factor === 0)
           return false;
    return true;       
}