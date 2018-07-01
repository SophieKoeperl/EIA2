var Aufgabe11;
(function (Aufgabe11) {
    class Bubbles extends Aufgabe11.MovingObjects {
        constructor() {
            super();
        }
        position() {
            this.x = Math.random() * (300 - 150) + 150;
            this.y = Math.random() * 180;
        }
        colour() {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }
        // declare method without keyword function
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 250;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "rgb(0,100,240,0.2)";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubbles = Bubbles;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bubbles.js.map