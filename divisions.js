class Divisions {
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }    
        this.body = bodies.rectangle(x,y,w,h, options);
        this.w = this.w;
        this.h = this.h;
        World.add(world, this.body);
    }
    display()
{
    var pos = this .body.positions;
    rectMode(CENTER);
    fill("white");
    rect(pos.x , pos.y, this.w, thish.h);
}}