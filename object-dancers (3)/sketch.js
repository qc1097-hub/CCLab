/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new bearfly(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class bearfly {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:

    this.size = 100;
    this.color1 = color(181, 168, 234);
    this.color2 = color(random(255), random(255), random(255));

    this.angleX = 0;
    this.angleY = 0;

  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    this.angleX = this.angleX + 0.05;
    this.angleY = this.angleY + 0.05;


    this.x = this.x + sin(this.angleX);
    this.y = this.y + cos(this.angleY) * 2;


  }


  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️


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

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
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




/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/