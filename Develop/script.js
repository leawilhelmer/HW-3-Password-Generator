// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var sChars = ["!", "@", "*", "$", "+"]
var emojis = ["😃", "😊", "😂", "👍"]

var pwArea = document.querySelector("#password")
function generate() {
  var possibles = []

  var length = parseInt(prompt("How long does this password need to be?"))

if (length < 8 || length > 128 || isNaN(length)) {
  alert("Password invalid, refresh the page")
} else {
  var charsTrue = confirm("Do you want chars?")
  var numsTrue = confirm("Do you want nums?")
  var sCharsTrue = confirm("Do you want sChars?")
  var emojisTrue = confirm("Do you want emojis?")

  var possibles = []

  if (charsTrue) { possibles.push(chars) }
  if (numsTrue) { possibles.push(nums) }
  if (sCharsTrue) { possibles.push(sChars) }
  if (emojisTrue) { possibles.push(emojis) }

  var pw = ""

  while (pw.length < length) {

    for (let i = 0; i < possibles.length; i++) {
      let rand = Math.floor(Math.random() * possibles[i].length)
      pw += possibles[i][rand]
    }
  }
}
console.log(pw, `password length : ${pw.length}`)
pwArea.textContent = pw
}

document.querySelector("#generate").addEventListener("click", generate)

console.log("😂".length)
console.log("👍".length)
