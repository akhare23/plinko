class Division{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,10,275,{isStatic:true});
        this.color = color(255);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,10,275);
        pop();
    }
}