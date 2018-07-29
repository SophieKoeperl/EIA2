var Rafting;
(function (Rafting) {
    class ToxicBird extends Rafting.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y -= 4;
            if (this.y < -30) {
                this.y = Math.random() * (1000 + 800) + 800;
            }
        }
        draw() {
            //dünner ast;
            Rafting.crc2.shadowColor = "rgba(0,0,0,0)";
            Rafting.crc2.strokeStyle = "rgba(127,77,4,1)";
            Rafting.crc2.lineWidth = 13;
            Rafting.crc2.lineCap = "round";
            Rafting.crc2.lineJoin = "miter";
            Rafting.crc2.beginPath();
            Rafting.crc2.moveTo(494, 295);
            Rafting.crc2.lineTo(529, 272);
            Rafting.crc2.stroke();
            //dicker ast;
            Rafting.crc2.shadowColor = "rgba(0,0,0,0)";
            Rafting.crc2.strokeStyle = "rgba(0,0,0,0)";
            Rafting.crc2.lineWidth = 1;
            Rafting.crc2.lineCap = "butt";
            Rafting.crc2.lineJoin = "miter";
            Rafting.crc2.beginPath();
            Rafting.crc2.moveTo(442, 259);
            Rafting.crc2.lineTo(534, 292);
            Rafting.crc2.bezierCurveTo(539, 294, 542, 300, 540, 305);
            Rafting.crc2.lineTo(531, 328);
            Rafting.crc2.bezierCurveTo(530, 334, 524, 336, 519, 334);
            Rafting.crc2.lineTo(427, 301);
            Rafting.crc2.bezierCurveTo(421, 299, 419, 293, 421, 288);
            Rafting.crc2.lineTo(429, 265);
            Rafting.crc2.bezierCurveTo(431, 259, 437, 257, 442, 259);
            Rafting.crc2.closePath();
            Rafting.crc2.stroke();
            Rafting.crc2.shadowOffsetX = 15;
            Rafting.crc2.shadowOffsetY = 15;
            Rafting.crc2.shadowBlur = 0;
            Rafting.crc2.shadowColor = "rgba(0,0,0,0)";
            Rafting.crc2.fillStyle = "rgba(137,83,6,1)";
            Rafting.crc2.fill();
        }
    }
    Rafting.ToxicBird = ToxicBird;
})(Rafting || (Rafting = {}));
//# sourceMappingURL=wood.js.map