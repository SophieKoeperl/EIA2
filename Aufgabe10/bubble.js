var Aufgabe10;
(function (Aufgabe10) {
    class Bubbles {
        // declare method without keyword function
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 250;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "rgb(0,100,240,0.2)";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Bubbles = Bubbles;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=bubble.js.map