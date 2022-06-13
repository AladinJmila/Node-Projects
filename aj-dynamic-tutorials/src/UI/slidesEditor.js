import audioCapture from './audioCapture';
import canvasDraw from './canvasDraw';
import imageUpload from './imageUpload';

export default function slidesEditor(state) {
  const slidesBody = document.querySelector('.slides-body');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const imageObj = new Image();

  audioCapture(state);
  imageUpload(state, canvas, scaleToFit);
  canvasDraw(canvas, ctx, scaleToFit, imageObj);
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

  function scaleToFit(img) {
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }
}
