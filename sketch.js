const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions= [];
var divisionHeight=300;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function draw (){
for(var k=0; k<=width ; k= k+80){
divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight ));



}

for(var j= 40; j <=width; j=j+50){

  plinkos.push(new plinko(j,75));
}

for(var j= 15; j <=width; j=j+50){

  plinkos.push(new plinko(j,175));
}


for(var j= 40; j <=width; j=j+90){

  particle.push(new particle(j,75));
}

for(var j= 0; j < particles.length; j++){

  particles[j].display();
}
for(var k= 0; k <divisions; k++){

  divisions[k].display();
}






}