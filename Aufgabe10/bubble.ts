namespace Aufgabe10 {

    export class Bubbles {
        x: number;
        y: number;
        r: number;

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