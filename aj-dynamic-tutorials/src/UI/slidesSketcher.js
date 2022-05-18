export default function slidesSketcher() {
  let isDrawing = false;
  let x = 0;
  let y = 0;

  const canvasContainer = document.querySelector('.canvas-container');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.setAttribute('height', canvasContainer.clientHeight);
    canvas.setAttribute('width', canvasContainer.clientWidth);
    canvas.style.height = canvasContainer.clientHeight;
    canvas.style.width = canvasContainer.clientWidth;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

  canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
}
