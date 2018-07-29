namespace Game {

    export class Rock extends MovingObjects {



        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


     
        move(): void {
            this.y += 5;

            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
                this.x = (Math.random() * ((crc2.canvas.width - 110) - (crc2.canvas.width - crc2.canvas.width + 100)) + (crc2.canvas.width - crc2.canvas.width + 100))
                stonesFaster++;           
            }
            if (stonesFaster > 5){
                this.y += 5.1;
                }
            if (stonesFaster > 10){
                this.y += 5.2;
                }
            if (stonesFaster > 20){
                this.y += 5.3;
                }
            if (stonesFaster > 40){
                this.y += 5.5;
                }
        }


        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgb(77, 77, 77)";
            crc2.fillStyle = "rgb(166, 166, 166)";
            crc2.lineTo(this.x + 35, this.y + 20);
            crc2.lineTo(this.x + 30, this.y + 50);
            crc2.lineTo(this.x + 10, this.y + 60);
            crc2.lineTo(this.x - 20, this.y + 55);
            crc2.lineTo(this.x - 30, this.y + 50);
            crc2.lineTo(this.x - 40, this.y + 25);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}