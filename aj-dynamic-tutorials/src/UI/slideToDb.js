import getBlobDuration from 'get-blob-duration';

export default function slideToDb(state) {
  const submit = document.getElementById('slide-submit-btn');

  submit.addEventListener('click', async e => {
    e.preventDefault();

    const slideName = document.getElementById('incanvas-slide-name').value;
    const slideId = document.getElementById('incanvas-slide-id').value;
    const notes = document.getElementById('notes-textarea').value;
    const formData = new FormData();
    let audioDuration;

    if (state.audioBlob) {
      formData.append('audio', state.audioBlob);
      await fetch(`/media/upload-audio/${slideId}`, {
        method: 'POST',
        body: formData,
      });

      audioDuration = await getBlobDuration(audioFile);
      audioDuration = Math.floor(duration);
    }

    if (state.imageFile) {
      formData.delete('audio');
      formData.append('image', state.imageFile);
      await fetch(`/media/upload-image/${slideId}`, {
        method: 'POST',
        body: formData,
      });
    }

    const response = await fetch(`/media/update-slide/${slideId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slideName,
        notes,
        duration: duration ? duration : 0,
      }),
    });

    if (response) {
      console.log(response.url);
      window.location = response.url;
    }
  });
}
