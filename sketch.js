var sun ;
var mercury ;
var venus ;
var earth ;
var mars ;
var jupiter ;
var saturn ;
var uranus ;
var neptune ;

function setup() {
  createCanvas(1500,1200);
  sun = createSprite(100,600,50,50);
  sun.shapeColor = "yellow";
  mercury = createSprite(260,600,50,50);
  venus = createSprite(410,600,50,50);
  venus.shapeColor = "yellow";
  earth = createSprite(560,600,50,50);
  earth.shapeColor = "green";
  mars = createSprite(710,600,50,50);
  mars.shapeColor = "red";
  jupiter = createSprite(860,600,50,50); 
  jupiter.shapeColor = "red";
  saturn = createSprite(1010,600,50,50);
  saturn.shapeColor = "gold";
  uranus = createSprite(1160,600,50,50);
  //uranus.shapeColor = "blue";
  neptune = createSprite(1300,600,50,50);
  neptune.shapeColor= "blue" ;
}

function draw() {
  background("black");  

mercury.velocityX= -0.2 ;
mercury.velocityY= 0.5 ;
venus.velocityX= -0.2 ;
venus.velocityY= 0.5 ;
earth.velocityX= -0.2 ;
earth.velocityY= 0.5 ;
mars.velocityX= -0.2 ;
mars.velocityY= 0.5 ;
jupiter.velocityX= -0.2 ;
jupiter.velocityY= 0.5 ;
saturn.velocityX= -0.2 ;
saturn.velocityY= 0.5 ;
uranus.velocityX= -0.2 ;
uranus.velocityY= 0.5 ;
neptune.velocityX= -0.2 ;
neptune.velocityY= 0.5 ;
//createEdgeSprites();

 
if(frameCount % 20  === 0){

  sun.height = sun.height + 17 ;
  sun.width = sun.width  + 17 ;
  sun.x = sun.x + 20 ;
  sun.y = sun.y  + 10
}

if (collide(mercury , sun)){
mercury.visible = false;
}
if (collide(venus , sun)){
  venus.visible = false;
  }
  if (collide(earth , sun)){
    earth.visible = false;
    }
  if (collide(mars , sun)){
     mars.visible = false;
  }
  if (collide(jupiter , sun)){
    jupiter.visible = false;
  }
  if (collide(saturn , sun)){
    saturn.visible = false;
  }
  if (collide(uranus , sun)){
    uranus.visible = false;
  }
  if (collide(neptune , sun)){
     neptune.visible = false;
  }

  if(neptune.visible === false){
    sun.visible = false ; 
    text("THE SOLAR SYSTEM HAS BEEN DESTROYED",750,600);
    //textColor("white") ;
     //textSize(200);

  }
  drawSprites();
}