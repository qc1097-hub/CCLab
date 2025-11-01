

let dancer;


function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");


  dancer = new bearfly(width / 2, height / 2);
}

function draw() {

  background(0);
  drawFloor();

  dancer.update();
  dancer.display();
}


class bearfly {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;



    this.size = 100;
    this.color1 = color(181, 168, 234);
    this.color2 = color(random(255), random(255), random(255));

    this.angleX = 0;
    this.angleY = 0;

  }

  update() {


    this.angleX = this.angleX + 0.05;
    this.angleY = this.angleY + 0.05;


    this.x = this.x + sin(this.angleX);
    this.y = this.y + cos(this.angleY) * 2;


  }


  display() {

    push();
    translate(this.x, this.y);




    //butterfly wings
    push();
    rotate(sin(this.angleX) * 0.1);
    noStroke();
    fill(255);
    circle(-70, -60, 20);
    circle(-65, -50, 20);
    circle(-55, -40, 20);
    circle(-40, -35, 25);
    circle(-25, -30, 30);
    pop();

    push();
    rotate(-sin(this.angleX) * 0.1);
    noFill();
    stroke(255);
    circle(70, -60, 20);
    circle(65, -50, 20);
    circle(55, -40, 20);
    circle(40, -35, 25);
    circle(25, -30, 30);
    pop();


    //noStroke();

    push();
    rotate(PI / 6 + sin(this.angleX) * 0.1);
    noStroke();
    fill(this.color1);
    ellipse(-50, -20, this.size, this.size * 0.35);
    ellipse(15, -10, this.size * 0.5, this.size * 0.3);
    pop();


    push();
    noStroke();
    fill(this.color1);
    rotate(-PI / 6 - sin(this.angleX) * 0.1);
    ellipse(50, -20, this.size, this.size * 0.35);
    ellipse(-15, -10, this.size * 0.5, this.size * 0.3);
    pop();



    //small dots
    push();
    rotate(- sin(this.angleX) * 0.1);
    fill(this.color1);
    noStroke();
    circle(40, 20, this.size * 0.08);
    circle(47, 30, this.size * 0.12);
    circle(52, 40, this.size * 0.07);
    pop();

    push();
    noFill();
    stroke(255);
    rotate(sin(this.angleX) * 0.1);
    circle(-40, 20, this.size * 0.08);
    circle(-47, 30, this.size * 0.12);
    circle(-52, 40, this.size * 0.07);
    pop();


    //eyes
    fill(255);
    circle(-15, -60, this.size * 0.08);
    circle(15, -60, this.size * 0.08);
    fill(80, 184, 231);
    circle(-17, -59, this.size * 0.05);
    fill(255, 0, 0);
    circle(13, -59, this.size * 0.05);

    //pink ellipse
    fill(253, 177, 200);
    rect(-30, -53, this.size * 0.16, this.size * 0.08);
    rect(14, -53, this.size * 0.16, this.size * 0.08);

    //mosue
    fill(255, 193, 0);
    ellipse(0, -50, this.size * 0.05, this.size * 0.03);

    //ear
    arc(-20, -73, this.size * 0.2, this.size * 0.2, PI, 0);
    arc(20, -73, this.size * 0.2, this.size * 0.2, PI, 0);


    //this.drawReferenceShapes()

    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}




