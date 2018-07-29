namespace Rafting {

    export class ToxicBird extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {
            this.y -= 4;

            if (this.y < -30) {
                this.y = Math.random() * (1000 + 800) + 800;
            }
        }

        draw(): void {

              //dünner ast;
               crc2.shadowColor ="rgba(0,0,0,0)";
               crc2.strokeStyle ="rgba(127,77,4,1)";
               crc2.lineWidth = 13;
               crc2.lineCap = "round";
               crc2.lineJoin = "miter";
               crc2.beginPath();
               crc2.moveTo(494,295);
               crc2.lineTo(529,272);
               crc2.stroke();

               //dicker ast;
               crc2.shadowColor ="rgba(0,0,0,0)";
               crc2.strokeStyle ="rgba(0,0,0,0)";
               crc2.lineWidth = 1;
               crc2.lineCap = "butt";
               crc2.lineJoin = "miter";
               crc2.beginPath();
               crc2.moveTo(442,259);
               crc2.lineTo(534,292);
               crc2.bezierCurveTo(539,294,542,300,540,305);
               crc2.lineTo(531,328);
               crc2.bezierCurveTo(530,334,524,336,519,334);
               crc2.lineTo(427,301);
               crc2.bezierCurveTo(421,299,419,293,421,288);
               crc2.lineTo(429,265);
               crc2.bezierCurveTo(431,259,437,257,442,259);
               crc2.closePath();
               crc2.stroke();
               crc2.shadowOffsetX = 15;
               crc2.shadowOffsetY = 15;
               crc2.shadowBlur = 0;
               crc2.shadowColor = "rgba(0,0,0,0)";
               crc2.fillStyle = "rgba(137,83,6,1)";
               crc2.fill();
        }
    }
}