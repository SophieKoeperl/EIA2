namespace Aufgabe10 {

    export class Fish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        // declare method without keyword function
        move(): void {
            this.x -= 1.5;
            
            if (this.x < 1) {
                this.x = 650;
            }
        }

        draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.bezierCurveTo(this.x + - 80, this.y + - 60, this.x + - 80, this.y + 30, this.x, this.y + -20);
        crc2.lineTo(this.x, this.y);
        crc2.fillStyle = "rgba(150,255,200)";     
        crc2.fill();
        crc2.closePath();
            crc2.stroke();
        }
    }
    
}