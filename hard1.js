// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value

/*

let matching = (input) => {
   
    for (let i = 0; i < input.length; i++){
        
    if (input.indexOf("[") >= 0 && input.indexOf("]") >= 0 || input.indexOf("(") >= 0 && input.indexOf(")") >= 0 || input.indexOf("{") >= 0 && input.indexOf("}") >= 0) {
        return true;
    }else{
        return false;
    }
    }
    
}

console.log((matching ("hello")));
console.log((matching ("[hello]")));
console.log((matching ("{hello}")));
*/ 
const matching = (input) => {
    return input.includes("{") && input.includes("}") || input.includes("(") && input.includes(")") || input.includes("[") && input.includes("]")
}
console.log(matching("{Hello}"));
console.log(matching("{Hello)"));