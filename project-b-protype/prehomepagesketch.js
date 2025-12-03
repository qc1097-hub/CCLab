let img1;
let imgbg;
let homepageSound;

function preload() {
  img1 = loadImage("assets/donut.png");
  imgbg = loadImage("assets/bg1.jpg");
  homepageSound = loadSound("assets/homepage.ogg");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);

  image(imgbg, width / 2, height / 2, 800, 900);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  image(img1, 0, 0, 400, 400);
  pop();

  let c = get(mouseX, mouseY);

}

