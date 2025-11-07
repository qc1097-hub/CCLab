// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 20; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];
let particles2 = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new sakura(random(width), random(height));
  }

  for (let j = 0; j < NUM_OF_PARTICLES; j++) {
    particles2[j] = new leaves(random(width), random(height));
  }

}

function draw() {
  background(187, 238, 255);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
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

function mousePressed() {

  for (let i = 0; i < 4; i++) {
    particles.push(new sakura(mouseX + random(-20, 20), mouseY + random(-20, 20)));
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
    this.windSpeed = random(-5, 5);


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
    this.windSpeed2 = random(-5, 5);

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