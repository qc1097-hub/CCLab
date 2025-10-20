let creatureX, creatureY;
let size = 1;

let seaweedHeight1 = 220;
let seaweedHeight2 = 220;
let seaweedHeight3 = 220;

let seaweedHeight4 = 330;
let seaweedHeight5 = 330;

let seaweedHeight6 = 90;
let seaweedHeight7 = 90;
let seaweedHeight8 = 90;

let seaweedHeight9 = 270;
let seaweedHeight10 = 270;

let seaweedHeight11 = 30;

let overRock1Count = 0;
let rock1Gone = false;
let overRock2Count = 0;
let rock2Gone = false;
let overRock3Count = 0;
let rock3Gone = false;
let overRock4Count = 0;
let rock4Gone = false;
let overRock5Count = 0;
let rock5Gone = false;
let startTime;


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  yb1 = 700;
  yb2 = 500;
  yb3 = 800;
  yb4 = 500;
  yb5 = 550;
  yb6 = 1000;
  yb7 = 500;
  yb8 = 500;
  yb9 = 500;
  yb10 = 600;
  
  
  creatureX = width / 2;
  creatureY = height / 2;
  
}

function draw() {
    background(0);
    noStroke();
    
    fill(215,233,245);
    rect(0, 0, width, 100);
    fill(182,213,235);
    rect(0, 100, width, 100);
    fill(127,186,220);
    rect(0, 200, width, 100);
    fill(84,165,213);
    rect(0, 300, width, 100);
    fill(56,146,198);
    rect(0, 400, width, 100);
    
    
  //bubbles  
  noFill();
  stroke(255);
  strokeWeight(1);
  
  let xb1 = width/3 + sin(frameCount/70) * 50;
  circle(xb1, yb1, 15);
  yb1 = yb1 - 1;
  if (yb1 < 0) {
  yb1 = height;
  }
  
  let xb2 = width/2 + cos(frameCount/20)*50;
  circle(xb2, yb2, 20);
  yb2 = yb2 - 2;
  if (yb2 < 0) {
  yb2 = height;
  }
  
  let xb3 = width/4 + cos(frameCount/50)*30;
  circle(xb3, yb3, 30);
  yb3 = yb3 - 3;
  if (yb3 < 0) {
  yb3 = height;
  }
  
  let xb4 = 600 + cos(frameCount/50)*50;
  circle(xb4, yb4, 50);
  yb4 = yb4 - 1;
  if (yb4 < 0) {
  yb4 = height;
  }
  
  let xb5 = 600 + cos(frameCount/40)*50;
  circle(xb5, yb5, 10);
  yb5 = yb5 - 3;
  if (yb5 < 0) {
  yb5 = height;
  }
  
  let xb6 = 700 + cos(frameCount/20)*50;
  circle(xb6, yb6, 7);
  yb6 = yb6 - 3;
  if (yb6 < 0) {
  yb6 = height;
  }
  
  let xb7 = 100 + cos(frameCount/20)*10;
  circle(xb7, yb7, 10);
  yb7 = yb7 - 4;
  if (yb7 < 0) {
  yb7 = height;
  }
  
  strokeWeight(3);
  
  let xb8 = 200 + cos(frameCount/30)*20;
  circle(xb8, yb8, 20);
  yb8 = yb8 - 0.5;
  if (yb8 < 0) {
  yb7 = height;
  }
  
  let xb9 = 500 + cos(frameCount/15)*15;
  circle(xb9, yb9, 30);
  yb9 = yb9 - 0.4;
  if (yb9 < 0) {
  yb9 = height;
  }
  
  let xb10 = 600 + cos(frameCount/50)*50;
  circle(xb10, yb10, 25);
  yb10 = yb10 - 0.3;
  if (yb10 < 0) {
  yb10 = height;
  }
  
  circle(100, 100, 15);
  circle(700, 370, 20);
  
    noStroke();

  //seaweed1    
  fill(13,77,23);
  beginShape();
  curveVertex(100, 500);
  curveVertex(32, 500);
  curveVertex(30, seaweedHeight1);
  curveVertex(50, 420);
  curveVertex(50, 500);
  curveVertex(60, 500);
  endShape();
      
  //seaweed2
  fill(13,76,23);    
  beginShape();
  curveVertex(300+100, 500);
  curveVertex(300+32, 500);
  curveVertex(300+30, seaweedHeight2);
  curveVertex(300+50, 420);
  curveVertex(300+50, 500);
  curveVertex(300+60, 500);
  endShape();
      
  //seaweed3
  fill(13,75,23);
  beginShape();
  curveVertex(2*300+100, 500);
  curveVertex(2*300+32, 500);
  curveVertex(2*300+30, seaweedHeight3);
  curveVertex(2*300+50, 420);
  curveVertex(2*300+50, 500);
  curveVertex(2*300+60, 500);
  endShape();
      
  //seaweed4
  fill(13,74,23);
  beginShape();
  curveVertex(130, 500);
  curveVertex(62, 500);
  curveVertex(60, seaweedHeight4);
  curveVertex(80, 530);
  curveVertex(60, 500);
  curveVertex(60, 500);
  endShape();
      
  //seaweed5
  fill(13,73,23);
  beginShape();
  curveVertex(1*600+130, 500);
  curveVertex(1*600+62, 500);
  curveVertex(1*600+60, seaweedHeight5);
  curveVertex(1*600+80, 530);
  curveVertex(1*600+60, 500);
  curveVertex(1*600+60, 500);
  endShape();
      
  //seaweed6
  fill(13,72,23);
  beginShape(); 
  curveVertex(150, 500);
  curveVertex(82, 500);
  curveVertex(80, seaweedHeight6);
  curveVertex(100, 390);
  curveVertex(100, 500);
  curveVertex(110, 500);
  endShape();
      
  //seaweed7
  fill(13,71,23);
  beginShape(); 
  curveVertex(300+150, 500);
  curveVertex(300+82, 500);
  curveVertex(300+80, seaweedHeight7);
  curveVertex(300+100, 390);
  curveVertex(300+100, 500);
  curveVertex(300+110, 500);
  endShape();
      
  //seaweed8
  fill(13,70,23);
  beginShape(); 
  curveVertex(2*300+150, 500);
  curveVertex(2*300+82, 500);
  curveVertex(2*300+80, seaweedHeight8);
  curveVertex(2*300+100, 390);
  curveVertex(2*300+100, 500);
  curveVertex(2*300+110, 500);
  endShape();

  //seewead9
  fill(13,69,23);
  beginShape();
  curveVertex(200, 500);
  curveVertex(132, 500);
  curveVertex(130, seaweedHeight9);
  curveVertex(150, 470);
  curveVertex(150, 500);
  curveVertex(160, 500);
  endShape();
    
  //seaweed10
  fill(13,68,23);
  beginShape();
  curveVertex(1*400+200, 500);
  curveVertex(1*400+132, 500);
  curveVertex(1*400+130, seaweedHeight10);
  curveVertex(1*400+150, 470);
  curveVertex(1*400+150, 500);
  curveVertex(1*400+160, 500);
  endShape();
    
  //seaweed11
  fill(13,67,23);
  beginShape();  
  curveVertex(820, 500);
  curveVertex(752, 500);
  curveVertex(750, seaweedHeight11);
  curveVertex(770, 330);
  curveVertex(770, 500);
  curveVertex(780, 500);
  endShape();
  
  //using green(c) to change seaweedHeight
  let c = get(mouseX, mouseY);
  //console.log(green(c));
  
  if ( green(c) == 77){
  seaweedHeight1++;
 
    } else if( green(c) != 77 && seaweedHeight1 > 220)    {
      seaweedHeight1--;
      
    } else if( green(c) == 76){
      seaweedHeight2++;
      
    }else if(green(c) != 76 && seaweedHeight2 > 220)    {
      seaweedHeight2--;
      
    } else if ( green(c) == 75){
     seaweedHeight3++;
 
    } else if( green(c) != 75 && seaweedHeight3 > 220)    {
      seaweedHeight3--;
      
    }else if ( green(c) == 74){
     seaweedHeight4++;
 
    } else if( green(c) != 74 && seaweedHeight4 > 330)    {
      seaweedHeight4--;
      
    }else if ( green(c) == 73){
     seaweedHeight5++;
 
    } else if( green(c) != 73 && seaweedHeight5 > 330)    {
      seaweedHeight5--;
      
    }else if ( green(c) == 72){
     seaweedHeight6++;
 
    } else if( green(c) != 72 && seaweedHeight6 > 90)    {
      seaweedHeight6--;
      
    }else if ( green(c) == 71){
     seaweedHeight7++;
 
    } else if (green(c) != 71 && seaweedHeight7 > 90)    {
      seaweedHeight7--;
      
    }else if ( green(c) == 70){
     seaweedHeight8++;
 
    } else if( green(c) != 70 && seaweedHeight8 > 90)    {
      seaweedHeight8--;
      
    }else if ( green(c) == 69){
     seaweedHeight9++;
 
    } else if( green(c) != 69 && seaweedHeight9 > 270)    {
      seaweedHeight9--;
      
    }else if ( green(c) == 68){
     seaweedHeight10++;
 
    } else if( green(c) != 68 && seaweedHeight10 > 270)    {
      seaweedHeight10--;
      
    }else if ( green(c) == 67){
     seaweedHeight11++;
 
    } else if( green(c) != 67 && seaweedHeight11 > 30)    {
      seaweedHeight11--;
      
    }
  
  noStroke();
  
   //rocks
  //console.log(mouseX, mouseY);
  
  //rock1
  if (rock1Gone == false) {
  fill(75, map(overRock1Count, 0, 45, 75, 0), 50);
  beginShape();
  vertex(53, 500);
  vertex(45, 480);
  vertex(64, 460);
  vertex(90, 455);
  vertex(110, 480);
  vertex(100, 500);
  endShape(CLOSE); 
  }
  let dr1 = dist(77, 476, mouseX, mouseY);
  if (dr1 < 25 && rock1Gone == false) {
    overRock1Count++;
    textSize(50);
    fill(255,170,29);
    text('STAY AWAY FROM ME!', 150, 250);
    
    if (overRock1Count > 250) {
      rock1Gone = true;
      startTime = millis();
    }
  }  else if (overRock1Count > 0) {
      overRock1Count--;
    }
     if (rock1Gone == true){
      textSize(50);
      fill(255,170,29);
      text('BYE!', 340, 250);
      
    if(millis() - startTime > 3000) {
    rock1Gone = false;
    overRock1Count = 0;
    }
  }
  
  //rock2
  if (rock2Gone == false) {
  fill(75, map(overRock2Count, 0, 45, 75, 0), 50);
  beginShape();
  vertex(1*340+53, 500);
  vertex(1*340+45, 480);
  vertex(1*340+64, 460);
  vertex(1*340+90, 455);
  vertex(1*340+110, 480);
  vertex(1*340+100, 500);
  endShape(CLOSE); 
 }
  let dr2 = dist(414, 476, mouseX, mouseY);
  if (dr2 < 25 && rock2Gone == false) {
    overRock2Count++;
    textSize(50);
    fill(255,211,0);
    text('STAY AWAY FROM ME!', 150, 250);
    
    if (overRock2Count > 250) {
      rock2Gone = true;
      startTime = millis();
    }
  }else if (overRock2Count > 0) {
      overRock2Count--;
    }
     if (rock2Gone == true){
      textSize(50);
      fill(255,211,0);
      text('BYE!', 340, 250);
      
    if(millis() - startTime > 3000) {
    rock2Gone = false;
    overRock2Count = 0;
    }
  }
 
  //rock3
  if (rock3Gone == false) {
  fill(75, map(overRock3Count, 0, 45, 75, 0), 50);
  beginShape();
  vertex(2*340+53, 500);
  vertex(2*340+45, 480);
  vertex(2*340+64, 460);
  vertex(2*340+90, 455);
  vertex(2*340+110, 480);
  vertex(2*340+100, 500);
  endShape(CLOSE); 
     }
  let dr3 = dist(759, 480, mouseX, mouseY);
  if (dr3 < 25 && rock3Gone == false) {
    overRock3Count++;
    textSize(50);
    fill(255,223,0);
    text('STAY AWAY FROM ME!', 150, 250);
    
    if (overRock3Count > 250) {
      rock3Gone = true;
      startTime = millis();
    }
  }else if (overRock3Count > 0) {
      overRock3Count--;
    } if (rock3Gone == true){
      textSize(50);
      fill(255,223,0);
      text('BYE!', 340, 250);
      
    if(millis() - startTime > 3000) {
    rock3Gone = false;
    overRock3Count = 0;
    }
  } 

  //rock4
  if (rock4Gone == false) {
  fill(41, map(overRock4Count, 0, 55, 35, 0), 0);
  beginShape();
  vertex(100, 500);
  vertex(80, 470);
  vertex(90, 420);
  vertex(160, 430);
  vertex(180, 470);
  vertex(170, 500);
  endShape(CLOSE);
    }
  let dr4 = dist(127, 465, mouseX, mouseY);
  if (dr4 < 40 && rock4Gone == false) {
    overRock4Count++;
    textSize(50);
    fill(255,255,0);
    text('STAY AWAY FROM ME!', 150, 250);
    
    if (overRock4Count > 250) {
      rock4Gone = true;
      startTime = millis();
    }
  } else if (overRock4Count > 0){
      overRock4Count--;
    }
  if (rock4Gone == true){
      textSize(50);
      fill(255,255,0);
      text('BYE!', 340, 250);
    
    if(millis() - startTime > 3000) {
    rock4Gone = false;
    overRock4Count = 0;
    }
  }
  
  //rock5
  if (rock5Gone == false) {
  fill(41, map(overRock5Count, 0, 55, 35, 0), 0); 
  beginShape();
  vertex(1*400+100, 500);
  vertex(1*400+80, 470);
  vertex(1*400+90, 420);
  vertex(1*400+160, 430);
  vertex(1*400+180, 470);
  vertex(1*400+170, 500);
  endShape(CLOSE);
}
  
  let dr5 = dist(527, 466, mouseX, mouseY);
  if (dr5 < 40 && rock5Gone == false) {
    overRock5Count++;
    textSize(50);
    fill(255,244,79);
   text('STAY AWAY FROM ME!', 150, 250);
    
    if (overRock5Count > 250) {
      rock5Gone = true;
      startTime = millis();
      }
    }else if (overRock5Count > 0 ){
      overRock5Count--;
    }
     if (rock5Gone == true){
    textSize(50);
    fill(255,244,79);
    text('BYE!', 340, 250);
 
    if(millis() - startTime > 3000) {
     rock5Gone = false;
      overRock5Count = 0;
  }
      }
 
  drawCreature(creatureX, creatureY, size);

  creatureX = lerp(creatureX, mouseX, 0.06);
  creatureY = lerp(creatureY, mouseY, 0.06);
  

}




