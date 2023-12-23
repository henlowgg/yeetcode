/* more repititions */

// concat strings and use an arrow function with a for loop 
// initialize an empty array
// initialize a string variable within the for loop
// param (n) for num

const fizzBuzz = (n) => {
    let result = []

        for(let i = 1; i <= n; i++) {
            let arr = "";

            if (i % 3 === 0) arr += "Fizz";
            if (i % 5 === 0) arr += "Buzz";
            if (arr === "") arr += i;

            result.push(arr);
        }
    return result;
}

var fizzbuZz = function(n) {
    let arr = [];
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

const fbuzz = (n) => {
    let stringResult = [];
        for (let i = 1; i <= n; i++) {
            let string = "";

            if (i % 3 === 0) string += "Fizz";
            if (i % 5 === 0) string += "Buzz";
            if (string === "") string += i;
                stringResult.push(string);
        }
    return stringResult;
}

var fbizz = function(n) {
    let string = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0)
                string.push("FizzBuzz")
            else if (i % 3 === 0)
                string.push("Fizz")
            else if (i % 5 === 0)
                string.push("Buzz")
            else
                string.push(i + "")
        }
    return string;
}

const fuzz = (n) => {
    let arr = [];
        for (let i = 1; i <= n; i++) {
            let string = ""

            if (i % 3 === 0) string += "Fizz";
            if (i % 5 === 0) string += "Buzz";
            if (string === "") string += i;
                arr.push(string);
        }
    return arr;
}