namespace Aufgabe11 {

   export class Bubbles extends MovingObjects {
        radius: number;

        constructor() {
            super();    
        }
        
        position(): void {
            this.x = Math.random() * (300 - 150) + 150;
            this.y = Math.random() * 180;
        }
        
        colour(): void {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }
        // declare method without keyword function
        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 250;
            }

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(0,100,240,0.2)";
            crc2.stroke();
            crc2.fill();
            }
    }
}
