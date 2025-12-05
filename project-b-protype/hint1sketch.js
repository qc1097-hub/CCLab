let imgc1;
let imgc2;
let imgc3;
let imgc4;
let homepageSound;

function preload() {
  imgc1 = loadImage("assets/c1.png");
  imgc2 = loadImage("assets/c2.png");
  imgc3 = loadImage("assets/c3.png");
  imgc4 = loadImage("assets/c4.png");
  homepageSound = loadSound("assets/task1.ogg");
}

function setup() {
  let canvas = createCanvas(800, 1600);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);

  image(imgc1, 400, 200, 800, 400);
  image(imgc2, 400, 600, 800, 400);
  image(imgc3, 400, 1000, 800, 400);
  image(imgc4, 400, 1400, 800, 400);

  let c = get(mouseX, mouseY);

}