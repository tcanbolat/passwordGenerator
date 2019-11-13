function generatePassword() {
    var numChars = (function ask() {
      var n = prompt('How many number of characters do you want? 8 - 128');
      return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
      }());
    var symbWanted = confirm("Do you want special chars?");
    var lowerWanted = confirm("Do you want lowercase chars?");
    var upperWanted = confirm("Do you want uppercase chars?");
    var numWanted = confirm("Do you want numbers?");

    var numsArr = [1,2,3,4,5,6,7,8,9,0];
    var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"];
    var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var symbolArr = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+"];




    var finalPassword = "";
    var passwordDisplay = document.getElementById("password");
    passwordDisplay.innerHTML = finalPassword;
    

    for (var i=0; i<numChars; i++) {
    var randomLowerIndex = Math.floor( Math.random() * lowerArr.length );
    var randomLower = lowerArr[randomLowerIndex];

    var randomUpperIndex = Math.floor( Math.random() * upperArr.length );
    var randomUpper = upperArr[randomUpperIndex];

    var randomNumsIndex = Math.floor( Math.random() * numsArr.length );
    var randomNums = numsArr[randomNumsIndex];

    var randomSymIndex = Math.floor( Math.random() * symbolArr.length );
    var randomSym = symbolArr[randomSymIndex]; 
   



      if (symbWanted === true && lowerWanted === true && upperWanted === true && numWanted === true)  {
        finalPassword = finalPassword + randomNums + randomSym + randomUpper + randomLower;
      }
      else if(symbWanted === true && lowerWanted === true && upperWanted === true && numWanted === false) {
        finalPassword = finalPassword + randomSym + randomUpper + randomLower;
      }
      else if(symbWanted === true && lowerWanted === true && upperWanted === false && numWanted === false) {
        finalPassword = finalPassword + randomSym + randomLower;
      }
      else if(symbWanted === true && lowerWanted === false && upperWanted === false && numWanted === false) {
        finalPassword = finalPassword + randomSym;
      }
      else if(symbWanted === true && lowerWanted === false && upperWanted === true && numWanted === false) {
      finalPassword = finalPassword + randomSym + randomUpper;
      }
      else if(symbWanted === true && lowerWanted === false && upperWanted === true && numWanted === true) {
        finalPassword = finalPassword + randomSym + randomUpper + randomNums;
      }
      else if(symbWanted === true && lowerWanted === false && upperWanted === false && numWanted === true) {
        finalPassword = finalPassword + randomSym + randomNums;
      }
      else if(symbWanted === true && lowerWanted === true && upperWanted === false && numWanted === true) {
        finalPassword = finalPassword + randomSym + randomLower + randomNums;
      }
      else if(symbWanted === false && lowerWanted === false && upperWanted === false && numWanted === true) {
        finalPassword = finalPassword + randomNums;
      }
      else if(symbWanted === false && lowerWanted === false && upperWanted === true && numWanted === true) {
        finalPassword = finalPassword + randomUpper + randomNums;
      }
      else if(symbWanted === false && lowerWanted === false && upperWanted === true && numWanted === false) {
        finalPassword = finalPassword + upperWanted;
      }
      else if(symbWanted === false && lowerWanted === true && upperWanted === true && numWanted === true) {
        finalPassword = finalPassword + randomLower + randomUpper + randomNums;
      }
      else if(symbWanted === false && lowerWanted === false && upperWanted === true && numWanted === false) {
        finalPassword = finalPassword + randomUpper;
      }
      else if(symbWanted === false && lowerWanted === true && upperWanted === true && numWanted === false) {
        finalPassword = finalPassword + randomLower + randomUpper;
      }
      else if(symbWanted === false && lowerWanted === true && upperWanted === false && numWanted === false) {
        finalPassword = finalPassword + randomLower;
      }
      else if(symbWanted === false && lowerWanted === true && upperWanted === false && numWanted === true) {
        finalPassword = finalPassword + randomLower + randomNums;
      }
    }

    passwordDisplay.innerHTML = finalPassword;
      
       

    console.log(randomLowerIndex + " = random lower index");
    console.log(randomLower + " = random lower");

    console.log(randomNumsIndex + " = random number index");
    console.log(randomNums + " = random number");


    console.log(numChars + " = password length");
    console.log(symbWanted + " = special chars");
    console.log(lowerWanted + " = lower chars");
    console.log(upperWanted + " = upper chars");
    console.log(numWanted + " = num chars");
    console.log(finalPassword);
}

function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}