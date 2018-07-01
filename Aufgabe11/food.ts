namespace Aufgabe11 {

    export class Food extends MovingObjects {

        border: number;

        constructor() {
            super();
            this.border = Math.random() * (600 - 640) + 640;
        }

        colour(): void {
            this.r = 300;
            this.g = 200;
            this.b = 90;
        }

        move(): void {
            this.y += 1;
            
            if (this.y > this.border) {
                this.y = this.border;    
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.fill();
            crc2.stroke();
        }
    }

}