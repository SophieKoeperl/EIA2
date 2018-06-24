namespace Aufgabe10 {

    export class Bigfish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        // declare method without keyword function
        move(): void {
            this.x += 1;
            
            if (this.x > 660) {
                this.x = -75;
            }
        }

        draw(): void {
            crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.bezierCurveTo(this.x + 120, this.y + 110, this.x + 130, this.y + -60, this.x, this.y + 30);
        crc2.lineTo(this.x, this.y);
        crc2.fillStyle = "rgba(238,59,59)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        }
    }
    
}