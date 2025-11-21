
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");


}

function draw() {
  background(220);

  fill(255);
  rect(100, 200, 200, 50);
  fill(0);
  text("Back to Homepage!", 150, 225);

  let c = get(mouseX, mouseY);

  if (mouseIsPressed && mouseX <= width && mouseX >= 0 && mouseY >= 0 && mouseY <= height && green(c) == 255) {
    window.location.href = "homepage2index.html";
  }

}
