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
        // recording = blob;
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
    const imageFile = imageInput.files[0];
    const res = await fetch(recording);
    const audioFile = await res.blob();
    const formData = new FormData();
    formData.append('audio', audioFile);
    // formData.append('files', [audioFile,imageFile]);
    // formData.append('test', { boo: 2 });
    console.log(audioFile);
    console.log(imageFile);
    // fetch('/media/upload-media', { method: 'POST', body: audioFile });
    // fetch('https:/media/upload-media', { method: 'POST', body: formData });
    await fetch('/media/upload-audio', {
      method: 'POST',
      body: formData,
    });

    formData.delete('audio');
    formData.append('image', imageFile);

    await fetch('/media/upload-image', {
      method: 'POST',
      body: formData,
    });
  });
}

export default captureAudio;
