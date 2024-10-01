function setup() {
  leinwand = createCanvas(windowWidth, windowHeight);
  leinwand.position(0,0); //links oben
  leinwand.style("z-index","-1");
  fill(0,0,100,20);
  //Kommentar
  noStroke();

  //background(153,255,255);
}

function draw() {

  circle(mouseX,mouseY,20);
}