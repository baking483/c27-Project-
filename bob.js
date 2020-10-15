class Bob{
    constructor(x,y){
        var options={
            'restitution':0.2,
            
            'density':1.2
        }
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 50;
        
        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        fill("maroon");
        stroke("lavender");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

   
}