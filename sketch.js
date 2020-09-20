var car,wall;
var speed,weight;

function setup(){

  createCanvas(1300,400);
  speed=random(50,90);
  weight=random(400,500);
  car=createSprite(70,200,40,40);
  car.velocityX=speed;
  wall=createSprite(1000,200,60,height/2);
  deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background("pink");  
  
 
  if(wall.x-car.x < (wall.width + car.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180)
    {
      shapeColour("red");
    }
    else if(deformation<100 && deformation>180)
    {
      shapeColour("yellow");
    }
    else if(deformation>100)
    {
      shapeColour("green");
    }


  }
  drawSprites();
}