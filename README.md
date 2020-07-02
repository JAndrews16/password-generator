# 03 JavaScript: Password Generator

Deployed Link: https://jandrews16.github.io/password-generator/

As an employee with access to sensitive data, I designed this application to randonly generate secure passwords that meet certain criteria as defined by the user.

This application generates a random password based on user-selected criteria. The password length is determined by the user but must be within 8-128 characters. The user also has the choice to include: uppercase letters, lowercase letter, numbers, and special characters. 

Code Description: 
When the generate button is clicked, the writePassword function is called. This calls the generatePassword function and sets the returned value equal to the text between the textarea tags (with the id = password).

Once the generatePassword function is called, the user is then met with a series of questions. The first promt, asking the user to input the length of password they want. Then, there is an if statement to verify the user input; if the input number is outside the specified range or isn't even a number at all, then a message pops up asking the user to input a proper number and try again. 

If the user inputs a number within the proper range, then the user is met with a series of confirm messages asking their preferred criteria (lowercase letters, uppercase letters, numbers, special characters). With each set predefined in separate strings (letters, numbers, special characters) and depending on the user selection, different if statements will be run. If the confirm message returns true, then the predefined string will be split into an array. A random index is then selected and added to a newPassword variable. These statements are all encompassed in a while loop that will exit once the desired password length is reached. 

At the end of the generatePassword function, the newPassword variable is returned to the writePassword funtion and thus displayed on the page for the user to see. 