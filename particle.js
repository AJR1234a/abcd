class particle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.elipse(x,y,10,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    this.body=Bodies.circle(x,y,this.r,options);
    this.colour=colour(random(0,255),random(0,255),random(0,255));
    World.add(world.this.body);
    }

  };
