function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  if(mouseIsPressed){
    background(0);
    textSize(16);
    fill(255);
    text('그대에게 가호가 함께하기를',mouseX,mouseY);
  }
  else{
	background(255)
  	textSize(16);
  	fill(0);
    text('수능 잘보세요',mouseX,mouseY);
  }
  textSize(100);
  fill(100);
  textAlign(CENTER)
  text('2016.11.17 기념',windowWidth/2,windowHeight/2);
}