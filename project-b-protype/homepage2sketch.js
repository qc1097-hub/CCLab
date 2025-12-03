let img1;
let homepageSound;

function preload() {
  img1 = loadImage("assets/donut2.png");
  homepageSound = loadSound("assets/homepage.ogg");
}

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  image(img1, 0, 0, 400, 400);
  pop();

  let c = get(mouseX, mouseY);

  if (mouseIsPressed && green(c) > 220 && green(c) < 230) {
    window.location.href = "task2index.html";
  }

}