function setup() {
  createCanvas(200, 100);
}

function draw() {
  background(0);
  noStroke();
  fill(235, 255, 0);
  arc(50, 50, 85, 85, PI + QUARTER_PI, PI - QUARTER_PI, PIE);
  fill(245, 50, 0);
  arc(150, 50, 75, 75, PI, 0, OPEN);
  rect(112.5, 50, 75, 40);
  fill(255);
  ellipse(130, 50, 22, 22);
  fill(0, 0, 245);
  ellipse(130, 50, 15, 15);
  fill(255);
  ellipse(165, 50, 22, 22);
  fill(0, 0, 245);
  ellipse(165, 50, 15, 15);
}
