// GLOBAL VARIABLES
var generateBtn = document.querySelector("#generate");




// GENERATE PASSWORD FUNCTION
var generatePassword = function () {

  var chosenLength = chooseLength();
  var chosenUppercase = chooseUppercase();
  var chosenNumbers = chooseNumbers();
  var chosenSymbols = chooseSymbols();
  var assembledPassword = assemblePassword();

  return assemblePassword(chosenLength);
}




// Function to determine password LENGTH
var chooseLength = function () {
  var length = parseInt(prompt("How long would you like your password to be? \nChoose between 8-128 characters."));

  if (length === null || length === "" || length < 8 || length > 128) {
    alert("Please choose a number between 8-128");
    chooseLength();
  }
  else {
    alert("You have chosen to make your password " + length + " characters long.\n\nNext, you will choose what characters to include in your password (lowercase letters are default).");
    return (length);
  }
}



//Function to determine use of UPPERCASE LETTERS
var chooseUppercase = function () {
  var uppercase = prompt("Would you like to include UPPERCASE LETTERS in your password? \nPlease enter YES or NO.");

  if (uppercase === "NO" || uppercase === "no" || uppercase === "N") {
    alert("You have chosen NOT to include uppercase letters in your password.");
    uppercase = false;
    return uppercase;
  }
  else if (uppercase === "YES" || uppercase === "yes" || uppercase === "Y") {
    alert("You have chosen to include uppercase letters in your password.");
    uppercase = true;
    return uppercase;
  }
  else {
    alert("Please choose YES or NO");
    chooseUppercase();
  }
}


//Function to determine use of NUMBERS
var chooseNumbers = function () {
  var numbers = prompt("Would you like to include NUMBERS in your password? \nPlease enter YES or NO.");

  if (numbers === "NO" || numbers === "no" || numbers === "N") {
    alert("You have chosen NOT to include numbers in your password.");
    numbers = false;
    return numbers;
  }
  else if (numbers === "YES" || numbers === "yes" || numbers === "Y") {
    alert("You have chosen to include numbers in your password.");
    numbers = true;
    return numbers;
  }
  else {
    alert("Please choose YES or NO");
    chooseNumbers();
  }
}


//Function to determine use of SYMBOLS
var chooseSymbols = function () {
  var symbols = prompt("Would you like to include SYMBOLS in your password? \nPlease enter YES or NO.");

  if (symbols === "NO" || symbols === "no" || symbols === "N") {
    alert("You have chosen NOT to include symbols in your password.");
    symbols = false;
    return symbols;
  }
  else if (symbols === "YES" || symbols === "yes" || symbols === "Y") {
    alert("You have chosen to include symbols in your password.");
    symbols = true;
    return symbols;
  }
  else {
    alert("Please choose YES or NO");
    chooseSymbols();
  }
}



//Function to assemble random password (string) from each char set
function assemblePassword(length) {
  var uppercase = chooseUppercase();
  var numbers = chooseNumbers();
  var symbols = chooseSymbols();

  if (uppercase, numbers, symbols === false) {
    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var generatedPassword = '';
  }
  for (var i = 0; i < length; i++) {
    generatedPassword += characters[Math.floor(Math.random() * characters.length)]
  }
  return generatedPassword;
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

































































































// Character Sets
// var lower = ["a","b","c","d","e"];
// var lowerUpper = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ];
// var lowerNumbers = [abcdefghijklmnopqrstuvwxyz0123456789];
// var lowerSymbols = [abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerUpperNumbers = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789];
// var lowerUpperSymbols = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerNumbersSymbols = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[];:~<,>.?/|];
// var lowerUpperNumbersSymbols = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[];:~<,>.?/|];





// // function randomPassword(passwordLength, charSet) {
// //   charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //   var randomPassword = '';
// //   for (var i = 0; i < passwordLength; i++) {
// //       var randomChar = Math.floor(Math.random() * charSet.length);
// //       randomPassword += charSet.substring(randomChar,randomChar+1);
// //   }
// //   console.log(randomPassword);
// //   // return randomPassword;
// // }


// //   if (passwordUppercase, passwordNumbers, passwordSymbols === false) {
// //     var charOptions = ["a","b","c","d","e"];
// //     var getRandomChar = function () {
// //       for (var i = 0; i < passwordLength; i++) {
// //         console.log(charOptions[i]);
// //       }
// //     }
// //   }
// //   // else if ()
// // // }









// // Start generating password when the button is clicked

// // Ask the user for length of password --> return number value ***
// // Ask the user if they want to use uppercase letters --> return true or false ***
// // Ask the user if they want to use numbers --> return true or false ***
// // Ask the user if they want to use special characters --> return true or false ***

// // If uppercase only, generate random password from a set of characters provided here (lowercase & uppercase)
// // If numbers only, generate random password from a set of characters provided here (lowercase & numbers)
// // If special characters only, generate random password from a set of characters provided here (lowercase & special char)
// // If uppercase & numbers only, generate random password from a set of characters provided here (lowercase, uppercase & numbers)
// // If uppercase & special char only, generate random password from a set of characters provided here (lowercase, uppercase & special char)
// // If numbers & special char only, generate random password from a set of characters provided here (lowercase, numbers & special char)
// // If all 3, generate random password from a set of characters provided here (lowercase, uppercase, numbers & special char)

// // Return that value to the text window







// // SAMPLE IDEAS


// function randomString(len, charSet) {
//   charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var randomString = '';
//   for (var i = 0; i < len; i++) {
//     var randomPoz = Math.floor(Math.random() * charSet.length);
//     randomString += charSet.substring(randomPoz, randomPoz + 1);
//   }
//   return randomString;
// }





// //Function used to determine whether the user wants to include numbers in the password
// function determineNumbers() {
//   numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
//   numberCheck = numberCheck.toLowerCase();

//   if (numberCheck === null || numberCheck === "") {
//     alert("Please answer Yes or No");
//     determineNumbers();

//   } else if (numberCheck === "yes" || numberCheck === "y") {
//     numberCheck = true;
//     return numberCheck;

//   } else if (numberCheck === "no" || numberCheck === "n") {
//     numberCheck = false;
//     return numberCheck;

//   } else {
//     alert("Please answer Yes or No");
//     determineNumbers();
//   }
//   return numberCheck;
// }

// // ***********************************

// function randPassword(letters, numbers, either) {
//   var chars = [
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
//     "0123456789", // numbers
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" // either
//   ];

//   return [letters, numbers, either].map(function (len, i) {
//     return Array(len).fill(chars[i]).map(function (x) {
//       return x[Math.floor(Math.random() * x.length)];
//     }).join('');
//   }).concat().join('').split('').sort(function () {
//     return 0.5 - Math.random();
//   }).join('')
