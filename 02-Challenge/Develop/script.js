// Assignment Code
var generateBtn = document.querySelector("#generate"); //DOM Element
// console.log(generateBtn) called for generateBtn to see what we were working with
//so this variable will give us interactive abilities with the Generate Password button

generateBtn.addEventListener("click", writePassword); //when the button is clicked it will generate the password

// Write password to the #password input
function writePassword() {
  var correctPrompts = prompts(); //this returns true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
}
//Generate Password
function generatePassword() {
  var password = ""
  for (i = 0; i < choiceArr.length; i++) {
    return passwordText
  }
}
//Criterias - //alphabet and special characters - so you could either write the entire of letters in the array OR use the charcode() https://www.asciitable.com/
//for charCode you are going to need to mathFloor(mathRandom)
//Method - if i was going to do the array list all way
//Upper toLowerCase the array
//Lower toUpperCase the array 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+<>?"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Prompt
function prompts() {
  choiceArr = [];
  var userInput = window.prompt("How many characters would you like your password to be");

  var passwordLength = parseInt(userInput)
  //parseInt turns the number("string") that the user entered into a number value/integer

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {//now i need to create a min max value 
    window.alert("Password length has to be a number, and 8-128 characters. Please try again");
    return false;
  }//if the value entered is not a number - isNaN

  if (confirm("Would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(getRandomLower);
  }
  if (confirm("Would you like uppercase letters?")) {
    choiceArr = choiceArr.concat(getRandomUpper);
  }
  if (confirm("Would you like a number?")) {
    choiceArr = choiceArr.concat(getRandomNumber);
  }
  if (confirm("Would you like a special character?")) {
    choiceArr = choiceArr.concat(getRandomSymbol)
  }
  return true;
}


//Step 1:
//work backwards
//addEventListener has not been defined

//Step 2: 
//generarePassword in the writePassword function has not been defined 

//is document.querySelector("#generate") different from document.querySelector("#password");
  //looks for the #generate and #passwork in markup
