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


var friz = function(n) {
    let briz = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            briz.push("FizzBuzz")
        else if (i % 3 === 0)
            briz.push("Fizz")
        else if (i % 5 === 0)
            briz.push("Buzz")
        else
            briz.push(i + "")
    }
    return briz;
}

var plzStop = function(n) {
    let plz = []
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0)
                plz.push("FizzBuzz")
            else if (i % 3 === 0)
                plz.push("Fizz")
            else if (i % 5 === 0)
                plz.push("Buzz")
            else
                plz.push(i + "")
        }
    return plz;
}

const needToShower = (n) => {
    let shower = [];

        for (let i = 1; i <= n; i++) {
            let plzShower = "";

            if (i % 3 === 0) plzShower.push += "Fizz";
            if (i % 5 === 0) plzShower.push += "Buzz";

            if (plzShower === "") plzShower += i;
            shower.push(plzShower);
        };
    return shower;
};

const okGoingToShower = (n) => {
    let showeringNow = [];

        for (let i = 1; i <= n; i++) {
            let bzzBzz = "";
            
            if (i % 3 === 0) bzzBzz.push += "Fizz";
            if (i % 5 === 0) bzzBzz.push += "Buzz";

            if (bzzBzz === "") bzzBzz += i;
                showeringNow.push(bzzBzz);
        };
    return showeringNow;
};