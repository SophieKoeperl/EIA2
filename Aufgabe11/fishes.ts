namespace Aufgabe11 {

    export class Fish extends MovingObjects {

        constructor() {
            super();
        }

        position(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 350;
        }

        colour(): void {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }

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
    
    

    export class Bigfish extends MovingObjects {

        constructor() {
            super();

        }
        
        position(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 350;
        }

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
