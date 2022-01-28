// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]


 
  const odds = [];

numbers.forEach(number => {
  if (number % 2 !== 0) {
      
    odds.push(number);
  }
});

console.log(odds); 

const evens = []

numbers.forEach(number => {
    if ( number %2 == 0 ){
        evens.push(number);
    }
});

console.log(evens);