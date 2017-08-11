const passwordLength =  getQueryValue("length") === false ? 12 : getQueryValue("length");
const toggleElement = document.querySelector(".password-center");
const clipboard = new Clipboard('.copy');

function getQueryValue(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("?");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){
      return decodeURIComponent(pair[1]);
    }
  }
  return(false);
}

function generatePassword(passwordLength) {
  var charList = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7","8","9","!","@","#","$","%","&","*","+","=","-","_","~","/","\\","?"];
  var password = "";
  var target = document.querySelector(".password");
  for (i = 0; i < passwordLength; i++) {
    var randomCharacter = charList[Math.floor(Math.random() * charList.length)];
    password += randomCharacter;
  }
  target.innerHTML = password;
}

function toggleClass(cl) {
  document.querySelector(".password-container").classList.toggle(cl);
  document.querySelector(".alert").classList.toggle(cl);
}

clipboard.on('success', function(e) {
  toggleClass("hidden");
  setTimeout(toggleClass, 1500, "hidden");
  e.clearSelection();
});

document.querySelector(".generate").addEventListener('click', function() {
  generatePassword(passwordLength);
});

window.addEventListener("keyup", function(e) {
  if (e.keyCode == 32) {
    generatePassword(passwordLength);
  } else if (e.keyCode == 13) {
    document.querySelector(".copy").click();
  }
});


document.addEventListener('DOMContentLoaded', generatePassword(passwordLength));