let state = 1;
let homepageSound;
let startTime;
let img1;
let img2;

function preload() {
  img1 = loadImage("assets/t3.png");
  img2 = loadImage("assets/t3.2.png");
  homepageSound = loadSound("assets/task3.ogg");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
  homepageSound.play();
  image(img1, 400, 200, 800, 400);
  image(img2, 400, 600, 800, 400);
}

function draw() {
  noStroke();
  let c = get(mouseX, mouseY);
  console.log(blue(c));

  if (state == 1) {
    image(img1, 400, 200, 800, 430);
    if (mouseIsPressed == true && green(c) == 233) {
      state = 2;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 242) {
      state = 3;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 148) {
      state = 4;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 48) {
      state = 5;
      startTime = millis();
    }
    //donuts
    else if (mouseIsPressed == true && green(c) == 255) {
      state = 6;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 156) {
      state = 7;
      startTime = millis();
    } else if (mouseIsPressed == true && blue(c) == 233) {
      state = 8;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 254) {
      state = 9;
      startTime = millis();
    } else if (mouseIsPressed == true && green(c) == 68) {
      state = 10;
      startTime = millis();
    } else if (mouseIsPressed == true && blue(c) == 148) {
      state = 11;
      startTime = millis();
    } else if (mouseIsPressed == true && blue(c) == 204) {
      state = 12;
      startTime = millis();
    } else if (mouseIsPressed == true && blue(c) == 217) {
      state = 13;
      startTime = millis();
    } else if (mouseIsPressed == true && blue(c) == 106) {
      state = 14;
      startTime = millis();
    }
  }


  if (state == 2) {
    fill(255, 233, 44);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Coco's preference ", 530, 175);
    textSize(14);
    text("Prefers tropical and vacation-like", 525, 250);
    text("food, with sunny, relaxed flavors.", 525, 275);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 3) {
    fill(243, 242, 222);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Emily's preference ", 530, 175);
    textSize(14);
    text("Rich, hearty flavors", 525, 250);
    text("like dark chocolate, oats,", 525, 275);
    text("and roasted nuts.", 525, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 4) {
    fill(235, 148, 148);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Ryan's preference ", 530, 175);
    textSize(14);
    text("Bright, refreshing treats with fruity", 525, 250);
    text("notes, especially citrus-flavored", 525, 275);
    text("drinks and light desserts.", 525, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 5) {
    fill(76, 48, 45);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Judy's preference ", 530, 175);
    textSize(14);
    text("Loves playful, colorful sweets like", 525, 250);
    text("rainbow candy, marshmallows,", 525, 275);
    text("and creamy, fun desserts.", 525, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 6) {
    fill(255, 255, 255);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Candy Donut ", 550, 175);
    text("Donut Code 01", 550, 200);
    textSize(15);
    text("A fun, colorful donut ", 530, 250);
    text("bursting with playful", 530, 275);
    text("sweetness from crunchy ", 530, 300);
    text("candy toppings.", 530, 325);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 7) {
    fill(255, 156, 0);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Orange Donut ", 550, 175);
    text("Donut Code 02", 550, 200);
    textSize(15);
    text("A bright, refreshing", 530, 250);
    text("donut with a zesty", 530, 275);
    text("citrus aroma and a", 530, 300);
    text("lightly sweet orange glaze.", 530, 325);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 8) {
    fill(132, 216, 233);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Beach-themed Donut ", 540, 175);
    text("Donut Code 03", 550, 200);
    textSize(15);
    text("A tropical-inspired donut", 520, 250);
    text("with hints of coconut and", 520, 275);
    text("sunshine-like sweetness,", 520, 300);
    text("decorated like a mini vacation", 520, 325);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 9) {
    fill(253, 254, 137);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Banana Donut ", 550, 175);
    text("Donut Code 04", 550, 200);
    textSize(15);
    text("A soft, fragrant donut with", 530, 250);
    text("a mellow natural banana flavor", 530, 275);
    text("and gentle sweetness.", 530, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 10) {
    fill(94, 68, 123);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Taro Donut ", 555, 175);
    text("Donut Code 05", 550, 200);
    textSize(15);
    text("A creamy, subtly sweet donut", 520, 250);
    text(" infused with smooth taro flavor", 520, 275);
    text("and a comforting aroma.", 520, 300);

    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 11) {
    fill(141, 216, 148);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Pandan Donut ", 550, 175);
    text("Donut Code 06", 550, 200);
    textSize(15);
    text("A fragrant donut with", 530, 250);
    text("pandan's unique vanilla-like", 530, 275);
    text("aroma and light sweetness.", 530, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 12) {
    fill(244, 216, 204);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Chocolate Oat Donut ", 550, 175);
    text("Donut Code 07", 550, 200);
    textSize(15);
    text("A rich chocolate donut", 530, 250);
    text("balanced with hearty oat notes", 530, 275);
    text("for a deeper, wholesome flavor.", 530, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 13) {
    fill(255, 177, 217);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Strawberry Donut ", 550, 175);
    text("Donut Code 08", 550, 200);
    textSize(15);
    text("A soft donut coated with fresh", 530, 250);
    text("strawberry icing for a sweet,", 530, 275);
    text("fruity, and slightly tangy delight.", 530, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  } else if (state == 14) {
    fill(144, 116, 106);
    rect(510, 150, 250, 200);
    fill(0);
    textSize(20);
    text("Chocolate Cream Donut ", 530, 175);
    text("Donut Code 09", 550, 200);
    textSize(14);
    text("A decadent donut filled with smooth", 515, 250);
    text("chocolate cream, delivering a rich", 515, 275);
    text("and indulgent dessert experience.", 515, 300);
    if (millis() - startTime > 3000) {
      state = 1;
    }
  }
}

function keyPressed() {
  if (key === 'x') {
    window.location.href = "homepage4index.html";
  }
}