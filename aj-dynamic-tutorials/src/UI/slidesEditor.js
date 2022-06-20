import audioCapture from './audioCapture';
import canvasDraw from './canvasDraw';
import imageUpload from './imageUpload';

const imageObj = new Image();
const slidesBody = document.querySelector('.slides-body');
const canvas = document.getElementById('canvas');
let ctx;
if (canvas) {
  ctx = canvas.getContext('2d');
}

function scaleToFit(img) {
  const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
  const x = canvas.width / 2 - (img.width / 2) * scale;
  const y = canvas.height / 2 - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

export default function slidesEditor(state) {
  // see if you can move to main to prevent repeated calls
  audioCapture(state);
  imageUpload(state, canvas, scaleToFit);
  canvasDraw(state, canvas, ctx, scaleToFit, imageObj);
  resizeCanvas();

  imageObj.src = '/images/sakura.jpg';
  imageObj.onload = function () {
    scaleToFit(this);
  };

  function resizeCanvas() {
    canvas.setAttribute('height', slidesBody.clientHeight);
    canvas.setAttribute('width', slidesBody.clientWidth);
    canvas.style.height = slidesBody.clientHeight;
    canvas.style.width = slidesBody.clientWidth;
  }
}

export function sendSlide() {
  const addSlide = document.getElementById('add-slide-btn');

  addSlide.addEventListener('click', async () => {
    let featureId = document.querySelector('.feature-btn.active');
    if (featureId) {
      featureId = featureId.getAttribute('id');
      const res = await fetch('/slides', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featureId }),
      });
      if (res) location.reload();
    }
  });
}

export function renderProgressFrags(slides) {
  const slidesProgress = document.querySelector('.slides-progress');
  const slidesHtml = slides
    .map(slide => {
      return `
    <div class='progress-frag' id='${slide._id}'>
      <div class='progress-bar'></div>
      <div class='progress-disc'></div>
    </div>
  `;
    })
    .join('');

  slidesProgress.innerHTML = slidesHtml;
}

export function renderSlide(state) {
  const slidesBtns = document.querySelectorAll('.progress-frag');
  const slideImg = document.getElementById('slide-img');
  const audio = document.getElementById('main-audio');
  const slideIdEl = document.getElementById('incanvas-slide-id');
  const slideName = document.getElementById('incanvas-slide-name');
  const notesEl = document.getElementById('notes-textarea');
  const notesContent = document.getElementById('notes-content');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  if (slidesBtns.length) {
    slidesBtns.forEach((slide, i) => {
      slide.addEventListener('click', function () {
        const {
          _id,
          name,
          notes,
          audioName,
          imageName,
          editedImageName,
          duration,
          isViewed,
        } = state.slides[i];

        slidesBtns.forEach((button, j) => {
          button === slidesBtns[i]
            ? button.classList.add('active')
            : button.classList.remove('active');

          state.slides[j].isViewed && button.classList.add('viewed');
        });

        if (isViewed) slidesBtns[i].classList.add('viewed');

        state.selectedSlide = _id;
        state.playCounter = 0;

        slideName.value = name;
        slideIdEl.value = _id;
        notesEl.value = notes;
        notesContent.innerText = notes;

        audio.src = audioName ? `/slide/audio/${audioName}` : '';
        audio.setAttribute('data-duration', duration);
        const imageUrl = imageName ? `/slide/image/${imageName}` : '';
        const editedImageUrl = editedImageName
          ? `/slide/image/${editedImageName}`
          : '';
        if (editedImageUrl) {
          slideImg.style.background = `url(${editedImageUrl})`;
        } else {
          slideImg.style.background = `url(${imageUrl})`;
        }

        imageObj.src = imageUrl;
        canvas.width = canvas.width;
        canvasDraw(state, canvas, ctx, scaleToFit, imageObj);
      });
    });
    slidesBtns[0].click();

    let i = 0;
    nextBtn.addEventListener('click', () => {
      if (slidesBtns.length && i < slidesBtns.length - 1) {
        i++;
        slidesBtns[i].click();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (slidesBtns.length && i > 0) {
        i--;
        slidesBtns[i].click();
      }
    });
  }
}
