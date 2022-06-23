import getBlobDuration from 'get-blob-duration';

export default function slideToDb(state) {
  const submit = document.getElementById('slide-submit-btn');

  submit.addEventListener('click', async e => {
    e.preventDefault();

    const audio = document.getElementById('main-audio');
    const slideName = document.getElementById('incanvas-slide-name').value;
    const slideId = document.getElementById('incanvas-slide-id').value;
    const notes = document.getElementById('notes-textarea').value;
    const formData = new FormData();
    let audioDuration;

    if (slideId) {
      if (state.audioBlob) {
        formData.append('audio', state.audioBlob);
        await fetch(`/slide/upload-audio/${slideId}`, {
          method: 'POST',
          body: formData,
        });
        audioDuration = await getBlobDuration(state.audioBlob);
        audioDuration = Math.floor(audioDuration);
      } else {
        audioDuration = audio.dataset.duration;
      }

      if (state.imageFile) {
        formData.delete('audio');
        formData.append('image', state.imageFile);
        await fetch(`/slide/upload-image/${slideId}`, {
          method: 'POST',
          body: formData,
        });
      }

      if (state.editedImage) {
        formData.delete('audio');
        formData.append('image', state.editedImage);
        await fetch(`/slide/edited-image/${slideId}`, {
          method: 'POST',
          body: formData,
        });
      }
      const res = await fetch(`/slides/${slideId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slideName,
          notes,
          duration: audioDuration ? audioDuration : 0,
        }),
      });

      // console.log({
      //   slideName,
      //   notes,
      //   duration: audioDuration ? audioDuration : 0,
      // });

      if (res) {
        document.getElementById(state.selectedFeature).click();
      }
      // if (res) location.reload();
    }
  });
}
