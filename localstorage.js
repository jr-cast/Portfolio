// localStorage
//  item values to check and track
let userData = {
  userName: '',
  userEmail: '',
  userText: '',
};

let strData = JSON.stringify(userData);

document.getElementById('inputName').addEventListener('change', (evt) => {
  userData.userName = evt.target.value;
  strData = JSON.stringify(userData);
  localStorage.setItem('userData', strData);
});

document.getElementById('email').addEventListener('change', (evt) => {
  userData.userEmail = evt.target.value;
  strData = JSON.stringify(userData);
  localStorage.setItem('userData', strData);
});

document.getElementById('msg').addEventListener('change', (evt) => {
  userData.userText = evt.target.value;
  strData = JSON.stringify(userData);
  localStorage.setItem('userData', strData);
});

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

// check localStorage and populate object if empty else update values
if (!localStorage.getItem('userData')) {
  populateLocalStorage();
} else {
  setInputs();
}
