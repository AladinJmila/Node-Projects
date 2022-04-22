const mediaEl = document.getElementById('media');
const agentInformationEl = document.getElementById('agent-information');
const navLevelTwoEl = document.getElementById('nav-level-two');
const imageEl = document.getElementById('image');
const audioEl = document.getElementById('audio');
const noteEl = document.getElementById('note');

let slides;

// injectDbData();
function genTutorialMedia(id) {
  const slide = slides.filter(slide => slide._id === id)[0];
  imageEl.innerHTML = slide.imageURL;
  audioEl.innerHTML = slide.audioURL;
  noteEl.innerHTML = slide.note;
}

async function genNavLevelTwo() {
  const res = await fetch('media/');
  const data = await res.json();
  slides = data.slides;
  const navItems = data.slides
    .map(slide => {
      return `
    <div 
    title='${slide.name}'
    onclick='genTutorialMedia("${slide._id}");'
    class='col text-center border rounded text-truncate px-2 mx-2'>
    ${slide.name}
    </div>
    `;
    })
    .join('');

  navLevelTwoEl.innerHTML = navItems;
}

agentInformationEl.addEventListener('click', genNavLevelTwo);
