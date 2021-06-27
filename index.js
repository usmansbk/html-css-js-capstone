const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const speakers = document.querySelector('.speakers-list');

const avatar = 'https://i.pravatar.cc/300';
const SPEAKERS = [
  {
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminial book The Wealth of Networkds in 2006.',
  },
  {
    name: 'Kilnam Chon',
    bio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet Society (ISOC) Internet Hall of Fame',
  },
  {
    name: 'SohYeong Noh',
    title: 'Director of Art Center Nabi and a board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among scient technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    bio: "Europen ingetration, political democray and participation of youth through online as her major condem, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 language and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of Create Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

function onLoad() {
  SPEAKERS.forEach(({
    name,
    title,
    bio,
  }, index) => {
    const li = document.createElement('li');
    li.classList.add('speaker-item');
    const itemBody = `
     <img
        class="profile-image"
        src="${avatar}?img=${index}"
        alt="${name}"
     />
     <div>
       <h6 class="header-4">${name}</h6>
       ${title ? `<small class="caption-1 fs-italics fw-bold color-primary">${title}</small>` : ''}
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
