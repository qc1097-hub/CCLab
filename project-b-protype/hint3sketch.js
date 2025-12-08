let homepageSound;

function preload() {
  homepageSound = loadSound("assets/task3.ogg");
}

function setup() {
  let canvas = createCanvas(1, 1);
  canvas.parent("p5-canvas-container");
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);
  let c = get(mouseX, mouseY);

}