// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {

  //Define the password length, input by the user
  var passwordLength = prompt('How long would you like your password? Please enter a number between 8-128');

  //Verify the user input a proper number before continuing
  if(isNaN(parseInt(passwordLength)) === false && parseInt(passwordLength) > 7 && parseInt(passwordLength) < 129){
    console.log("parseInt is true");
  
  //Define additional password criteria input by the user
  var uLetters = confirm('Do you want to include uppercase letters?');
  var lLetters = confirm('Do you want to include lowercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var spCharacters = confirm('Do you want to include special characters?');

  //Define password character strings
  var chooseLetters = "abcdefghijklmnopqrstuvwxyzz";
  var chooseNum = "01234567899";
  var chooseSpChar = "!@#$%^&*()<>,.+=/??";
  var newPassword = "";


  while(newPassword.length < parseInt(passwordLength)){

    //If the user wants lowercase letters included
    if(lLetters && newPassword.length < parseInt(passwordLength)){
      var letterAr = chooseLetters.split('');
      var j = Math.floor(Math.random()*letterAr.length);
      var randLetter = letterAr[j];

      newPassword += randLetter;
    }

    //If the user wants uppercase letters included
    if(uLetters && newPassword.length < parseInt(passwordLength)){
      var chooseLettersUp = chooseLetters.toUpperCase();
      var letterAr = chooseLettersUp.split('');
      var k = Math.floor(Math.random()*letterAr.length);
      var randLetter = letterAr[k];

      newPassword += randLetter;
    }

    //If the user wants numbers included
    if(numbers && newPassword.length < parseInt(passwordLength)){
      var numberAr = chooseNum.split('');
      var m = Math.floor(Math.random()*numberAr.length);
      var randNum = numberAr[m];

      newPassword += randNum;
    }

    //If the user wants special characters included
    if(spCharacters && newPassword.length < parseInt(passwordLength)){
      var spCharAr = chooseSpChar.split('');
      var r = Math.floor(Math.random()*spCharAr.length);
      var randSpChar = spCharAr[r];

      newPassword += randSpChar;
    }
  }
  
    return newPassword;

}
else {
  alert('Please click the generate button again and enter a password length within the specified range.');
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
