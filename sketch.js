var fixedrect, movingrect;
var ob1, ob2, ob3;





function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(200,200,80,50);
  fixedrect.shapeColor = ("red");
  movingrect.shapeColor = ("black");
  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = ("blue");
  ob2 = createSprite(300,100,50,50);
  ob2.shapeColor = ("yellow");
  ob3 = createSprite(500,100,50,50);
  ob3.shapeColor = ("green");
}

function draw() {
  background(255,0,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(isTouching(movingrect,ob1)||isTouching(movingrect,ob2)) {
  text("The objects are touching",400,50)
  }
  drawSprites();
}