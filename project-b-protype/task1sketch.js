let imgc2;
let homepageSound;

function preload() {
  imgc2 = loadImage("assets/c2.png");
  homepageSound = loadSound("assets/task1.ogg");
}

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
}

function draw() {
  background(192, 235, 255);


  image(imgc2, 400, 200, 800, 400);


  let c = get(mouseX, mouseY);

  if (mouseIsPressed && mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    window.location.href = "homepage2index.html";
  }

}