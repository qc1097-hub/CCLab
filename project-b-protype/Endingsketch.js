let homepageSound;

let imgbg;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;

let nextImage = [];

let index = 0;

function preload() {
  imgbg = loadImage("assets/gcbg.jpg");

  img1 = loadImage("assets/ending1.png");
  img2 = loadImage("assets/ending2.png");
  img3 = loadImage("assets/ending3.png");
  img4 = loadImage("assets/ending4.png");
  img5 = loadImage("assets/ending5.png");
  img6 = loadImage("assets/ending6.png");
  img7 = loadImage("assets/ending7.png");
  img8 = loadImage("assets/ending8.png");
  img9 = loadImage("assets/ending9.png");
  img10 = loadImage("assets/ending10.png");
  img11 = loadImage("assets/ending11.png");
  img12 = loadImage("assets/ending12.png");
  img13 = loadImage("assets/ending13.png");
  img14 = loadImage("assets/ending14.png");
  img15 = loadImage("assets/ending15.png");
  img16 = loadImage("assets/ending16.png");
  img17 = loadImage("assets/ending17.png");
  img18 = loadImage("assets/ending18.png");
  img19 = loadImage("assets/ending19.png");
  img20 = loadImage("assets/ending20.png");
  img21 = loadImage("assets/ep.jpg");

  homepageSound = loadSound("assets/ending.ogg");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();


  nextImage = [img1, img1, img7, img3, img8, img5, img9, img4, img2, img6, img10, img13, img15, img12, img17, img18, img20, img11, img14, img16, img19];
  image(imgbg, width / 2, height / 2, 800, 1727);

}

function draw() {

}

function mousePressed() {
  index++;

  fill(255);
  let img = nextImage[index];
  if (index < 21) {

    image(nextImage[index], random(200, width - 200), random(100, height - 50), img.width * 0.5, img.height * 0.5);
  }
  else if (index == 21) {

    image(img21, 400, 300, 800, 600);

  }

}