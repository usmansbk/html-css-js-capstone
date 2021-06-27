const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const speakers = document.querySelector('.speakers-list');

const SPEAKERS = [
  {
    image: './images/speakers/yochai.jpg',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminial book The Wealth of Networkds in 2006.',
  },
  {
    image: './images/speakers/soh.jpg',
    name: 'SohYeong Noh',
    title: 'Director of Art Center Nabi and a board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among scient technology, humanities, and the arts.',
  },
];

function onLoad() {
  SPEAKERS.forEach(({
    image,
    name,
    title,
    bio,
  }) => {
    const li = document.createElement('li');
    li.classList.add('speaker-item');
    const itemBody = `
     <img
        class="profile-image"
        src="${image}"
        alt="${name}"
     />
     <div>
       <h6 class="header-4">${name}</h6>
       <small class="caption-1 fs-italics fw-bold color-primary">${title}</small>
       <div
         class="divider small-divider bg-tertiary bd-tertiary my-12"
       ></div>
       <p class="caption-1">${bio}</p>
     </div>
    `;
    li.innerHTML = itemBody;
    speakers.appendChild(li);
  });
}

function handleToggleMenu() {
  menu.classList.toggle('open-menu');
  container.classList.toggle('menu-overlay');
  document.body.classList.toggle('turn-off-scroll');
}

menuNav.addEventListener('click', handleToggleMenu);
openMenuButton.addEventListener('click', handleToggleMenu);
closeMenuButton.addEventListener('click', handleToggleMenu);
window.addEventListener('load', onLoad);
