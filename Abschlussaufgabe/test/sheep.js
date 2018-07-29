var Main;
(function (Main) {
    class Sheep {       
        constructor() {
            this.moveUp = false;
            this.width = 85;
            this.height = 75;
            this.hitBoxOffset = 0;
            this.canHeight = canvas.height;
            this.speed = 3;
            this.position();
        }
        position(){
            this.x = canvas.width*0.15;
            this.y = (this.canHeight/2) - (this.height/2);
        }
            
        //Wenn Schaf "Canvas-Decke" erreicht, dann bewege es nach unten. Wenn Boden erreicht, bewege es nach oben.
        move() {
            if(this.y >= this.canHeight-this.height){
                this.moveUp = true;
            }
            else
                if(this.y <= 0){
                    this.moveUp = false;
                }
            if(this.moveUp == false){
                this.y += this.speed;
            }else {
                this.y -= this.speed;
            }
        }
                 
        draw() {
            //hitbox
            Main.crc2.beginPath();
            Main.crc2.moveTo(this.x, this.y);
            Main.crc2.lineTo(this.x, this.y+this.height);
            Main.crc2.lineTo(this.x+this.width, this.y+this.height);
            Main.crc2.lineTo(this.x+this.width, this.y);
            Main.crc2.closePath();
            //Main.crc2.stroke();                               //Hitbox anzeigen
              
            //Schaf
            Main.crc2.beginPath();
            Main.crc2.moveTo(this.x+20, this.y+20);
            Main.crc2.quadraticCurveTo(this.x,this.y+20, this.x+5, this.y+35);
            Main.crc2.quadraticCurveTo(this.x-5,this.y+50, this.x +15, this.y + 53);
            Main.crc2.quadraticCurveTo(this.x +25,this.y +  90-45+20, this.x + 100-85+20, this.y + 83-45+20);
            Main.crc2.quadraticCurveTo(this.x +45,this.y +  90-45+20, this.x + 120-85+20, this.y + 79-45+20);
            Main.crc2.quadraticCurveTo(this.x +70,this.y +  79-45+20, this.x + 130-85+20, this.y + 60-45+20);
            Main.crc2.quadraticCurveTo(this.x +65, this.y + 50-45+20, this.x + 120-85+20, this.y + 45-45+20);
            Main.crc2.quadraticCurveTo(this.x +45,this.y +  30-45+20, this.x + 100-85+20, this.y + 42-45+20);
            Main.crc2.quadraticCurveTo(this.x +25, this.y + 30-45+20, this.x + 80-85+20, this.y + 45-45+20);
            Main.crc2.moveTo(this.x + 55, this.y +20);
            Main.crc2.lineTo(this.x + 65,this.y+ 15);
                    
            Main.crc2.quadraticCurveTo(this.x +73, this.y + 50-45+20, this.x + 140-85+20, this.y + 50-45+20);
            Main.crc2.quadraticCurveTo(this.x +85, this.y + 55-45+20, this.x + 150-85+20, this.y + 43-45+20);
            Main.crc2.quadraticCurveTo(this.x +85, this.y + 25-45+20, this.x + 140-85+20, this.y + 25-45+20);
            Main.crc2.quadraticCurveTo(this.x +60, this.y + 22-45+20, this.x + 130-85+20, this.y + 40-45+20);
                    
            Main.crc2.moveTo(this.x + 75-85+20, this.y + 77-45+20);
            Main.crc2.lineTo(this.x + 70-85+20,this.y + 100-45+20);
            Main.crc2.moveTo(this.x + 80-85+20, this.y + 78-45+20);
            Main.crc2.lineTo(this.x + 90-85+20,this.y + 98-45+20);
  
            Main.crc2.moveTo(this.x + 120-85+20, this.y + 79-45+20);
            Main.crc2.lineTo(this.x + 115-85+20,this.y + 100-45+20);
            Main.crc2.moveTo(this.x + 122-85+20, this.y + 78-45+20);
            Main.crc2.lineTo(this.x + 130-85+20,this.y + 98-45+20);
              
            Main.crc2.moveTo(this.x + 138-85+20, this.y + 35-45+20);
            Main.crc2.arc(this.x + 138-85+20,this.y + 35-45+20,1,0*Math.PI,1.5*Math.PI);
            Main.crc2.moveTo(this.x + 144-85+20, this.y + 33-45+20);
            Main.crc2.arc(this.x + 144-85+20,this.y + 33-45+20,1,0*Math.PI,1.5*Math.PI);
                           
            Main.crc2.moveTo(this.x + 140-85+20, this.y + 25-45+20);
            Main.crc2.quadraticCurveTo(this.x +165-85+20, this.y + 30-45+20, this.x + 145-85+20, this.y + 28-45+20);
  
            Main.crc2.moveTo(this.x + 130-85+20, this.y + 27-45+20);
            Main.crc2.quadraticCurveTo(this.x +110-85+20, this.y + 40-45+20, this.x + 128-85+20, this.y + 30-45+20);
  
            Main.crc2.fillStyle = '#ffffff';
            Main.crc2.fill();
            Main.crc2.closePath();
            Main.crc2.strokeStyle = '#000000';
            Main.crc2.stroke();
             
             
             
        }
    }
    Main.Sheep = Sheep;
})(Main || (Main = {}));
//# sourceMappingURL=sheep.js.map