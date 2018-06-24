var Aufgabe10;
(function (Aufgabe10) {
    class Bigfish {
        // declare method without keyword function
        move() {
            this.x += 1;
            if (this.x > 660) {
                this.x = -75;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.bezierCurveTo(this.x + 120, this.y + 110, this.x + 130, this.y + -60, this.x, this.y + 30);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.fillStyle = "rgba(238,59,59)";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Bigfish = Bigfish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=fish_big.js.map