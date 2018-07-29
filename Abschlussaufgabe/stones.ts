namespace Rafting {

    export class Stone extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {
            this.y += 6;


            if (this.y < 0) {
                this.y = Math.random() * (1000 + 800) + 800;
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
