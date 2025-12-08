
let img1;
let img2;
let img3;
let img4;
let imgcam;
let imgbg;
let imgpho;
let imginst;
let imgt4c;

let startTime;
let state = 1;
let cameraSound;
let homepageSound;

let NUM_OF_PARTICLES = 20;
let MAX_OF_PARTICLES = 500;

let particles = [];
let particles2 = [];


function preload() {
  img1 = loadImage("assets/4.1.png");
  img2 = loadImage("assets/4.2.png");
  img3 = loadImage("assets/4.3.png");
  img4 = loadImage("assets/4.4.png");
  imgcam = loadImage("assets/4.cam.png");
  imgbg = loadImage("assets/t4bg.png");
  imgpho = loadImage("assets/t4photo.png");
  imginst = loadImage("assets/t4inst.png");
  imgt4c = loadImage("assets/t4c..png");

  cameraSound = loadSound("assets/camera.mp3");
  homepageSound = loadSound("assets/task4.ogg");

}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  //imageMode(CENTER);
  image(imgbg, 0, 0);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new sakura(random(width), random(height));
  }

  for (let j = 0; j < NUM_OF_PARTICLES; j++) {
    particles2[j] = new leaves(random(width), random(height));
  }
}

function draw() {

  if (state == 1) {


    image(img1, 200, 100);
    image(img2, -90, 100);
    image(img3, 450, 100);
    image(img4, 100, 100);

    image(imgcam, 550, -200);
    image(imginst, 250, -50);

    let c = get(mouseX, mouseY);

    if (mouseIsPressed && green(c) == 0) {
      state = 2;
      cameraSound.play();
      startTime = millis();
    }
  }
  if (state == 2) {
    noStroke();
    fill(255);
    rect(0, 0, 800, 600);

    if (millis() - startTime > 1000) {
      state = 3;
      startTime = millis();
    }
  }
  if (state == 3) {
    noStroke();
    fill(0);
    rect(0, 0, 800, 600);
    if (millis() - startTime > 1000) {
      state = 4;
      startTime = millis();
    }
  }

  if (state == 4) {
    noStroke();
    fill(255);
    rect(0, 0, 800, 600);
    if (millis() - startTime > 1000) {
      state = 5;
      homepageSound.play();
      startTime = millis();
    }
  }

  if (state == 5) {
    image(imgbg, 0, 0);
    image(img1, 200, 100);
    image(img2, -90, 100);
    image(img3, 450, 100);
    image(img4, 100, 100);

    image(imgpho, 0, 0, 400, 300);

    //image(imgt4c, 450, -150, 800, 400);
    fill(187, 184, 250);
    ellipse(700, 50, 100, 50);
    fill(255);
    text("Continue", 670, 50);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();
      p.display();
      p.checkBounds();

    }
    // limit the number of particles
    if (particles.length > MAX_OF_PARTICLES) {
      particles.splice(0, 1); // remove the first (oldest) particle
    }



    for (let j = 0; j < particles2.length; j++) {
      let p2 = particles2[j];
      p2.update();
      p2.display();
      p2.checkBounds2();

    }
    // limit the number of particles
    if (particles2.length > MAX_OF_PARTICLES) {
      particles2.splice(0, 1); // remove the first (oldest) particle
    }

  }
}

function mousePressed() {

  for (let i = 0; i < 4; i++) {
    particles.push(new sakura(mouseX + random(-20, 20), mouseY + random(-20, 20)));
  }

  if (state == 5 && mouseX > 550 && mouseY < 100) {
    window.location.href = "Endingindex.html";
  }
}


class sakura {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 10;
    this.color = random([color(254, 173, 187), color(252, 194, 206), color(254, 222, 227), color(253, 230, 236)]);

    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);

    this.angle = 0;
    this.speedR = random(0.01, 0.03);

  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY = this.speedY;
    this.speedX = this.speedX;

    this.angle += this.speedR;

  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    noStroke();
    fill(this.color);

    ellipse(0, -5, this.dia * 1.5, this.dia * 3);
    push();
    rotate(PI / 20);
    ellipse(5, -5, this.dia * 1.5, this.dia * 3);
    pop();

    push();
    rotate(PI / 5);
    ellipse(10, 30, this.dia * 1.5, this.dia * 3);
    pop();
    push();
    rotate(PI / 4);
    ellipse(10, 30, this.dia * 1.5, this.dia * 3);
    pop();


    push();
    rotate(PI / 1.7);
    ellipse(10, 18, this.dia * 1.5, this.dia * 3);
    ellipse(15, 18, this.dia * 1.5, this.dia * 3);
    pop();

    push();
    rotate(PI / -1.7);
    ellipse(-13, 18, this.dia * 1.5, this.dia * 3);
    ellipse(-18, 18, this.dia * 1.5, this.dia * 3);
    pop();

    push();
    rotate(PI / -5);
    ellipse(-10, 30, this.dia * 1.5, this.dia * 3);
    pop();
    push();
    rotate(PI / -4);
    ellipse(-10, 30, this.dia * 1.5, this.dia * 3);
    pop();

    circle(2, 15, 23);
    fill(255);
    circle(2, 13, 15);

    pop();

  }


  checkBounds() {
    if (this.y > height) {
      this.y = -50;
      this.x = random(width);
    }
  }

}



class leaves {
  // constructor function
  constructor(startX2, startY2) {
    // properties (variables): particle's characteristics
    this.x2 = startX2;
    this.y2 = startY2;
    this.size = 10;

    this.speedX2 = random(-3, 3);
    this.speedY2 = random(-3, 3);

    this.angle2 = 0;
    this.speedR2 = random(0.01, 0.03);

  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x2 += this.speedX2;
    this.y2 += this.speedY2;

    this.speedY2 = this.speedY2;
    this.speedX2 = this.speedX2;

    this.angle2 += this.speedR2;

  }

  display() {
    // particle's appearance
    push();
    noStroke();
    fill(180, 220, 135);
    translate(this.x2, this.y2);
    rotate(this.angle2);

    push();
    rotate(PI / 5);
    ellipse(0, 0, this.size, this.size * 3);
    pop();

    push();
    rotate(PI / -5);
    ellipse(100, 60, this.size, this.size * 3.5);
    ellipse(0, 100, this.size, this.size * 3.5);
    pop();

    pop();
  }

  checkBounds2() {
    if (this.y2 > height) {
      this.y2 = 0;
      this.x2 = random(width);
    }
  }

}
