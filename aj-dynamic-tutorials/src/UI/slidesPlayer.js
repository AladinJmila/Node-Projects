export default function slidesPlayer(state) {
  const playBtn = document.getElementById('play-btn');
  const audio = document.querySelector('audio');
  const slideImg = document.getElementById('slide-img');
  const playIcon = `<i id='play-btn' class='fa fa-play'></i>`;
  const pauseIcon = `<i id='play-btn' class='fa fa-pause'></i>`;
  let playTime;

  function playSlide() {
    const { duration } = audio.dataset;
    const minimunToPlay = parseInt(duration * 0.9);
    let progress;

    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = pauseIcon;
      const progressFrag = document.getElementById(state.selectedSlide);
      const fragProgressBar = progressFrag.querySelector('.progress-bar');

      playTime = setInterval(async () => {
        state.playCounter++;
        console.log(minimunToPlay);
        console.log(state.playCounter);

        progress = parseInt((state.playCounter / duration) * 100);

        fragProgressBar.style.backgroundImage = `
        linear-gradient(
          to right,
          #f9d17c 0%,
          #f9d17c ${progress}%,
          #39404b ${progress}%,
          #39404b 100%
          )
          `;

        if (state.playCounter > minimunToPlay) {
          await fetch(`/slides/viewed/${state.selectedSlide}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isViewed: true }),
          });
        }
        if (state.playCounter > duration) {
          progressFrag.classList.add('viewed');
          clearInterval(playTime);
        }
      }, 1000);
    } else {
      audio.pause();
      playBtn.innerHTML = playIcon;
      clearInterval(playTime);
    }
  }

  if (!state.loaded) {
    playBtn.addEventListener('click', playSlide);
    slideImg.addEventListener('click', playSlide);
  }

  audio.onended = () => (playBtn.innerHTML = playIcon);

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
  const addNoteBtn = document.getElementById('add-note-btn');
  const closeNoteBtn = document.getElementById('close-note-btn');
  const notesBody = document.querySelector('.notes-body');

  function toggleNotes() {
    notesBody.classList.toggle('show');
  }

  if (!state.loaded) {
    showNotesBtn.addEventListener('click', toggleNotes);
    addNoteBtn.addEventListener('click', toggleNotes);
    closeNoteBtn.addEventListener('click', toggleNotes);
  }
}
