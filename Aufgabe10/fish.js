var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        // declare method without keyword function
        move() {
            this.x -= 1.5;
            if (this.x < 1) {
                this.x = 650;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.bezierCurveTo(this.x + -80, this.y + -60, this.x + -80, this.y + 30, this.x, this.y + -20);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.fillStyle = "rgba(150,255,200)";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=fish.js.map