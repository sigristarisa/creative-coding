const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const getRandomColor = () => {
  const colorArr = ["", "#EC1201", "#F2DF92", "#092AA9", "#038A05", "#EF92A8"];
  const i = Math.ceil(Math.random() * 5);
  return colorArr[i];
};

const createPosition = (maxPx) => Math.floor(random.value() * maxPx);
const createLength = (maxPx) => {
  let px = Math.floor(random.value() * maxPx);
  return px < 80 ? (px = 80) : px;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#F2DF92";
    context.fillRect(0, 0, width, height);
    let x, y;

    for (let i = 0; i < 150; i++) {
      const w = createLength(200);
      const h = createLength(200);
      x = createPosition(1080);
      y = createPosition(1080);

      context.beginPath();
      context.fillStyle = getRandomColor();
      context.fillRect(x, y, w, h);
    }
  };
};

canvasSketch(sketch, settings);
