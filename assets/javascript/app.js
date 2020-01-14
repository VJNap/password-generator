// Assignment Code
const generateBtn = document.querySelector("#generate");
const generatePassword = () => {
  const passwordCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=!@#$%^&*()_+';
  let password = '';
  for (var i = 0; i <= passwordCharacters.length; i++) {
    password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
  }
  console.log(password);
  return password;
};
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
