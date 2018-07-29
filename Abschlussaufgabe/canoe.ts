namespace Rafting {

    export class Boat extends MovingObjects {

        dx: number;
        mixerWidth: number = 300;
        mixerHight: number = 280;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _x;
            this.move();
        }

        move(): void {
            const speed = 10 * (600 / 800);
            let movement = 0;

            if (this.x > this.dx && this.x - this.dx > speed) movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed) movement = speed;

            this.x += movement;

            this.draw();
        }


        move_Boat(targetX: number): void {
            this.dx = targetX;
        }

        stop_Boat(): void {
            this.dx = this.x;
        }

        //Voegel fangen
        crash(_x: number, _y: number): boolean {
            if (_x > this.x && _x < (this.x + this.mixerWidth) && _y > this.y && _y < this.y + this.mixerHight) {
                return true;

            }
            return false;
        }

        
        
        draw(): void {

            //Kanu;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 457, this.y + 166);
            crc2.bezierCurveTo(this.x + 473, this.y + 166, this.x + 486, this.y + 212, this.x + 486, this.y + 268);
            crc2.bezierCurveTo(this.x + 486, this.y + 324, this.x + 473, this.y + 370, this.x + 457, this.y + 370);
            crc2.bezierCurveTo(this.x + 440, this.y + 370, this.x + 427, this.y + 324, this.x + 427, this.y + 268);
            crc2.bezierCurveTo(this.x + 427, this.y + 212, this.x + 440, this.y + 166, this.x + 457, this.y + 166);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(207,178,136,1)";
            crc2.fill();

            //Bug;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 457, this.y + 127);
            crc2.lineTo(this.x + 475, this.y + 191);
            crc2.lineTo(this.x + 438, this.y + 191);
            crc2.lineTo(this.x + 457, this.y + 127);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(207,178,136,1)";
            crc2.fill();

            //Heck;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 457, this.y + 409);
            crc2.lineTo(this.x + 437, this.y + 346);
            crc2.lineTo(this.x + 476, this.y + 346);
            crc2.lineTo(this.x + 457, this.y + 409);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(207,178,136,1)";
            crc2.fill();

            //Sitz;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,1)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 432, this.y + 283);
            crc2.lineTo(this.x + 480, this.y + 283);
            crc2.lineTo(this.x + 480, this.y + 299);
            crc2.lineTo(this.x + 432, this.y + 299);
            crc2.lineTo(this.x + 432, this.y + 283);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(8,8,8,1)";
            crc2.fill();

            //Körper;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,1)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 446, this.y + 264);
            crc2.lineTo(this.x + 469, this.y + 264);
            crc2.bezierCurveTo(this.x + 475, this.y + 264, this.x + 479, this.y + 268, this.x + 479, this.y + 274);
            crc2.lineTo(this.x + 479, this.y + 282);
            crc2.bezierCurveTo(this.x + 479, this.y + 288, this.x + 475, this.y + 292, this.x + 469, this.y + 292);
            crc2.lineTo(this.x + 446, this.y + 292);
            crc2.bezierCurveTo(this.x + 440, this.y + 292, this.x + 436, this.y + 288, this.x + 436, this.y + 282);
            crc2.lineTo(this.x + 436, this.y + 274);
            crc2.bezierCurveTo(this.x + 436, this.y + 268, this.x + 440, this.y + 264, this.x + 446, this.y + 264);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(128,21,21,1)";
            crc2.fill();

            //linker Arm;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(128,21,21,1)";
            crc2.lineWidth = 13;
            crc2.lineCap = "round";
            crc2.lineJoin = "round";
            crc2.beginPath();
            crc2.moveTo(this.x + 429, this.y + 262);
            crc2.lineTo(this.x + 442, this.y + 273);
            crc2.stroke();

            //rechter Arm;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(128,21,21,1)";
            crc2.lineWidth = 13;
            crc2.lineCap = "round";
            crc2.lineJoin = "round";
            crc2.beginPath();
            crc2.moveTo(this.x + 473, this.y + 274);
            crc2.lineTo(this.x + 486, this.y + 262);
            crc2.stroke();

            //Kopf;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 457, this.y + 254);
            crc2.bezierCurveTo(this.x + 464, this.y + 254, this.x + 470, this.y + 260, this.x + 470, this.y + 267);
            crc2.bezierCurveTo(this.x + 470, this.y + 274, this.x + 464, this.y + 280, this.x + 457, this.y + 280);
            crc2.bezierCurveTo(this.x + 450, this.y + 280, this.x + 444, this.y + 274, this.x + 444, this.y + 267);
            crc2.bezierCurveTo(this.x + 444, this.y + 260, this.x + 450, this.y + 254, this.x + 457, this.y + 254);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(255,243,187,1)";
            crc2.fill();

            //rechter Paddel;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(207,178,136,1)";
            crc2.lineWidth = 6;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 387, this.y + 300);
            crc2.lineTo(this.x + 445, this.y + 245);
            crc2.stroke();

            //rechter Paddel 2;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 394, this.y + 295);
            crc2.lineTo(this.x + 396, this.y + 296);
            crc2.bezierCurveTo(this.x + 399, this.y + 300, this.x + 399, this.y + 305, this.x + 396, this.y + 309);
            crc2.lineTo(this.x + 381, this.y + 324);
            crc2.bezierCurveTo(this.x + 377, this.y + 327, this.x + 372, this.y + 327, this.x + 368, this.y + 324);
            crc2.lineTo(this.x + 367, this.y + 322);
            crc2.bezierCurveTo(this.x + 363, this.y + 319, this.x + 363, this.y + 313, this.x + 367, this.y + 309);
            crc2.lineTo(this.x + 381, this.y + 295);
            crc2.bezierCurveTo(this.x + 385, this.y + 291, this.x + 391, this.y + 291, this.x + 394, this.y + 295);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(207,178,136,1)";
            crc2.fill();

            //linker Paddel;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(207,178,136,1)";
            crc2.lineWidth = 5;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 481, this.y + 255);
            crc2.lineTo(this.x + 516, this.y + 295);
            crc2.stroke();  
            
            //linker Paddel 2;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.lineWidth = 1;
            crc2.lineCap = "butt";
            crc2.lineJoin = "miter";
            crc2.beginPath();
            crc2.moveTo(this.x + 510, this.y + 290);
            crc2.lineTo(this.x + 510, this.y + 290);
            crc2.bezierCurveTo(this.x + 514, this.y + 287, this.x + 520, this.y + 287, this.x + 524, this.y + 292);
            crc2.lineTo(this.x + 534, this.y + 304);
            crc2.bezierCurveTo(this.x + 537, this.y + 308, this.x + 537, this.y + 314, this.x + 533, this.y + 318);
            crc2.lineTo(this.x + 533, this.y + 318);
            crc2.bezierCurveTo(this.x + 528, this.y + 321, this.x + 522, this.y + 321, this.x + 519, this.y + 317);
            crc2.lineTo(this.x + 508, this.y + 304);
            crc2.bezierCurveTo(this.x + 505, this.y + 300, this.x + 505, this.y + 294, this.x + 510, this.y + 290);
            crc2.closePath();
            crc2.stroke();
            crc2.shadowOffsetX = 15;
            crc2.shadowOffsetY = 15;
            crc2.shadowBlur = 0;
            crc2.shadowColor = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgba(207,178,136,1)";
            crc2.fill();

        }
    }

}