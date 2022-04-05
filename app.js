const hiddenNav = document.getElementById('hiddenNav');
const closeBtn = document.getElementById('closebtn');
const icon = document.querySelector('i');
const xBtn = document.getElementById('closebtn');

let openmenu = true;

icon.addEventListener('click', () => {
  if (!openmenu) {
    openmenu = true;
    hiddenNav.style = 'display: none;';
    hiddenNav.classList.toggle('showNav');
  } else {
    openmenu = false;
    hiddenNav.style = 'display: flex;';
    hiddenNav.classList.toggle('showNav');
    xBtn.classList.remove('xBtn');
    xBtn.classList.add('xBtnStyle');
    closeBtn.style = 'display: flex;';
  }
});

xBtn.addEventListener('click', () => {
  if (openmenu === false) {
    openmenu = true;
    hiddenNav.style = 'display: none;';
    hiddenNav.classList.toggle('showNav');
  }
});

function redirect() {
  if (openmenu === false) {
    openmenu = true;
    hiddenNav.style = 'display: none;';
    hiddenNav.classList.toggle('showNav');
  }
}

function detailsAction() {
  const mainDetails = document.getElementById('mainDetails');
  mainDetails.classList.toggle('details-card-none');
}

redirect();