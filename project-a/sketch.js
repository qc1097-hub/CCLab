let creatureX, creatureY;
let size = 1;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  
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
  strokeWeight(3);
  
   for(let i=0; i<2; i++){
    for(let j=0; j<3; j++){
    
      circle(i*400+150, j*220+30, 10);
      circle(i*400+150, j*220+55, 10);
      circle(i*400+150, j*220+80, 10);
     
      circle(i*300+390, j*300+100, 10);
      circle(i*300+390, j*300+125, 10);
      circle(i*300+390, j*300+150, 10);
      
    }
     
   }
    circle(250, 400, 30);
    circle(300, 150, 40);
    
    
    noStroke();

  fill(13,77,23);
    
    for(let i=0; i<3; i++){
    
    //seaweed1
    
  beginShape();
  curveVertex(i*300+100, 500);
  curveVertex(i*300+32, 500);

  curveVertex(i*300+30, 220);
  curveVertex(i*300+50, 420);


  curveVertex(i*300+50, 500);
  curveVertex(i*300+60, 500);
  endShape();
  
      
    //seaweed2
  beginShape();
  curveVertex(i*600+130, 500);
  curveVertex(i*600+62, 500);

  curveVertex(i*600+60, 330);
  curveVertex(i*600+80, 530);


  curveVertex(i*600+60, 500);
  curveVertex(i*600+60, 500);
  endShape();
    
    //seaweed3
  beginShape(); 
  curveVertex(i*300+150, 500);
  curveVertex(i*300+82, 500);

  curveVertex(i*300+80, 90);
  curveVertex(i*300+100, 390);

  curveVertex(i*300+100, 500);
  curveVertex(i*300+110, 500);
  endShape();

    
    //seewead4

  beginShape();
  curveVertex(i*400+200, 500);
  curveVertex(i*400+132, 500);

  curveVertex(i*400+130, 270);
  curveVertex(i*400+150, 470);


  curveVertex(i*400+150, 500);
  curveVertex(i*400+160, 500);
  endShape();
    }
 
    
    //seaweed5
  beginShape();  
  curveVertex(820, 500);
  curveVertex(752, 500);

  curveVertex(750, 30);
  curveVertex(770, 330);


  curveVertex(770, 500);
  curveVertex(780, 500);
  endShape();
    
    
  //rocks
    for(j=0; j<9; j++){
  noStroke();
  fill(75,56,50);
  beginShape();
  vertex(j*340+53, 500);
  vertex(j*340+45, 480);
  vertex(j*340+64, 460);
  vertex(j*340+90, 455);
  vertex(j*340+110, 480);
  vertex(j*340+100, 500);
  endShape(CLOSE); 
      
  fill(41,23,0);
  beginShape();
  vertex(100, 500);
  vertex(80, 450);
  vertex(120, 370);
  vertex()
      
  fill(41,23,0);
  beginShape();
  vertex(j*400+100, 500);
  vertex(j*400+80, 470);
  vertex(j*400+90, 420);
  vertex(j*400+160, 430);
  vertex(j*400+180, 470);
  vertex(j*400+170, 500);
  endShape(CLOSE);
      
    }
 
  drawCreature(creatureX, creatureY, size);

  creatureX = lerp(creatureX, mouseX, 0.06);
  creatureY = lerp(creatureY, mouseY, 0.06);
}

function drawSegment(x, y, s) {
  fill(255);
  circle(x, y, s);
}
function drawSegment1(a, b, c){
  fill(84,165,213);
  circle(a, b, c);
}
function drawSegment2(d, e, f){
  fill(56,146,198);
  circle(d, e, f);
}
function drawSegment3(g, h, i){
  fill(215,233,245);
  circle(g, h, i);
}
function drawSegment4(j, k, l){
  fill(182,213,235);
  circle(j, k, l);
}
function drawSegment5(m, n, o){
  fill(127,186,220);
  circle(m, n, o);
}




function drawCreature(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  let dy = abs(mouseY - 0);
  let dx = abs(mouseX - 0);
  console.log(dy);
  if (dy > 300 && size < 3) {
    size = size + 0.01; 
  } else if (dy < 300 && size > 0.8) {
    size = size - 0.01;
  } else {
    size = size
  }

  noStroke();
  
 if (mouseIsPressed && dy<100) {
  let R = 80;
  for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
    let x1 = R * cos(angle + frameCount / 15);
    let y1 = R * sin(angle + frameCount / 15);
    drawSegment1(x1, y1, 25); 
    R = R;
  } 
 } 
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
    
  }else{
    drawSegment(0,   sin(frameCount * 0.2) * 20, 25);
    drawSegment(30,  sin(frameCount * 0.1) * 12, 19);
    drawSegment(60,  sin(frameCount * 0.4) * 10, 23);
    drawSegment(90,  sin(frameCount * 0.5) * 10, 18);
    drawSegment(120, sin(frameCount * 0.3) * 15, 25);
    drawSegment(150, sin(frameCount * 0.1) * 13, 20);
    drawSegment(180, sin(frameCount * 0.2) * 12, 21);
    drawSegment(210, sin(frameCount * 0.4) * 10, 24);}

  pop();
}