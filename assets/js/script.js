var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

var generateBtn = document.querySelector("#generate");




// GENERATE PASSWORD FUNCTION
var generatePassword = function () {
  choosePasswordLength();

return xxx;
}




// Function to determine password LENGTH
var choosePasswordLength = function () {
  var passwordLength = prompt("How long would you like your password to be? \nChoose between 8-128 characters.");
    
    if (passwordLength === null || passwordLength === "" || passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a number between 8-128!");
      choosePasswordLength();
    }
    else {
      alert("You have chosen to make your password " + passwordLength + " characters long.");
      return passwordLength;
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
