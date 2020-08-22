// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//if onclick.btn() {
 // promt("Input your password")
//}
  passwordText.value = password;
function generatePassword(){
  if alert ("If you want a new password to be created, you will choose from a set of criteria for said password."){
    prompt("Choose a password length of at least 8 characters and no more than 128 characters")
  }

}
}
