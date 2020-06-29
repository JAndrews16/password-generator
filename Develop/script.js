// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
  var uLetters = confirm('Do you want to include uppercase letters?');
  var lLetters = confirm('Do you want to include lowercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var spCharacters = confirm('Do you want to include special characters?');

  var chooseLetters = "abcdefghijklmnopqrstuvwxyz";
  var chooseNum = "0123456789";
  var chooseSpChar = "!@#$%^&*()<>,.+=/?";
  var newPassword = "";

  for(var i = 0; i < 8; i++){
    if(lLetters){
      var letterAr = chooseLetters.split('');
      //console.log(letterAr);
      var j = Math.floor(Math.random()*letterAr.length + 1);
      //console.log('j =' + j);

      var randLetter = letterAr[j];
      //console.log('randLetter =' + randLetter);

      newPassword += randLetter;
      console.log(newPassword);
    }
    if(uLetters){
      var chooseLettersUp = chooseLetters.toUpperCase();
      var letterAr = chooseLettersUp.split('');
      var k = Math.floor(Math.random()*letterAr.length + 1);
      //console.log('j =' + j);

      var randLetter = letterAr[k];
      //console.log('randLetter =' + randLetter);

      newPassword += randLetter;
      console.log(newPassword);

    }
    if(numbers){
      var numberAr = chooseNum.split('');
      var m = Math.floor(Math.random()*letterAr.length + 1);
      //console.log('j =' + j);

      var randLetter = letterAr[m];
      //console.log('randLetter =' + randLetter);

      newPassword += randLetter;
      console.log(newPassword);

    }
    if(spCharacters){
      var spCharAr = chooseSpChar.split('');
      var r = Math.floor(Math.random()*letterAr.length + 1);
      //console.log('j =' + j);

      var randLetter = letterAr[r];
      //console.log('randLetter =' + randLetter);

      newPassword += randLetter;
      console.log(newPassword);

    }
  }
}

  //split into 3 strings, for letters just use the upper and lowercase functions to answer the prompts
  //right now it is just returnig the index rather than the actual string. that is why it is all 0 because of the floor is always 0
  //1. While length of password is < 8, keep looping through
  //2. Within the loop add if each prompt is true
  //3. Ask if each prompt is true and if so, add 2 characters/indexes from that array or split string
  //4. After exiting loop, randomize the order of the characters in the string or array
  // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
  //5. Print to screen.
//   var characters = "abcdefghijklmnopqrstuvwxyz0123456789.,<>/?;!@#$%^&*()_-+=";
//   var pw = "";

//   for (var i=0; i < 8; i++) {
//     var chooseRand = characters[i].split('', 1);
//     var rand = Math.floor(Math.random()* chooseRand.length);
    
//     pw += rand;
//     console.log(pw);
//   }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
