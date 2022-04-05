let hiddenNav = document.getElementById('hiddenNav');
let closeBtn = document.getElementById('closebtn');
let icon = document.querySelector('i');
let xBtn = document.getElementById('closebtn');

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

