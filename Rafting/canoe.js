var Game;
(function (Game) {
    class Canoe extends Game.MovingObjects {
        constructor(_x, _y, _r) {
            super(_x, _y);
            this.boatWidth = 80;
            this.boatHight = 250;
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.dx = _x;
            this.move();
        }
        move() {
            const speed = 20 * (600 / 800);
            let movement = 0;
            if (this.x > this.dx && this.x - this.dx > speed)
                movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed)
                movement = speed;
            this.x += movement;
            this.draw();
        }
        move_Canoe(targetX) {
            this.dx = targetX;
        }
        stop_Canoe() {
            this.dx = this.x;
        }
        checkIfInside(_x, _y) {
            if (_x > this.x + 420 && _x < (this.x + 420 + this.boatWidth) && _y > this.y + 100 && _y < this.y + 100 + this.boatHight) {
                return true;
            }
            return false;
        }
        draw() {
            //Kanu;
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 457, this.y + 166);
            Game.crc2.bezierCurveTo(this.x + 473, this.y + 166, this.x + 486, this.y + 212, this.x + 486, this.y + 268);
            Game.crc2.bezierCurveTo(this.x + 486, this.y + 324, this.x + 473, this.y + 370, this.x + 457, this.y + 370);
            Game.crc2.bezierCurveTo(this.x + 440, this.y + 370, this.x + 427, this.y + 324, this.x + 427, this.y + 268);
            Game.crc2.bezierCurveTo(this.x + 427, this.y + 212, this.x + 440, this.y + 166, this.x + 457, this.y + 166);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.fillStyle = "rgba(207,178,136,1)";
            Game.crc2.fill();
            //Bug;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,0)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 457, this.y + 127);
            Game.crc2.lineTo(this.x + 475, this.y + 191);
            Game.crc2.lineTo(this.x + 438, this.y + 191);
            Game.crc2.lineTo(this.x + 457, this.y + 127);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(207,178,136,1)";
            Game.crc2.fill();
            //Heck;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,0)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 457, this.y + 409);
            Game.crc2.lineTo(this.x + 437, this.y + 346);
            Game.crc2.lineTo(this.x + 476, this.y + 346);
            Game.crc2.lineTo(this.x + 457, this.y + 409);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(207,178,136,1)";
            Game.crc2.fill();
            //Sitz;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,1)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 432, this.y + 283);
            Game.crc2.lineTo(this.x + 480, this.y + 283);
            Game.crc2.lineTo(this.x + 480, this.y + 299);
            Game.crc2.lineTo(this.x + 432, this.y + 299);
            Game.crc2.lineTo(this.x + 432, this.y + 283);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(8,8,8,1)";
            Game.crc2.fill();
            //Körper;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,1)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 446, this.y + 264);
            Game.crc2.lineTo(this.x + 469, this.y + 264);
            Game.crc2.bezierCurveTo(this.x + 475, this.y + 264, this.x + 479, this.y + 268, this.x + 479, this.y + 274);
            Game.crc2.lineTo(this.x + 479, this.y + 282);
            Game.crc2.bezierCurveTo(this.x + 479, this.y + 288, this.x + 475, this.y + 292, this.x + 469, this.y + 292);
            Game.crc2.lineTo(this.x + 446, this.y + 292);
            Game.crc2.bezierCurveTo(this.x + 440, this.y + 292, this.x + 436, this.y + 288, this.x + 436, this.y + 282);
            Game.crc2.lineTo(this.x + 436, this.y + 274);
            Game.crc2.bezierCurveTo(this.x + 436, this.y + 268, this.x + 440, this.y + 264, this.x + 446, this.y + 264);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(128,21,21,1)";
            Game.crc2.fill();
            //linker Arm;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(128,21,21,1)";
            Game.crc2.lineWidth = 13;
            Game.crc2.lineCap = "round";
            Game.crc2.lineJoin = "round";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 429, this.y + 262);
            Game.crc2.lineTo(this.x + 442, this.y + 273);
            Game.crc2.stroke();
            //rechter Arm;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(128,21,21,1)";
            Game.crc2.lineWidth = 13;
            Game.crc2.lineCap = "round";
            Game.crc2.lineJoin = "round";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 473, this.y + 274);
            Game.crc2.lineTo(this.x + 486, this.y + 262);
            Game.crc2.stroke();
            //Kopf;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,0)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 457, this.y + 254);
            Game.crc2.bezierCurveTo(this.x + 464, this.y + 254, this.x + 470, this.y + 260, this.x + 470, this.y + 267);
            Game.crc2.bezierCurveTo(this.x + 470, this.y + 274, this.x + 464, this.y + 280, this.x + 457, this.y + 280);
            Game.crc2.bezierCurveTo(this.x + 450, this.y + 280, this.x + 444, this.y + 274, this.x + 444, this.y + 267);
            Game.crc2.bezierCurveTo(this.x + 444, this.y + 260, this.x + 450, this.y + 254, this.x + 457, this.y + 254);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(255,243,187,1)";
            Game.crc2.fill();
            //rechter Paddel;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(207,178,136,1)";
            Game.crc2.lineWidth = 6;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 387, this.y + 300);
            Game.crc2.lineTo(this.x + 445, this.y + 245);
            Game.crc2.stroke();
            //rechter Paddel 2;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,0)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 394, this.y + 295);
            Game.crc2.lineTo(this.x + 396, this.y + 296);
            Game.crc2.bezierCurveTo(this.x + 399, this.y + 300, this.x + 399, this.y + 305, this.x + 396, this.y + 309);
            Game.crc2.lineTo(this.x + 381, this.y + 324);
            Game.crc2.bezierCurveTo(this.x + 377, this.y + 327, this.x + 372, this.y + 327, this.x + 368, this.y + 324);
            Game.crc2.lineTo(this.x + 367, this.y + 322);
            Game.crc2.bezierCurveTo(this.x + 363, this.y + 319, this.x + 363, this.y + 313, this.x + 367, this.y + 309);
            Game.crc2.lineTo(this.x + 381, this.y + 295);
            Game.crc2.bezierCurveTo(this.x + 385, this.y + 291, this.x + 391, this.y + 291, this.x + 394, this.y + 295);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(207,178,136,1)";
            Game.crc2.fill();
            //linker Paddel;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(207,178,136,1)";
            Game.crc2.lineWidth = 5;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 481, this.y + 255);
            Game.crc2.lineTo(this.x + 516, this.y + 295);
            Game.crc2.stroke();
            //linker Paddel 2;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.strokeStyle = "rgba(0,0,0,0)";
            Game.crc2.lineWidth = 1;
            Game.crc2.lineCap = "butt";
            Game.crc2.lineJoin = "miter";
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 510, this.y + 290);
            Game.crc2.lineTo(this.x + 510, this.y + 290);
            Game.crc2.bezierCurveTo(this.x + 514, this.y + 287, this.x + 520, this.y + 287, this.x + 524, this.y + 292);
            Game.crc2.lineTo(this.x + 534, this.y + 304);
            Game.crc2.bezierCurveTo(this.x + 537, this.y + 308, this.x + 537, this.y + 314, this.x + 533, this.y + 318);
            Game.crc2.lineTo(this.x + 533, this.y + 318);
            Game.crc2.bezierCurveTo(this.x + 528, this.y + 321, this.x + 522, this.y + 321, this.x + 519, this.y + 317);
            Game.crc2.lineTo(this.x + 508, this.y + 304);
            Game.crc2.bezierCurveTo(this.x + 505, this.y + 300, this.x + 505, this.y + 294, this.x + 510, this.y + 290);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.shadowOffsetX = 15;
            Game.crc2.shadowOffsetY = 15;
            Game.crc2.shadowBlur = 0;
            Game.crc2.shadowColor = "rgba(0,0,0,0)";
            Game.crc2.fillStyle = "rgba(207,178,136,1)";
            Game.crc2.fill();
        }
    }
    Game.Canoe = Canoe;
})(Game || (Game = {}));
//# sourceMappingURL=canoe.js.map