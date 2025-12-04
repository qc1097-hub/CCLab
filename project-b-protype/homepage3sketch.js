let img1;
let imgbg;
let homepageSound;

function preload() {
  img1 = loadImage("assets/donut3.png");
  imgbg = loadImage("assets/bgs.png");
  homepageSound = loadSound("assets/homepage.ogg");
}

function setup() {
  let canvas = createCanvas(650, 650);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);
  image(imgbg, width / 2, height / 2, 1000, 650);


  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  image(img1, 0, 0, 650, 650);
  pop();

  let c = get(mouseX, mouseY);

  if (mouseIsPressed && blue(c) > 10 && blue(c) < 15) {
    window.location.href = "task3index.html";
  }

}