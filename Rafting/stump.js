var Game;
(function (Game) {
    class Stump extends Game.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 5;
            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
                this.x = (Math.random() * ((Game.crc2.canvas.width - 620) - (Game.crc2.canvas.width - Game.crc2.canvas.width - 350)) + (Game.crc2.canvas.width - Game.crc2.canvas.width - 350));
                Game.stonesFaster++;
            }
            if (Game.stonesFaster > 5) {
                this.y += 5.5;
            }
            if (Game.stonesFaster > 10) {
                this.y += 6;
            }
            if (Game.stonesFaster > 20) {
                this.y += 6.5;
            }
            if (Game.stonesFaster > 40) {
                this.y += 7;
            }
        }
        draw() {
            //dünner ast;
            ;
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 494, this.y + 295);
            Game.crc2.lineTo(this.x + 529, this.y + 272);
            Game.crc2.stroke();
            //dicker ast;
            Game.crc2.beginPath();
            Game.crc2.moveTo(this.x + 442, this.y + 259);
            Game.crc2.lineTo(this.x + 534, this.y + 292);
            Game.crc2.bezierCurveTo(this.x + 539, this.y + 294, this.x + 542, this.y + 300, this.x + 540, this.y + 305);
            Game.crc2.lineTo(this.x + 531, this.y + 328);
            Game.crc2.bezierCurveTo(this.x + 530, this.y + 334, this.x + 524, this.y + 336, this.x + 519, this.y + 334);
            Game.crc2.lineTo(this.x + 427, this.y + 301);
            Game.crc2.bezierCurveTo(this.x + 421, this.y + 299, this.x + 419, this.y + 293, this.x + 421, this.y + 288);
            Game.crc2.lineTo(this.x + 429, this.y + 265);
            Game.crc2.bezierCurveTo(this.x + 431, this.y + 259, this.x + 437, this.y + 257, this.x + 442, this.y + 259);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.fillStyle = "#556B2F";
            Game.crc2.fill();
        }
    }
    Game.Stump = Stump;
})(Game || (Game = {}));
//# sourceMappingURL=stump.js.map