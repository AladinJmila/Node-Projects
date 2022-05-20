export default function slidesSketcher(state) {
  const slidesBody = document.querySelector('.slides-body');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let mousedown = false;
  const imageObj = new Image();

  function resizeCanvas() {
    canvas.setAttribute('height', slidesBody.clientHeight);
    canvas.setAttribute('width', slidesBody.clientWidth);
    canvas.style.height = slidesBody.clientHeight;
    canvas.style.width = slidesBody.clientWidth;
  }

  resizeCanvas();

  function scaleToFit(img) {
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  imageObj.src = '/images/sakura.jpg';

  imageObj.onload = function () {
    scaleToFit(this);
  };

  const clicks = [];

  function drawRectangle() {
    ctx.beginPath();
    ctx.rect(
      clicks[0].x,
      clicks[0].y,
      clicks[1].x - clicks[0].x,
      clicks[1].y - clicks[0].y
    );
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  function redraw() {
    canvas.width = canvas.width;
    scaleToFit(imageObj);

    drawRectangle();
  }

  canvas.addEventListener('mousedown', e => {
    clicks[0] = {
      x: e.offsetX,
      y: e.offsetY,
    };
    mousedown = true;
  });

  canvas.addEventListener('mousemove', e => {
    if (mousedown) {
      clicks[1] = {
        x: e.offsetX,
        y: e.offsetY,
      };
      redraw();
    }
  });

  canvas.addEventListener('mouseup', e => {
    mousedown = false;
    clicks[1] = {
      x: e.offsetX,
      y: e.offsetY,
    };
    // console.log(canvas.toDataURL('image/jpeg', 1.0));
  });

  canvas.addEventListener('mouseleave', () => {
    mousedown = false;
  });
}
