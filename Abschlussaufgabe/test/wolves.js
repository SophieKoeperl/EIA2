var Main;
(function (Main) {
    class Wolf {
        //Woelfe werden mit einer id initialisiert um sie zu "identifizieren"
        constructor(_speed) {
            this.canWidth = canvas.width;
            this.width = 143;
            this.height = 75;
            this.speed = _speed;
            this.position();
        }
        position() {
            this.x = Math.random() * ((this.canWidth*1.6) - this.canWidth) + this.canWidth;
            this.y = Math.random() * (canvas.height-this.height);
        }
          
        //Bewegung von rechts nach links, dann Stop
        move() {
            this.x -= this.speed;
        }
        draw() {
             
            //hitbox
            Main.crc2.beginPath();
            Main.crc2.moveTo(this.x, this.y);
            Main.crc2.lineTo(this.x, this.y+this.height);
            Main.crc2.lineTo(this.x+this.width, this.y+this.height);
            Main.crc2.lineTo(this.x+this.width, this.y);
            Main.crc2.closePath();
            //Main.crc2.stroke();   //Hitbox anzeigen
 
            //Wolfkörper
            Main.crc2.beginPath();            
            Main.crc2.moveTo(this.x+40, this.y+25);
            Main.crc2.quadraticCurveTo(this.x+40+120,this.y+25-30, this.x+40+100, this.y+25+50);
            Main.crc2.quadraticCurveTo(this.x+40+80,this.y+25-20, this.x+40, this.y+25+50);
            Main.crc2.quadraticCurveTo(this.x+40+10,this.y+25+25, this.x+40, this.y+25);
             
            //Kopf         
            Main.crc2.lineTo(this.x+40-10, this.y+25-10);
            Main.crc2.quadraticCurveTo(this.x+40-20,this.y+25-20, this.x+40-25, this.y+25-15);
            Main.crc2.quadraticCurveTo(this.x+40-35,this.y+25-10, this.x+40-40, this.y+25);
            Main.crc2.quadraticCurveTo(this.x+40-40,this.y+25+15, this.x+40-30, this.y+25+10);
            Main.crc2.quadraticCurveTo(this.x+40-5,this.y+25-5, this.x+40-10, this.y+25-10);
 
            // Ohren
            Main.crc2.moveTo(this.x+40-10, this.y+25-10);
            Main.crc2.lineTo(this.x+40 -5, this.y+25-20);
            Main.crc2.lineTo(this.x+40 -15, this.y+25-15);
            Main.crc2.lineTo(this.x+40 -15, this.y+25-25);
            Main.crc2.lineTo(this.x+40 -20, this.y+25-18);
            Main.crc2.closePath();
 
            // Mund
            Main.crc2.moveTo(this.x+40-30, this.y+25+10);
            Main.crc2.lineTo(this.x+40-30, this.y+25+2);
            Main.crc2.lineTo(this.x+40-25, this.y+25+2);
            Main.crc2.lineTo(this.x+40-25, this.y+25-4);
            Main.crc2.lineTo(this.x+40-20, this.y+25-4);
 
            //Augen
            Main.crc2.moveTo(this.x+40-20, this.y+25-8);
            Main.crc2.arc(this.x+40-20,this.y+25-8,1.5,0*Math.PI,2*Math.PI);
             
            Main.crc2.moveTo(this.x+40-27, this.y+25-10);
            Main.crc2.arc(this.x+40-27,this.y+25-10,1.3,0*Math.PI,2*Math.PI);
 
            // Schwanz
            Main.crc2.moveTo(this.x+40+90, this.y+25);
            Main.crc2.lineTo(this.x+40+130, this.y+25-20);
            Main.crc2.lineTo(this.x+40+140, this.y+25-10);
            Main.crc2.lineTo(this.x+40+130, this.y+25-12);
            Main.crc2.lineTo(this.x+40+130, this.y+25-7);
            Main.crc2.lineTo(this.x+40+122, this.y+25-7);
            Main.crc2.lineTo(this.x+40+122, this.y+25-2);
 
            Main.crc2.fillStyle = '#696969';
            Main.crc2.fill();
 
            Main.crc2.closePath();
            Main.crc2.stroke();
             
        }
    }
    Main.Wolf = Wolf;
})(Main || (Main = {}));
//# sourceMappingURL=wolves.js.map