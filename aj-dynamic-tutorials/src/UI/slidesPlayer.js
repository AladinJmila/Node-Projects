export default function audioPlayer(state) {
  const playBtn = document.getElementById('play-btn');
  const audio = document.querySelector('audio');
  const canvas = document.getElementById('canvas');
  const slideImg = document.getElementById('slide-img');
  const incanvasSlideId = document.getElementById('incanvas-slide-id');
  const slideSubmitBtn = document.getElementById('slide-submit-btn');
  const addSlideEl = document.querySelector('.add-slide');
  const addGroupFeature = document.querySelectorAll('.add-group-feature');
  const playIcon = `<i id='play-btn' class='fa fa-play'></i>`;
  const pauseIcon = `<i id='play-btn' class='fa fa-pause'></i>`;

  function playSlide() {
    console.log('play');
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = pauseIcon;
    } else {
      audio.pause();
      playBtn.innerHTML = playIcon;
    }
  }

  if (!state.loaded) {
    playBtn.addEventListener('click', playSlide);
    slideImg.addEventListener('click', playSlide);
  }

  audio.onended = () => (playBtn.innerHTML = playBtn);

  const timeline = document.querySelector('.timeline');

  audio.ontimeupdate = () => {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
  };

  // full screen
  const expandBtn = document.getElementById('expand-btn');
  const compressBtn = document.getElementById('compress-btn');
  const elem = document.documentElement;

  const contentEl = document.querySelector('.content');
  const controlsEl = document.querySelector('.slide-controls');
  const navbarEl = document.querySelector('.navbar');
  const groupsEl = document.querySelector('.groups');
  const featuresEl = document.querySelector('.features');

  !state.loaded &&
    expandBtn.addEventListener('click', () => {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }

      expandBtn.style.display = 'none';
      compressBtn.style.display = 'block';

      contentEl.style.display = 'block';
      navbarEl.style.display = 'none';
      groupsEl.style.display = 'none';
      featuresEl.style.display = 'none';
      controlsEl.style.transform = 'translateY(0)';
    });

  !state.loaded &&
    compressBtn.addEventListener('click', () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }

      compressBtn.style.display = 'none';
      expandBtn.style.display = 'block';

      contentEl.style.display = 'grid';
      navbarEl.style.display = 'flex';
      groupsEl.style.display = 'block';
      featuresEl.style.display = 'block';
      controlsEl.style.transform = 'translateY(-56px)';
    });

  // notes
  const showNotesBtn = document.getElementById('slide-show-notes-btn');
  const addNotesBtn = document.getElementById('slide-add-notes-btn');
  const notesBody = document.querySelector('.notes-body');
  const notesContent = document.getElementById('notes-content');
  const notesTextarea = document.getElementById('notes-textarea');
  const notesSubmitBtn = document.getElementById('submit-notes-btn');

  function toggleNotes() {
    notesBody.classList.toggle('show');
  }

  if (!state.loaded) {
    showNotesBtn.addEventListener('click', toggleNotes);
    addNotesBtn.addEventListener('click', toggleNotes);
  }

  // toggle mode
  if (state.mode === 'viewer') {
    expandBtn.style.display = 'block';
    slideImg.style.display = 'block';
    showNotesBtn.style.display = 'block';
    notesContent.style.display = 'block';
    controlsEl.classList.remove('show');
    canvas.style.display = 'none';
    incanvasSlideId.style.display = 'none';
    addSlideEl.style.display = 'none';
    addNotesBtn.style.display = 'none';
    slideSubmitBtn.style.display = 'none';
    notesTextarea.style.display = 'none';
    notesSubmitBtn.style.display = 'none';
    addGroupFeature.forEach(el => {
      el.style.display = 'none';
    });
  } else {
    expandBtn.style.display = 'none';
    slideImg.style.display = 'none';
    showNotesBtn.style.display = 'none';
    notesContent.style.display = 'none';
    controlsEl.classList.add('show');
    canvas.style.display = 'block';
    incanvasSlideId.style.display = 'block';
    addSlideEl.style.display = 'flex';
    addNotesBtn.style.display = 'block';
    slideSubmitBtn.style.display = 'block';
    notesTextarea.style.display = 'block';
    notesSubmitBtn.style.display = 'block';
    addGroupFeature.forEach(el => {
      el.style.display = 'flex';
    });
  }
}
