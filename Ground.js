class Ground{
    constructor(){
        this.body = Bodies.rectangle(240,790,480,10,{isStatic:true});
        this.color = color(255);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,480,10);
        pop();
    }
}