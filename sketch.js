var bullet,thickness,wall;
var weight;
var bulletspeed;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 5);
  
  wall=createSprite(1200,200,thickness,height/2);
  wall=color(80,80,80);
  bulletspeed=random(223,321);
  weight=random(20,52);
  thickness=random(22,83);
}
if(hasCollided( bullet,wall))
{
  bullet.velocity=0;
  var damage=damage = 0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness);
   
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10);
  {
    wall.shapeColor=color(0,255,0);
  }
}
function draw() {
  background(255,255,255); 
  bullet.velocityX = bulletspeed ;
  hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall);
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
     return true;
  }
    return false;
}

