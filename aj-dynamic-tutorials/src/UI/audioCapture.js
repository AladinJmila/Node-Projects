export default function audioCapture(state) {
  const start = document.getElementById('record-btn');
  const play = document.getElementById('play-btn');
  const stop = document.getElementById('stop-btn');
  const audio = document.getElementById('main-audio');
  let recording;

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (mediaStreamObj) {
      const mediaRecorder = new MediaRecorder(mediaStreamObj);
      let chunks = [];

      start.addEventListener('click', e => {
        e.preventDefault();
        mediaRecorder.start();
        console.log(mediaRecorder.state);
      });
      stop.addEventListener('click', e => {
        e.preventDefault();
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
      });

      mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = e => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        state.audioBlob = blob;
        console.log(blob);

        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
        recording = audioURL;
      };
    })
    .catch(err => {
      console.log(err);
    });

  start.addEventListener('click', function () {
    stop.classList.add('show-block');
    play.classList.add('hide');
    this.classList.remove('stop-rec');
    this.classList.add('rec');
  });

  stop.addEventListener('click', function () {
    start.classList.add('stop-rec');
    start.classList.remove('rec');
    play.classList.remove('hide');
    this.classList.remove('show-block');
  });
}
