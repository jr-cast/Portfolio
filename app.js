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
    'card-img': 'static/card1.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card1'],
    'det-btn-live': 'sampleProject1.com',
    'det-btn-source': 'sampleSource1.com',
    'det-description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'card-img': 'static/card2.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components twice',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card2'],
    'det-btn-live': 'sampleFifthProject2.com',
    'det-btn-source': 'sampleSource2.com',
    'det-description': 'Twice Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'card-img': 'static/card3.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components thrice',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card3'],
    'det-btn-live': 'sampleProject3.com',
    'det-btn-source': 'sampleSource3.com',
    'det-description': 'Thrice Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'card-img': 'static/card1.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Fourth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card4'],
    'det-btn-live': 'sampleProject4.com',
    'det-btn-source': 'sampleSource4.com',
    'det-description': 'Fourth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'card-img': 'static/card2.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Fifth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card5'],
    'det-btn-live': 'sampleProject5.com',
    'det-btn-source': 'sampleSource5.com',
    'det-description': 'Fifth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    'card-img': 'static/card1.jpg',
    'det-img': 'static/SnapshootPortfolio.png',
    'det-img-alt': 'main project image',
    'det-header': 'Keeping track of hundreds of components Sixth',
    'det-list-cont': ['CodeKit', 'GitHub', 'JavaScript', 'Card6'],
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

// Create cards dynamically with for loop
for (let i = 0; i < projectsStore.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card1';
  card.id = `card${i}`;
  const imgCont = document.createElement('div');
  imgCont.className = 'img';
  imgCont.id = `imgCont${i}`;
  const img = document.createElement('img');
  img.className = 'img1';
  img.src = (projectsStore[i])['card-img'];
  const cardFooter = document.createElement('div');
  cardFooter.className = 'cardFooter';
  cardFooter.id = `cardFooter${i}`;
  const footerTitle = document.createElement('div');
  footerTitle.className = 'footerTitle';
  footerTitle.id = `footerTitle${i}`;
  const title = document.createElement('h3');
  title.className = 'cardHeader';
  title.id = `title${i}`;
  const ul = document.createElement('ul');
  ul.className = 'tags';
  ul.id = `ul${i}`;
  for (let j = 0; j < projectsStore[i]['det-list-cont'].length; j += 1) {
    const detli = document.createElement('li');
    detli.innerHTML = projectsStore[i]['det-list-cont'][j];
    ul.appendChild(detli);
  }
  const cardButton = document.createElement('button');
  cardButton.className = 'cardBtn';
  cardButton.id = `cardBtn${i}`;
  cardButton.innerHTML = 'See Project';
  cardButton.onclick = function openDetails() {
    detailsAction(i);
  };

  title.innerHTML = (projectsStore[i])['det-header'];
  document.getElementById('cardCont').appendChild(card);
  document.getElementById(`card${i}`).appendChild(imgCont);
  document.getElementById(`imgCont${i}`).appendChild(img);
  document.getElementById(`imgCont${i}`).appendChild(cardFooter);
  document.getElementById(`cardFooter${i}`).appendChild(footerTitle);
  document.getElementById(`footerTitle${i}`).appendChild(title);
  document.getElementById(`cardFooter${i}`).appendChild(ul);
  document.getElementById(`cardFooter${i}`).appendChild(cardButton);
}

function validFormInputs(form) {
  // set toggle flag
  let isValid = true;
  const formIputs = form.querySelectorAll('[required]');
  // iterate over required form inputs
  for (let i = 0; i < formIputs.length; i += 1) {
    if (!formIputs[i].reportValidity()) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

function validForm() {
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('myForm')[1].value;
  if (validFormInputs(form)) {
    if (emailInput === emailInput.toLowerCase()) {
      form.submit();
    } else {
      const error = document.createElement('div');
      error.id = 'error';
      error.className = 'errorMsg';
      document.getElementById('myForm').appendChild(error);
      const errorMessage = document.createElement('p');
      errorMessage.innerHTML = 'Check your email, all characters must be lowercased';
      document.getElementById('error').appendChild(errorMessage);
    }
  }
}

document.getElementById('submitButton').addEventListener('click', validForm);

redirect();
detailsAction();