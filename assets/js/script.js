// GLOBAL VARIABLES
var generateBtn = document.querySelector("#generate");




// GENERATE PASSWORD FUNCTION
var generatePassword = function () {

  var chosenLength = chooseLength();

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
    // uppercase = false;
    return "false";
  }
  else if (uppercase === "YES" || uppercase === "yes" || uppercase === "Y") {
    alert("You have chosen to include uppercase letters in your password.");
    // uppercase = true;
    return "true";
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
    // numbers = false;
    return "false";
  }
  else if (numbers === "YES" || numbers === "yes" || numbers === "Y") {
    alert("You have chosen to include numbers in your password.");
    // numbers = true;
    return "true";
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
    // symbols = false;
    return "false";
  }
  else if (symbols === "YES" || symbols === "yes" || symbols === "Y") {
    alert("You have chosen to include symbols in your password.");
    // symbols = true;
    return "true";
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

  // Generate password from these characters if (lowercase only)
  if (uppercase === "false" && numbers === "false" && symbols === "false") {
    var characters1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters1[Math.floor(Math.random() * characters1.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase & uppercase)
  if (uppercase === "true" && numbers === "false" && symbols === "false") {
    var characters2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters2[Math.floor(Math.random() * characters2.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase & numbers)
  if (uppercase === "false" && numbers === "true" && symbols === "false") {
    var characters3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters3[Math.floor(Math.random() * characters3.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase & symbols)
  if (uppercase === "false" && numbers === "false" && symbols === "true") {
    var characters4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '~', '<', '>', '?', '/', '|'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters4[Math.floor(Math.random() * characters4.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase, uppercase & numbers)
  if (uppercase === "true" && numbers === "true" && symbols === "false") {
    var characters5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters5[Math.floor(Math.random() * characters5.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase, uppercase & symbols)
  if (uppercase === "true" && numbers === "false" && symbols === "true") {
    var characters6 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '~', '<', '>', '?', '/', '|'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters6[Math.floor(Math.random() * characters6.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase, numbers & symbols)
  if (uppercase === "false" && numbers === "true" && symbols === "true") {
    var characters7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '~', '<', '>', '?', '/', '|'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters7[Math.floor(Math.random() * characters7.length)]
    }
    return generatedPassword;
  }

  // Generate password from these characters if (lowercase, uppercase, numbers & symbols)
  if (uppercase === "true" && numbers === "true" && symbols === "true") {
    var characters8 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '~', '<', '>', '?', '/', '|'];
    var generatedPassword = '';

    for (var i = 0; i < length; i++) {
      generatedPassword += characters8[Math.floor(Math.random() * characters8.length)]
    }
    return generatedPassword;
  }
}











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

