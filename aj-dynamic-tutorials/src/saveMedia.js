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

  // async function postData(url = '', data = {}) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   })

  //   return response
  // }

  submitBtn.addEventListener('click', async e => {
    e.preventDefault();
    // console.log(imageInput.files[0]);
    const res = await fetch(recording);
    // const data = await res.json();
    console.log(await res.json());
    // await fetch('/media/upload-media', {
    //   method: 'post',
    //   headers: { 'Content-type': 'multipart/form-data' },
    //   body: recording,
    // });
  });
}

export default captureAudio;
