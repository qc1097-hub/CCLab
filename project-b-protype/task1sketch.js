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
  let canvas = createCanvas(800, 2000);
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

  rect(100, 1650, 600, 300);

  line(100, 1700, 700, 1700);
  line(100, 1750, 700, 1750);
  line(100, 1800, 700, 1800);
  line(100, 1850, 700, 1850);
  line(100, 1900, 700, 1900);

  line(186, 1650, 186, 1950);
  line(271, 1650, 271, 1950);
  line(357, 1650, 357, 1950);
  line(442, 1650, 442, 1950);
  line(528, 1650, 528, 1950);
  line(613, 1650, 613, 1950);

  textSize(35);
  text("S", 130, 1685);
  text("M", 215, 1685);
  text("T", 300, 1685);
  text("W", 385, 1685);
  text("T", 470, 1685);
  text("F", 555, 1685);
  text("S", 640, 1685);

  text("01", 215, 1735);
  text("02", 300, 1735);
  text("03", 385, 1735);
  text("04", 470, 1735);
  text("05", 555, 1735);
  text("06", 640, 1735);

  text("07", 130, 1785);
  text("08", 215, 1785);
  text("09", 300, 1785);
  text("10", 385, 1785);
  text("11", 470, 1785);
  text("12", 555, 1785);
  text("13", 640, 1785);

  text("14", 130, 1835);
  text("15", 215, 1835);
  text("16", 300, 1835);
  text("17", 385, 1835);
  text("18", 470, 1835);
  text("19", 555, 1835);
  text("20", 640, 1835);

  text("21", 130, 1885);
  text("22", 215, 1885);
  text("23", 300, 1885);
  text("24", 385, 1885);
  text("25", 470, 1885);
  text("26", 555, 1885);
  text("27", 640, 1885);

  text("28", 130, 1935);
  text("29", 215, 1935);
  text("30", 300, 1935);
  text("31", 385, 1935);



}

function mousePressed() {
  if (mouseX >= 613 && mouseX <= 700 && mouseY >= 1700 && mouseY <= 1750) {
    //text("Nice choice! That's the day when all four friends are available.", 300, 1700);
    // } else {
    //text("Try again! This date isn't free for everyone., 300, 1700");

    window.location.href = "homepage3index.html";
  }
}


//let c = get(mouseX, mouseY);

//if (mouseIsPressed && mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
//window.location.href = "homepage3index.html";
//}