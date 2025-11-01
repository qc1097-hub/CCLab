let mySound;
let x;
let speedX;

function preload() {
  mySound = loadSound("assets/song.mp3");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  x = width / 2;
  speedX = 1;

}

function draw() {
  background(220);
  circle(x, height / 2, 50);
  x = x + speedX;

  if (x > width - 25 || x < 25) {
    speedX = speedX * -1;
  }

  function mousePressed() {

    if (mySound.isPlaying() == false) {
      mySound.loop();
    }
    function mouseReleased() {
      mySound.stop();
    }

  }
}