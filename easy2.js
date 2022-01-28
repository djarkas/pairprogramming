// Create a function that checks an array for prime numbers then inserts any pzimes into a new array.     

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = [];
// return either true or false
function checkPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
array.forEach(function (element) {
  const prime = checkPrime(element);
  if (prime) {
    primeNumbers.push(element);
  }
});
console.log(primeNumbers);