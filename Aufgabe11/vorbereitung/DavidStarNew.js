var Vorbereitung;
(function (Vorbereitung) {
    class DavidStarNew extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y -= 1;
        }
    }
    Vorbereitung.DavidStarNew = DavidStarNew;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=DavidStarNew.js.map