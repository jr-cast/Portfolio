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

const projectsStore = [
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', 'x1'],
    'det-btn-live': 'sampleProject1.com',
    'det-btn-source': 'sampleSource1.com',
    'det-description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components twice',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', '2nd Card'],
    'det-btn-live': 'sampleFifthProject2.com',
    'det-btn-source': 'sampleSource2.com',
    'det-description': 'Twice Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components thrice',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', '3rd Card'],
    'det-btn-live': 'sampleProject3.com',
    'det-btn-source': 'sampleSource3.com',
    'det-description': 'Thrice Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Fourth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', '4th Card'],
    'det-btn-live': 'sampleProject4.com',
    'det-btn-source': 'sampleSource4.com',
    'det-description': 'Fourth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Fifth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', '5th Card'],
    'det-btn-live': 'sampleProject5.com',
    'det-btn-source': 'sampleSource5.com',
    'det-description': 'Fifth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Sixth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Docker', '6th Card'],
    'det-btn-live': 'sampleProject6.com',
    'det-btn-source': 'sampleSource6.com',
    'det-description': 'Sixth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

function detailsAction(id) {
  const mainDetails = document.getElementById('mainDetails');
  mainDetails.classList.toggle('details-card-none');
  if (id !== null && id !== undefined) {
    const detImg = document.getElementById('det-img');
    detImg.src = projectsStore[id]['det-img'];
    detImg.alt = projectsStore[id]['det-img-alt'];
    document.getElementById('detailsHeader').innerHTML = projectsStore[id]['det-header'];
    const detUl = document.getElementById('det-list-cont');
    detUl.innerHTML = '';
    for (let i = 0; i < projectsStore[id]['det-list-cont'].length; i += 1) {
      const detLi = document.createElement('li');
      detLi.innerHTML = projectsStore[id]['det-list-cont'][i];
      detUl.appendChild(detLi);
    }
    document.getElementById('det-description').innerHTML = projectsStore[id]['det-description'];
    const live = document.getElementById('det-btn-live');
    live.href = projectsStore[id]['det-btn-live'];
    const source = document.getElementById('det-btn-source');
    source.href = projectsStore[id]['det-btn-source'];
  }
}

redirect();
detailsAction();