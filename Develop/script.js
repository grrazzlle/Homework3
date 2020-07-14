// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordChars = [];
//prompts user for password length
var passwordLength = prompt ("How many characters do you want your password to be? (It has to be between 8 and 128)");
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("How many characters do you want your password to be? (It has to be between 8 and 128)");
}
//asks user to confirm if they want special characters
var confirmChar = confirm ("Do you want special characters in your password?");
if (confirmChar == true) {
  passwordChars.push(specialChars);
}
//asks user to confirm if they want uppercase characters
var confirmUpper = confirm ("Do you want uppercase characters in your password?");
if (confirmUpper == true) {
  passwordChars.push(upperCase);
}
//asks user to confirm if they want lowercase characters
var confirmLower = confirm ("Do you want lowercase characters in your password?");
if (confirmLower == true) {
  passwordChars.push(lowerCase);
}
//asks user to confirm if they want numbers
var confirmNum = confirm ("Do you want numbers in your password?");
if (confirmNum == true) {
  passwordChars.push(numbers);
}
//generates random password from the arrays they choose
function generatePassword() {
  var newPassword = ""
  for (i = 0;i < passwordLength;i++) {
//randomly chooses an array of the ones the user wants
    var randomNumber=Math.random();
    var randomValue=randomNumber*passwordChars.length;  
    var randomArray=Math.floor(randomValue);
//randomly chooses an element in the choosen array
    randomNumber=Math.random();
    randomValue=randomNumber*passwordChars[randomArray].length;  
    randomElement=Math.floor(randomValue);
//concatenates each randomly choosen element together
    newPassword += passwordChars[randomArray][randomElement]
  }
  return (newPassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
