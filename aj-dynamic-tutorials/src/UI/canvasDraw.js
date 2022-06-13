export default function canvasDraw(canvas, ctx, scaleToFit, imageObj) {
  let mousedown = false;
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
  });

  canvas.addEventListener('mouseleave', () => {
    mousedown = false;
  });
}
