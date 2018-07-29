var Rafting;
(function (Rafting) {
    class Stone extends Rafting.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 6;
            if (this.y < 0) {
                this.y = Math.random() * (1000 + 800) + 800;
            }
        }
        draw() {
            Rafting.crc2.beginPath();
            Rafting.crc2.strokeStyle = "rgb(77, 77, 77)";
            Rafting.crc2.fillStyle = "rgb(166, 166, 166)";
            Rafting.crc2.lineTo(this.x + 35, this.y + 20);
            Rafting.crc2.lineTo(this.x + 30, this.y + 50);
            Rafting.crc2.lineTo(this.x + 10, this.y + 60);
            Rafting.crc2.lineTo(this.x - 20, this.y + 55);
            Rafting.crc2.lineTo(this.x - 30, this.y + 50);
            Rafting.crc2.lineTo(this.x - 40, this.y + 25);
            Rafting.crc2.lineTo(this.x, this.y);
            Rafting.crc2.closePath();
            Rafting.crc2.stroke();
            Rafting.crc2.fill();
        }
    }
    Rafting.Stone = Stone;
})(Rafting || (Rafting = {}));
//# sourceMappingURL=stones.js.map