class Roof{
    constructor(){
        this.body=Bodies.rectangle(400,40,600,10,{isStatic:true});
        this.width=600;
        this.height=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("lavender");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}