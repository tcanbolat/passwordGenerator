const specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
const numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
const lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getPasswordOptions() {

  const length = parseInt(prompt(
    "How many characters would you like your password to contain?"
  ));

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  const hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  const hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  const hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  const hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  const passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  const randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  const options = getPasswordOptions();
  const result = [];

  let possibleCharacters = [];

  const guaranteedCharacters = [];


  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }


  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }


  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (let i = 0; i < options.length; i++) {
    const possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
}

const copyBtn = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate");

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  const passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password was copied to your clipboard."
  );
}

generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);
