var car, wall;
var speed, weight;
var incr = 0

function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="grey";

  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background(0,0,0);  
   incr = incr + 5;
   car.x = incr;

  if(wall.x - car.x < (car.width + wall.width)/2) 
  {
     var deformation =0.5 * weight * speed * speed/22509;
     if(deformation > 180)
     {
       car.shapeColor = "green";
       
     }

      if(deformation < 180 && deformation > 100)
      {
        car.shapeColor = "yellow";        
      }
      
      if(deformation < 100)
      {
        car.shapeColor = "red";
      }

  }

  drawSprites();
}