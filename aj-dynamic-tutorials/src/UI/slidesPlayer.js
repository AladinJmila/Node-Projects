export default function audioPlayer(state) {
  const playBtn = document.getElementById('play-btn');
  const audio = document.querySelector('audio');
  const canvas = document.querySelector('.canvas');
  const playIcon = `<i id='play-btn' class='fa fa-play'></i>`;
  const pauseIcon = `<i id='play-btn' class='fa fa-pause'></i>`;

  function playSlide(pass = true) {
    if (pass) {
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = pauseIcon;
      } else {
        audio.pause();
        playBtn.innerHTML = playIcon;
      }
    }
  }

  console.log(state.mode);

  playBtn.addEventListener('click', playSlide);
  canvas.addEventListener('click', () => playSlide(state.mode === 'viewer'));

  audio.onended = () => (playBtn.innerHTML = playBtn);

  const timeline = document.querySelector('.timeline');

  audio.ontimeupdate = () => {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
  };

  const expandBtn = document.getElementById('expand-btn');
  const compressBtn = document.getElementById('compress-btn');
  const elem = document.documentElement;

  const contentEl = document.querySelector('.content');
  const controlsEl = document.querySelector('.slide-controls');
  const navbarEl = document.querySelector('.navbar');
  const groupsEl = document.querySelector('.groups');
  const featuresEl = document.querySelector('.features');

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

  state.mode === 'viewer'
    ? (expandBtn.style.display = 'block')
    : (expandBtn.style.display = 'none');

  // if (state.mode === 'viewer') {
  //   expandBtn.style.display = 'block';
  // }
}
