var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.border = Math.random() * (600 - 640) + 640;
        }
        colour() {
            this.r = 300;
            this.g = 200;
            this.b = 90;
        }
        move() {
            this.y += 1;
            if (this.y > this.border) {
                this.y = this.border;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=food.js.map