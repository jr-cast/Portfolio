// localStorage
//  item values to check and track
let userName = document.getElementById('inputName').value;
let userEmail = document.getElementById('email').value;
let userText = document.getElementById('msg').value;

let userData = {
  Name: userName,
  Email: userEmail,
  Text: userText,
}

let strData = JSON.stringify(userData);
let strObj = JSON.parse(strData);

document.getElementById('inputName').addEventListener('change', function (evt) {
  userData.userName = evt.target.value;
  strData = JSON.stringify(userData);
  strObj = JSON.parse(strData);
  localStorage.setItem('userData', strData);
});

document.getElementById('email').addEventListener('change', function (evt) {
  userEmail = evt.target.value;
  userData.userEmail = userEmail;
  strData = JSON.stringify(userData);
  strObj = JSON.parse(strData);
  localStorage.setItem('userData', strData);
});

document.getElementById('msg').addEventListener('change', function (evt) {
  userText = evt.target.value;
  userData.userText = userText;
  strData = JSON.stringify(userData);
  strObj = JSON.parse(strData);
  localStorage.setItem('userData', strData);
});


// check localStorage and populate object if empty else update values
if(!localStorage.getItem('userData')) {
  populateLocalStorage();
} else {
  setInputs();
}

// create values to store in local storage
function populateLocalStorage() {
  localStorage.setItem('userData', strData);
}

// set values to items
function setInputs() {
  userData = JSON.parse(localStorage.getItem('userData'));
  document.getElementById('myForm')[0].value = userData.userName;
  document.getElementById('myForm')[1].value = userData.userEmail;
  document.getElementById('myForm')[2].value = userData.userText;
}
