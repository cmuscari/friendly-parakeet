// GLOBAL VARIABLES

// Character Sets
// var lower = ["a","b","c","d","e"];
// var lowerUpper = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ];
// var lowerNumbers = [abcdefghijklmnopqrstuvwxyz0123456789];
// var lowerSymbols = [abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerUpperNumbers = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789];
// var lowerUpperSymbols = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerNumbersSymbols = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerUpperNumbersSymbols = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[];:~<,>.?/|];

var generateBtn = document.querySelector("#generate");
var passwordUppercase;
var passwordNumbers;
var passwordSymbols;




// GENERATE PASSWORD FUNCTION
var generatePassword = function () {
  chooseLength();
  chooseUppercase();
  chooseNumbers();
  chooseSymbols();

return charOptions[i];
}




// Function to determine password LENGTH
var chooseLength = function () {
  var passwordLength = prompt("How long would you like your password to be? \nChoose between 8-128 characters.");
    
    if (passwordLength === null || passwordLength === "" || passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a number between 8-128");
      chooseLength();
    }
    else {
      alert("You have chosen to make your password " + passwordLength + " characters long.\n\nNext, you will choose what characters to include in your password (lowercase letters are default).");
      return passwordLength;
    }
}


//Function to determine use of UPPERCASE LETTERS
var chooseUppercase = function () {
  var passwordUppercase = prompt("Would you like to include UPPERCASE LETTERS in your password? \nPlease enter YES or NO.");

    if (passwordUppercase === "NO" || passwordUppercase === "no" || passwordUppercase === "N") {
      alert("You have chosen NOT to include uppercase letters in your password.");
      passwordUppercase = false;
      return passwordUppercase;
    }
    else if (passwordUppercase === "YES" || passwordUppercase === "yes" || passwordUppercase === "Y") {
      alert("You have chosen to include uppercase letters in your password.");
      passwordUppercase = true;
      return passwordUppercase;
    }
    else {
      alert("Please choose YES or NO");
      chooseUppercase();
    }
}


//Function to determine use of NUMBERS
var chooseNumbers = function () {
  var passwordNumbers = prompt("Would you like to include NUMBERS in your password? \nPlease enter YES or NO.");

    if (passwordNumbers === "NO" || passwordNumbers === "no" || passwordNumbers === "N") {
      alert("You have chosen NOT to include numbers in your password.");
      passwordNumbers = false;
      return passwordNumbers;
    }
    else if (passwordNumbers === "YES" || passwordNumbers === "yes" || passwordNumbers === "Y") {
      alert("You have chosen to include numbers in your password.");
      passwordNumbers = true;
      return passwordNumbers;
    }
    else {
      alert("Please choose YES or NO");
      chooseNumbers();
    }
}


//Function to determine use of SYMBOLS
var chooseSymbols = function () {
  var passwordSymbols = prompt("Would you like to include SYMBOLS in your password? \nPlease enter YES or NO.");

    if (passwordSymbols === "NO" || passwordSymbols === "no" || passwordSymbols === "N") {
      alert("You have chosen NOT to include symbols in your password.");
      passwordSymbols = false;
      return passwordSymbols;
    }
    else if (passwordSymbols === "YES" || passwordSymbols === "yes" || passwordSymbols === "Y") {
      alert("You have chosen to include symbols in your password.");
      passwordSymbols = true;
      return passwordSymbols;
    }
    else {
      alert("Please choose YES or NO");
      chooseSymbols();
    }
}


//Function to determine which dataset to use when selecting password characters
// var generateChar = function () {

  if (passwordUppercase, passwordNumbers, passwordSymbols === false) {
    var charOptions = ["a","b","c","d","e"];
    var getRandomChar = function () {
      for (var i = 0; i < passwordLength; i++) {
        console.log(charOptions[i]);
      }
    }
  }
  // else if ()
// }














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// Start generating password when the button is clicked

// Ask the user for length of password --> return number value ***
// Ask the user if they want to use uppercase letters --> return true or false ***
// Ask the user if they want to use numbers --> return true or false ***
// Ask the user if they want to use special characters --> return true or false ***

// If uppercase only, generate random password from a set of characters provided here (lowercase & uppercase)
// If numbers only, generate random password from a set of characters provided here (lowercase & numbers)
// If special characters only, generate random password from a set of characters provided here (lowercase & special char)
// If uppercase & numbers only, generate random password from a set of characters provided here (lowercase, uppercase & numbers)
// If uppercase & special char only, generate random password from a set of characters provided here (lowercase, uppercase & special char)
// If numbers & special char only, generate random password from a set of characters provided here (lowercase, numbers & special char)
// If all 3, generate random password from a set of characters provided here (lowercase, uppercase, numbers & special char)

// Return that value to the text window







// SAMPLE IDEAS


//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// ***********************************

function randPassword(letters, numbers, either) {
  var chars = [
   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
   "0123456789", // numbers
   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" // either
  ];

  return [letters, numbers, either].map(function(len, i) {
    return Array(len).fill(chars[i]).map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    }).join('');
  }).concat().join('').split('').sort(function(){
    return 0.5-Math.random();
  }).join('')
}