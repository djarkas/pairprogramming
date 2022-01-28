//Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 

let isAnagram = function (string1, string2) {
    let sorted1 = string1.split( '' ).sort().join( '' ).toLowerCase();
    let sorted2 = string2.split( '' ).sort().join( '' ).toLowerCase();
    return (sorted1 === sorted2);
};
console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('dcl', 'acl'));