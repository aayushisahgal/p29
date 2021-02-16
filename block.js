class Block{
    constructor(x,y,width,height){
        var options={
            restitution :0.1,
            friction :1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.box1im=loadImage('images/block1.jpg');
        World.add(world,this.body);
    }

    display(){
      //  console.log(this.body.speed);
       // if(this.body.speed < 3){
        var pos=this.body.position;
        var angle=this.body.angle;
        //strokeWeight(5);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.box1im,0,0,this.width,this.height);
        pop();

         //  }
          /* else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.box1im, this.body.position.x, this.body.position.y,this.width,this.height);
             pop();
           }
           
         }
        
        
        }*/
    }
}
