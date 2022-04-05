const hiddenNav = document.getElementById('hiddenNav');
const closeBtn = document.getElementById('closebtn');
const icon = document.querySelector('i');
const xBtn = document.getElementById('closebtn');


let openmenu = true;


icon.addEventListener('click', function (evt) {
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
        closeBtn.style = 'display: flex;'
    }
});

xBtn.addEventListener('click', function (evt) {
    if (openmenu = true) {
        hiddenNav.style = 'display: none;';
        hiddenNav.classList.toggle('showNav');
    }
});

function redirect() {
    if (openmenu = true) {
        let anchors = document.getElementsByClassName('redirect');
        hiddenNav.style = 'display: none;';
        hiddenNav.classList.toggle('showNav');
    }
};