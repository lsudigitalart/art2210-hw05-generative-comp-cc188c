let colors;
let randCol;
let currentColors; 

function setup() {
  createCanvas (windowWidth, windowHeight);
   colors = [
     color(197, 197, 193),
     color(212, 85, 120),
     color(83, 175, 216),
     color(250, 234, 121)
   ];
   randCol = random(colors);
  currentColors = subset(colors, 0, colors.length);
}

function draw() {
  const holdInterval = 30; 

  if (mouseIsPressed && frameCount % holdInterval === 0) {
   
  currentColors = shuffle(subset(colors, 0, colors.length));
  }
  noStroke();
  background(255); 
  //gray
  if (mouseIsPressed) {
    fill(currentColors[0]);
  } else {
    fill(197,197,193);
  }
  rect(80, 0, 550, 300);
  //pink
  noStroke();
  if ( mouseIsPressed ) {
    fill(currentColors[1]);
  } else {
    fill(212,85,120);
  }
  rect(80,300,550,300);
  //blue
  noStroke();
  if ( mouseIsPressed ) {
    fill(currentColors[2]);
  } else {
    fill(83,175,216);
  }
  rect(630,0,550,600);
  //yellow
  noStroke();
  if ( mouseIsPressed ) {
    fill(currentColors[3]);
  } else {
    fill(250,234,121);
  }
  rect(630,-300,550,600);
}