function drawSegment(x, y, s) {
  fill(255, 255, 255);
  circle(x, y, s);
}
function drawSegment1(a, b, c){
  fill(249,171,231);
  circle(a, b, c);
}
function drawSegment2(d, e, f){
  fill(225,169,246);
  circle(d, e, f);
}
function drawSegment3(g, h, i){
  fill(209,187,249);
  circle(g, h, i);
}
function drawSegment4(j, k, l){
  fill(198,199,255);
  circle(j, k, l);
}
function drawSegment5(m, n, o){
  fill(181,229,255);
  circle(m, n, o);
}
function drawSegmentg(a11, b11, c11){
  fill(13,78,23);
  circle(a11, b11, c11);
}

function drawSegmentr1(a22, b22, c22){
  fill(75,56,50);
  circle(a22, b22, c22);
}
function drawSegmentr2(a33, b33, c33){
  fill(41,23,0);
  circle(a33, b33, c33);
}


function drawCreature(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  let dy = abs(mouseY - 0);
  let dx = abs(mouseX - 0);
  
  let c = get(mouseX, mouseY);
  console.log(green(c));
  if (green(c) == 255 && mouseIsPressed) {
      let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4)    {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment(x1, y1, 25); 
    R = R;
  }   
  } else if ( green(c) == 255 && mouseIsPressed == false) {
    drawSegment(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment(210, sin(frameCount * 0.4) * 10, 24);
    
  }  else if ( red(c) == 13 && mouseIsPressed) {
      let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4)    {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegmentg(x1, y1, 25); 
    R = R;
  }   
  } else if ( red(c) == 13 && mouseIsPressed == false) {
    drawSegmentg(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegmentg(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegmentg(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegmentg(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegmentg(120, sin(frameCount * 0.3) * 15, 25);
    drawSegmentg(150, sin(frameCount * 0.1) * 13, 20);
    drawSegmentg(180, sin(frameCount * 0.2) * 12, 21);
    drawSegmentg(210, sin(frameCount * 0.4) * 10, 24);
    
    }else if ( red(c) == 75 && mouseIsPressed) {
      let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4)    {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegmentr1(x1, y1, 25); 
    R = R;
  }   
  } else if ( red(c) == 75 && mouseIsPressed == false) {
    drawSegmentr1(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegmentr1(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegmentr1(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegmentr1(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegmentr1(120, sin(frameCount * 0.3) * 15, 25);
    drawSegmentr1(150, sin(frameCount * 0.1) * 13, 20);
    drawSegmentr1(180, sin(frameCount * 0.2) * 12, 21);
    drawSegmentr1(210, sin(frameCount * 0.4) * 10, 24);
    
  } else if ( red(c) == 41 && mouseIsPressed) {
      let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4)    {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegmentr2(x1, y1, 25); 
    R = R;
  }   
  } else if ( red(c) == 41 && mouseIsPressed == false) {
    drawSegmentr2(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegmentr2(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegmentr2(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegmentr2(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegmentr2(120, sin(frameCount * 0.3) * 15, 25);
    drawSegmentr2(150, sin(frameCount * 0.1) * 13, 20);
    drawSegmentr2(180, sin(frameCount * 0.2) * 12, 21);
    drawSegmentr2(210, sin(frameCount * 0.4) * 10, 24);
  }
  else if (mouseIsPressed && dy<100) {
    let R = 80;
    for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment1(x1, y1, 25); 
    R = R;
  
 } }
  else if (mouseIsPressed && dy>100 && dy<200) {
  let R = 80;
  for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment2(x1, y1, 25); 
    R = R;
  } 
  } else if (mouseIsPressed && dy>200 && dy<300) {
   let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
     let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment3(x1, y1, 25); 
    R = R;
  } 
  }else if (mouseIsPressed && dy>300 && dy<400) {
   let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
     let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment4(x1, y1, 25); 
    R = R;
   }
  }else if (mouseIsPressed && dy>300 && dy<400) {
   let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
     let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment4(x1, y1, 25); 
    R = R;
    }
  }else if (mouseIsPressed && dy>400) {
   let R = 80;
   for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
     let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment5(x1, y1, 25); 
    R = R;
   }
  }
    else if(dy<100){
    drawSegment1(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment1(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment1(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment1(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment1(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment1(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment1(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment1(210, sin(frameCount * 0.4) * 10, 24);
   
    
  } else if(dy>100 && dy<200){
 
    drawSegment2(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment2(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment2(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment2(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment2(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment2(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment2(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment2(210, sin(frameCount * 0.4) * 10, 24);
    
  }else if(dy>200 && dy<300) {
    drawSegment3(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment3(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment3(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment3(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment3(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment3(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment3(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment3(210, sin(frameCount * 0.4) * 10, 24);
  
  }else if(dy>300 && dy<400) {
    drawSegment4(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment4(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment4(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment4(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment4(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment4(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment4(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment4(210, sin(frameCount * 0.4) * 10, 24);
    
  }else if(dy>400 && dy<500) {
    drawSegment5(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment5(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment5(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment5(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment5(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment5(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment5(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment5(210, sin(frameCount * 0.4) * 10, 24);
      pop();
  }

  

  if ( red(c) == 13 && size < 2) {
    size = size + 0.01; 
  } else if ( red(c) != 13 && size > 0.8) {
    size = size - 0.01;
  } else {
    size = size
  }
}

 