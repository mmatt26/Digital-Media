function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0, 0, 128);
  stroke(255);
  strokeWeight(3);
  fill(0, 128, 0);
  ellipse(100, 100, 105, 110);
  fill(255, 0, 0);
  beginShape();
  vertex(45, 85);
  vertex(85, 85);
  vertex(100, 45);
  vertex(115, 85);
  vertex(155, 85);
  vertex(120, 105);
  vertex(130, 145);
  vertex(100, 120);
  vertex(70, 145);
  vertex(80, 105);
  vertex(45, 85);
  endShape();
}
