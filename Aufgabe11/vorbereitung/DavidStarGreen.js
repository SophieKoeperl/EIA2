var Vorbereitung;
(function (Vorbereitung) {
    class DavidStarGreen extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y -= 1;
        }
    }
    Vorbereitung.DavidStarGreen = DavidStarGreen;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=DavidStarGreen.js.map