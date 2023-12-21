/* First solution */

// change the initial function into an arrow func

const fizzBuzz = (n) => {

    // declare an empty array
    let result = [];

    // write a for loop to iterate over the arrays 
    for (let i = 1; i <= n; i++) {
        // going to concatenate the strings with these functions
        let stringResult = "";
        if (i % 3 === 0) stringResult += "Fizz";
        if (i % 5 === 0) stringResult += "Buzz";
        // concats the strings if both are true
        
        if (stringResult === "") stringResult += i;
        result.push(stringResult);
    }
    return result;
};


/* Second solution, standard if elseif statements to check if indexed string is true or false */
var fizzyBuzz = function(n) {
    arr = []

    for (let i = 1; i <= n; i++) {
        // check for fizzbuzz first since that takes both arguments %3 and %5
        if (i % 3 === 0 && i % 5 === 0)
            // pushes FizzBuzz to the arr if both i % 3 and i % 5 are true
            arr.push("FizzBuzz")
        else if (i % 3 === 0)
            // pushes Fizz to the arr if i % 3 is true
            arr.push("Fizz")
        else if (i % 5 === 0)
            // pushes Buzz to the arr if i % 5 is true
            arr.push("Buzz")
        else
            // if none of those conditions are met, it will return i as a string
            arr.push(i + "")
    }
    return arr
};


var fizzyFizzy = function(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
        arr.push("FizzBuzz")
        else if (i % 3 === 0)
        arr.push("Fizz")
        else if (i % 5 === 0)
        arr.push("Buzz")
        else
        arr.push(i + "")
    }
    return arr;
}

var frizzyBuzz = function(n) {
    let fizzyArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            fizzyArr.push("FizzBuzz")
        else if (i % 3 === 0)
            fizzyArr.push("Fizz")
        else if (i % 5 === 0)
            fizzyArr.push("Buzz")
        else
            fizzyArr.push(i + "")
    }
    return fizzyArr;
}

const fwizBwuz = (n) => {
    let fwiz = [];

    for (let i = 1; i <= n; i++) {
        let fwizzyResult = "";

        if (i % 3 === 0) fwizzyResult += "Fizz";
        if (i % 5 === 0) fwizzyResult += "Buzz";

        if (fwizzyResult === "") fwizzyResult += i;
        fwiz.push(fwizzyResult);
    }
    return fwiz;
}
