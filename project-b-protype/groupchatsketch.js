
let imgbg;
let imgp;
let homepageSound;

let imghz;
let img1;
let img2;
let img3;
let img4;

let nextText = [
  "",
  "hiii girls! How's everything going",
  "I just found one group photo of us!",
  "wait...what photo?",
  "?",
  "",
  "",
  "I missed you so much...",
  "Maybe we should meet someday...",
  "That's a great ideal!!!",
  "How about we prepare donut party!",
  "That's great!",
  "We can even took a similar photo!",
  "That's great! First we should find a time when eveyone is aviliable...",
  "And also we should prepare special props to reenact the scene...",
  "we can't forget donuts!!!",
  "and also a new photo!"
];

let nextImage = [];

let nextHeight = [];

let index = 0;
let positionY = 120;


function preload() {
  imgbg = loadImage("assets/gcbg.jpg");
  imgp = loadImage("assets/bg.png");
  homepageSound = loadSound("assets/group chat.ogg");

  imghz = loadImage("assets/hezhao.png");
  img1 = loadImage("assets/p1.png");
  img2 = loadImage("assets/p2.png");
  img3 = loadImage("assets/p3.png");
  img4 = loadImage("assets/p4.png");
}

function setup() {
  let canvas = createCanvas(800, 1727);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();

  background(192, 235, 255);
  image(imgbg, width / 2, height / 2, 800, 1727);


  noStroke();
  fill(220, 220, 220);
  rect(0, 0, 800, 90);
  rect(0, 1637, 800, 90);
  fill(255, 255, 255);
  rect(100, 1660, 500, 50);
  fill(0, 0, 0);
  textSize(18);
  text('12:06', 50, 25);
  textSize(30);
  text('donut hunters(4)', 290, 60);
  circle(770, 53, 3);
  circle(762, 53, 3);
  circle(754, 53, 3);
  stroke(2);
  strokeWeight(2);
  line(43, 45, 30, 55);
  line(30, 55, 43, 65);
  noStroke();
  fill(21, 111, 251);
  rect(650, 1660, 70, 50);




  //if (mouseIsPressed) {
  //window.location.href = "homepage1index.html";
  //}

  nextImage = [img1, img1, img1, img2, img3, img1, img4, img1, img2, img3, img3, img4, img1, img2, img3, img1, img1, img4];

  nextHeight = [250, 250, 260, 150, 30, 160, 220, 180, 260, 160, 270, 250, 280, 490, 470, 200, 190];


}

function mousePressed() {
  index++;

  textSize(15);
  fill(255);
  if (index != 5 && index != 6 && index != 11 && index != 17 && index != 18) {
    image(nextImage[index], 50, positionY + 35, 40, 40);
    noStroke();
    rect(80, positionY + 15, nextHeight[index], 40);
    fill(0);
    text(nextText[index], 85, positionY + 37);
  }

  else if (index == 5) {
    image(nextImage[index], 50, positionY + 35, 40, 40);
    image(imghz, 225, positionY + 75, 300, 150);
  }

  else if (index == 6) {
    image(nextImage[index], 750, positionY + 40, 40, 40);
    noStroke();
    fill(0, 220, 100);
    rect(520, positionY + 20, 200, 40);
    fill(0);
    text("Oh it's our favorite donut!!", 530, positionY + 43);
  }

  else if (index == 11) {
    image(nextImage[index], 750, positionY + 40, 40, 40);
    fill(0, 220, 100);
    rect(660, positionY + 20, 65, 40);
    fill(0);
    text("sure!!!!!!", 665, positionY + 45);
  }

  else if (index == 17) {
    image(nextImage[index], 750, positionY + 15, 40, 40);
    fill(0, 220, 100);
    rect(595, positionY - 5, 130, 40);
    fill(0);
    text("LET'S DO THAT!!!", 600, positionY + 20);
  }
  else if (index == 18) {
    fill(255, 214, 234);
    rect(100, positionY, 600, 300);
    fill(0);
    text("Click the blue button below to start your journey!", 150, positionY + 120);
    text("Hint:", 150, positionY + 240);
    text("Click those colorful donut pieces to enter different tasks!", 150, positionY + 260);
    text("Don't forgrt to click the 'Hint' to get extra cues when you get confued!", 150, positionY + 280);
  }

  positionY += 70;
}

function draw() {

  let c = get(mouseX, mouseY);

  if (mouseIsPressed && blue(c) == 251 && index > 18) {
    window.location.href = "homepage1index.html";
  }

}
