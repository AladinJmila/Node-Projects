import getBlobDuration from 'get-blob-duration';

function captureAudio() {
  let recording;
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (mediaStreamObj) {
      const start = document.getElementById('btn-start');
      const stop = document.getElementById('btn-stop');
      const audio = document.getElementById('audio');
      const audioContainer = document.getElementById('audio-container');
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

        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
        recording = audioURL;
      };
    })
    .catch(err => {
      console.log(err);
    });

  const submitBtn = document.getElementById('submit');
  const imageInput = document.getElementById('image-file');

  submitBtn.addEventListener('click', async e => {
    e.preventDefault();

    const slideId = document.getElementById('slide-id').value;
    const formData = new FormData();

    let audioFile;
    if (recording) {
      const res = await fetch(recording);
      audioFile = await res.blob();
      formData.append('audio', audioFile);
    }

    // console.log(audioFile);
    // console.log(imageFile);

    if (audioFile && audio.src === recording) {
      await fetch(`/media/upload-audio/${slideId}`, {
        method: 'POST',
        body: formData,
      });
    }

    const imageFile = imageInput.files[0];

    formData.delete('audio');
    formData.append('image', imageFile);

    if (imageFile) {
      await fetch(`/media/upload-image/${slideId}`, {
        method: 'POST',
        body: formData,
      });
    }

    const slideName = document.getElementById('slideName').value;
    const notes = document.getElementById('notes').value;
    const isSolo = document.getElementById('isSolo').checked;
    const hasNext = document.getElementById('hasNext').checked;
    let duration;
    if (audioFile) {
      duration = await getBlobDuration(audioFile);
      duration = Math.floor(duration);
    }

    console.log({
      slideName,
      notes,
      isSolo,
      hasNext,
    });

    const response = await fetch(`/media/update-slide/${slideId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slideName,
        notes,
        isSolo,
        hasNext,
        duration: duration ? duration : 0,
      }),
    });

    if (response) {
      console.log(response.url);
      window.location = response.url;
    }
  });
}

export default captureAudio;
