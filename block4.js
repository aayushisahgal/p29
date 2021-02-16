class Block4{
    constructor(x,y,width,height){
        var options={
            restitution :0.1,
            friction :1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.box5im=loadImage('images/block6.jpg');
        World.add(world,this.body);
    }

    display(){
        //if(this.body.speed < 3){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.box5im,0,0,this.width,this.height);
        pop();
        //}

        /*else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity -105;
            tint(255,this.Visiblity);
            image(this.box5im, this.body.position.x, this.body.position.y, 50, 50);
             pop();
                     }*/
}

}