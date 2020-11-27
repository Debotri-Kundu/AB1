class Pig{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,

          }
        this.body=Bodies.rectangle(x,y,60,60,options);
        this.width=60
        this.height=60
        World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}