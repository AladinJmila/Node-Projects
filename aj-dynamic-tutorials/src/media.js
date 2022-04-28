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
  imageEl.innerHTML = `<img src='/image/${slide.imageURL}' alt='illustration' />`;
  audioEl.innerHTML = `<audio src='/audio/${slide.audioURL}' controls />`;
  noteEl.innerHTML = `<h4>${slide.note}</h4>`;
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
