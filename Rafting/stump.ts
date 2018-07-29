namespace Game {

    export class Stump extends MovingObjects {



        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


     
        move(): void {
            this.y += 5;

            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
                this.x = (Math.random() * ((crc2.canvas.width - 620) - (crc2.canvas.width - crc2.canvas.width - 350)) + (crc2.canvas.width - crc2.canvas.width - 350))
                stonesFaster++;           
            }
            if (stonesFaster > 5){
                this.y += 5.5;
                }
            if (stonesFaster > 10){
                this.y += 6;
                }
            if (stonesFaster > 20){
                this.y += 6.5;
                }
            if (stonesFaster > 40){
                this.y += 7;
                }
        }


        draw(): void {
            //dünner ast;
            ;
            crc2.beginPath();
            crc2.moveTo(this.x + 494, this.y + 295);
            crc2.lineTo(this.x + 529, this.y + 272);
            crc2.stroke();

            //dicker ast;
            crc2.beginPath();
            crc2.moveTo(this.x + 442, this.y + 259);
            crc2.lineTo(this.x + 534, this.y + 292);
            crc2.bezierCurveTo(this.x + 539, this.y + 294, this.x + 542, this.y + 300, this.x + 540, this.y + 305);
            crc2.lineTo(this.x + 531, this.y + 328);
            crc2.bezierCurveTo(this.x + 530, this.y + 334, this.x + 524, this.y + 336, this.x + 519, this.y + 334);
            crc2.lineTo(this.x + 427, this.y + 301);
            crc2.bezierCurveTo(this.x + 421, this.y + 299, this.x + 419, this.y + 293, this.x + 421, this.y + 288);
            crc2.lineTo(this.x + 429, this.y + 265);
            crc2.bezierCurveTo(this.x + 431, this.y + 259, this.x + 437, this.y + 257, this.x + 442, this.y + 259);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#556B2F"; 
            crc2.fill();
        }
    }
}