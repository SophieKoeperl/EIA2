var Game;
(function (Game) {
    class Rock extends Game.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 5;
            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
                this.x = (Math.random() * ((Game.crc2.canvas.width - 110) - (Game.crc2.canvas.width - Game.crc2.canvas.width + 100)) + (Game.crc2.canvas.width - Game.crc2.canvas.width + 100));
                Game.stonesFaster++;
            }
            if (Game.stonesFaster > 5) {
                this.y += 5.1;
            }
            if (Game.stonesFaster > 10) {
                this.y += 5.2;
            }
            if (Game.stonesFaster > 20) {
                this.y += 5.3;
            }
            if (Game.stonesFaster > 40) {
                this.y += 5.5;
            }
        }
        draw() {
            Game.crc2.beginPath();
            Game.crc2.strokeStyle = "rgb(77, 77, 77)";
            Game.crc2.fillStyle = "rgb(166, 166, 166)";
            Game.crc2.lineTo(this.x + 35, this.y + 20);
            Game.crc2.lineTo(this.x + 30, this.y + 50);
            Game.crc2.lineTo(this.x + 10, this.y + 60);
            Game.crc2.lineTo(this.x - 20, this.y + 55);
            Game.crc2.lineTo(this.x - 30, this.y + 50);
            Game.crc2.lineTo(this.x - 40, this.y + 25);
            Game.crc2.lineTo(this.x, this.y);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.fill();
        }
    }
    Game.Rock = Rock;
})(Game || (Game = {}));
//# sourceMappingURL=rocks.js.map