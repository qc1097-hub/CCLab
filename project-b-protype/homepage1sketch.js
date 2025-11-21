
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");


}

function draw() {
  background(192, 235, 255);
  fill(217, 224, 252);
  circle(370, 210, 70);

  fill(220);
  circle(450, 210, 70);

  fill(220);
  circle(370, 280, 70);

  fill(220);
  circle(450, 280, 70);

  let c = get(mouseX, mouseY);

  if (mouseIsPressed && mouseX <= width && mouseX >= 0 && mouseY >= 0 && mouseY <= height && green(c) == 224) {
    window.location.href = "task1index.html";
  }

}