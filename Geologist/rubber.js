class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      
      this.x =x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      
       
      
      World.add(world, this.body);
    }
    display(){
    
   
      push();
      translate (this.body.position.x,this.body.position.y);
      
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0 ,0,this.r,this.r);
      pop();
    }
  };
  