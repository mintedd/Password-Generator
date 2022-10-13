// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
var numberInt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Step 1: defining passwordCriteria because it is being called in the generatePassword function declaration 
function passwordCriterias() {
    var userInput = parseInt(prompt("How many characters would you like your password to be"))
    if (isNaN(userInput) || userInput < 8 || userInput > 128) {
        window.alert("Password length has to be a number, and 8-128 characters. Please try again");
        return null;
    }//if the value entered is not a number or less than 8 or less than 128 null - try again 

    var hasLowercase = confirm("Would you like lowercase letters?")
    var hasUppercase = confirm("Would you like uppercase letters?")
    var hasSpecial = confirm("Would you like special characters?")
    var hasNumberInt = confirm("Would you like numbers?")

    if (hasLowercase === false && hasUppercase === false && hasSpecial === false && hasNumberInt === false) {
        window.alert("Must pick at least 1 criteria");
        return null;
    } //if user enters no for all of the criterias - null must try again because they must select at least one

    //this will take what the user chose was for the criteria and will take that boolean tue or false
    var passwordOptions = {
        userInput: userInput,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasSpecial: hasSpecial,
        hasNumberInt: hasNumberInt,
    }
    return passwordOptions;
}

function randomizer(arr) { //arr is just a placeholder, 
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomElement = arr[randomIndex]
    console.log(randomElement)
    return randomElement
}

function generatePassword() {
    var options = passwordCriterias(); //passwordCriteria is being called but has not been defined so need to define (line 10)
    //var options are the choices you selected in the password criteria function 
    var choiceArr = [];
    var possibleArr = []; //all the choices var lower, upper, special, and numberInt
    var resultArr = [];

    //if user confirmed yes to these choices then the lowercase,uppercase,special, and numberInt array will be concatenated/added to the possible array 
    if (options.hasLowercase) {
        possibleArr = possibleArr.concat(lowercase)
        choiceArr.push(randomizer(lowercase))
        //a random letter will be chosen from the lowercase array and will be added to the choiceArr
    }
    if (options.hasUppercase) {
        possibleArr = possibleArr.concat(uppercase)
        choiceArr.push(randomizer(uppercase))
    }
    if (options.hasSpecial) {
        possibleArr = possibleArr.concat(special)
        choiceArr.push(randomizer(special))
    }
    if (options.hasNumberInt) {
        possibleArr = possibleArr.concat(numberInt)
        choiceArr.push(randomizer(numberInt))
    }

    //create a for loop options.length
    for (let i = 0; i < options.userInput; i++) {
        var possibleChar = randomizer(possibleArr)
        resultArr.push(possibleChar)
    }

    for (let i = 0; i < choiceArr.length; i++) {
        resultArr[i] = choiceArr[i]
    }
    return resultArr.join("")
    // for some reason it is only giving me on 1 string value...
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password"); //here is where the random password will be shown
    passwordText.value = password; //.value will return the array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);