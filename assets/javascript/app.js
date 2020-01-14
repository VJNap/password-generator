// Assignment Code
const generateBtn = document.querySelector("#generate");
const userForm = document.querySelector("#userInput");
const userLength = document.querySelector("#userLength");
const generatePassword = () => {
  event.preventDefault();
  let passwordLength = userLength.value;
  let password = '';
  let passwordCharacters = '';
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Your password must be between 8 and 128 characters in length.');
  } else {
    if (userForm.value === 'allOptions') {
      let passwordCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=!@#$%^&*()_+';
      for (var i = 0; i < passwordLength; i++) {
        password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
      };
      console.log(userForm.value);
      console.log(passwordLength);
      console.log(password);
      return password;
    } else if (userForm.value === 'numeric') {
      let passwordCharacters = '0123456789';
      for (var i = 0; i < passwordLength; i++) {
        password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
      };
      console.log(userForm.value);
      console.log(passwordLength);
      console.log(password);
      return password;
    } else if (userForm.value === 'lowerCase') {
      let passwordCharacters = 'abcdefghijklmnopqrstuvwxyz';
      for (var i = 0; i < passwordLength; i++) {
        password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
      };
      console.log(userForm.value);
      console.log(passwordLength);
      console.log(password);
      return password;
    } else if (userForm.value === 'upperCase') {
      let passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (var i = 0; i < passwordLength; i++) {
        password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
      };
      console.log(userForm.value);
      console.log(passwordLength);
      console.log(password);
      return password;
    } else if (userForm.value === 'special') {
      let passwordCharacters = '-=!@#$%^&*()_+';
      for (var i = 0; i < passwordLength; i++) {
        password = password + passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(passwordCharacters.length - 1)));
      };
      console.log(userForm.value);
      console.log(passwordLength);
      console.log(password);
      return password;
    }
  };
};
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}
// BONUS 
function copyToClipboard() {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
